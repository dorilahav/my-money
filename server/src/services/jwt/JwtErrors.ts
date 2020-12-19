import {BaseApiError} from '../../errors';

export class InvalidTokenError extends BaseApiError {
  constructor() {
    super('Invalid token!');
  }
}