import { createClient } from '@supabase/supabase-js';

const supabaseUrlFromEnv = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKeyFromEnv = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('[DEBUG] Attempting to initialize Supabase client.');
console.log('[DEBUG] VITE_SUPABASE_URL from import.meta.env:', supabaseUrlFromEnv);
console.log('[DEBUG] Type of VITE_SUPABASE_URL:', typeof supabaseUrlFromEnv);
console.log('[DEBUG] VITE_SUPABASE_ANON_KEY from import.meta.env:', supabaseAnonKeyFromEnv);
console.log('[DEBUG] Type of VITE_SUPABASE_ANON_KEY:', typeof supabaseAnonKeyFromEnv);

if (!supabaseUrlFromEnv || typeof supabaseUrlFromEnv !== 'string' || supabaseUrlFromEnv.trim() === '' || supabaseUrlFromEnv === 'YOUR_SUPABASE_URL_HERE') {
  console.error('ERROR: Supabase URL is missing, invalid, or still a placeholder. Please check your .env file and ensure it contains the correct VITE_SUPABASE_URL.');
}

if (!supabaseAnonKeyFromEnv || typeof supabaseAnonKeyFromEnv !== 'string' || supabaseAnonKeyFromEnv.trim() === '' || supabaseAnonKeyFromEnv === 'YOUR_SUPABASE_ANON_KEY_HERE') {
  console.error('ERROR: Supabase Anon Key is missing, invalid, or still a placeholder. Please check your .env file and ensure it contains the correct VITE_SUPABASE_ANON_KEY.');
}

// Ensure that the values passed to createClient are actual strings.
// The Supabase client will throw an error if they are not valid.
export const supabase = createClient(
  supabaseUrlFromEnv as string,
  supabaseAnonKeyFromEnv as string
);

console.log('[DEBUG] Supabase client potentially initialized.');
