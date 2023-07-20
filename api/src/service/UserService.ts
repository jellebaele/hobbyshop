import { FilterQuery, QueryOptions } from 'mongoose';
import { QUERY_DEFAULT_AMOUNT, QUERY_MAX_AMOUNT } from '../config';
import InternalServerError from '../error/implementations/InternalServerError';
import UserModel, { IUserDocument, IUserDto } from '../models/User';

class UserService {
  public async getUser(
    filterQuery: FilterQuery<IUserDto>,
    options: QueryOptions = {}
  ): Promise<IUserDocument | null> {
    return await UserModel.findOne(filterQuery, {}, options);
  }

  public async getUserById(id: string): Promise<IUserDocument | null> {
    return await this.getUser({ _id: id });
  }

  public async getUserByUsernameOrEmail(
    username: string | null = null,
    email: string | null = null
  ): Promise<IUserDocument | null> {
    return await this.getUser({ $or: [{ username }, { email }] });
  }

  public async getAllUsers(
    limit: number = parseInt(QUERY_DEFAULT_AMOUNT as string)
  ): Promise<(IUserDocument | null)[]> {
    if (limit > QUERY_MAX_AMOUNT) limit = parseInt(QUERY_MAX_AMOUNT as string);
    const users = await UserModel.find().limit(limit);

    return users;
  }

  public async createUser(userDto: IUserDto): Promise<IUserDocument> {
    const newUser = await new UserModel({ ...userDto, isAdmin: false }).save();

    if (!newUser) {
      throw new InternalServerError(
        'Something went wrong. User is not created.'
      );
    }

    return newUser;
  }
}

export default UserService;
