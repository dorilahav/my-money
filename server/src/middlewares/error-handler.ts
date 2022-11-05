import {ErrorRequestHandler} from 'express';
import {ApiError} from '../errors';

const UNKNOWN_ERROR_STATUS = 500;
const UNKNOWN_ERROR_MESSAGE = 'An unknown error has occurred!';

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ApiError) {
    res.status(error.status).send({message: error.message});
    return;
  }

  console.error(error);
  res.status(UNKNOWN_ERROR_STATUS).send({message: UNKNOWN_ERROR_MESSAGE});
};
