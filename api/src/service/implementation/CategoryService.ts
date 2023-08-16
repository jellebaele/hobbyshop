import { BadRequestError, NotFoundError, UnauthorizedError } from '../../error';
import { ICategoryDocument, ICategoryDto } from '../../models/Category';
import { BaseService } from '../BaseService';

export class CategoryService extends BaseService<ICategoryDocument, ICategoryDto> {
  public async create(dto: ICategoryDto): Promise<ICategoryDocument> {
    const found = await this._repository.getOneByQuery({ name: dto.name });
    if (found) throw new BadRequestError('Category already exists.');

    return await this._repository.create({ ...dto });
  }

  public async createIfNotExists(categoryDto: ICategoryDto): Promise<ICategoryDocument> {
    let category = await this._repository.getOneByQuery({ name: categoryDto.name });

    if (category) return category;
    else
      return await this._repository.create({
        name: categoryDto.name,
      });
  }

  public async addProductById(id: string, products: string[]): Promise<void> {
    this._repository.updateById(id, { $push: { products } });
  }
}
