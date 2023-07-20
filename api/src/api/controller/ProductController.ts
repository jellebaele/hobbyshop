import { Request, Response } from 'express';
import UnauthorizedError from '../../error/implementations/UnauthorizedError';
import ProductService from '../../service/ProductService';
import TextUtils from '../../utils/TextUtils';
import {
  createProductSchema,
  getProductByIdSchema,
} from './validation/productSchemas';
import SchemaValidator from './validation/SchemaValidator';

export default class ProductController {
  schemaValidator: SchemaValidator;
  productService: ProductService;

  constructor() {
    this.schemaValidator = new SchemaValidator();
    this.productService = new ProductService();
  }

  public async createProductHandler(req: Request, res: Response) {
    await this.schemaValidator.validate(createProductSchema, req.body);
    const name = TextUtils.sanitize(req.body.name);
    const description = TextUtils.sanitize(req.body.description);
    const category = TextUtils.sanitize(req.body.category);
    const amount = parseInt(TextUtils.sanitize(req.body.amount));
    const unit = TextUtils.sanitize(req.body.unit);
    const status = TextUtils.sanitize(req.body.status);

    const user = req.session.userId;
    if (!user) throw new UnauthorizedError();

    const newProduct = await this.productService.createProduct({
      name,
      description,
      category,
      amount,
      unit,
      user,
      status,
    });

    return res.json(newProduct);
  }

  public async getProductByIdHandler(req: Request, res: Response) {
    await this.schemaValidator.validate(getProductByIdSchema, req.params);
    const productId = TextUtils.sanitize(req.params.productId);

    const product = await this.productService.getProductById(productId);
    return res.status(200).json(product);
  }

  public async updateProductByIdHandler(req: Request, res: Response) {
    await this.schemaValidator.validate(createProductSchema, req.body);
    const productId = TextUtils.sanitize(req.body.productId);
    const name = TextUtils.sanitize(req.body.name);
    const description = TextUtils.sanitize(req.body.description);
    const category = TextUtils.sanitize(req.body.category);
    const amount = parseInt(TextUtils.sanitize(req.body.amount));
    const unit = TextUtils.sanitize(req.body.unit);
    const status = TextUtils.sanitize(req.body.status);

    const user = req.session.userId;
    if (!user) throw new UnauthorizedError();

    const updatedProduct = await this.productService.updateProductById(
      productId,
      {
        name,
        description,
        category,
        amount,
        unit,
        user,
        status,
      }
    );

    return res.json(updatedProduct);
  }

  // public async getAllUsersHandler(
  //   req: Request,
  //   res: Response
  // ): Promise<Response> {
  //   await this.schemaValidator.validate(getAllUsersSchema, req.query);
  //   const limit: number | undefined = parseInt(req.query.limit as string);
  //   const users = await this.userService.getAllUsers(limit);

  //   return res.status(200).json(users);
  // }
}
