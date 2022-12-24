export interface SupabaseAccount {
  id: string;
  createdAt: string;
  balance: number;
  name: string;
}

export interface NewSupabaseAccount {
  name: string;
  balance?: number;
}
