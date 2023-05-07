import {CardViewModel, Id, NewCardViewModel} from '../../view-models';
import {supabase} from '../supabase-client';
import {convertToNewSupabaseModel, convertToViewModel} from './card-converter';

const tableName = 'cards';

export const getAll = async () => {
  const response = await supabase.from(tableName).select();
  const accounts = response.data ?? [];

  return accounts.map(convertToViewModel);
};

export const create = async (newCard: NewCardViewModel) => {
  const newSupabaseCard = convertToNewSupabaseModel(newCard);

  await supabase.from(tableName).insert(newSupabaseCard);
};

export const deleteById = async (id: Id) => {
  await supabase.from(tableName).delete().eq('id', id);
};

export const editCard = async (id: Id, card: CardViewModel) => {
  await supabase.from(tableName).update(card).eq('id', id);
};
