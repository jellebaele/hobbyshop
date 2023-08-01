import { Request, Response, Router } from 'express';
import CategoryController from '../controller/CategoryController';
import { asyncErrorHandler, ensureLoggedIn } from '../middleware';

const categoryRouter: Router = Router();
const categoryController = new CategoryController();

categoryRouter.post(
  '/',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await categoryController.createCategoryHandler(req, res);
  })
);

categoryRouter.get(
  '/:categoryId',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await categoryController.getCategoryByIdHandler(req, res);
  })
);

categoryRouter.get(
  '',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await categoryController.getCategoriesHandler(req, res);
  })
);

categoryRouter.put(
  '/:categoryId',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await categoryController.updateCategoryByIdHandler(req, res);
  })
);

categoryRouter.delete(
  '/:categoryId',
  ensureLoggedIn,
  asyncErrorHandler(async (req: Request, res: Response) => {
    await categoryController.deleteCategoryByIdHandler(req, res);
  })
);

export default categoryRouter;
