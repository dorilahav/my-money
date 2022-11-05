import {CardViewModel, Id} from '@my-money/common';
import {useMutation, useQuery} from '@tanstack/react-query';
import {useInvalidateQueriesOnSuccess} from '../common';
import {create, deleteById, getAll} from './cards-api';

export const useAllCards = () => useQuery<CardViewModel[], Error>(['cards'], getAll);

export const useCreateCard = () => {
  const onSuccess = useInvalidateQueriesOnSuccess(['cards'], {exact: true});

  return useMutation(['cards', 'create'], create, {onSuccess});
};

export const useDeleteCardById = (id: Id) => {
  const onSuccess = useInvalidateQueriesOnSuccess(['cards']);

  return useMutation(['cards', 'delete'], () => deleteById(id), {onSuccess});
};
