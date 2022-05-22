import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://vetbymkdqqpzhirmibar.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZldGJ5bWtkcXFwemhpcm1pYmFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MTM0NzU0OSwiZXhwIjoxOTY2OTIzNTQ5fQ.eWcgsCELh6dUjjq3fmr-f8qRxwvJW1BKeyObmYzqiF0"
);

export const supabaseClient = supabase;
