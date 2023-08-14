import HttpError from '../HttpError';

export class BadRequestError extends HttpError {
  constructor(message = 'Bad Request') {
    super(message);

    this.status = 400;
  }
}
