export function generateVerificationOtpEmailTemplate(otp, recipientName) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>OTP Email</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        .gradient-bg {
          background: linear-gradient(135deg, #6EE7B7, #3B82F6);
        }
        .otp-container {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }
        .otp-box {
          background: black;
          color: white;
          border: 2px solid white;
          border-radius: 12px;
          padding: 16px 24px;
          font-size: 28px;
          font-weight: bold;
          font-family: monospace;
          letter-spacing: 8px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: fit-content;
        }
      </style>
    </head>
    <body class="bg-gray-100 font-sans">
      <div class="max-w-2xl mx-auto my-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Header -->
        <div class="gradient-bg text-white text-center py-8">
          <h1 class="text-3xl font-bold">Your One-Time Password (OTP)</h1>
          <p class="mt-2">Secure your account with this OTP</p>
        </div>

        <!-- Body -->
        <div class="p-8 text-gray-700">
          <p class="mb-4">Hello <span class="font-semibold">${recipientName}</span>,</p>
          <p class="mb-6">Your One-Time Password (OTP) for verification is:</p>

          <!-- OTP Box Container -->
          <div class="otp-container">
            <div class="otp-box">
              ${otp}
            </div>
          </div>

          <p class="mt-6 mb-4 text-sm text-gray-600">This OTP is valid for the next 10 minutes. Please do not share it with anyone.</p>
          <p class="mb-4 text-sm text-gray-600">If you did not request this OTP, please ignore this email or contact support immediately.</p>
        </div>

        <!-- Footer -->
        <div class="bg-gray-100 text-center py-4 text-sm text-gray-600">
          <p>&copy; 2025 ConfectXpress. All rights reserved.</p>
          <p class="mt-1">Need help? <a href="mailto:support@ConfectXpress.com" class="text-blue-600 hover:underline">Contact Support</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export const generateForgotPasswordTemplate = (resetPasswordUrl) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; text-align: center; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #333;">Password Reset Request</h2>
      <p style="color: #666; margin-bottom: 20px;">You requested a password reset. Click the button below to reset your password:</p>
      
      <!-- Reset Password Button -->
      <a href="${resetPasswordUrl}" style="display: inline-block; background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0;">
        Reset Password
      </a>
      
      <!-- Fallback for clients that don't render buttons -->
      <p style="color: #888; font-size: 14px; margin-top: 10px;">
        If the button doesn't work, copy and paste this link into your browser:<br/>
        <span style="word-break: break-all;">${resetPasswordUrl}</span>
      </p>
      
      <p style="color: #888; font-size: 14px;">This link expires in 10 minutes. If you didn't request this, please ignore this email.</p>
    </div>
  `;
};