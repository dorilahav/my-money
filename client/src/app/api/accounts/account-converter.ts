import {AccountViewModel, NewAccountViewModel} from '../../view-models';
import {NewSupabaseAccount, SupabaseAccount} from './supabase-account';

export const convertToViewModel = ({createdAt, user, ...model}: SupabaseAccount): AccountViewModel => ({
  createdAt: new Date(createdAt),
  ...model
});

export const convertToNewSupabaseModel = (newAccount: NewAccountViewModel, user: string): NewSupabaseAccount => ({...newAccount, user});
