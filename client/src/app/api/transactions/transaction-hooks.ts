import {useMutation, useQuery} from '@tanstack/react-query';
import {Id, TransactionViewModel} from '../../view-models';
import {getAll} from './transactions-api';
import {useInvalidateQueriesOnSuccess} from '../common';
import {create, deleteById, editTransaction} from './transactions-api';

export const useAllTransactions = () => useQuery<TransactionViewModel[], Error>(['transactions'], getAll);

export const useCreateTransaction = () => {
  const onSuccess = useInvalidateQueriesOnSuccess(['transactions'], {exact: true});

  return useMutation(['transactions', 'create'], create, {onSuccess});
};

export const useDeleteTransactionById = (id: Id) => {
  const onSuccess = useInvalidateQueriesOnSuccess(['transactions']);

  return useMutation(['transactions', 'delete'], () => deleteById(id), {onSuccess});
};

export const useEditTransaction = (id?: Id) => {
  const onSuccess = useInvalidateQueriesOnSuccess(['transactions']);

  return useMutation(['transactions', 'edit'], id ? (transaction: TransactionViewModel) => editTransaction(id, transaction) : undefined, {onSuccess});
};