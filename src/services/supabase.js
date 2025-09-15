import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://okkijggpzhqzudmdemlh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ra2lqZ2dwemhxenVkbWRlbWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MzE0NzAsImV4cCI6MjA3MzEwNzQ3MH0.AaGszDEBtDCrFhh7Be4gFxTeWimL0ZJKKEhnIP4j6uU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
