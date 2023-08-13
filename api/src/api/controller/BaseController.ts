import { Response } from 'express';
import SchemaValidator from './validation/SchemaValidator';

export abstract class BaseController {
  protected readonly _schemaValidator: SchemaValidator;

  constructor() {
    this._schemaValidator = new SchemaValidator();
  }

  async ok<T>(res: Response, dto?: T): Promise<Response> {
    if (dto) return res.status(200).json(dto);
    return res.sendStatus(200);
  }

  async created<T>(res: Response, dto?: T): Promise<Response> {
    if (dto) return res.status(201).json(dto);
    return res.sendStatus(201);
  }
}