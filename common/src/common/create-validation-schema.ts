import yup, {ObjectSchema} from 'yup';
import {ObjectShape} from 'yup/lib/object';
import {BaseViewModel} from './base.view-model';
import {AnySchema} from 'yup/lib/schema';
import Reference from 'yup/lib/Reference';
import Lazy from 'yup/lib/Lazy';

export interface ValidationSchemaOptions {
  excludeBaseFields?: boolean;
}

const defaultOptions = {
  excludeBaseFields: false
};

export type ValidationSchemaDefinition<T extends object> = Record<keyof T, AnySchema | Reference | Lazy<any, any>>;

const baseFields: ValidationSchemaDefinition<BaseViewModel> = {
  id: yup.string(),
  creationDate: yup.date() // TODO: transform date if instanceof string.
};

export type ValidationSchema<T extends object> = ObjectSchema<ValidationSchemaDefinition<T>>;

export const createValidationSchema = <T extends object>
  (definition: ValidationSchemaDefinition<T>, options: ValidationSchemaOptions = {}): ValidationSchema<T> => {
    options = Object.assign(defaultOptions, options);
    
    if (options.excludeBaseFields) {
      return yup.object().shape<ValidationSchemaDefinition<T>>(definition);
    }
    
    return yup.object().shape<ValidationSchemaDefinition<T>>({...baseFields, ...definition});
  };