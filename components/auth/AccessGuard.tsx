"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { AuthRole } from "../../config/api";
import { useAuth } from "../../contexts/AuthContext";

const allowedRoutes: Record<string, AuthRole[]> = {
    "/account/user": ["USER", "ADMIN", "SUPERADMIN"],
    "/account/admin": ["ADMIN", "SUPERADMIN"],
    "/account/superadmin": ["SUPERADMIN"],
};

export default function AccessGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const { user, isAuthenticated, isLoading } = useAuth();

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (!isAuthenticated || !user) {
            router.replace("/auth");
            return;
        }

        const allowedRoles = allowedRoutes[pathname];
        if (!allowedRoles) {
            return;
        }

        if (!allowedRoles.includes(user.role)) {
            const fallback = user.role === "USER" ? "/account/user" : "/account/admin";
            router.replace(fallback);
        }
    }, [isAuthenticated, isLoading, pathname, router, user]);

    if (isLoading) {
        return (
            <div className="flex min-h-[40vh] items-center justify-center bg-[#f5f8fc] px-4 py-12 text-[#071a2d]">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0b78b7]">
                    Loading dashboard...
                </div>
            </div>
        );
    }

    if (!isAuthenticated || !user) {
        return null;
    }

    const allowedRoles = allowedRoutes[pathname];
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return null;
    }

    return <>{children}</>;
}
