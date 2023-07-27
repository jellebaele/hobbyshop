import { Request, Response } from 'express';
import AuthService from '../../service/AuthService';
import ProductService from '../../service/ProductService';
import SchemaValidator from './validation/SchemaValidator';
import Pagination from '../../utils/Pagination';

export default class CategoryController {
  schemaValidator: SchemaValidator;
  productService: ProductService;
  authService: AuthService;
  pagination: Pagination;

  constructor() {
    this.schemaValidator = new SchemaValidator();
    this.productService = new ProductService();
    this.authService = new AuthService();
    this.pagination = new Pagination();
  }

  public async createCategoryHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.send().json();
  }

  public async getCategoryByIdHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.send().json();
  }

  public async getCategorysHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    return res.send().json();
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
