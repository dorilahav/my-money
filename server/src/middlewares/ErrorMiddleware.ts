import {BaseApiError} from '../errors';

export const handleError = (error: any, req: Server.Request, res: Server.Response, next: Server.Next) => {
  if (error instanceof BaseApiError) {
    res.status(error.status).send(error.message);

    return;
  }

  console.error(error);
  res.sendStatus(500);
}