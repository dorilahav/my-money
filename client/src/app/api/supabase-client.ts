import {createClient} from '@supabase/supabase-js';
import {Database} from '../../database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL env not provided!');
}

if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY env not provided!');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

type Tables = Database['public']['Tables'];

export type Models = {
  [TKey in keyof Tables]: Tables[TKey]['Row'];
};

export type {User} from '@supabase/supabase-js';
