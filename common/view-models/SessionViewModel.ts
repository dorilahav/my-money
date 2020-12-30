import {UserViewModel} from './UserViewModel';

export interface SessionViewModel {
  token: string;
  user: UserViewModel;
}