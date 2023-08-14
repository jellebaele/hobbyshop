import { Request, Response } from 'express';
import { BaseController } from '../BaseController';
import { AuthService, ProductService } from '../../../service';
import {
  createProductSchema,
  deleteProductByIdSchema,
  getProductByIdSchema,
  getProductsSchema,
  updateProductByIdSchema,
} from '../validation';
import ProductModel, { IProductDto } from '../../../models/Product';
import TextUtils from '../../../utils/TextUtils';
import { BadRequestError, NotFoundError, UnauthorizedError } from '../../../error';
import { QUERY_DEFAULT_PER_PAGE } from '../../../config';

export default class ProductController extends BaseController {
  productService: ProductService;
  authService: AuthService;

  constructor() {
    super();
    this.productService = new ProductService(ProductModel);
    this.authService = new AuthService();
  }

  public async createProductHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(createProductSchema, req.body);
    const body: IProductDto = TextUtils.sanitizeObject(req.body);

    const user = req.session.userId;
    if (!user) throw new UnauthorizedError();

    const found = await this.productService.getOneByQuery({ name: body.name });
    if (found) throw new BadRequestError('Product already exists.');

    const newProduct = await this.productService.create({
      ...(body as IProductDto),
      user,
    });

    return this.created(res, newProduct);
  }

  public async getProductByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getProductByIdSchema, req.params);
    const productId = TextUtils.sanitize(req.params.productId);

    const product = await this.productService.getById(productId);

    if (!product) throw new NotFoundError();
    return this.ok(res, product);
  }

  public async getProductsHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getProductsSchema, req.query);
    const paginationData = this.getPaginationData(req);
    const query = TextUtils.sanitizeObject<any>(req.query);

    const products = await this.productService.getByQuery(query, paginationData);

    const pageMetaData = this._pagination.generateHeadersMetadata(
      await this.productService.count(),
      paginationData,
      req
    );

    if (pageMetaData) res.set('Link', pageMetaData);

    return this.ok(res, products);
  }

  public async updateProductByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(updateProductByIdSchema, {
      ...req.params,
      ...req.body,
    });
    const productId = TextUtils.sanitize(req.params.productId);
    const body: IProductDto = TextUtils.sanitizeObject(req.body);

    const found = await this.productService.getById(productId);
    if (!found) throw new NotFoundError();

    const isAuthorized = await this.authService.isAdminOrSameUser(req, found.user.toString());
    if (!isAuthorized)
      throw new UnauthorizedError('You cannot edit this product, as it is not yours.');

    const updatedProduct = await this.productService.updateById(productId, body, {
      lean: true,
    });

    return this.ok(res, updatedProduct);
  }

  public async deleteProductByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(deleteProductByIdSchema, req.params);
    const productId = TextUtils.sanitize(req.params.productId);

    const found = await this.productService.getById(productId);
    if (!found) throw new NotFoundError();

    const isAuthorized = await this.authService.isAdminOrSameUser(req, found.user.toString());
    if (!isAuthorized)
      throw new UnauthorizedError('You cannot delete this product, as it is not yours.');

    await this.productService.deleteById(productId);
    return this.ok(res);
  }
}
