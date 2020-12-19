import {IBaseModel, Model} from '../BaseModel';

export interface ITransaction extends IBaseModel {
  amount: number;
}

export const Transaction = Model<ITransaction>('Transaction', {
  amount: {
    type: Number,
    required: true
  }
});