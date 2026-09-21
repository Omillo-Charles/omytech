"use client";

import { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { FiArrowRight, FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { colors } from "../../config/colors";

type AuthMode = "sign-in" | "sign-up";

export default function AuthPanel() {
  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const isSignIn = mode === "sign-in";

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

              <form className="grid gap-5">
                {!isSignIn && (
                  <label className="grid gap-2 text-sm font-semibold">
                    Full name
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none transition focus:border-[#0b78b7]"
                    />
                  </label>
                )}

                <label className="grid gap-2 text-sm font-semibold">
                  Email address
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none transition focus:border-[#0b78b7]"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold">
                  Password
                  <span className="relative block">
                    <input
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      required
                      minLength={8}
                      placeholder="At least 8 characters"
                      className="w-full border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 pr-12 font-normal outline-none transition focus:border-[#0b78b7]"
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
                        placeholder="Repeat your password"
                        className="w-full border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 pr-12 font-normal outline-none transition focus:border-[#0b78b7]"
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
                  </label>
                )}

                {isSignIn && (
                  <div className="-mt-1 text-right">
                    <a
                      href="mailto:info@omytechkenya.co.ke?subject=Password%20reset"
                      className="text-sm font-semibold text-[#0b78b7] hover:text-[#071a2d]"
                    >
                      Forgot password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b]"
                >
                  {isSignIn ? "Sign in" : "Create account"}
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
