import {getMonthRange} from '../../utils';
import {Id, NewTransactionViewModel, TransactionViewModel} from '../../view-models';
import {supabase} from '../supabase-client';
import {SupabaseTransaction} from './supabase-transaction';
import {convertToNewSupabaseModel, convertToViewModel} from './transaction-converter';

export const getAll = async () => {
  const response = await supabase.from('transactions').select(`*, account (*)`);
  const transactions: SupabaseTransaction[] = response.data ?? [];

  return transactions.map(convertToViewModel);
};

export const getAccountsPageTransactions = async () => {
  const [startDate] = getMonthRange(minusMonths(new Date(), 3));
  const [, endDate] = getMonthRange(new Date());

  return getTransactionsInDateRange(startDate, endDate);
};

export const getCurrentMonthTransactions = async () => {
  const [startOfMonth, endOfMonth] = getMonthRange(new Date());

  return getTransactionsInDateRange(startOfMonth, endOfMonth);
};

const minusMonths = (date: Date, months: number) => {
  date.setMonth(date.getMonth() - months);

  return date;
};

const getTransactionsInDateRange = async (start: Date, end: Date) => {
  const response = await supabase
    .from('transactions')
    .select('*, account (*)')
    .gte('dateOfTransaction', start.toDateString())
    .lte('dateOfTransaction', end.toDateString());

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
