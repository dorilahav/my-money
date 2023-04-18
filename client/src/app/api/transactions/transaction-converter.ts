import {NewTransactionViewModel, TransactionViewModel} from '../../view-models';
import * as accountConverter from '../accounts/account-converter';
import {NewSupabaseTransaction, SupabaseTransaction} from './supabase-transaction';

export const convertToViewModel = ({details, dateOfTransaction, account, ...model}: SupabaseTransaction): TransactionViewModel => ({
  ...model,
  details: details ?? undefined,
  dateOfTransaction: dateOfTransaction ? new Date(dateOfTransaction) : new Date(),
  account: accountConverter.convertToViewModel(account)
});

export const convertToNewSupabaseModel = ({
                                            details,
                                            dateOfTransaction,
                                            account,
                                            ...transaction
                                          }: NewTransactionViewModel): NewSupabaseTransaction => ({
  ...transaction,
  details: details ?? null,
  dateOfTransaction: dateOfTransaction.toISOString(),
  account: account.id
});