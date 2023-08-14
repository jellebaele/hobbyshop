import { FilterQuery, QueryOptions } from 'mongoose';
import UserModel, { IUserDocument, IUserDto } from '../../models/User';
import { QUERY_MAX_PER_PAGE } from '../../config';
import { BadRequestError, InternalServerError } from '../../error';

export class UserService {
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

  public async getUsers(
    query: FilterQuery<IUserDocument>,
    pageNumber: number,
    perPage: number
  ): Promise<(IUserDocument | null)[]> {
    if (perPage > +QUERY_MAX_PER_PAGE) perPage = parseInt(QUERY_MAX_PER_PAGE as string);
    const users = await UserModel.find({ ...query })
      .limit(perPage)
      .skip(perPage * (pageNumber - 1));

    return users;
  }

  public async createUser(userDto: IUserDto): Promise<IUserDocument> {
    const newUser = await new UserModel({ ...userDto, isAdmin: false }).save();

    if (!newUser) {
      throw new InternalServerError('Something went wrong. User is not created.');
    }

    return newUser;
  }

  public async updateUserById(
    id: string,
    query: FilterQuery<IUserDocument>
  ): Promise<IUserDocument | null> {
    const isUsernameAndEmailUnique = await this.assessIsUsernameAndEmailUnique(query);
    if (!isUsernameAndEmailUnique) throw new BadRequestError('Username or email invalid.');

    return await UserModel.findByIdAndUpdate({ _id: id }, query, {
      new: true,
    });
  }

  public async deleteUserById(id: string) {
    return UserModel.deleteOne({ _id: id });
  }

  public async countDocuments(): Promise<number> {
    return UserModel.countDocuments();
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
