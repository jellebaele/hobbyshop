import { Request, Response } from 'express';
import { SESSION_NAME } from '../config';
import { IUserDocument, IUserDto } from '../models/User';
import UserService from './UserService';

export default class AuthService {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public login(req: Request, userId: string): void {
    req.session.userId = userId;
    req.session.createdAt = Date.now();
  }

  public isLoggedIn(req: Request): boolean {
    return !!req.session.userId;
  }

  public async registerUser(user: IUserDto): Promise<IUserDocument> {
    const newUser = await this.userService.createUser(user);

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

  isAuthorized = async (req: Request): Promise<boolean> => {
    if (!this.isLoggedIn(req)) return false;
    const userId = req.session?.userId;
    const user = await this.userService.getUserById(userId as string);

    return user === null ? false : user.isAdmin;
  };
}
