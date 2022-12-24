import {useMutation, useQuery} from '@tanstack/react-query';
import {AccountViewModel, Id} from '../../view-models';
import {useInvalidateQueriesOnSuccess} from '../common';
import {create, deleteById, getAll} from './accounts-api';

type AllAccountsQuerySelectFunction<TData> = (allAccounts: AccountViewModel[]) => TData;

const useAllAccountsQuery = <TData = AccountViewModel[]>(select?: AllAccountsQuerySelectFunction<TData>) =>
  useQuery<AccountViewModel[], Error, TData>(['accounts'], getAll, {select});

export const useAllAccounts = () => useAllAccountsQuery();
export const useAccountById = (id: Id) => useAllAccountsQuery(accounts => accounts.find(x => x.id === id));

export const useCreateAccount = () => {
  const onSuccess = useInvalidateQueriesOnSuccess(['accounts'], {exact: true});

  return useMutation(['accounts', 'create'], create, {onSuccess});
};

export const useDeleteAccountById = (id: Id) => {
  const onSuccess = useInvalidateQueriesOnSuccess(['accounts']);

  return useMutation(['accounts', 'delete'], () => deleteById(id), {onSuccess});
};
