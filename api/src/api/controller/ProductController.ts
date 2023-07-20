import { Request, Response } from 'express';
import NotFoundError from '../../error/implementations/NotFoundError';
import UnauthorizedError from '../../error/implementations/UnauthorizedError';
import { IProductDto } from '../../models/Product';
import ProductService from '../../service/ProductService';
import TextUtils from '../../utils/TextUtils';
import {
  createProductSchema,
  deleteProductByIdSchema,
  getProductByIdSchema,
  updateProductByIdSchema,
} from './validation/productSchemas';
import SchemaValidator from './validation/SchemaValidator';

export default class ProductController {
  schemaValidator: SchemaValidator;
  productService: ProductService;

  constructor() {
    this.schemaValidator = new SchemaValidator();
    this.productService = new ProductService();
  }

  public async createProductHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(createProductSchema, req.body);
    const body = TextUtils.sanitizeObject(req.body);

    const user = req.session.userId;
    if (!user) throw new UnauthorizedError();

    const newProduct = await this.productService.createProduct(
      body as IProductDto
    );

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

  public async getAllProductsHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    const limit: number | undefined =
      parseInt(req.query.limit as string) || undefined;

    const products = await this.productService.getAllProducts(limit);
    return res.status(200).json(products);
  }

  public async updateProductByIdHandler(req: Request, res: Response) {
    await this.schemaValidator.validate(updateProductByIdSchema, req.params);
    const productId = TextUtils.sanitize(req.params.productId);
    const currentUser = req.session.userId;

    const body: IProductDto = TextUtils.sanitizeObject(req.body) as IProductDto;

    const found = await this.productService.getProductById(productId);
    if (!found) throw new NotFoundError();

    if (!(found.user.toString() === currentUser))
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
    const currentUser = req.session.userId;

    const found = await this.productService.getProductById(productId);
    if (!found) throw new NotFoundError();

    if (!(found.user.toString() === currentUser))
      throw new UnauthorizedError(
        'You cannot delete this product, as it is not yours.'
      );

    await this.productService.deleteProductById(productId);
    return res.sendStatus(200);
  }
}
