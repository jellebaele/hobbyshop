import { FilterQuery } from 'mongoose';
import { BadRequestError, InternalServerError, NotFoundError } from '../../error';
import { IProductDocument, IProductDto } from '../../models/Product';
import { BaseService } from '../BaseService';

export class ProductService extends BaseService<IProductDocument, IProductDto> {
  public async create(dto: IProductDto): Promise<IProductDocument> {
    const found = await this._repository.getOneByQuery({ name: dto.name });
    if (found) throw new BadRequestError('Product already exists.');

    return await this._repository.create({ ...dto });
  }

  public async update(id: string, dto: any): Promise<IProductDocument> {
    const found = await this._repository.getById(id);
    if (!found) throw new NotFoundError();

    const duplicate = await this._repository.getOneByQuery({ name: dto.name });
    if (duplicate) throw new BadRequestError('A category with this name already exists.');

    const updated = await this._repository.updateById(id, dto, {
      lean: true,
    });

    if (!updated) throw new InternalServerError();
    return updated;
  }

  // To adjust with custom amount of variables
  private async isUnique(query: FilterQuery<IProductDocument>): Promise<boolean> {
    const existingDocument = await this.getAllByQuery({
      $or: [{ username: query.username }, { email: query.email }],
    });

    return existingDocument.length > 0 ? false : true;
  }
}
