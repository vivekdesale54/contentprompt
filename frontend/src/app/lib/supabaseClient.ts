import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL="https://rkncfvkwdoeuxnwpvrsd.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY="process.env.SUPABASE_KEY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
