"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaGoogle } from "react-icons/fa6";
import { FiArrowRight, FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { API_BASE_URL, authApi } from "../../config/api";
import { colors } from "../../config/colors";
import { useAuth } from "../../contexts/AuthContext";
import { useToast } from "../../contexts/ToastContext";

type AuthMode = "sign-in" | "sign-up";

type AuthFieldName = "name" | "email" | "password" | "confirmPassword";
type AuthErrors = Partial<Record<AuthFieldName, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validateField = (field: AuthFieldName, value: string, mode: AuthMode) => {
  const trimmed = value.trim();

  switch (field) {
    case "name": {
      if (mode === "sign-in") return "";
      if (!trimmed) return "Full name is required.";
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
      if (trimmed.length > 100) return "Name must be under 100 characters.";
      return "";
    }
    case "email": {
      if (!trimmed) return "Email is required.";
      if (!emailPattern.test(trimmed)) return "Please enter a valid email address.";
      return "";
    }
    case "password": {
      if (!trimmed) return "Password is required.";
      if (trimmed.length < 8) return "Password must be at least 8 characters.";
      if (trimmed.length > 128) return "Password must be under 128 characters.";
      return "";
    }
    case "confirmPassword": {
      if (mode === "sign-in") return "";
      if (!trimmed) return "Please confirm your password.";
      if (trimmed.length < 8) return "Confirm password must be at least 8 characters.";
      return "";
    }
    default:
      return "";
  }
};

const validateForm = (data: typeof initialForm, mode: AuthMode): AuthErrors => {
  const nextErrors: AuthErrors = {};

  (Object.keys(initialForm) as AuthFieldName[]).forEach((field) => {
    const error = validateField(field, data[field], mode);
    if (error) {
      nextErrors[field] = error;
    }
  });

  if (mode === "sign-up") {
    if (data.password && data.confirmPassword && data.password !== data.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }
  }

  return nextErrors;
};

const getFieldClassName = (fieldName: AuthFieldName, errors: AuthErrors) => {
  const hasError = Boolean(errors[fieldName]);

  return [
    "w-full border bg-[#fbfdff] px-4 py-3.5 font-normal outline-none transition",
    hasError ? "border-red-400 focus:border-red-500" : "border-[#cfe0ee] focus:border-[#0b78b7]",
  ].join(" ");
};

export default function AuthPanel() {
  const router = useRouter();
  const { success, error } = useToast();
  const { login, getDashboardPath } = useAuth();
  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<AuthErrors>({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const isSignIn = mode === "sign-in";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const fieldName = name as AuthFieldName;

    setForm((current) => ({ ...current, [fieldName]: value }));

    const nextError = validateField(fieldName, value, mode);
    setErrors((current) => ({
      ...current,
      [fieldName]: nextError || undefined,
    }));

    if (fieldName === "password" && mode === "sign-up" && form.confirmPassword) {
      const confirmError =
        value !== form.confirmPassword ? "Passwords do not match." : "";
      setErrors((current) => ({
        ...current,
        confirmPassword: confirmError || undefined,
      }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(form, mode);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      error("Please fix the highlighted fields before continuing.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (mode === "sign-in") {
        const response = await authApi.signin({
          email: form.email.trim(),
          password: form.password,
        });

        const authPayload = response.data;
        if (authPayload) {
          login(authPayload);
        }

        success("Sign in successful", "Welcome back to OMYTECH.");
        router.push(getDashboardPath(authPayload?.user.role ?? "USER"));
        return;
      }

      const response = await authApi.signup({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
        confirmPassword: form.confirmPassword,
      });

      const authPayload = response.data;
      if (authPayload) {
        login(authPayload);
      }

      success("Account created", "Your profile is ready. Welcome aboard.");
      router.push(getDashboardPath(authPayload?.user.role ?? "USER"));
    } catch (submissionError) {
      const message =
        submissionError instanceof Error
          ? submissionError.message
          : "Your request could not be completed right now.";

      error("Unable to continue", message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.assign(`${API_BASE_URL}/auth/google`);
  };

  return (
    <main className="flex flex-1 items-center bg-[#f5f8fc] px-4 py-12 text-[#071a2d] sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden border border-[#dce5ef] bg-white shadow-[0_24px_65px_rgba(7,26,45,0.09)] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative overflow-hidden bg-[#071a2d] px-7 py-10 text-white sm:px-10 sm:py-12 lg:p-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 border border-[#3db9f1]/25" />
          <div className="absolute -bottom-24 -left-16 h-48 w-48 border border-[#3db9f1]/20" />
          <div className="relative">
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: colors.primaryLight }}
            >
              Welcome to OMYTECH
            </p>
            <h1
              className="mt-5 max-w-md text-4xl font-black leading-[1.08] sm:text-5xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Keep your digital journey moving.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
              Sign in to continue or create an account to keep your
              conversations and project details in one place.
            </p>

            <div className="mt-10 border-t border-white/15 pt-6">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <span className="flex h-9 w-9 items-center justify-center border border-white/15 bg-white/5">
                  <FiLock
                    className="h-4 w-4"
                    style={{ color: colors.primaryLight }}
                    aria-hidden="true"
                  />
                </span>
                <span>Simple, secure account access</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            <div className="flex border-b border-[#dce5ef]">
              <button
                type="button"
                onClick={() => setMode("sign-in")}
                className={`flex-1 border-b-2 px-3 pb-4 text-sm font-semibold transition-colors ${isSignIn ? "border-[#0b78b7] text-[#071a2d]" : "border-transparent text-[#6b7d90] hover:text-[#071a2d]"}`}
                aria-selected={isSignIn}
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={() => setMode("sign-up")}
                className={`flex-1 border-b-2 px-3 pb-4 text-sm font-semibold transition-colors ${!isSignIn ? "border-[#0b78b7] text-[#071a2d]" : "border-transparent text-[#6b7d90] hover:text-[#071a2d]"}`}
                aria-selected={!isSignIn}
              >
                Sign up
              </button>
            </div>

            <div className="pt-8">
              <p
                className="text-xs font-semibold uppercase"
                style={{ color: colors.primary }}
              >
                {isSignIn ? "Welcome back" : "Create your account"}
              </p>
              <h2
                className="mt-3 text-3xl font-black"
                style={{
                  fontFamily: "var(--font-glacial-indifference), sans-serif",
                }}
              >
                {isSignIn ? "Sign in to your account" : "Start with OMYTECH"}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#6b7d90]">
                {isSignIn
                  ? "Enter your details to continue."
                  : "Create an account to make future projects easier to manage."}
              </p>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="mt-7 inline-flex w-full items-center justify-center gap-3 border border-[#cfe0ee] bg-white px-4 py-3.5 text-sm font-semibold transition-colors hover:border-[#8cc8e5] hover:bg-[#fbfdff]"
              >
                <FaGoogle
                  className="h-4 w-4"
                  style={{ color: "#4285F4" }}
                  aria-hidden="true"
                />
                {isSignIn ? "Continue with Google" : "Sign up with Google"}
              </button>

              <div className="my-6 flex items-center gap-3 text-xs uppercase text-[#9aabba]">
                <span className="h-px flex-1 bg-[#e6eef5]" />
                <span>or continue with email</span>
                <span className="h-px flex-1 bg-[#e6eef5]" />
              </div>

              <form className="grid gap-5" onSubmit={handleSubmit}>
                {!isSignIn && (
                  <label className="grid gap-2 text-sm font-semibold">
                    Full name
                    <input
                      name="name"
                      type="text"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "auth-name-error" : undefined}
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                      className={getFieldClassName("name", errors)}
                    />
                    {errors.name ? (
                      <span id="auth-name-error" className="text-xs font-medium text-red-600">
                        {errors.name}
                      </span>
                    ) : null}
                  </label>
                )}

                <label className="grid gap-2 text-sm font-semibold">
                  Email address
                  <input
                    name="email"
                    type="email"
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "auth-email-error" : undefined}
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={getFieldClassName("email", errors)}
                  />
                  {errors.email ? (
                    <span id="auth-email-error" className="text-xs font-medium text-red-600">
                      {errors.email}
                    </span>
                  ) : null}
                </label>

                <label className="grid gap-2 text-sm font-semibold">
                  Password
                  <span className="relative block">
                    <input
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      required
                      minLength={8}
                      aria-invalid={Boolean(errors.password)}
                      aria-describedby={errors.password ? "auth-password-error" : undefined}
                      placeholder="At least 8 characters"
                      value={form.password}
                      onChange={handleChange}
                      className={`${getFieldClassName("password", errors)} pr-12`}
                    />
                    <button
                      type="button"
                      onClick={() => setPasswordVisible((visible) => !visible)}
                      aria-label={
                        passwordVisible ? "Hide password" : "Show password"
                      }
                      className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-[#6b7d90] transition hover:text-[#071a2d]"
                    >
                      {passwordVisible ? (
                        <FiEyeOff className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <FiEye className="h-4 w-4" aria-hidden="true" />
                      )}
                    </button>
                  </span>
                  {errors.password ? (
                    <span id="auth-password-error" className="text-xs font-medium text-red-600">
                      {errors.password}
                    </span>
                  ) : null}
                </label>

                {!isSignIn && (
                  <label className="grid gap-2 text-sm font-semibold">
                    Confirm password
                    <span className="relative block">
                      <input
                        name="confirmPassword"
                        type={confirmPasswordVisible ? "text" : "password"}
                        required
                        minLength={8}
                        aria-invalid={Boolean(errors.confirmPassword)}
                        aria-describedby={errors.confirmPassword ? "auth-confirm-password-error" : undefined}
                        placeholder="Repeat your password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        className={`${getFieldClassName("confirmPassword", errors)} pr-12`}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setConfirmPasswordVisible((visible) => !visible)
                        }
                        aria-label={
                          confirmPasswordVisible
                            ? "Hide confirmed password"
                            : "Show confirmed password"
                        }
                        className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-[#6b7d90] transition hover:text-[#071a2d]"
                      >
                        {confirmPasswordVisible ? (
                          <FiEyeOff className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <FiEye className="h-4 w-4" aria-hidden="true" />
                        )}
                      </button>
                    </span>
                    {errors.confirmPassword ? (
                      <span id="auth-confirm-password-error" className="text-xs font-medium text-red-600">
                        {errors.confirmPassword}
                      </span>
                    ) : null}
                  </label>
                )}

                {isSignIn && (
                  <div className="-mt-1 text-right">
                    <Link
                      href="/forgot-password"
                      className="text-sm font-semibold text-[#0b78b7] hover:text-[#071a2d]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (isSignIn ? "Signing in..." : "Creating account...") : isSignIn ? "Sign in" : "Create account"}
                  <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>

              <p className="mt-6 text-center text-xs leading-5 text-[#8a9aaa]">
                By continuing, you agree to our terms and privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
