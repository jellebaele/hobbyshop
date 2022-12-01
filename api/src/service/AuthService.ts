import { Request } from 'express';

export default class AuthService {
  public isLoggedIn(req: Request) {
    return false;
  }
}
