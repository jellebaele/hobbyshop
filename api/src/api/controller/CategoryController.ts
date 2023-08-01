import { Request, Response } from 'express';
import AuthService from '../../service/AuthService';
import ProductService from '../../service/ProductService';
import SchemaValidator from './validation/SchemaValidator';
import Pagination from '../../utils/Pagination';
import CategoryService from '../../service/CategoryService';
import CategoryModel, { ICategoryDto } from '../../models/Category';
import {
  createCategorySchema,
  getCategoriesSchema,
  getCategoryByIdSchema,
} from './validation';
import TextUtils from '../../utils/TextUtils';
import UnauthorizedError from '../../error/implementations/UnauthorizedError';
import BadRequestError from '../../error/implementations/BadRequestError';
import { IProductDto } from '../../models/Product';
import NotFoundError from '../../error/implementations/NotFoundError';
import { QUERY_DEFAULT_PER_PAGE } from '../../config';

export default class CategoryController {
  schemaValidator: SchemaValidator;
  // productService: ProductService;
  authService: AuthService;
  pagination: Pagination;
  categoryService: CategoryService;

  constructor() {
    this.schemaValidator = new SchemaValidator();
    // this.productService = new ProductService();
    this.authService = new AuthService();
    this.pagination = new Pagination();
    this.categoryService = new CategoryService(CategoryModel);
  }

  public async createCategoryHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(createCategorySchema, req.body);

    const body: ICategoryDto = TextUtils.sanitizeObject(
      req.body
    ) as ICategoryDto;

    const found = await this.categoryService.getCategory({ name: body.name });
    if (found) throw new BadRequestError('Category already exists.');

    const newCategory = await this.categoryService.createCategorie(body);
    return res.status(201).json(newCategory);
  }

  public async getCategoryByIdHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(getCategoryByIdSchema, req.params);
    const categoryId = TextUtils.sanitize(req.params.categoryId);

    const category = await this.categoryService.getCategoryById(categoryId);

    if (!category) throw new NotFoundError();
    return res.status(200).json(category);
  }

  public async getCategoriesHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(getCategoriesSchema, req.query);
    const pageNumber = parseInt(req.query.page as string) || 1;
    const perPage =
      parseInt(req.query.per_page as string) ||
      (QUERY_DEFAULT_PER_PAGE as number);
    const query = TextUtils.sanitizeObject(req.query);

    const products = await this.categoryService.getCategories(
      query,
      pageNumber,
      perPage
    );

    const pageMetaData = this.pagination.generateHeadersMetadata(
      await this.categoryService.countDocuments(),
      pageNumber,
      perPage,
      req
    );

    if (pageMetaData) res.set('Link', pageMetaData);

    return res.status(200).json(products);
  }

  public async updateCategoryByIdHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.send().json();
  }

  public async deleteCategoryByIdHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.send().json();
  }
}
