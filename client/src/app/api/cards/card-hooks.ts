import {CardViewModel} from '@my-money/common';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {create, getAll} from './cards-api';

export const useAllCards = () => useQuery<CardViewModel[], Error>(['cards'], getAll);

export const useCreateCard = () => {
  const queryClient = useQueryClient();

  return useMutation(['cards', 'create'], create, {
    onSuccess(createdCard) {
      queryClient.setQueryData<CardViewModel[]>(['cards'], cards => (cards ? [...cards, createdCard] : [createdCard]));
    }
  });
};
