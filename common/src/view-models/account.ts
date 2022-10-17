import {BaseViewModel} from './base';

export interface AccountViewModel extends BaseViewModel {
  name: string;
  balance: number;
  updatedAt: Date;
}

export interface NewAccountViewModel {
  name: string;
}
