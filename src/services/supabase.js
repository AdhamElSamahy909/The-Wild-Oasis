import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qcraidegydfvvntdddps.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjcmFpZGVneWRmdnZudGRkZHBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyNjY2NDksImV4cCI6MjA0Nzg0MjY0OX0.ZAbZDrzNE7RihzKf4s4tyS31ReLGa82Z519O99FtHEM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
