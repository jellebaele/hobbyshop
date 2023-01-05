import { Request, Response, Router } from 'express';
import ProductController from '../controller/ProductController';

import { asyncErrorHandler } from '../middleware';
import { ensureLoggedIn } from '../middleware/authMiddleware';

const productRouter: Router = Router();
const productController = new ProductController();

productRouter.post(
  '/',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await productController.createProductHandler(req, res);
  })
);

// productRouter.get(
//   '/:userId',
//   //ensureIsAdmin
//   asyncErrorHandler(async (req: Request, res: Response) => {
//     await productController.getUserByIdHandler(req, res);
//   })
// );

// productRouter.get(
//   '/all',
//   //ensureIsAdmin
//   asyncErrorHandler(async (req: Request, res: Response) => {
//     await productController.getAllUsersHandler(req, res);
//   })
// );

export default productRouter;
