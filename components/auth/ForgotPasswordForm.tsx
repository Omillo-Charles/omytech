"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { FiMail } from "react-icons/fi";
import { authApi } from "../../config/api";
import { useToast } from "../../contexts/ToastContext";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForgotPasswordForm() {
    const { error, success } = useToast();
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const nextValue = event.target.value;
        setEmail(nextValue);

        if (!nextValue.trim()) {
            setErrorMessage("Email is required.");
            return;
        }

        if (!emailPattern.test(nextValue.trim())) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        setErrorMessage("");
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            setErrorMessage("Email is required.");
            error("Please enter your email address.");
            return;
        }

        if (!emailPattern.test(trimmedEmail)) {
            setErrorMessage("Please enter a valid email address.");
            error("Please enter a valid email address.");
            return;
        }

        try {
            await authApi.requestPasswordReset(trimmedEmail);
            success("Reset link sent", "If an account exists, we have sent the next steps to your email.");
            setEmail("");
            setErrorMessage("");
        } catch (submissionError) {
            const message =
                submissionError instanceof Error
                    ? submissionError.message
                    : "Your reset request could not be processed right now.";

            error("Unable to send reset link", message);
        }
    };

    return (
        <form className="grid gap-6" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm font-semibold">
                Email address
                <div className="relative">
                    <FiMail
                        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7d90]"
                        aria-hidden="true"
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errorMessage)}
                        aria-describedby={errorMessage ? "forgot-email-error" : undefined}
                        placeholder="you@example.com"
                        className={`w-full border bg-[#fbfdff] py-3.5 pl-11 pr-4 font-normal outline-none transition ${errorMessage
                                ? "border-red-400 focus:border-red-500"
                                : "border-[#cfe0ee] focus:border-[#0b78b7]"
                            }`}
                    />
                </div>
                {errorMessage ? (
                    <span id="forgot-email-error" className="text-xs font-medium text-red-600">
                        {errorMessage}
                    </span>
                ) : null}
            </label>

            <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b]"
            >
                Send reset link
            </button>
        </form>
    );
}
