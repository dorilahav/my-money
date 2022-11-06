import { CardEditsViewModel, CardViewModel, Id } from '@my-money/common';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useInvalidateQueriesOnSuccess } from '../common';
import { create, deleteById, editCard, getAll } from './cards-api';

export const useAllCards = () => useQuery<CardViewModel[], Error>(['cards'], getAll);

export const useCreateCard = () => {
  const onSuccess = useInvalidateQueriesOnSuccess(['cards'], {exact: true});

  return useMutation(['cards', 'create'], create, {onSuccess});
};

export const useDeleteCardById = (id: Id) => {
  const onSuccess = useInvalidateQueriesOnSuccess(['cards']);

  return useMutation(['cards', 'delete'], () => deleteById(id), {onSuccess});
};

export const useEditCard = (id?: Id) => {
  const onSuccess = useInvalidateQueriesOnSuccess(['cards']);

  return useMutation(['cards', 'edit'], id ? (cardEdits: CardEditsViewModel) => editCard(id, cardEdits) : undefined, {onSuccess});
};
