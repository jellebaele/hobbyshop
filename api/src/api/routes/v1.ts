import { Router } from 'express';
import authRouter from './authRoute';

const v1Router: Router = Router();

v1Router.use('/auth', authRouter);

export default v1Router;
