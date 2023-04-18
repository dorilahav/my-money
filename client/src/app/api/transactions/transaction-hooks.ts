import {useQuery} from '@tanstack/react-query';
import {TransactionViewModel} from '../../view-models';
import {getAll} from './transactions-api';

export const useAllTransactions = () => useQuery<TransactionViewModel[], Error>(['transactions'], getAll);