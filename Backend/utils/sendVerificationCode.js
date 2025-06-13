import { generateVerificationOtpEmailTemplate } from "./emailTemplate.js";
import { sendEmail } from "./sendEmail.js";

export async function sendVerificationEmail(name, email, verificationCode, res) {
    try {
        const message = generateVerificationOtpEmailTemplate(verificationCode, name);
        await sendEmail({
            email,
            subject: "Verification code (CONFECTXPRESS)",
            message,
        });
        
        res.status(200).json({
            success: true,
            message: "Verification email sent successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Verification code failed to send",
            error: error.message, 
        });
    }
}

