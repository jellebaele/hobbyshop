import { Request, Response, Router } from 'express';

import { asyncErrorHandler } from '../middleware';
import { ensureLoggedIn } from '../middleware/authMiddleware';
import ProductController from '../controller/implementation/ProductController';

const productRouter: Router = Router();
const productController = new ProductController();

productRouter.post(
  '/',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await productController.createProductHandler(req, res);
  })
);

productRouter.get(
  '/:productId',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await productController.getProductByIdHandler(req, res);
  })
);

productRouter.get(
  '',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await productController.getProductsHandler(req, res);
  })
);

productRouter.put(
  '/:productId',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await productController.updateProductByIdHandler(req, res);
  })
);

productRouter.delete(
  '/:productId',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await productController.deleteProductByIdHandler(req, res);
  })
);

export default productRouter;
