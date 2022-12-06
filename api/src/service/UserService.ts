import { FilterQuery, QueryOptions } from 'mongoose';
import InternalServerError from '../error/implementations/InternalServerError';
import UserModel, { IUserDto } from '../models/User';

class UserService {
  public async getUser(
    filterQuery: FilterQuery<IUserDto>,
    options: QueryOptions = {}
  ): Promise<IUserDto | null> {
    return await UserModel.findOne(filterQuery, {}, options);
  }

  public async createUser(userDto: IUserDto): Promise<IUserDto> {
    const newUser = await new UserModel({ ...userDto, isAdmin: false }).save();

    if (!newUser) {
      throw new InternalServerError(
        'Something went wrong. User is not created.'
      );
    }

    return newUser;
  }

  public async getUserByUsernameOrEmail(
    name: string,
    email: string
  ): Promise<IUserDto | null> {
    return await this.getUser({ $or: [{ name }, { email }] });
  }
}

export default UserService;
