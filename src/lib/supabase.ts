import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          clerk_id: string
          email: string
          company_name: string
          subscription_status: string
          created_at: string
        }
        Insert: {
          id?: string
          clerk_id: string
          email: string
          company_name: string
          subscription_status?: string
          created_at?: string
        }
        Update: {
          id?: string
          clerk_id?: string
          email?: string
          company_name?: string
          subscription_status?: string
          created_at?: string
        }
      }
      carriers: {
        Row: {
          id: string
          user_id: string
          name: string
          email: string
          phone: string
          mc_number: string
          dot_number: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          email: string
          phone: string
          mc_number: string
          dot_number: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          email?: string
          phone?: string
          mc_number?: string
          dot_number?: string
          created_at?: string
        }
      }
      shipments: {
        Row: {
          id: string
          user_id: string
          shipper_name: string
          pickup_location: string
          dropoff_location: string
          cargo_type: string
          weight_kg: number
          delivery_deadline: string
          status: string
          rate: number
          carrier_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          shipper_name: string
          pickup_location: string
          dropoff_location: string
          cargo_type: string
          weight_kg: number
          delivery_deadline: string
          status?: string
          rate: number
          carrier_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          shipper_name?: string
          pickup_location?: string
          dropoff_location?: string
          cargo_type?: string
          weight_kg?: number
          delivery_deadline?: string
          status?: string
          rate?: number
          carrier_id?: string | null
          created_at?: string
        }
      }
    }
  }
}