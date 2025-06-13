import express from 'express';
import cookieParser from 'cookie-parser';
import {config} from 'dotenv';
import { errorMiddleware } from './middlewares/errorHandler.js';
import {connectDb} from "./database/db.js";
import authRouter from "./routes/authRouter.js";

export const  app = express();

config({path: "./config/config.env"});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/v1/auth',authRouter );

connectDb();

app.use(errorMiddleware);