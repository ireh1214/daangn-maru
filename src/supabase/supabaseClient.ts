import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://cpeizpckhxkbfowgkplg.supabase.co";
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_KEY!;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
