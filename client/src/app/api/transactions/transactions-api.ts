import {supabase} from '../supabase-client';
import {SupabaseTransaction} from './supabase-transaction';
import {convertToViewModel, convertToNewSupabaseModel} from './transaction-converter';
import {TransactionViewModel, Id, NewTransactionViewModel} from '../../view-models';

export const getAll = async () => {
  const response = await supabase.from('transactions').select(`*, account (*)`);
  const transactions: SupabaseTransaction[] = response.data ?? [];

  return transactions.map(convertToViewModel);
};

export const create = async (newTransaction: NewTransactionViewModel) => {
  const newSupabaseTransaction = convertToNewSupabaseModel(newTransaction);

  await supabase.from('transactions').insert(newSupabaseTransaction);
};

export const deleteById = async (id: Id) => {
  await supabase.from('transactions').delete().eq('id', id);
};

export const editTransaction = async (id: Id, transaction: TransactionViewModel) => {
  await supabase.from('transactions').update(transaction).eq('id', id);
};