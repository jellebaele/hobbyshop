import { Request, Response, response } from 'express';
import SchemaValidator from './validation/SchemaValidator';
import Pagination, { IPaginationData } from '../../utils/Pagination';
import { QUERY_DEFAULT_PER_PAGE } from '../../config';

export abstract class BaseController {
  protected readonly _schemaValidator: SchemaValidator;
  protected readonly _pagination: Pagination;
  private _res?: Response;

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

  paginateResponse(
    req: Request,
    res: Response,
    totalAmountOfRecords: number,
    paginationData: IPaginationData
  ) {
    const pageMetaData = this._pagination.generateHeadersMetadata(
      totalAmountOfRecords,
      paginationData,
      req
    );
    this._res = res;
    if (pageMetaData) this._res.set('Link', pageMetaData);

    return this;
  }

  getPaginationData(req: Request): IPaginationData {
    return {
      pageNumber: parseInt(req.query.page as string) || 1,
      perPage: parseInt(req.query.per_page as string) || (QUERY_DEFAULT_PER_PAGE as number),
    };
  }
}
