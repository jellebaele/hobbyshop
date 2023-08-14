import HttpError from '../HttpError';

export class UnauthorizedError extends HttpError {
  constructor(message = 'Unauthorized') {
    super(message);

    this.status = 401;
  }
}
