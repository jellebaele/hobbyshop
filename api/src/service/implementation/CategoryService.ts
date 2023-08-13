import { FilterQuery, QueryOptions } from 'mongoose';
import { ICategoryDocument, ICategoryDto } from '../../models/Category';
import BaseService from '../BaseService';
import BadRequestError from '../../error/implementations/BadRequestError';

export default class CategoryService extends BaseService<ICategoryDocument> {
  public async createCategory(categoryDto: ICategoryDto): Promise<ICategoryDocument> {
    const found = await this.getOneByQuery({ name: categoryDto.name });
    if (found) throw new BadRequestError('Category already exists.');

    return this.create(categoryDto);
  }
}
