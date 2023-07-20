import { Request, Response } from 'express';
import UserService from '../../service/UserService';
import TextUtils from '../../utils/TextUtils';
import SchemaValidator from './validation/SchemaValidator';
import {
  getAllUsersSchema,
  getCurrentUserSchema,
} from './validation/userSchemas';

export default class UserController {
  schemaValidator: SchemaValidator;
  userService: UserService;

  constructor() {
    this.schemaValidator = new SchemaValidator();
    this.userService = new UserService();
  }

  public async getUserByIdHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(getCurrentUserSchema, req.params);
    const userId = TextUtils.sanitize(req.params.userId);

    const user = await this.userService.getUserById(userId);
    return res.status(200).json(user);
  }

  public async getAllUsersHandler(
    req: Request,
    res: Response
  ): Promise<Response> {
    await this.schemaValidator.validate(getAllUsersSchema, req.query);
    const limit: number | undefined = parseInt(req.query.limit as string);
    const users = await this.userService.getAllUsers(limit);

    return res.status(200).json(users);
  }
}
