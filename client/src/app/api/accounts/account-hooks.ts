import {AccountViewModel} from '@my-money/common';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {create, getAll} from './accounts-api';

export const useAllAccountsQuery = () => useQuery<AccountViewModel[], Error>(['accounts'], getAll);

export const useCreateAccountMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(['accounts', 'create'], create, {
    onSuccess(createdAccount) {
      queryClient.setQueryData<AccountViewModel[]>(['accounts'], accounts => (accounts ? [...accounts, createdAccount] : [createdAccount]));
    }
  });
};
