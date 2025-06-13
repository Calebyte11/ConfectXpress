import express from 'express';
import {register,verifyOtp,login,logout, getUser,forgetPassword, resetPassword} from "../controllers/authController.js";
import { isAuthenticated } from '../middlewares/authMiddleWare.js';

const router = express.Router();

router.post('/register', register);
router.post('/verify-otp', verifyOtp);
router.post('/login', login);
router.get('/logout',isAuthenticated,logout);
router.get('/me',isAuthenticated ,getUser);
router.post('/password/reset', forgetPassword);
router.put('/password/reset/:token', resetPassword);

export default router;