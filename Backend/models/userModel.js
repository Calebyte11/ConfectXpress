import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true, 
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    accountVerified: { type: Boolean, default: false },
    avatar: {
            public_id: String,
            url: String,
        },
        verificationCode: Number,
        verificationCodeExpire: Date,
        resetPasswordToken: String,
        resetPasswordExpires: Date,
    },
    {
        timestamps: true,
    }
)
userSchema.methods.generateVerificationCode = function () {
    const generateFiveRandomCode = function () {
        const firstFiveCode = Math.floor(Math.random() * 9) + 1;
        const remainingCodes = Math.floor(Math.random() * 1000)
            .toString()
            .padStart(4, 0);
        return parseInt(firstFiveCode + remainingCodes);
    };
    const verificationcode = generateFiveRandomCode();
    this.verificationCode = verificationcode;
    this.verificationCodeExpire = Date.now() + 15 * 60 * 1000;
    return verificationcode;
};

userSchema.methods.generateToken = function() {
    return jwt.sign(
        { id: this._id },  
        process.env.JWT_SECRET_KEY, 
        { expiresIn: process.env.JWT_EXPIRE }  
    );
};

userSchema.methods.getResetPasswordToken = function() {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")

    this.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
    return resetToken;
}


const User = mongoose.model('User', userSchema);
export default User;