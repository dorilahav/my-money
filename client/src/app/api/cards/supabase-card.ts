import {SupabaseAccount} from '../accounts/supabase-account';

export interface SupabaseCard {
  id: string;
  label: string;
  type: number;
  chargingDate: number | null;
  linkedAccount: SupabaseAccount;
}

export interface NewSupabaseCard {
  label: string;
  type: number;
  chargingDate: number | null;
  linkedAccount: string;
}
