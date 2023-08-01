import { FilterQuery, isValidObjectId, QueryOptions } from 'mongoose';
import { QUERY_MAX_PER_PAGE } from '../config';
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
    query: FilterQuery<IProductDocument>,
    pageNumber: number,
    perPage: number
  ): Promise<(IProductDocument | null)[]> {
    if (perPage > +QUERY_MAX_PER_PAGE)
      perPage = parseInt(QUERY_MAX_PER_PAGE as string);

    const products = await ProductModel.find({ ...query })
      .limit(perPage)
      .skip(perPage * (pageNumber - 1));

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

  public async countDocuments(): Promise<number> {
    return ProductModel.countDocuments();
  }
}

export default ProductService;
