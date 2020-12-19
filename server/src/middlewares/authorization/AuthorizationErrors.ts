import {BaseApiError} from '../../errors';

export class NoAuthorizationHeaderError extends BaseApiError {
  constructor() {
    super('No authorization header!');
  }
}