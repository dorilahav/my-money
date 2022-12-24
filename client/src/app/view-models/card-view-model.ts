import {AccountViewModel} from './account-view-model';
import {BaseViewModel} from './base-view-model';

export enum CardType {
  Credit = 1,
  Debit = 2
}

interface DebitCardViewModel extends BaseViewModel {
  label: string;
  type: CardType.Debit;
  linkedAccount: AccountViewModel;
}

interface CreditCardViewModel extends BaseViewModel {
  label: string;
  type: CardType.Credit;
  chargingDate: number;
  linkedAccount: AccountViewModel;
}

export type CardViewModel = DebitCardViewModel | CreditCardViewModel;

interface NewDebitCardViewModel {
  label: string;
  type: CardType.Debit;
  linkedAccount: AccountViewModel;
}

interface NewCreditCardViewModel {
  label: string;
  type: CardType.Credit;
  chargingDate: number;
  linkedAccount: AccountViewModel;
}

export type NewCardViewModel = NewDebitCardViewModel | NewCreditCardViewModel;
