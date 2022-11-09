export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      accounts: {
        Row: {
          createdAt: string
          id: string
          balance: number
          name: string
        }
        Insert: {
          createdAt?: string
          id?: string
          balance?: number
          name: string
        }
        Update: {
          createdAt?: string
          id?: string
          balance?: number
          name?: string
        }
      }
      cards: {
        Row: {
          id: string
          label: string
          type: number
          chargingDate: number | null
          linkedAccount: string
        }
        Insert: {
          id?: string
          label: string
          type: number
          chargingDate?: number | null
          linkedAccount: string
        }
        Update: {
          id?: string
          label?: string
          type?: number
          chargingDate?: number | null
          linkedAccount?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

