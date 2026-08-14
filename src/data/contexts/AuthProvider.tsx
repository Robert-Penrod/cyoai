import type { User } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null as any);

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [authUser, setAuthUser] = useState<User>();
    const isSignedIn = true; // authUser != null;

    const value = {
        authUser,
        setAuthUser,
        isSignedIn,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
