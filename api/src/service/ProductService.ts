import { FilterQuery, QueryOptions } from 'mongoose';
import InternalServerError from '../error/implementations/InternalServerError';
import ProductModel, { IProductDocument, IProductDto } from '../models/Product';
import UserModel, { IUserDocument, IUserDto } from '../models/User';

class ProductService {
  public async getProduct(
    filterQuery: FilterQuery<IProductDto>,
    options: QueryOptions = {}
  ): Promise<IProductDocument | null> {
    return await ProductModel.findOne(filterQuery, {}, options);
  }

  public async getProductById(id: string): Promise<IProductDocument | null> {
    return await this.getProduct({ _id: id });
  }

  public async updateProductById(id: string, productDto: IProductDto) {
    return await ProductModel.updateOne({ _id: id }, productDto);
  }
  // public async getUser(
  //   filterQuery: FilterQuery<IUserDto>,
  //   options: QueryOptions = {}
  // ): Promise<IUserDocument | null> {
  //   return await UserModel.findOne(filterQuery, {}, options);
  // }

  // public async getUserById(id: string): Promise<IUserDocument | null> {
  //   return await this.getUser({ _id: id });
  // }

  // public async getUserByUsernameOrEmail(
  //   username: string | null = null,
  //   email: string | null = null
  // ): Promise<IUserDocument | null> {
  //   return await this.getUser({ $or: [{ username }, { email }] });
  // }

  // public async getAllUsers(
  //   limit: number = 50
  // ): Promise<(IUserDocument | null)[]> {
  //   if (limit > 50) limit = 50;
  //   const users = await UserModel.find().limit(limit);

  //   return users;
  // }
  // public async getUser(
  //   filterQuery: FilterQuery<IUserDto>,
  //   options: QueryOptions = {}
  // ): Promise<IUserDocument | null> {
  //   return await UserModel.findOne(filterQuery, {}, options);
  // }

  public async createProduct(
    productDto: IProductDto
  ): Promise<IProductDocument> {
    const newProduct = await new ProductModel({ ...productDto }).save();

    if (!newProduct) {
      throw new InternalServerError(
        'Something went wrong. Product is not created.'
      );
    }

    return newProduct;
  }

  // public async getUserById(id: string): Promise<IUserDocument | null> {
  //   return await this.getUser({ id });
  // }

  // public async getUserByUsernameOrEmail(
  //   username: string | null = null,
  //   email: string | null = null
  // ): Promise<IUserDocument | null> {
  //   return await this.getUser({ $or: [{ username }, { email }] });
  // }

  // public async getAllUsers(
  //   limit: number = 50
  // ): Promise<(IUserDocument | null)[]> {
  //   if (limit > 50) limit = 50;
  //   const users = await UserModel.find().limit(limit);

  //   return users;
  // }
}

export default ProductService;
