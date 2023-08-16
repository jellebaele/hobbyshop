import { IUserDocument, IUserDto } from '../../models/User';
import { BaseService } from '../BaseService';
import { BadRequestError } from '../../error';

export class UserService extends BaseService<IUserDocument, IUserDto> {
  async create(dto: IUserDto): Promise<IUserDocument> {
    const isUnique = await this.isUsernameAndEmailUnique(dto);
    if (!isUnique) throw new BadRequestError();

    return await this._repository.create(dto);
  }

  public async update(id: string, dto: any): Promise<IUserDocument | null> {
    const isUsernameAndEmailUnique = await this.isUsernameAndEmailUnique(dto);
    if (!isUsernameAndEmailUnique) throw new BadRequestError('Username or email invalid.');

    const updated = await this._repository.updateById(id, dto);
    return updated;
  }

  public async getByUsernameOrEmail(
    username: string | null = null,
    email: string | null = null
  ): Promise<IUserDocument | null> {
    return await this._repository.getOneByQuery({ $or: [{ username }, { email }] });
  }

  // Generic
  private async isUsernameAndEmailUnique(query: any): Promise<boolean> {
    const existingUser = await this.getAllByQuery({
      $or: [{ username: query.username }, { email: query.email }],
    });

    return existingUser.length > 0 ? false : true;
  }
}
