import { Request, Response } from 'express';
import NotFoundError from '../../error/implementations/NotFoundError';
import UnauthorizedError from '../../error/implementations/UnauthorizedError';
import { IUserDocument, IUserDto } from '../../models/User';
import AuthService from '../../service/AuthService';
import UserService from '../../service/UserService';
import TextUtils from '../../utils/TextUtils';
import SchemaValidator from './validation/SchemaValidator';
import {
  deleteUserByIdSchema,
  getUsersSchema,
  getCurrentUserSchema,
  updateUserByIdSchema,
} from './validation/userSchemas';

export default class UserController {
  schemaValidator: SchemaValidator;
  userService: UserService;
  authService: AuthService;

  constructor() {
    this.schemaValidator = new SchemaValidator();
    this.userService = new UserService();
    this.authService = new AuthService();
  }

  public async getUserByIdHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(getCurrentUserSchema, req.params);
    const userId = TextUtils.sanitize(req.params.userId);

    const user = await this.userService.getUserById(userId);
    if (!user) throw new NotFoundError();
    return res.status(200).json(user);
  }

  public async getUsersHandler(req: Request, res: Response): Promise<Response> {
    await this.schemaValidator.validate(getUsersSchema, req.query);
    const limit: number | undefined = parseInt(req.query.limit as string);
    delete req.query.limit;

    const query = TextUtils.sanitizeObject(req.query);
    const users = await this.userService.getUsers(limit, query);

    return res.status(200).json(users);
  }

  public async updateUserByIdHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(updateUserByIdSchema, req.params);
    const userId = TextUtils.sanitize(req.params.userId);

    const body: IUserDto = TextUtils.sanitizeObject(req.body) as IUserDto;

    const found = await this.userService.getUserById(userId);
    if (!found) throw new NotFoundError();

    const isAuthorized = await this.authService.isAdminOrSameUser(
      req,
      found._id.toString()
    );
    if (!isAuthorized) throw new UnauthorizedError();

    const updatedUser = await this.userService.updateUserById(userId, body);

    return res.send(updatedUser);
  }
  public async deleteUserByIdHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(deleteUserByIdSchema, req.params);
    const userId = TextUtils.sanitize(req.params.userId);

    const found: IUserDocument = (await this.userService.getUserById(
      userId
    )) as IUserDocument;
    if (!found) throw new NotFoundError();

    await this.userService.deleteUserById(userId);
    if (found && userId === found._id) await this.authService.logout(req, res);

    return res.sendStatus(200);
  }
}
