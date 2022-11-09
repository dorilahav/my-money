import { AccountViewModel, Id, NewAccountViewModel } from '@my-money/common';

import { Models, supabase } from '../supabase-client';

const convertToViewModel = ({createdAt, ...model}: Models['accounts']): AccountViewModel => ({
  updatedAt: new Date(createdAt),
  ...model
});

export const getAll = async () => {
  const response = await supabase.from('accounts').select();
  const accounts = response.data ?? [];

  return accounts.map(convertToViewModel);
};

export const create = async (newAccount: NewAccountViewModel) => {
  await supabase.from('accounts').insert(newAccount);
}

export const deleteById = async (id: Id) => {
  await supabase.from('accounts').delete().eq('id', id);
}
