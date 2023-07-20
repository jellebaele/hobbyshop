import { NextFunction, Request, RequestHandler, Response } from 'express';

export const internalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err.status) console.log(err.stack);

  res
    .status(err.status || 500)
    .json({ message: err.message || 'Internal server error' });
};

export const notFoundErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({ message: 'Route not found' });
};

export const asyncErrorHandler =
  (handler: RequestHandler) =>
  (...args: [Request, Response, NextFunction]) => {
    const next: NextFunction = args[2];

    return Promise.resolve(handler(...args)).catch(next);
  };
