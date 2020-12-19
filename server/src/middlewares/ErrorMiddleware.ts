import {BaseApiError} from '../errors';

export const handleError: Server.ErrorHandlerRoute = (error, req, res, next) => {
  if (error instanceof BaseApiError) {
    res.status(error.status).send(error.message);

    return;
  }

  console.error(error);
  res.sendStatus(500);
}