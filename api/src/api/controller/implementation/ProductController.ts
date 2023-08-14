import { Request, Response } from 'express';
import { BaseController } from '../BaseController';
import { AuthService, ProductService, productService } from '../../../service';
import {
  createProductSchema,
  deleteProductByIdSchema,
  getProductByIdSchema,
  getProductsSchema,
  updateProductByIdSchema,
} from '../validation';
import { IProductDto } from '../../../models/Product';
import TextUtils from '../../../utils/TextUtils';
import { BadRequestError, NotFoundError, UnauthorizedError } from '../../../error';

export default class ProductController extends BaseController {
  private readonly _productService: ProductService;
  private readonly _authService: AuthService;

  constructor() {
    super();
    this._productService = productService;
    this._authService = new AuthService();
  }

  public async createProductHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(createProductSchema, req.body);
    const body: IProductDto = TextUtils.sanitizeObject(req.body);

    const user = req.session.userId;
    if (!user) throw new UnauthorizedError();

    const found = await this._productService.getOneByQuery({ name: body.name });
    if (found) throw new BadRequestError('Product already exists.');

    const newProduct = await this._productService.create({
      ...body,
      user,
    });

    return this.created(res, newProduct);
  }

  public async getProductByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getProductByIdSchema, req.params);
    const productId = TextUtils.sanitize(req.params.productId);

    const product = await this._productService.getById(productId);

    if (!product) throw new NotFoundError();
    return this.ok(res, product);
  }

  public async getProductsHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getProductsSchema, req.query);
    const paginationData = this.getPaginationData(req);
    const query = TextUtils.sanitizeObject<any>(req.query);

    const products = await this._productService.getByQuery(query, paginationData);

    const pageMetaData = this._pagination.generateHeadersMetadata(
      await this._productService.count(),
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

    const found = await this._productService.getById(productId);
    if (!found) throw new NotFoundError();

    const isAuthorized = await this._authService.isAdminOrSameUser(req, found.user.toString());
    if (!isAuthorized)
      throw new UnauthorizedError('You cannot edit this product, as it is not yours.');

    const updatedProduct = await this._productService.updateById(productId, body, {
      lean: true,
    });

    return this.ok(res, updatedProduct);
  }

  public async deleteProductByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(deleteProductByIdSchema, req.params);
    const productId = TextUtils.sanitize(req.params.productId);

    const found = await this._productService.getById(productId);
    if (!found) throw new NotFoundError();

    const isAuthorized = await this._authService.isAdminOrSameUser(req, found.user.toString());
    if (!isAuthorized)
      throw new UnauthorizedError('You cannot delete this product, as it is not yours.');

    await this._productService.deleteById(productId);
    return this.ok(res);
  }
}
