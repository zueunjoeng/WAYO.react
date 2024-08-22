// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qfcrthqaldnwttqpcxbv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmY3J0aHFhbGRud3R0cXBjeGJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MDc1ODksImV4cCI6MjAzNzI4MzU4OX0.L1WwhYTGsDSUr7RzMb_0XWDsy8IPvbZdUY44hMUQKLU'

export const supabase = createClient(supabaseUrl, supabaseKey)
