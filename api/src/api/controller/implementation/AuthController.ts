import { Request, Response } from 'express';
import SchemaValidator from '../validation/SchemaValidator';
import { AuthService, UserService } from '../../../service';
import { loginSchema, registerSchema } from '../validation';
import UserModel, { IUserDto } from '../../../models/User';
import TextUtils from '../../../utils/TextUtils';
import { BadRequestError, UnauthorizedError } from '../../../error';

export default class AuthController {
  schemaValidator: SchemaValidator;
  userService: UserService;
  authService: AuthService;

  constructor() {
    this.schemaValidator = new SchemaValidator();
    this.userService = new UserService(UserModel);
    this.authService = new AuthService();
  }

  public async registerUserHandler(req: Request, res: Response) {
    await this.schemaValidator.validate(registerSchema, req.body);
    const body: IUserDto = TextUtils.sanitizeObject(req.body, ['password']);

    const username = body.username;
    const email = body.email;

    const found = await this.userService.getByUsernameOrEmail(username, email);
    if (found) throw new BadRequestError('Invalid username or email');

    await this.authService.registerUser(body);

    return res.status(201).json({ message: 'OK' });
  }

  public async loginUserHandler(req: Request, res: Response) {
    await this.schemaValidator.validate(loginSchema, req.body);
    const username = TextUtils.sanitize(req.body.username);
    const password = req.body.password;

    const user = await this.userService.getByUsernameOrEmail(username);
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

    const user = await this.userService.getById(userId);
    return res.json(user);
  }
}
