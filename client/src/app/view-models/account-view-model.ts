import {BaseViewModel} from './base-view-model';

export interface AccountViewModel extends BaseViewModel {
  name: string;
  createdAt: Date;
}

export interface NewAccountViewModel {
  name: string;
}
