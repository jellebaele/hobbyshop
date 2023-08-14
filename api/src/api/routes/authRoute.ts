import { Request, Response, Router } from 'express';
import { asyncErrorHandler } from '../middleware';
import { ensureLoggedIn, ensureLoggedOut } from '../middleware/authMiddleware';
import AuthController from '../controller/implementation/AuthController';

const authRouter: Router = Router();
const authController = new AuthController();

authRouter.post(
  '/register',
  ensureLoggedOut,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await authController.registerUserHandler(req, res);
  })
);

authRouter.post(
  '/login',
  ensureLoggedOut,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await authController.loginUserHandler(req, res);
  })
);

authRouter.post(
  '/logout',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await authController.logoutUserHandler(req, res);
  })
);

authRouter.get(
  '/me',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await authController.getCurrentUserHandler(req, res);
  })
);

export default authRouter;
