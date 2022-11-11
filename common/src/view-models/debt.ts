import {BaseViewModel} from './base';

interface DebtViewModel extends BaseViewModel {
  creationDate: Date;
  finalPaymentDate: Date;
  sum: number;
  otherParty: string;
  details?: string;
}