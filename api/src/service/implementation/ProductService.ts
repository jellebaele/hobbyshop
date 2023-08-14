import { IProductDocument, IProductDto } from '../../models/Product';
import { BadRequestError } from '../../error';
import BaseService from '../BaseService';

export class ProductService extends BaseService<IProductDocument> {
  public async create(productDto: IProductDto): Promise<IProductDocument> {
    const found = await this.getOneByQuery({ name: productDto.name });

    if (found) throw new BadRequestError('Product already exists. The name must be unique.');
    return super.create(productDto);
  }
}
