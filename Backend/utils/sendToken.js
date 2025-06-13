export const sendToken = (statusCode, message, user, res) => {
    
    const token = user.generateToken();

    // Add this single line to fix the issue
    const expireDays = Number(process.env.COOKIE_EXPIRE) || 1; 
    
    res.status(statusCode).cookie("token", token, {
        // Only change this line - replace the calculation
        expires: new Date(Date.now() + expireDays * 24 * 60 * 60 * 1000),
        httpOnly: true
    }).json({
        message,
        token,
        success: true,
        user
    });

};