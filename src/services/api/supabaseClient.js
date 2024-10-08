import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ikcremyfunrydzemqyqm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrY3JlbXlmdW5yeWR6ZW1xeXFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzODE0NTIsImV4cCI6MjA0Mzk1NzQ1Mn0.NwTSnJv3WakuoHzhPJ4coG8iFmaxDafELPC8KrFluPQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);