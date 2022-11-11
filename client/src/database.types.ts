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
      },
      tags: {
        Row: {
          id: string
          user: string
          name: string
          color: string
          icon?: string | null
        }
        Insert: {
          id?: string
          user: string
          name: string
          color: string
          icon?: string | null
        }
        Update: {
          id?: string
          user?: string
          name?: string
          color?: string
          icon?: string | null
        }
      },
      transactions: {
        Row: {
          id: string
          type: number
          dateOfTransaction: string
          sum: number
          isBusinessRelated: boolean
          details?: string | null
          account: string
        }
        Insert: {
          id?: string
          type: number
          dateOfTransaction: string
          sum: number
          isBusinessRelated: boolean
          details?: string | null
          account: string
        }
        Update: {
          id?: string
          type?: number
          dateOfTransaction?: string
          sum?: number
          isBusinessRelated?: boolean
          details?: string | null
          account?: string
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

