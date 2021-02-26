import {ValidationSchema} from 'mymoney-common';
import {RequestHandler} from 'express';

export const validateRequestBody = <T extends object>(validationSchema: ValidationSchema<T>): RequestHandler<{}, {}, T> =>
  (req, res, next) => {
    req.body = validationSchema.validate(req.body, {abortEarly: false, stripUnknown: true}) as T;
    
    // TODO: catch error.
    
    next();
  }