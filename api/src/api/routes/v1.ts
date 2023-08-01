import { Router } from 'express';
import authRouter from './authRoute';
import productRouter from './productRoute';
import userRouter from './userRoute';
import categoryRouter from './categoryRoute';

const v1Router: Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/product', productRouter);
v1Router.use('/category', categoryRouter);

export default v1Router;
