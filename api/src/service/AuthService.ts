import { Request } from 'express';
import { IUserDto } from '../models/User';
import UserService from './UserService';

export default class AuthService {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  public isLoggedIn(req: Request) {
    return false;
  }

  public async registerUser(user: IUserDto) {
    const newUser = await this.userService.createUser(user);

    return newUser;
  }
}
