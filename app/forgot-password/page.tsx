import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";
import { colors } from "../../config/colors";

export const metadata: Metadata = {
    title: "Forgot Password | OMYTECH Kenya",
    description: "Request a password reset for your OMYTECH Kenya account.",
};

export default function ForgotPasswordPage() {
    return (
        <main className="flex flex-1 items-center justify-center bg-[#f5f8fc] px-4 py-12 text-[#071a2d] sm:px-6 lg:px-8">
            <div className="w-full max-w-xl border border-[#dce5ef] bg-white p-6 shadow-[0_20px_55px_rgba(7,26,45,0.08)] sm:p-8 lg:p-10">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <Link
                        href="/auth"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b78b7] transition hover:text-[#071a2d]"
                    >
                        <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
                        Back to sign in
                    </Link>
                </div>

                <div className="mb-8">
                    <p
                        className="text-xs font-semibold uppercase"
                        style={{ color: colors.primary }}
                    >
                        Account help
                    </p>
                    <h1
                        className="mt-3 text-3xl font-black sm:text-4xl"
                        style={{
                            fontFamily: "var(--font-glacial-indifference), sans-serif",
                        }}
                    >
                        Forgot your password?
                    </h1>
                    <p className="mt-3 text-sm leading-6 text-[#6b7d90] sm:text-base">
                        Enter the email address linked to your account and we will send you
                        the next steps to reset it.
                    </p>
                </div>

                <ForgotPasswordForm />
            </div>
        </main>
    );
}
