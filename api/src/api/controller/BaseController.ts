import { Response } from 'express';

export abstract class BaseController {
  ok<T>(res: Response, dto?: T): Response {
    if (dto) return res.status(200).json(dto);
    return res.sendStatus(200);
  }

  created<T>(res: Response, dto?: T) {
    if (dto) return res.status(201).json(dto);
    return res.sendStatus(201);
  }
}
