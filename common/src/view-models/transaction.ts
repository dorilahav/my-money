import {BaseViewModel} from './base';
import {TagViewModel} from './tag';
import {AccountViewModel} from './account';
import {TransactionType} from '../enum/transaction-type';

export interface TransactionViewModel extends BaseViewModel {
  type: TransactionType;
  otherParty: string;
  dateOfTransaction: Date;
  sum: number;
  isBusinessRelated: boolean;
  details?: string;
  tags?: TagViewModel[];
  account: AccountViewModel;
}