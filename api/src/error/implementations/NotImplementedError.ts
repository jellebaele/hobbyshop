import HttpError from '../HttpError';

export class NotImplementedError extends HttpError {
  constructor(message = 'Method not implemented') {
    super(message);

    this.status = 501;
  }
}
