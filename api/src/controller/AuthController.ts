import { Request, Response } from 'express';
import TextUtils from '../utils/TextUtils';
import { registerSchema } from './validation';
import SchemaValidator from './validation/SchemaValidator';

export default class AuthController {
  schemaValidator;

  constructor() {
    this.schemaValidator = new SchemaValidator();
  }

  public async registerUserHandler(req: Request, res: Response) {
    // await this.schemaValidator.validate(registerSchema, req.body);
    // const username = TextUtils.sanitize(req.body.username);
    // const email = TextUtils.sanitize(req.body.email);
    // const password = req.body.password;

    return res.json({ message: 'OK' });

    // const found = await this.userService.getUserByMailOrUsername(
    //   username,
    //   email
    // );

    // if (found) {
    //   throw new BadRequestError('Invalid username or email');
    // }

    // const newUser = await this.authService.register({
    //   username,
    //   email,
    //   password,
    // });
  }
}
