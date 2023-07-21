import { FilterQuery, QueryOptions } from 'mongoose';
import { QUERY_DEFAULT_AMOUNT, QUERY_MAX_AMOUNT } from '../config';
import InternalServerError from '../error/implementations/InternalServerError';
import BadRequestError from '../error/implementations/BadRequestError';
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

  public async updateUserById(
    id: string,
    query: FilterQuery<IUserDocument>
  ): Promise<IUserDocument | null> {
    const isUsernameAndEmailUnique = await this.assessIsUsernameAndEmailUnique(
      query
    );
    if (!isUsernameAndEmailUnique)
      throw new BadRequestError('Username or email invalid.');

    return await UserModel.findByIdAndUpdate({ _id: id }, query, {
      new: true,
    });
  }

  public async deleteUserById(id: string) {
    return UserModel.deleteOne({ _id: id });
  }

  private async assessIsUsernameAndEmailUnique(
    query: FilterQuery<IUserDocument>
  ): Promise<boolean> {
    const existingUser = await UserModel.find({
      $or: [{ username: query.username }, { email: query.email }],
    });

    return existingUser.length > 0 ? false : true;
  }
}

export default UserService;
