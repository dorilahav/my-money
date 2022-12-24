import {AccountViewModel, NewAccountViewModel} from '../../view-models';
import {NewSupabaseAccount, SupabaseAccount} from './supabase-account';

export const convertToViewModel = ({createdAt, ...model}: SupabaseAccount): AccountViewModel => ({
  createdAt: new Date(createdAt),
  ...model
});

export const convertToNewSupabaseModel = (newAccount: NewAccountViewModel): NewSupabaseAccount => newAccount;
