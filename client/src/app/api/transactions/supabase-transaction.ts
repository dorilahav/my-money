import {SupabaseAccount} from '../accounts/supabase-account';

export interface SupabaseTransaction {
  id: string;
  type: number;
  dateOfTransaction: string;
  sum: number;
  isBusinessRelated: boolean;
  details: string | null;
  otherParty: string;
  account: SupabaseAccount;
}

export interface NewSupabaseTransaction {
  type: number;
  dateOfTransaction: string;
  sum: number;
  isBusinessRelated: boolean;
  details: string | null;
  otherParty: string;
  account: string;
}