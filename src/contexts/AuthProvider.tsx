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
    const [authUser, setAuthUser] = useState(null);
    const [isSignedIn, setIsSignedIn] = useState(false);

    const value = {
        authUser,
        setAuthUser,
        isSignedIn,
        setIsSignedIn,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
