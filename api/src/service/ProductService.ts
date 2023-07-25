import { FilterQuery, isValidObjectId, QueryOptions } from 'mongoose';
import { QUERY_DEFAULT_PER_PAGE, QUERY_MAX_PER_PAGE } from '../config';
import InternalServerError from '../error/implementations/InternalServerError';
import ProductModel, { IProductDocument, IProductDto } from '../models/Product';

class ProductService {
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

  public async getProduct(
    filterQuery: FilterQuery<IProductDto>,
    options: QueryOptions = {}
  ): Promise<IProductDocument | null> {
    return await ProductModel.findOne(filterQuery, {}, options);
  }

  public async getProductById(id: string): Promise<IProductDocument | null> {
    if (isValidObjectId(id)) return await this.getProduct({ _id: id });
    else return null;
  }

  public async getProducts(
    limit: number = parseInt(QUERY_DEFAULT_PER_PAGE as string),
    query: FilterQuery<IProductDocument>
  ): Promise<(IProductDocument | null)[]> {
    if (limit > +QUERY_MAX_PER_PAGE)
      limit = parseInt(QUERY_MAX_PER_PAGE as string);
    const products = await ProductModel.find({ ...query }).limit(limit);

    return products;
  }

  public async updateProductById(
    id: string,
    query: FilterQuery<IProductDocument>,
    options: QueryOptions<unknown>
  ): Promise<IProductDocument | null> {
    return await ProductModel.findByIdAndUpdate({ _id: id }, query, {
      ...options,
      new: true,
    });
  }

  public async deleteProductById(id: string) {
    return ProductModel.deleteOne({ _id: id });
  }
}

export default ProductService;
