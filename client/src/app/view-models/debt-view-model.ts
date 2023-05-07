import {BaseViewModel} from './base-view-model';
import {DebtType} from '../api/debts/supabase-debt';

export const DebtTypeResource = {
  [DebtType.ToMe]: 'לי',
  [DebtType.ToSomeone]: 'למישהו אחר'
} as const;

export interface DebtViewModel extends BaseViewModel {
  creationDate: Date;
  sum: number;
  details: string | null;
  otherParty: string;
  type: DebtType;
}

export interface NewDebtViewModel {
  creationDate: Date;
  sum: number;
  details: string | null;
  otherParty: string;
  type: DebtType;
}