import {AccountViewModel} from './account-view-model';
import {BaseViewModel} from './base-view-model';
import {TransactionCategory} from '../api/transactions/supabase-transaction';

export enum TransactionType {
  Income = 1,
  Expense
}

export const TransactionTypeResource = {
  [TransactionType.Income]: 'הכנסה',
  [TransactionType.Expense]: 'הוצאה',
} as const;

export const TransactionCategoryResource = {
  [TransactionCategory.Other]: 'אחר',
  [TransactionCategory.Food]: 'אוכל',
  [TransactionCategory.Car]: 'רכב',
  [TransactionCategory.Welfare]: 'בריאות',
  [TransactionCategory.Electronics]: 'אלקטרוניקה',
  [TransactionCategory.Taxes]: 'מיסים',
  [TransactionCategory.Clothing]: 'ביגוד',
  [TransactionCategory.Gifts]: 'מתנות',
  [TransactionCategory.Housing]: 'בית',
  [TransactionCategory.Salary]: 'משכורת'
} as const;

export interface TransactionViewModel extends BaseViewModel {
  type: TransactionType;
  dateOfTransaction: Date;
  sum: number;
  isBusinessRelated: boolean;
  details?: string;
  otherParty: string;
  account: AccountViewModel;
  category: TransactionCategory;
}

export interface NewTransactionViewModel {
  type: TransactionType;
  dateOfTransaction: Date;
  sum: number;
  isBusinessRelated: boolean;
  details?: string;
  account: AccountViewModel;
  otherParty: string;
  category: TransactionCategory;
}