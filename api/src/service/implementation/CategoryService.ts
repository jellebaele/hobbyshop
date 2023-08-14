import { ICategoryDocument, ICategoryDto } from '../../models/Category';
import BaseService from '../BaseService';
import BadRequestError from '../../error/implementations/BadRequestError';

export default class CategoryService extends BaseService<ICategoryDocument> {
  public async create(categoryDto: ICategoryDto): Promise<ICategoryDocument> {
    const found = await this.getOneByQuery({ name: categoryDto.name });

    if (found) throw new BadRequestError('Category already exists. The name must be unique.');
    return super.create(categoryDto);
  }
}
