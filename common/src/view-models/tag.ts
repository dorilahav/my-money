import {BaseViewModel} from './base';

export interface TagViewModel extends BaseViewModel {
  name: string;
  color: string;
  icon?: string;
}