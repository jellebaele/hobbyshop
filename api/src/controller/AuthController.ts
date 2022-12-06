import { Request, Response } from 'express';
import BadRequestError from '../error/implementations/BadRequestError';
import AuthService from '../service/AuthService';
import UserService from '../service/UserService';
import TextUtils from '../utils/TextUtils';
import { registerSchema } from './validation';
import SchemaValidator from './validation/SchemaValidator';

export default class AuthController {
  schemaValidator: SchemaValidator;
  userService: UserService;
  authService: AuthService;

  constructor() {
    this.schemaValidator = new SchemaValidator();
    this.userService = new UserService();
    this.authService = new AuthService();
  }

  public async registerUserHandler(req: Request, res: Response) {
    await this.schemaValidator.validate(registerSchema, req.body);
    const username = TextUtils.sanitize(req.body.username);
    const email = TextUtils.sanitize(req.body.email);
    const name = TextUtils.sanitize(req.body.name);
    const lastname = TextUtils.sanitize(req.body.lastname);
    const password = req.body.password;

    const found = await this.userService.getUserByUsernameOrEmail(
      username,
      email
    );

    if (found) {
      throw new BadRequestError('Invalid username or email');
    }

    const newUser = await this.authService.registerUser({
      username,
      email,
      name,
      lastname,
      password,
    });

    return res.status(201).json({ message: 'OK' });
  }
}
