import { BadRequestError } from '../../error';
import { ICategoryDocument, ICategoryDto } from '../../models/Category';
import BaseService from '../BaseService';

export class CategoryService extends BaseService<ICategoryDocument> {
  public async create(categoryDto: ICategoryDto): Promise<ICategoryDocument> {
    const found = await this.getOneByQuery({ name: categoryDto.name });

    if (found) throw new BadRequestError('Category already exists. The name must be unique.');
    return super.create(categoryDto);
  }

  public async createIfNotExists(categoryDto: ICategoryDto): Promise<ICategoryDocument> {
    let category = await this.getOneByQuery({ name: categoryDto.name });

    if (category) return category;
    else
      return await this.create({
        name: categoryDto.name,
      });
  }

  public async addProductById(id: string, products: string[]): Promise<void> {
    this.updateById(id, { $push: { products } });
  }
}
