import { CardEditsViewModel, CardViewModel, Id, NewCardViewModel } from '@my-money/common';


import { Models, supabase } from '../supabase-client';

const convertToViewModel = ({chargingDate, ...model}: Models['cards']): CardViewModel => ({
  ...model,
  chargingDate: chargingDate ?? undefined
});

export const getAll = async () => {
  const response = await supabase.from('cards').select();
  const accounts = response.data ?? [];

  return accounts.map(convertToViewModel);
};

export const create = async (newCard: NewCardViewModel) => {
  await supabase.from('cards').insert(newCard);
}

export const deleteById = async (id: Id) => {
  await supabase.from('cards').delete().eq('id', id);
}

export const editCard = async (id: Id, cardEdits: CardEditsViewModel) => {
  await supabase.from('cards').update(cardEdits).eq('id', id);
}
