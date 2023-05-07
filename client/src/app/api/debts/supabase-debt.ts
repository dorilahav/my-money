export enum DebtType {
  ToMe = 1,
  ToSomeone
}

export interface SupabaseDebt {
  id: string;
  creationDate: string;
  sum: number;
  details: string | null;
  otherParty: string;
  type: DebtType;
}

export interface NewSupabaseDebt {
  creationDate: string;
  sum: number;
  details: string | null;
  otherParty: string;
  type: DebtType;
  user: string;
}