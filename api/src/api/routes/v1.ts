import { Router } from 'express';
import authRouter from './authRoute';
import userRouter from './userRoute';

const v1Router: Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);

export default v1Router;
