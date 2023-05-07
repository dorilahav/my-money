import {Id, NewTransactionViewModel, TransactionViewModel} from '../../view-models';
import {supabase} from '../supabase-client';
import {SupabaseTransaction} from './supabase-transaction';
import {convertToNewSupabaseModel, convertToViewModel} from './transaction-converter';

export const getAll = async () => {
  const response = await supabase.from('transactions').select(`*, account (*)`);
  const transactions: SupabaseTransaction[] = response.data ?? [];

  return transactions.map(convertToViewModel);
};

export const getCurrentMonthTransactions = async () => {
  const [startOfMonth, endOfMonth] = getMonthRange(new Date());

  const response = await supabase
    .from('transactions')
    .select('*, account (*)')
    .gte('dateOfTransaction', startOfMonth.toDateString())
    .lte('dateOfTransaction', endOfMonth.toDateString());

  const transactions: SupabaseTransaction[] = response.data ?? [];

  return transactions.map(convertToViewModel);
};

const getMonthRange = (date: Date): [Date, Date] => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const startOfMonth = new Date(year, month, 1);
  const endOfMonth = new Date(year, month + 1, 0);

  return [startOfMonth, endOfMonth];
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
