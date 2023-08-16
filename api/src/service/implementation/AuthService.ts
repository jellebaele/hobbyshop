import { Request, Response } from 'express';
import { SESSION_NAME } from '../../config';
import UserModel, { IUserDocument, IUserDto } from '../../models/User';
import { UserService } from './UserService';

export class AuthService {
  private readonly _userService: UserService;

  constructor() {
    this._userService = new UserService(UserModel);
  }

  public login(req: Request, userId: string): void {
    req.session.userId = userId;
    req.session.createdAt = Date.now();
  }

  public isLoggedIn(req: Request): boolean {
    return !!req.session.userId;
  }

  public async registerUser(user: IUserDto): Promise<IUserDocument> {
    const newUser = await this._userService.create(user);

    return newUser;
  }

  logout = (req: Request, res: Response): Promise<Error | void> => {
    return new Promise((resolve, reject) => {
      req.session.destroy((err: Error) => {
        if (err) reject(err);

        res.clearCookie(SESSION_NAME);

        resolve();
      });
    });
  };

  isAdmin = async (req: Request): Promise<boolean> => {
    if (!this.isLoggedIn(req)) return false;

    const userId = req.session?.userId;
    if (!userId) return false;

    const user = await this._userService.getById(userId.toString());
    return user === null ? false : user.isAdmin;
  };

  isAdminOrSameUser = async (req: Request, userId: string): Promise<boolean> => {
    return (await this.isAdmin(req)) || this.isSameUser(req, userId);
  };

  private isSameUser = (req: Request, userId: string): boolean => {
    return req.session?.userId === userId;
  };
}
