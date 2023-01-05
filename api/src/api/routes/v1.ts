import { Router } from 'express';
import authRouter from './authRoute';
import productRouter from './productRoute';
import userRouter from './userRoute';

const v1Router: Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/product', productRouter);

export default v1Router;
