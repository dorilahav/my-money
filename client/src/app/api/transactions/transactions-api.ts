import {supabase} from '../supabase-client';
import {SupabaseTransaction} from './supabase-transaction';
import {convertToViewModel} from './transaction-converter';

export const getAll = async () => {
  const response = await supabase.from('transactions').select(`*, account (*)`);
  const transactions: SupabaseTransaction[] = response.data ?? [];

  return transactions.map(convertToViewModel);
};