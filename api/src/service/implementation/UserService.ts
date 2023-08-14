import { FilterQuery } from 'mongoose';
import { IUserDocument, IUserDto } from '../../models/User';
import { BadRequestError } from '../../error';
import BaseService from '../BaseService';

export class UserService extends BaseService<IUserDocument> {
  public async create(userDto: IUserDto): Promise<IUserDocument> {
    const found = await this.isUsernameAndEmailUnique(userDto);
    if (found) throw new BadRequestError();

    return super.create(userDto);
  }

  public async updateById(
    id: string,
    query: FilterQuery<IUserDocument>
  ): Promise<IUserDocument | null> {
    const isUsernameAndEmailUnique = await this.isUsernameAndEmailUnique(query);

    if (!isUsernameAndEmailUnique) throw new BadRequestError('Username or email invalid.');
    return await super.updateById(id, query);
  }

  public async getByUsernameOrEmail(
    username: string | null = null,
    email: string | null = null
  ): Promise<IUserDocument | null> {
    return await this.getOneByQuery({ $or: [{ username }, { email }] });
  }

  private async isUsernameAndEmailUnique(query: FilterQuery<IUserDocument>): Promise<boolean> {
    const existingUser = await this.getAllByQuery({
      $or: [{ username: query.username }, { email: query.email }],
    });

    return existingUser.length > 0 ? false : true;
  }
}
