import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    "https://ycamecenyohfrrjulbvd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljYW1lY2VueW9oZnJyanVsYnZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNjEwODMsImV4cCI6MjA3MDczNzA4M30.xS5H4B996FiI0DD5pRmz4hbEp3skFuMe1IH4OXjPS2A"
)