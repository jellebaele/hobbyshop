import { Request, Response } from 'express';
import NotFoundError from '../../error/implementations/NotFoundError';
import UnauthorizedError from '../../error/implementations/UnauthorizedError';
import { IProductDto } from '../../models/Product';
import AuthService from '../../service/AuthService';
import ProductService from '../../service/ProductService';
import TextUtils from '../../utils/TextUtils';
import {
  createProductSchema,
  deleteProductByIdSchema,
  getProductByIdSchema,
  getProductsSchema,
  updateProductByIdSchema,
} from './validation/productSchemas';
import SchemaValidator from './validation/SchemaValidator';
import BadRequestError from '../../error/implementations/BadRequestError';
import { QUERY_DEFAULT_PER_PAGE } from '../../config';
import Pagination from '../../utils/Pagination';

export default class ProductController {
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

  public async createProductHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(createProductSchema, req.body);
    const body: IProductDto = TextUtils.sanitizeObject(req.body) as IProductDto;

    const user = req.session.userId;
    if (!user) throw new UnauthorizedError();

    const found = await this.productService.getProduct({ name: body.name });
    if (found) throw new BadRequestError('Product already exists.');

    const newProduct = await this.productService.createProduct({
      ...(body as IProductDto),
      user,
    });

    return res.json(newProduct);
  }

  public async getProductByIdHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(getProductByIdSchema, req.params);
    const productId = TextUtils.sanitize(req.params.productId);

    const product = await this.productService.getProductById(productId);

    if (!product) throw new NotFoundError();
    return res.status(200).json(product);
  }

  public async getProductsHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(getProductsSchema, req.query);
    const pageNumber = parseInt(req.query.page as string) || 1;
    const perPage =
      parseInt(req.query.per_page as string) ||
      (QUERY_DEFAULT_PER_PAGE as number);
    const query = TextUtils.sanitizeObject(req.query);

    const products = await this.productService.getProducts(
      query,
      pageNumber,
      perPage
    );

    const pageMetaData = this.pagination.generateHeadersMetadata(
      await this.productService.countDocuments(),
      pageNumber,
      perPage,
      req
    );

    if (pageMetaData) res.set('Link', pageMetaData);

    return res.status(200).json(products);
  }

  public async updateProductByIdHandler(req: Request, res: Response) {
    await this.schemaValidator.validate(updateProductByIdSchema, {
      ...req.params,
      ...req.body,
    });
    const productId = TextUtils.sanitize(req.params.productId);
    const body: IProductDto = TextUtils.sanitizeObject(req.body) as IProductDto;

    const found = await this.productService.getProductById(productId);
    if (!found) throw new NotFoundError();

    const isAuthorized = await this.authService.isAdminOrSameUser(
      req,
      found.user.toString()
    );
    if (!isAuthorized)
      throw new UnauthorizedError(
        'You cannot edit this product, as it is not yours.'
      );

    const updatedProduct = await this.productService.updateProductById(
      productId,
      body,
      { lean: true }
    );

    return res.send(updatedProduct);
  }

  public async deleteProductByIdHandler(req: Request, res: Response) {
    await this.schemaValidator.validate(deleteProductByIdSchema, req.params);
    const productId = TextUtils.sanitize(req.params.productId);

    const found = await this.productService.getProductById(productId);
    if (!found) throw new NotFoundError();

    const isAuthorized = await this.authService.isAdminOrSameUser(
      req,
      found.user.toString()
    );
    if (!isAuthorized)
      throw new UnauthorizedError(
        'You cannot delete this product, as it is not yours.'
      );

    await this.productService.deleteProductById(productId);
    return res.sendStatus(200);
  }
}
