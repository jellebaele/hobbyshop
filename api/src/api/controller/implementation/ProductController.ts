import { Request, Response } from 'express';
import { BaseController } from '../BaseController';
import {
  AuthService,
  ProductService,
  authService,
  categoryService,
  productService,
} from '../../../service';
import {
  createProductSchema,
  deleteProductByIdSchema,
  getProductByIdSchema,
  getProductsSchema,
  updateProductByIdSchema,
} from '../validation';
import { IProductDto } from '../../../models/Product';
import TextUtils from '../../../utils/TextUtils';
import { UnauthorizedError } from '../../../error';
import { CategoryService } from '../../../service/implementation/CategoryService';

export default class ProductController extends BaseController {
  private readonly _productService: ProductService;
  private readonly _authService: AuthService;
  private readonly _categoryService: CategoryService;

  constructor() {
    super();
    this._authService = authService;
    this._productService = productService;
    this._categoryService = categoryService;
  }

  public async createProductHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(createProductSchema, req.body);
    let body: IProductDto = TextUtils.sanitizeObject(req.body);
    if (req.session.userId) body.user = req.session.userId;

    const category = await this._categoryService.createIfNotExists({ name: body.category });
    const newProduct = await this._productService.create({
      ...body,
      category: category._id.toString(),
    });
    await this._categoryService.addProductById(
      category._id.toString(),
      new Array(newProduct._id.toString())
    );

    return this.created(res, newProduct);
  }

  public async getProductByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getProductByIdSchema, req.params);
    const productId = TextUtils.sanitize(req.params.productId);

    const product = await this._productService.getById(productId);
    return this.ok(res, product);
  }

  public async getProductsHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getProductsSchema, req.query);
    const paginationData = this.getPaginationData(req);
    const query = TextUtils.sanitizeObject<any>(req.query);

    const products = await this._productService.getPartByQuery(query, paginationData);
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

    await this.checkIsAuthorized(productId, req);

    const category = await this._categoryService.createIfNotExists({ name: body.category });
    const updatedProduct = await this._productService.update(productId, {
      ...body,
      category: category._id,
    });
    await this._categoryService.addProductById(
      category._id.toString(),
      new Array(updatedProduct._id.toString())
    );

    return this.ok(res, updatedProduct);
  }

  public async deleteProductByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(deleteProductByIdSchema, req.params);
    const productId = TextUtils.sanitize(req.params.productId);

    await this.checkIsAuthorized(productId, req);

    await this._productService.deleteById(productId);
    return this.ok(res);
  }

  // In middleware?
  private async checkIsAuthorized(productId: string, req: Request): Promise<void> {
    const found = await this._productService.getById(productId);
    const isAuthorized = await this._authService.isAdminOrSameUser(req, found.user.toString());

    if (!isAuthorized)
      throw new UnauthorizedError('You cannot edit this product, as it is not yours.');
  }
}
