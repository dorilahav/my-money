import {Id} from '../../view-models';
import {supabase} from '../supabase-client';
import {SupabaseDebt} from './supabase-debt';
import {convertToNewSupabaseModel, convertToViewModel} from './debt-converter';
import {NewDebtViewModel} from '../../view-models/debt-view-model';

export const tableName = 'debts';

export const getAll = async () => {
  const response = await supabase.from(tableName).select(`*`);
  const debts: SupabaseDebt[] = response.data ?? [];

  return debts.map(convertToViewModel);
};

export const create = async (newDebt: NewDebtViewModel, userId: string) => {
  const newSupabaseDebt = convertToNewSupabaseModel(newDebt, userId);

  await supabase.from(tableName).insert(newSupabaseDebt);
};

export const deleteById = async (id: Id) => {
  await supabase.from(tableName).delete().eq('id', id);
};
