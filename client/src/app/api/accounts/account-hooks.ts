import {AccountViewModel, Id} from '@my-money/common';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {create, getAll} from './accounts-api';

type AllAccountsQuerySelectFunction<TData> = (allAccounts: AccountViewModel[]) => TData;

const useAllAccountsQuery = <TData = AccountViewModel[]>(select?: AllAccountsQuerySelectFunction<TData>) =>
  useQuery<AccountViewModel[], Error, TData>(['accounts'], getAll, {select});

export const useAllAccounts = () => useAllAccountsQuery();
export const useAccountById = (id: Id) => useAllAccountsQuery(accounts => accounts.find(x => x.id === id));

export const useCreateAccount = () => {
  const queryClient = useQueryClient();

  return useMutation(['accounts', 'create'], create, {
    onSuccess(createdAccount) {
      queryClient.setQueryData<AccountViewModel[]>(['accounts'], accounts => (accounts ? [...accounts, createdAccount] : [createdAccount]));
    }
  });
};
