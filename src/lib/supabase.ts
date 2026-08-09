import { type AuthResponse, createClient } from "@supabase/supabase-js";
import type { Page } from "../data/contexts/storyData";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

export const signInAnonymously = async (): Promise<AuthResponse> => {
    const data = await supabase.auth.signInAnonymously();
    return data;
};

export const generateStoryPage = async () => {
    const { data, error } = await supabase.functions.invoke(
        "generate-story-page",
    );

    return {
        content: data.content,
    } as Page;
};
