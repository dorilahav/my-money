import {useMutation, useQuery} from '@tanstack/react-query';
import {Id, TransactionViewModel} from '../../view-models';
import {useInvalidateQueriesOnSuccess} from '../common';
import {create, deleteById, editTransaction, getAll, getCurrentMonthTransactions} from './transactions-api';

export const useAllTransactions = () => useQuery<TransactionViewModel[], Error>(['transactions'], getAll);
export const useCurrentMonthTransactions = () =>
  useQuery<TransactionViewModel[], Error>(['transactions', 'current-month'], getCurrentMonthTransactions);

export const useCreateTransaction = () => {
  const onSuccess = useInvalidateQueriesOnSuccess(['transactions']);

  return useMutation(['transactions', 'create'], create, {onSuccess});
};

export const useDeleteTransactionById = () => {
  const onSuccess = useInvalidateQueriesOnSuccess(['transactions']);

  return useMutation(['transactions', 'delete'], (id: Id) => deleteById(id), {onSuccess});
};

export const useEditTransaction = (id?: Id) => {
  const onSuccess = useInvalidateQueriesOnSuccess(['transactions']);

  return useMutation(['transactions', 'edit'], id ? (transaction: TransactionViewModel) => editTransaction(id, transaction) : undefined, {onSuccess});
};
