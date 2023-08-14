import { Request, Response } from 'express';
import SchemaValidator from '../validation/SchemaValidator';
import { AuthService, UserService } from '../../../service';
import Pagination from '../../../utils/Pagination';
import {
  deleteUserByIdSchema,
  getCurrentUserSchema,
  getUsersSchema,
  updateUserByIdSchema,
} from '../validation';
import TextUtils from '../../../utils/TextUtils';
import { NotFoundError, UnauthorizedError } from '../../../error';
import { QUERY_DEFAULT_PER_PAGE } from '../../../config';
import { IUserDocument, IUserDto } from '../../../models/User';

export default class UserController {
  schemaValidator: SchemaValidator;
  userService: UserService;
  authService: AuthService;
  pagination: Pagination;

  constructor() {
    this.schemaValidator = new SchemaValidator();
    this.userService = new UserService();
    this.authService = new AuthService();
    this.pagination = new Pagination();
  }

  public async getUserByIdHandler(req: Request, res: Response): Promise<Response> {
    await this.schemaValidator.validate(getCurrentUserSchema, req.params);
    const userId = TextUtils.sanitize(req.params.userId);

    const user = await this.userService.getUserById(userId);
    if (!user) throw new NotFoundError();
    return res.status(200).json(user);
  }

  public async getUsersHandler(req: Request, res: Response): Promise<Response> {
    await this.schemaValidator.validate(getUsersSchema, req.query);
    const pageNumber = parseInt(req.query.page as string) || 1;
    const perPage = parseInt(req.query.per_page as string) || (QUERY_DEFAULT_PER_PAGE as number);

    const query = TextUtils.sanitizeObject(req.query);
    const users = await this.userService.getUsers(query, pageNumber, perPage);

    const pageMetaData = this.pagination.generateHeadersMetadata(
      await this.userService.countDocuments(),
      pageNumber,
      perPage,
      req
    );

    if (pageMetaData) res.set('Link', pageMetaData);

    return res.status(200).json(users);
  }

  public async updateUserByIdHandler(req: Request, res: Response): Promise<Response> {
    await this.schemaValidator.validate(updateUserByIdSchema, {
      ...req.params,
      ...req.body,
    });
    const userId = TextUtils.sanitize(req.params.userId);
    const body: IUserDto = TextUtils.sanitizeObject(req.body) as IUserDto;

    const found = await this.userService.getUserById(userId);
    if (!found) throw new NotFoundError();

    const isAuthorized = await this.authService.isAdminOrSameUser(req, found._id.toString());
    if (!isAuthorized) throw new UnauthorizedError();

    const updatedUser = await this.userService.updateUserById(userId, body);
    return res.send(updatedUser);
  }
  public async deleteUserByIdHandler(req: Request, res: Response): Promise<Response> {
    await this.schemaValidator.validate(deleteUserByIdSchema, req.params);
    const userId = TextUtils.sanitize(req.params.userId);

    const found: IUserDocument = (await this.userService.getUserById(userId)) as IUserDocument;
    if (!found) throw new NotFoundError();

    await this.userService.deleteUserById(userId);
    if (found && userId === found._id) await this.authService.logout(req, res);

    return res.sendStatus(200);
  }
}
