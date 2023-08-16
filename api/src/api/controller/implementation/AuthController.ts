import { Request, Response } from 'express';
import { AuthService, authService, userService } from '../../../service';
import { loginSchema, registerSchema } from '../validation';
import { IUserDto } from '../../../models/User';
import TextUtils from '../../../utils/TextUtils';
import { BadRequestError, UnauthorizedError } from '../../../error';
import { BaseController } from '../BaseController';
import { UserService } from '../../../service/implementation/UserService';

export default class AuthController extends BaseController {
  private readonly _userService: UserService;
  private readonly _authService: AuthService;

  constructor() {
    super();
    this._userService = userService;
    this._authService = authService;
  }

  public async registerUserHandler(req: Request, res: Response) {
    await this._schemaValidator.validate(registerSchema, req.body);
    const body: IUserDto = TextUtils.sanitizeObject(req.body, ['password']);

    const found = await this._userService.getByUsernameOrEmail(body.username, body.email);
    if (found) throw new BadRequestError('Invalid username or email');

    await this._authService.registerUser(body);
    return this.created(res, { message: 'OK' });
  }

  public async loginUserHandler(req: Request, res: Response) {
    await this._schemaValidator.validate(loginSchema, req.body);
    const username = TextUtils.sanitize(req.body.username);
    const password = req.body.password;

    const user = await this._userService.getByUsernameOrEmail(username);
    if (!user || !(await user.matchesPassword(password)))
      throw new UnauthorizedError('Invalid username or password.');

    this._authService.login(req, user.id);

    return this.ok(res, { message: 'OK' });
  }

  public async logoutUserHandler(req: Request, res: Response) {
    await this._authService.logout(req, res);

    return this.ok(res, { message: 'OK' });
  }

  public async getCurrentUserHandler(req: Request, res: Response) {
    const userId = req.session.userId;

    if (!userId) throw new UnauthorizedError();

    const user = await this._userService.getById(userId);
    return this.ok(res, user);
  }
}
