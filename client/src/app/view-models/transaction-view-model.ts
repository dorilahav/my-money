import {AccountViewModel} from './account-view-model';
import {BaseViewModel} from './base-view-model';

export enum TransactionType {
  Income = 1,
  Expense
}

export interface TransactionViewModel extends BaseViewModel {
  type: TransactionType;
  dateOfTransaction: Date;
  sum: number;
  isBusinessRelated: boolean;
  details?: string;
  otherParty: string;
  account: AccountViewModel;
}

export interface NewTransactionViewModel {
  type: TransactionType;
  dateOfTransaction: Date;
  sum: number;
  isBusinessRelated: boolean;
  details?: string;
  account: AccountViewModel;
  otherParty: string;
}