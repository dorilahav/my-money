export interface SupabaseAccount {
  id: string;
  createdAt: string;
  name: string;
  user: string;
}

export interface NewSupabaseAccount {
  name: string;
  user: string;
}
