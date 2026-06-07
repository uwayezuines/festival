import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lirfmxwyqtofhvfccaqu.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpcmZteHd5cXRvZmh2ZmNjYXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NTM3NjEsImV4cCI6MjA5NjIyOTc2MX0.rQwoGpTZxc5-uVf1qhA328Nf6K5FREeJDXggE2yDC70';

export const supabase = createClient(supabaseUrl, supabaseKey);
