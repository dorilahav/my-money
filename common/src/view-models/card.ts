import { CardType } from '../enum';
import { BaseViewModel, Id } from './base';

export interface CardViewModel extends BaseViewModel {
  label: string;
  type: CardType;
  chargingDate?: number;
  linkedAccount: Id;
}

export interface NewCardViewModel {
  label: string;
  type: CardType;
  chargingDate?: number;
  linkedAccount: Id;
}

export interface CardEditsViewModel {
  chargingDate: number;
}
