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

export const generateStoryPage = async (): Promise<Page> => {
    const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_EDGE_FUNCTIONS_URL}/generate-story-page`,
        {
            headers: {
                "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            },
        },
    );

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
};
