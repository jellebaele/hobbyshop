import { Request, Response } from 'express';
import AuthService from '../../service/AuthService';
import Pagination from '../../utils/Pagination';
import CategoryService from '../../service/implementation/CategoryService';
import CategoryModel, { ICategoryDto } from '../../models/Category';
import {
  createCategorySchema,
  deleteCategoryByIdSchema,
  getCategoriesSchema,
  getCategoryByIdSchema,
  updateCategoryByIdSchema,
} from './validation';
import TextUtils from '../../utils/TextUtils';
import NotFoundError from '../../error/implementations/NotFoundError';
import { QUERY_DEFAULT_PER_PAGE } from '../../config';
import { BaseController } from './BaseController';

export default class CategoryController extends BaseController {
  authService: AuthService;
  pagination: Pagination;
  categoryService: CategoryService;

  constructor() {
    super();
    this.authService = new AuthService();
    this.pagination = new Pagination();
    this.categoryService = new CategoryService(CategoryModel);
  }

  public async createCategoryHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(createCategorySchema, req.body);

    const body: ICategoryDto = TextUtils.sanitizeObject(req.body) as ICategoryDto;

    const newCategory = await this.categoryService.create(body);
    return this.created(res, newCategory);
  }

  public async getCategoryByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getCategoryByIdSchema, req.params);
    const categoryId = TextUtils.sanitize(req.params.categoryId);

    const category = await this.categoryService.getById(categoryId);
    if (!category) throw new NotFoundError();

    return this.ok(res, category);
  }

  public async getCategoriesHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getCategoriesSchema, req.query);
    const pageNumber = parseInt(req.query.page as string) || 1;
    const perPage = parseInt(req.query.per_page as string) || (QUERY_DEFAULT_PER_PAGE as number);
    const query = TextUtils.sanitizeObject(req.query);

    const products = await this.categoryService.getByQuery(query, pageNumber, perPage);
    const pageMetaData = this.pagination.generateHeadersMetadata(
      await this.categoryService.count(query),
      pageNumber,
      perPage,
      req
    );

    if (pageMetaData) res.set('Link', pageMetaData);

    return this.ok(res, products);
  }

  public async updateCategoryByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(updateCategoryByIdSchema, {
      ...req.params,
      ...req.body,
    });
    const categoryId = TextUtils.sanitize(req.params.categoryId);
    const body: ICategoryDto = TextUtils.sanitizeObject(req.body) as ICategoryDto;

    const found = await this.categoryService.getById(categoryId);
    if (!found) throw new NotFoundError();

    const updatedCategory = await this.categoryService.updateById(categoryId, body, {
      lean: true,
    });

    return this.ok(res, updatedCategory);
  }

  public async deleteCategoryByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(deleteCategoryByIdSchema, req.params);
    const categoryId = TextUtils.sanitize(req.params.categoryId);

    const found = await this.categoryService.getById(categoryId);
    if (!found) throw new NotFoundError();

    await this.categoryService.deleteById(categoryId);
    return this.ok(res);
  }
}
