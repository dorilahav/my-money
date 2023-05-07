import {NewSupabaseDebt, SupabaseDebt} from './supabase-debt';
import {DebtViewModel, NewDebtViewModel} from '../../view-models/debt-view-model';

export const convertToViewModel = ({creationDate, ...model}: SupabaseDebt): DebtViewModel => ({
  ...model,
  creationDate: new Date(creationDate)
});

export const convertToNewSupabaseModel = ({
                                            details,
                                            creationDate,
                                            ...debt
                                          }: NewDebtViewModel, userId: string): NewSupabaseDebt => ({
  ...debt,
  details: details ?? null,
  creationDate: creationDate.toISOString(),
  user: userId,
});