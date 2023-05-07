import {useMutation, useQuery} from '@tanstack/react-query';
import {AccountViewModel, Id} from '../../view-models';
import {useInvalidateQueriesOnSuccess} from '../common';
import {create, deleteById, getAll, tableName} from './debts-api';
import {DebtViewModel, NewDebtViewModel} from '../../view-models/debt-view-model';
import {useAuth} from '../../providers';

export const useAllDebts = () => useQuery<DebtViewModel[], Error>([tableName], getAll);

export const useCreateDebt = () => {
  const {user} = useAuth();

  if (!user) {
    throw new Error('Cannot create debt while not logged in!');
  }

  const onSuccess = useInvalidateQueriesOnSuccess([tableName], {exact: true});

  return useMutation([tableName, 'create'], (newDebt: NewDebtViewModel) => create(newDebt, user.id), {onSuccess});
};

export const useDeleteDebtById = () => {
  const onSuccess = useInvalidateQueriesOnSuccess([tableName]);

  return useMutation([tableName, 'delete'], (id: Id) => deleteById(id), {onSuccess});
};