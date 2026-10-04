"use client";

import { Suspense, useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { authApi } from "../../config/api";
import { useToast } from "../../contexts/ToastContext";

const getPasswordError = (value: string) => {
    if (!value) return "Password is required.";
    if (value.length < 8) return "Password must be at least 8 characters.";
    if (value.length > 128) return "Password must be under 128 characters.";
    return "";
};

function ResetPasswordFormContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { error, success } = useToast();
    const [form, setForm] = useState({ password: "", confirmPassword: "" });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const nextForm = { ...form, [name]: value };
        setForm(nextForm);

        if (name === "password") {
            const nextError = getPasswordError(value);
            setPasswordError(nextError);
            if (nextForm.confirmPassword && value !== nextForm.confirmPassword) {
                setConfirmPasswordError("Passwords do not match.");
            } else if (nextForm.confirmPassword) {
                setConfirmPasswordError("");
            }
        }

        if (name === "confirmPassword") {
            if (!value) {
                setConfirmPasswordError("Please confirm your password.");
                return;
            }
            if (value.length < 8) {
                setConfirmPasswordError("Confirm password must be at least 8 characters.");
                return;
            }
            setConfirmPasswordError(value === nextForm.password ? "" : "Passwords do not match.");
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const token = searchParams.get("token");
        const passwordValidationError = getPasswordError(form.password);
        const confirmValidationError = !form.confirmPassword
            ? "Please confirm your password."
            : form.password !== form.confirmPassword
                ? "Passwords do not match."
                : "";

        setPasswordError(passwordValidationError);
        setConfirmPasswordError(confirmValidationError);

        if (passwordValidationError || confirmValidationError) {
            error("Please fix the password fields before continuing.");
            return;
        }

        if (!token) {
            error("Reset token is missing", "Use the link sent to your email to continue.");
            return;
        }

        setIsSubmitting(true);

        try {
            await authApi.resetPassword(token, {
                password: form.password,
                confirmPassword: form.confirmPassword,
            });

            success("Password updated", "Your new password is ready to use.");
            router.push("/auth");
        } catch (submissionError) {
            const message =
                submissionError instanceof Error
                    ? submissionError.message
                    : "Your password could not be reset right now.";

            error("Unable to reset password", message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="grid gap-6" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm font-semibold">
                New password
                <span className="relative block">
                    <FiLock
                        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7d90]"
                        aria-hidden="true"
                    />
                    <input
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        aria-invalid={Boolean(passwordError)}
                        aria-describedby={passwordError ? "reset-password-error" : undefined}
                        placeholder="At least 8 characters"
                        className={`w-full border bg-[#fbfdff] py-3.5 pl-11 pr-12 font-normal outline-none transition ${passwordError ? "border-red-400 focus:border-red-500" : "border-[#cfe0ee] focus:border-[#0b78b7]"
                            }`}
                    />
                    <button
                        type="button"
                        onClick={() => setPasswordVisible((visible) => !visible)}
                        className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-[#6b7d90] transition hover:text-[#071a2d]"
                        aria-label={passwordVisible ? "Hide password" : "Show password"}
                    >
                        {passwordVisible ? (
                            <FiEyeOff className="h-4 w-4" aria-hidden="true" />
                        ) : (
                            <FiEye className="h-4 w-4" aria-hidden="true" />
                        )}
                    </button>
                </span>
                {passwordError ? (
                    <span id="reset-password-error" className="text-xs font-medium text-red-600">
                        {passwordError}
                    </span>
                ) : null}
            </label>

            <label className="grid gap-2 text-sm font-semibold">
                Confirm new password
                <span className="relative block">
                    <FiLock
                        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7d90]"
                        aria-hidden="true"
                    />
                    <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        aria-invalid={Boolean(confirmPasswordError)}
                        aria-describedby={confirmPasswordError ? "reset-confirm-password-error" : undefined}
                        placeholder="Repeat your new password"
                        className={`w-full border bg-[#fbfdff] py-3.5 pl-11 pr-12 font-normal outline-none transition ${confirmPasswordError
                                ? "border-red-400 focus:border-red-500"
                                : "border-[#cfe0ee] focus:border-[#0b78b7]"
                            }`}
                    />
                    <button
                        type="button"
                        onClick={() => setConfirmPasswordVisible((visible) => !visible)}
                        className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-[#6b7d90] transition hover:text-[#071a2d]"
                        aria-label={confirmPasswordVisible ? "Hide confirmed password" : "Show confirmed password"}
                    >
                        {confirmPasswordVisible ? (
                            <FiEyeOff className="h-4 w-4" aria-hidden="true" />
                        ) : (
                            <FiEye className="h-4 w-4" aria-hidden="true" />
                        )}
                    </button>
                </span>
                {confirmPasswordError ? (
                    <span id="reset-confirm-password-error" className="text-xs font-medium text-red-600">
                        {confirmPasswordError}
                    </span>
                ) : null}
            </label>

            <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b] disabled:cursor-not-allowed disabled:opacity-70"
            >
                {isSubmitting ? "Updating password..." : "Update password"}
            </button>
        </form>
    );
}

export default function ResetPasswordForm() {
    return (
        <Suspense
            fallback={
                <div className="grid gap-6">
                    <div className="h-14 animate-pulse rounded-md bg-[#edf3f8]" />
                    <div className="h-14 animate-pulse rounded-md bg-[#edf3f8]" />
                    <div className="h-12 animate-pulse rounded-md bg-[#edf3f8]" />
                </div>
            }
        >
            <ResetPasswordFormContent />
        </Suspense>
    );
}
