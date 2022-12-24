import {CardViewModel, Id, NewCardViewModel} from '../../view-models';

import {supabase} from '../supabase-client';
import {convertToNewSupabaseModel, convertToViewModel} from './card-converter';

export const getAll = async () => {
  const response = await supabase.from('cards').select();
  const accounts = response.data ?? [];

  return accounts.map(convertToViewModel);
};

export const create = async (newCard: NewCardViewModel) => {
  const newSupabaseCard = convertToNewSupabaseModel(newCard);

  await supabase.from('cards').insert(newSupabaseCard);
};

export const deleteById = async (id: Id) => {
  await supabase.from('cards').delete().eq('id', id);
};

export const editCard = async (id: Id, card: CardViewModel) => {
  await supabase.from('cards').update(card).eq('id', id);
};
