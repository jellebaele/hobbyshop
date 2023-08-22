import { Request, Response } from 'express';
import { AuthService, authService, userService } from '../../../service';
import {
  deleteUserByIdSchema,
  getCurrentUserSchema,
  getUsersSchema,
  updateUserByIdSchema,
} from '../validation';
import TextUtils from '../../../utils/TextUtils';
import { UnauthorizedError } from '../../../error';
import { IUserDto } from '../../../models/User';
import { BaseController } from '../BaseController';
import { UserService } from '../../../service/implementation/UserService';
import { getRelatedProductsSchema } from '../validation/userSchemas';

export default class UserController extends BaseController {
  private readonly _userService: UserService;
  private readonly _authService: AuthService;

  constructor() {
    super();
    this._userService = userService;
    this._authService = authService;
  }

  public async getUserByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getCurrentUserSchema, req.params);
    const userId = TextUtils.sanitize(req.params.userId);

    const user = await this._userService.getById(userId);
    return this.ok(res, user);
  }

  public async getUsersHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getUsersSchema, req.query);
    const paginationData = this.getPaginationData(req);
    const query = TextUtils.sanitizeObject<any>(req.query);

    const users = await this._userService.getPartByQuery(query, paginationData);
    const totalAmount = await this._userService.count();

    return this.paginateResponse(req, res, totalAmount, paginationData).ok(res, users);
  }

  public async getRelatedProductsHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(getRelatedProductsSchema, req.params);
    const userId = TextUtils.sanitize(req.params.userId);
    const paginationData = this.getPaginationData(req);

    const relatedProducts = await this._userService.getAllRelatedProductsById(
      userId,
      paginationData
    );

    return this.ok(res, relatedProducts);
  }

  public async updateUserByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(updateUserByIdSchema, {
      ...req.params,
      ...req.body,
    });
    const userId = TextUtils.sanitize(req.params.userId);
    const body: IUserDto = TextUtils.sanitizeObject(req.body);

    this.checkIsAuthorized(userId, req);

    const updatedUser = await this._userService.update(userId, body);
    return this.ok(res, updatedUser);
  }

  public async deleteUserByIdHandler(req: Request, res: Response): Promise<Response> {
    await this._schemaValidator.validate(deleteUserByIdSchema, req.params);
    const userId = TextUtils.sanitize(req.params.userId);

    const found = await this._userService.getById(userId);
    await this._userService.deleteById(userId);

    if (found && userId === found._id) await this._authService.logout(req, res);

    return this.ok(res);
  }

  private async checkIsAuthorized(userId: string, req: Request): Promise<void> {
    const found = await this._userService.getById(userId);
    const isAuthorized = await this._authService.isAdminOrSameUser(req, found._id.toString());

    if (!isAuthorized) throw new UnauthorizedError('You cannot edit this user.');
  }
}
