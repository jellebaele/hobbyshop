import { Request, Response } from 'express';
import SchemaValidator from './validation/SchemaValidator';
import Pagination, { IPaginationData } from '../../utils/Pagination';
import { QUERY_DEFAULT_PER_PAGE } from '../../config';

export abstract class BaseController {
  protected readonly _schemaValidator: SchemaValidator;
  protected readonly _pagination: Pagination;

  constructor() {
    this._schemaValidator = new SchemaValidator();
    this._pagination = new Pagination();
  }

  async ok<T>(res: Response, dto?: T): Promise<Response> {
    if (dto) return res.status(200).json(dto);
    return res.sendStatus(200);
  }

  async created<T>(res: Response, dto?: T): Promise<Response> {
    if (dto) return res.status(201).json(dto);
    return res.sendStatus(201);
  }

  getPaginationData(req: Request): IPaginationData {
    return {
      pageNumber: parseInt(req.query.page as string) || 1,
      perPage: parseInt(req.query.per_page as string) || (QUERY_DEFAULT_PER_PAGE as number),
    };
  }
}
