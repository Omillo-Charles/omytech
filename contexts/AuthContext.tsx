"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { authApi, type AuthPayload, type AuthRole, type AuthUser } from "../config/api";

const STORAGE_KEYS = {
    accessToken: "omytech_access_token",
    refreshToken: "omytech_refresh_token",
    user: "omytech_user",
};

const dashboardRoutes: Record<AuthRole, string> = {
    USER: "/account/user",
    ADMIN: "/account/admin",
    SUPERADMIN: "/account/admin",
};

type AuthContextValue = {
    user: AuthUser | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (payload: AuthPayload) => void;
    logout: () => Promise<void>;
    refreshSession: () => Promise<void>;
    getDashboardPath: (role?: AuthRole | null) => string;
    canAccessDashboard: (role: AuthRole | null | undefined, path: string) => boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function readStoredUser(): AuthUser | null {
    if (typeof window === "undefined") {
        return null;
    }

    try {
        const value = window.localStorage.getItem(STORAGE_KEYS.user);
        return value ? (JSON.parse(value) as AuthUser) : null;
    } catch {
        return null;
    }
}

function writeStoredUser(user: AuthUser | null) {
    if (typeof window === "undefined") {
        return;
    }

    if (!user) {
        window.localStorage.removeItem(STORAGE_KEYS.user);
        return;
    }

    window.localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const persistSession = useCallback((payload?: AuthPayload | null) => {
        if (!payload) {
            setUser(null);
            setAccessToken(null);
            setRefreshToken(null);
            if (typeof window !== "undefined") {
                window.localStorage.removeItem(STORAGE_KEYS.accessToken);
                window.localStorage.removeItem(STORAGE_KEYS.refreshToken);
                window.localStorage.removeItem(STORAGE_KEYS.user);
            }
            return;
        }

        setUser(payload.user);
        setAccessToken(payload.accessToken);
        setRefreshToken(payload.refreshToken);

        if (typeof window !== "undefined") {
            window.localStorage.setItem(STORAGE_KEYS.accessToken, payload.accessToken);
            window.localStorage.setItem(STORAGE_KEYS.refreshToken, payload.refreshToken);
            writeStoredUser(payload.user);
        }
    }, []);

    const login = useCallback((payload: AuthPayload) => {
        persistSession(payload);
    }, [persistSession]);

    const getDashboardPath = useCallback((role?: AuthRole | null) => {
        const resolvedRole = role ?? user?.role ?? "USER";
        return dashboardRoutes[resolvedRole] ?? dashboardRoutes.USER;
    }, [user?.role]);

    const canAccessDashboard = useCallback((role: AuthRole | null | undefined, path: string) => {
        const resolvedRole = role ?? "USER";

        if (path === "/account/user") {
            return ["USER", "ADMIN", "SUPERADMIN"].includes(resolvedRole);
        }

        if (path === "/account/admin") {
            return ["ADMIN", "SUPERADMIN"].includes(resolvedRole);
        }

        if (path === "/account/superadmin") {
            return resolvedRole === "SUPERADMIN";
        }

        return false;
    }, []);

    const refreshSession = useCallback(async () => {
        if (typeof window === "undefined") {
            return;
        }

        const storedRefreshToken = window.localStorage.getItem(STORAGE_KEYS.refreshToken);
        if (!storedRefreshToken) {
            persistSession(null);
            return;
        }

        try {
            const response = await authApi.refreshToken(storedRefreshToken);
            if (response.data) {
                persistSession(response.data);
                return;
            }
        } catch {
            persistSession(null);
            return;
        }

        const storedAccessToken = window.localStorage.getItem(STORAGE_KEYS.accessToken);
        if (storedAccessToken) {
            try {
                const response = await authApi.getMe(storedAccessToken);
                if (response.data?.user) {
                    setUser(response.data.user);
                    writeStoredUser(response.data.user);
                    setAccessToken(storedAccessToken);
                }
            } catch {
                persistSession(null);
            }
        }
    }, [persistSession]);

    useEffect(() => {
        if (typeof window === "undefined") {
            setIsLoading(false);
            return;
        }

        const storedAccessToken = window.localStorage.getItem(STORAGE_KEYS.accessToken);
        const storedRefreshTokenValue = window.localStorage.getItem(STORAGE_KEYS.refreshToken);
        const storedUser = readStoredUser();

        if (storedUser) {
            setUser(storedUser);
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshTokenValue);
        }

        if (storedAccessToken && storedUser) {
            authApi.getMe(storedAccessToken)
                .then((response) => {
                    if (response.data?.user) {
                        const nextUser = response.data.user;
                        setUser(nextUser);
                        writeStoredUser(nextUser);
                    }
                })
                .catch(() => {
                    persistSession(null);
                })
                .finally(() => {
                    setIsLoading(false);
                });
            return;
        }

        if (storedRefreshTokenValue) {
            refreshSession().finally(() => setIsLoading(false));
            return;
        }

        setIsLoading(false);
    }, [persistSession, refreshSession]);

    const logout = useCallback(async () => {
        const currentToken = accessToken ?? (typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEYS.accessToken) : null);

        try {
            if (currentToken) {
                await authApi.logout(currentToken);
            }
        } catch {
            // Ignore backend logout failures and still clear local session.
        } finally {
            persistSession(null);
            setIsLoading(false);
        }
    }, [accessToken, persistSession]);

    const value = useMemo<AuthContextValue>(
        () => ({
            user,
            accessToken,
            refreshToken,
            isAuthenticated: Boolean(user && accessToken),
            isLoading,
            login,
            logout,
            refreshSession,
            getDashboardPath,
            canAccessDashboard,
        }),
        [accessToken, canAccessDashboard, getDashboardPath, isLoading, login, logout, refreshSession, refreshToken, user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside an AuthProvider");
    }

    return context;
}

export default AuthContext;
