import { Request, Response, Router } from 'express';
import UserController from '../controller/UserController';

import { asyncErrorHandler } from '../middleware';
import { ensureIsAdmin, ensureLoggedIn } from '../middleware/authMiddleware';

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

userRouter.put(
  '/:userId',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await userController.updateUserByIdHandler(req, res);
  })
);

userRouter.delete(
  '/:userId',
  ensureIsAdmin,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await userController.deleteUserByIdHandler(req, res);
  })
);

export default userRouter;
