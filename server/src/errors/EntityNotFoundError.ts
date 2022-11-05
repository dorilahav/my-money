import {Model} from 'mongoose';
import {ApiError} from './ApiError';

export class EntityNotFoundError extends ApiError {
  constructor(model: Model<any>) {
    super(`${model.modelName} not found!`, 404);
  }
}
