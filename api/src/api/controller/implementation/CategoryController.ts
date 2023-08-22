import { Request, Response } from 'express';
import { BaseController } from '../BaseController';
import { ICategoryDto } from '../../../models/Category';
import {
  createCategorySchema,
  deleteCategoryByIdSchema,
  getCategoriesSchema,
  getCategoryByIdSchema,
  getRelatedProductsSchema,
  updateCategoryByIdSchema,
} from '../validation';
import TextUtils from '../../../utils/TextUtils';
import { CategoryService } from '../../../service/implementation/CategoryService';
import { ProductService, categoryService, productService } from '../../../service';

export default class CategoryController extends BaseController {
  private readonly _categoryService: CategoryService;
  private readonly _productService: ProductService;

  constructor() {
    super();
    this._categoryService = categoryService;
    this._productService = productService;
  }

  public async createCategoryHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(createCategorySchema, req.body);
    const body = TextUtils.sanitizeObject<ICategoryDto>(req.body);

    const newCategory = await this._categoryService.create(body);
    return this.created(res, newCategory);
  }

  public async getCategoryByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getCategoryByIdSchema, req.params);
    const categoryId = TextUtils.sanitize(req.params.categoryId);

    const category = await this._categoryService.getById(categoryId);
    return this.ok(res, category);
  }

  public async getCategoriesHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getCategoriesSchema, req.query);
    const paginationData = this.getPaginationData(req);
    const query = TextUtils.sanitizeObject<object>(req.query);

    const categories = await this._categoryService.getPartByQuery(query, paginationData);
    const totalAmount: number = await this._categoryService.count(query);

    return this.paginateResponse(req, res, totalAmount, paginationData).ok(res, categories);
  }

  public async getRelatedProductsHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getRelatedProductsSchema, req.params);
    const categoryId = TextUtils.sanitize(req.params.categoryId);
    const paginationData = this.getPaginationData(req);

    const products = await this._categoryService.getAllRelatedProductsById(
      categoryId,
      paginationData
    );
    const totalAmount: number = await this._productService.count({ category: categoryId });

    return this.paginateResponse(req, res, totalAmount, paginationData).ok(res, products);
  }

  public async updateCategoryByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(updateCategoryByIdSchema, {
      ...req.params,
      ...req.body,
    });
    const categoryId = TextUtils.sanitize(req.params.categoryId);
    const body: ICategoryDto = TextUtils.sanitizeObject(req.body);

    const updatedCategory = await this._categoryService.update(categoryId, body);
    return this.ok(res, updatedCategory);
  }

  public async deleteCategoryByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(deleteCategoryByIdSchema, req.params);
    const categoryId = TextUtils.sanitize(req.params.categoryId);

    await this._categoryService.deleteById(categoryId);
    return this.ok(res);
  }
}
