import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://svoaqpugwdjdfoojaidk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2b2FxcHVnd2RqZGZvb2phaWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2ODU2OTUsImV4cCI6MjAyMTI2MTY5NX0.05Aw4xSsZ8PIUUMANnLZN6WfH2aRV2Zwo36FVOl_YkQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
