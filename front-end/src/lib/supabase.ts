import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

export const signInAnonymously = async () => {
    const data = await supabase.auth.signInAnonymously();
    return data;
};
