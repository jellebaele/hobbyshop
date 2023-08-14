import { Request, Response } from 'express';
import { AuthService, UserService } from '../../../service';
import {
  deleteUserByIdSchema,
  getCurrentUserSchema,
  getUsersSchema,
  updateUserByIdSchema,
} from '../validation';
import TextUtils from '../../../utils/TextUtils';
import { NotFoundError, UnauthorizedError } from '../../../error';
import UserModel, { IUserDocument, IUserDto } from '../../../models/User';
import { BaseController } from '../BaseController';

export default class UserController extends BaseController {
  userService: UserService;
  authService: AuthService;

  constructor() {
    super();
    this.userService = new UserService(UserModel);
    this.authService = new AuthService();
  }

  public async getUserByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getCurrentUserSchema, req.params);
    const userId = TextUtils.sanitize(req.params.userId);

    const user = await this.userService.getById(userId);
    if (!user) throw new NotFoundError();
    return this.ok(res, user);
  }

  public async getUsersHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getUsersSchema, req.query);
    const paginationData = this.getPaginationData(req);
    const query = TextUtils.sanitizeObject<any>(req.query);
    const users = await this.userService.getByQuery(query, paginationData);

    const pageMetaData = this._pagination.generateHeadersMetadata(
      await this.userService.count(),
      paginationData,
      req
    );

    if (pageMetaData) res.set('Link', pageMetaData);

    return this.ok(res, users);
  }

  public async updateUserByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(updateUserByIdSchema, {
      ...req.params,
      ...req.body,
    });
    const userId = TextUtils.sanitize(req.params.userId);
    const body: IUserDto = TextUtils.sanitizeObject(req.body);

    const found = await this.userService.getById(userId);
    if (!found) throw new NotFoundError();

    const isAuthorized = await this.authService.isAdminOrSameUser(req, found._id.toString());
    if (!isAuthorized) throw new UnauthorizedError();

    const updatedUser = await this.userService.updateById(userId, body);
    return this.ok(res, updatedUser);
  }

  public async deleteUserByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(deleteUserByIdSchema, req.params);
    const userId = TextUtils.sanitize(req.params.userId);

    const found: IUserDocument = (await this.userService.getById(userId)) as IUserDocument;
    if (!found) throw new NotFoundError();

    await this.userService.deleteById(userId);
    if (found && userId === found._id) await this.authService.logout(req, res);

    return this.ok(res);
  }
}
