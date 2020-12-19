import {Schema, model as createModel, Document, Types, SchemaDefinition, SchemaOptions} from 'mongoose';

export interface IBaseModel extends Document<Types.ObjectId> {
  profileId: Types.ObjectId;
  creationDate: Date;
}

const createSchema = (schemaDefinition: SchemaDefinition, options?: SchemaOptions) => {
  schemaDefinition.profileId = {
    type: Types.ObjectId,
    required: true,
    index: 1
  };

  schemaDefinition.creationDate = {
    type: Date,
    required: true,
    default: Date.now,
    index: 1
  }

  return new Schema(schemaDefinition, options);
}

export const Model = <T extends IBaseModel>(name: string, schemaDefinition: SchemaDefinition, options?: SchemaOptions) => {
  const schema = createSchema(schemaDefinition, options);

  return createModel<T>(name, schema, options?.collection);
}
