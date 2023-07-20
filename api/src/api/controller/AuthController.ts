import { Request, Response } from 'express';
import BadRequestError from '../../error/implementations/BadRequestError';
import UnauthorizedError from '../../error/implementations/UnauthorizedError';
import AuthService from '../../service/AuthService';
import UserService from '../../service/UserService';
import TextUtils from '../../utils/TextUtils';
import { loginSchema, registerSchema } from './validation';
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

    if (found) throw new BadRequestError('Invalid username or email');

    await this.authService.registerUser({
      username,
      email,
      name,
      lastname,
      password,
    });

    return res.status(201).json({ message: 'OK' });
  }

  public async loginUserHandler(req: Request, res: Response) {
    await this.schemaValidator.validate(loginSchema, req.body);
    const username = TextUtils.sanitize(req.body.username);
    const password = req.body.password;

    const user = await this.userService.getUserByUsernameOrEmail(username);
    if (!user || !(await user.matchesPassword(password)))
      throw new UnauthorizedError('Invalid username or password.');

    this.authService.login(req, user.id);

    return res.status(200).json({ message: 'OK' });
  }

  public async logoutUserHandler(req: Request, res: Response) {
    await this.authService.logout(req, res);

    res.json({ message: 'OK' });
  }

  public async getCurrentUserHandler(req: Request, res: Response) {
    const userId = req.session.userId;

    if (!userId) throw new UnauthorizedError();

    const user = await this.userService.getUserById(userId);
    return res.json(user);
  }
}
