import {Id, NewAccountViewModel} from '../../view-models';
import {supabase} from '../supabase-client';
import {convertToNewSupabaseModel, convertToViewModel} from './account-converter';

export const getAll = async () => {
  const response = await supabase.from('accounts').select();
  const accounts = response.data ?? [];

  return accounts.map(convertToViewModel);
};

export const create = async (newAccount: NewAccountViewModel, userId: string) => {
  const newSupabaseAccount = convertToNewSupabaseModel(newAccount, userId);

  await supabase.from('accounts').insert(newSupabaseAccount);
};

export const deleteById = async (id: Id) => {
  await supabase.from('accounts').delete().eq('id', id);
};
