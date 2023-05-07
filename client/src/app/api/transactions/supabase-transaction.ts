import {SupabaseAccount} from '../accounts/supabase-account';

export enum TransactionCategory {
  Other,
  Food,
  Car,
  Welfare,
  Electronics,
  Taxes,
  Clothing,
  Gifts,
  Housing,
  Salary
}

export interface SupabaseTransaction {
  id: string;
  type: number;
  dateOfTransaction: string;
  sum: number;
  isBusinessRelated: boolean;
  details: string | null;
  otherParty: string;
  account: SupabaseAccount;
  category: TransactionCategory;
}

export interface NewSupabaseTransaction {
  type: number;
  dateOfTransaction: string;
  sum: number;
  isBusinessRelated: boolean;
  details: string | null;
  otherParty: string;
  account: string;
  category: TransactionCategory;
}