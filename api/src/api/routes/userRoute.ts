import { Request, Response, Router } from 'express';
import UserController from '../controller/UserController';

import { asyncErrorHandler } from '../middleware';
import { ensureIsAdmin } from '../middleware/authMiddleware';

const userRouter: Router = Router();
const userController = new UserController();

userRouter.get(
  '/:userId',
  ensureIsAdmin,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await userController.getUserByIdHandler(req, res);
  })
);

userRouter.get(
  '/',
  ensureIsAdmin,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await userController.getAllUsersHandler(req, res);
  })
);

export default userRouter;
