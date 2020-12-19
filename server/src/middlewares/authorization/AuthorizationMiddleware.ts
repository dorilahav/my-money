import {JwtService} from '../../services';
import {NoAuthorizationHeaderError} from './AuthorizationErrors';

export const authorize: Server.Route = (req, res, next) => {
  const jwt = JwtService();
  const {authorization} = req.headers;

  if (!authorization) {
    throw new NoAuthorizationHeaderError();
  }

  req.context = jwt.decode(authorization);
  next();
}