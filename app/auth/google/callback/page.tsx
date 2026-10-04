"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../../../contexts/AuthContext";

function GoogleCallbackContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { login, getDashboardPath } = useAuth();
    const [message, setMessage] = useState("Completing Google sign-in...");

    useEffect(() => {
        const accessToken = searchParams.get("accessToken");
        const refreshToken = searchParams.get("refreshToken");
        const userParam = searchParams.get("user");

        if (!accessToken || !refreshToken || !userParam) {
            setMessage("Google sign-in could not be completed. Please try again.");
            router.replace("/auth");
            return;
        }

        try {
            const user = JSON.parse(userParam);
            login({ user, accessToken, refreshToken });
            router.replace(getDashboardPath(user.role));
        } catch {
            setMessage("The Google sign-in response could not be processed. Please try again.");
            router.replace("/auth");
        }
    }, [getDashboardPath, login, router, searchParams]);

    return (
        <main className="flex min-h-[60vh] items-center justify-center bg-[#f5f8fc] px-4 py-12 text-[#071a2d]">
            <div className="rounded-2xl border border-[#dce5ef] bg-white px-8 py-10 text-center shadow-[0_20px_50px_rgba(7,26,45,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b78b7]">Please wait</p>
                <h1 className="mt-4 text-2xl font-black">Signing you in</h1>
                <p className="mt-3 text-sm text-[#6b7d90]">{message}</p>
            </div>
        </main>
    );
}

export default function GoogleCallbackPage() {
    return (
        <Suspense
            fallback={
                <main className="flex min-h-[60vh] items-center justify-center bg-[#f5f8fc] px-4 py-12 text-[#071a2d]">
                    <div className="rounded-2xl border border-[#dce5ef] bg-white px-8 py-10 text-center shadow-[0_20px_50px_rgba(7,26,45,0.08)]">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b78b7]">Please wait</p>
                        <h1 className="mt-4 text-2xl font-black">Loading sign-in</h1>
                    </div>
                </main>
            }
        >
            <GoogleCallbackContent />
        </Suspense>
    );
}
