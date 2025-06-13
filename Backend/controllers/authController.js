import {CatchAsyncErrors} from "../middlewares/CatchAsyncError.js";
import ErrorHandler from "../middlewares/errorHandler.js";
import User from '../models/userModel.js';
import crypto from 'crypto';
import { sendVerificationEmail } from '../utils/sendVerificationCode.js';
import {sendToken} from '../utils/sendToken.js'
import bcrypt from 'bcrypt';
import { sendEmail } from '../utils/sendEmail.js';
import { generateForgotPasswordTemplate } from '../utils/emailTemplate.js';

export const register = CatchAsyncErrors(async (req, res, next) => {
    let user; // Declare user variable at the top

    try {
        const { name, email, password } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return next(new ErrorHandler("Please enter all the required fields", 400));
        }

        // Check if user is already registered
        const isRegistered = await User.findOne({ email, accountVerified: true });
        if (isRegistered) {
            return next(new ErrorHandler("Email already exists", 400));
        }

        // Check registration attempts
        const registrationByAttempt = await User.find({
            email,
            accountVerified: false,
        });
        if (registrationByAttempt.length > 5) {
            return next(new ErrorHandler("Too many registration attempts. Contact customer care.", 400));
        }

        // Validate password length
        if (password.length < 8 || password.length > 18) {
            return next(new ErrorHandler("Password must be between 8 and 18 characters", 400));
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        // Generate verification code using the schema method
        const verificationCode = user.generateVerificationCode();
        await user.save();

        // Send the verification email
        await sendVerificationEmail(user.name, user.email, verificationCode, res);

    } catch (error) {
        // Only try to delete user if it was created
        if (user && user._id) {
            await User.deleteOne({ _id: user._id });
        }
        
        // Send error response
        res.status(500).json({
            success: false,
            message: "Registration failed",
            error: error.message
        });
    }
});

export const verifyOtp = CatchAsyncErrors(async (req, res, next) => {
    const { email, otp } = req.body;
    
    // Input validation
    if (!email || !otp) {
        return next( new ErrorHandler("Email and OTP are required", 400));
    }

    try {
        // Find unverified users (newest first)
        const unverifiedUsers = await User.find({
            email,
            accountVerified: false
        }).sort({ createdAt: -1 });

        // Check if user exists
        if (!unverifiedUsers || unverifiedUsers.length === 0) {
            return next(new ErrorHandler("User not found or already verified", 404));
        }

        const user = unverifiedUsers[0];
        
        // OTP verification
        if (user.verificationCode !== Number(otp)) {
            return next( new ErrorHandler("Invalid OTP", 400));
        }

        // Check expiration
        const currentTime = Date.now();
        const expirationTime = new Date(user.verificationCodeExpire).getTime();
        
        if (currentTime > expirationTime) {
            return next(new ErrorHandler("OTP has expired", 400));
        }

        // Mark as verified
        user.accountVerified = true;
        user.verificationCode = undefined;
        user.verificationCodeExpire = undefined;
        
        await user.save({ validateBeforeSave: false });

        // Send response
        sendToken(200, "Account verified successfully", user, res);

    } catch (error) {
        console.error("OTP verification failed:", error);
        next( new ErrorHandler(error.message || "Internal server error", 500));
    }
});

export const login = CatchAsyncErrors(async (req,res,next) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("please enter all field",400));
    }

    const user = await User.findOne({email, accountVerified:true}).select("+password");
    if (!user) {
        return next(new ErrorHandler("email or password is incorrect", 400))
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if(!isPasswordMatched) {
        return next(new ErrorHandler("email or password is incorrect", 400))
    }
    sendToken(200, "Logged in successfully", user, res);
});

export const logout = CatchAsyncErrors( async (req,res,next) => {
    res.status(200).cookie("token", "", {
        expiresIn: new Date(Date.now())
    }).json({
        success: true,
        message: "user logged out successfully"
    })
})

export const getUser = CatchAsyncErrors(async(req,res,next) => {
    const user = req.user;
    res.status(200).json({
        success:true,
        user,
    })
})

export const forgetPassword = CatchAsyncErrors(async (req,res,next) => {
    if(!req.body.email) {
        return next(new ErrorHandler("email is required"));
    }
    const user = await User.findOne({
        email: req.body.email,
        accountVerified: true,
    });
    if (!user) {
        return next(new ErrorHandler("invalid Email",400))
    }
    const resetToken = user.getResetPasswordToken();
    await user.save({validateBeforeSave: false});
    const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

    const message = generateForgotPasswordTemplate(resetPasswordUrl);
    try {
        await sendEmail({
            email: user.email,
            subject:"ConfectXpress Password Recovery",
            message,
        })
        res.status(200).json({
            success: true,
            subject: `Email sent successfully to ${user.email}`,
        })
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save({validateBeforeSave: false});
        return next(new ErrorHandler(error.message,500))
    }
})

export const resetPassword = CatchAsyncErrors(async(req, res, next) => {
    const { token } = req.params;

    if (!token) {
        return next(new ErrorHandler("Password reset token is missing", 400));
    }

    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(String(token))
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
        return next(new ErrorHandler("Invalid token or it has expired", 400));
    }

    if (!req.body.password || !req.body.confirmPassword) {
        return next(new ErrorHandler("Password and confirm password are required", 400));
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password and confirm password do not match", 400));
    }

    if (
        req.body.password.length < 8 || 
        req.body.password.length > 16 ||
        req.body.confirmPassword.length < 8 || 
        req.body.confirmPassword.length > 16
    ) {
        return next(new ErrorHandler("Password must be 8-16 characters", 400));
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    sendToken(200, "Password reset successfully", user, res); 
});

export const updatePassword = CatchAsyncErrors(async(req,res,next) => {
    const user = await User.findById(req.user._id).select("+password");
    const { currentPassword, newPassword, confirmPassword } = req.body;
    if (!currentPassword || !newPassword || !confirmPassword) {
        return next(new ErrorHandler("Please fill in all fields", 400));
    }
    const isPasswordMatched = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Current password is incorrect", 400));
    }
    if (newPassword.length < 8 ||
        newPassword.length > 16 ||
        confirmPassword.length < 8 ||
        confirmPassword.length > 16
    ) {
        return next(new ErrorHandler("Password must be 8-16 characters", 400));
    }
    if (newPassword !== confirmPassword) {
        return next(new ErrorHandler("New password and Confirm password do not match", 400));
    }

    const hashedPassword = await bcrypt.hash(newPassword,10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({
        success: true,
        message: "Password updated successfully"
    })
})
