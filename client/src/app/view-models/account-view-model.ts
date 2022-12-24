import {BaseViewModel} from './base-view-model';

export interface AccountViewModel extends BaseViewModel {
  name: string;
  balance: number;
  createdAt: Date;
}

export interface NewAccountViewModel {
  name: string;
  balance?: number;
}
