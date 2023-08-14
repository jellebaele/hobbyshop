import { Request, Response } from 'express';
import SchemaValidator from '../validation/SchemaValidator';
import { AuthService, UserService, userService } from '../../../service';
import { loginSchema, registerSchema } from '../validation';
import { IUserDto } from '../../../models/User';
import TextUtils from '../../../utils/TextUtils';
import { BadRequestError, UnauthorizedError } from '../../../error';

export default class AuthController {
  private readonly _schemaValidator: SchemaValidator;
  private readonly _userService: UserService;
  private readonly _authService: AuthService;

  constructor() {
    this._schemaValidator = new SchemaValidator();
    this._userService = userService;
    this._authService = new AuthService();
  }

  public async registerUserHandler(req: Request, res: Response) {
    await this._schemaValidator.validate(registerSchema, req.body);
    const body: IUserDto = TextUtils.sanitizeObject(req.body, ['password']);

    const username = body.username;
    const email = body.email;

    const found = await this._userService.getByUsernameOrEmail(username, email);
    if (found) throw new BadRequestError('Invalid username or email');

    await this._authService.registerUser(body);

    return res.status(201).json({ message: 'OK' });
  }

  public async loginUserHandler(req: Request, res: Response) {
    await this._schemaValidator.validate(loginSchema, req.body);
    const username = TextUtils.sanitize(req.body.username);
    const password = req.body.password;

    const user = await this._userService.getByUsernameOrEmail(username);
    if (!user || !(await user.matchesPassword(password)))
      throw new UnauthorizedError('Invalid username or password.');

    this._authService.login(req, user.id);

    return res.status(200).json({ message: 'OK' });
  }

  public async logoutUserHandler(req: Request, res: Response) {
    await this._authService.logout(req, res);

    res.json({ message: 'OK' });
  }

  public async getCurrentUserHandler(req: Request, res: Response) {
    const userId = req.session.userId;

    if (!userId) throw new UnauthorizedError();

    const user = await this._userService.getById(userId);
    return res.json(user);
  }
}
