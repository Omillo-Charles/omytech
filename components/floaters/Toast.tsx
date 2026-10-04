"use client";

import { FiAlertCircle, FiCheckCircle, FiX } from "react-icons/fi";

export type ToastVariant = "success" | "error" | "info";

export type ToastItem = {
    id: number;
    type: ToastVariant;
    title: string;
    description?: string;
    duration?: number;
};

function getVariantClasses(type: ToastVariant) {
    switch (type) {
        case "success":
            return {
                container: "border-[#d4f5e4] bg-[#ecfff3] text-[#0d5a35]",
                icon: "bg-[#d4f5e4] text-[#0d5a35]",
            };
        case "error":
            return {
                container: "border-[#f8d7da] bg-[#fff1f2] text-[#7a1d1d]",
                icon: "bg-[#f8d7da] text-[#7a1d1d]",
            };
        default:
            return {
                container: "border-[#d7ebff] bg-[#edf7ff] text-[#0c4f82]",
                icon: "bg-[#d7ebff] text-[#0c4f82]",
            };
    }
}

export function Toast({
    toast,
    onDismiss,
}: {
    toast: ToastItem;
    onDismiss: (id: number) => void;
}) {
    const variantClasses = getVariantClasses(toast.type);

    const Icon =
        toast.type === "success"
            ? FiCheckCircle
            : toast.type === "error"
                ? FiAlertCircle
                : FiCheckCircle;

    return (
        <div
            className={`pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border p-4 shadow-[0_18px_45px_rgba(7,26,45,0.12)] backdrop-blur-sm ${variantClasses.container}`}
            role="status"
            aria-live="polite"
        >
            <span
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${variantClasses.icon}`}
            >
                <Icon className="h-4 w-4" aria-hidden="true" />
            </span>

            <div className="min-w-0 flex-1">
                <p className="text-sm font-bold leading-5">{toast.title}</p>
                {toast.description ? (
                    <p className="mt-1 text-xs leading-5 opacity-80">{toast.description}</p>
                ) : null}
            </div>

            <button
                type="button"
                onClick={() => onDismiss(toast.id)}
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-current transition hover:opacity-75"
                aria-label="Dismiss notification"
            >
                <FiX className="h-4 w-4" aria-hidden="true" />
            </button>
        </div>
    );
}

export function ToastViewport({
    toasts,
    onDismiss,
}: {
    toasts: ToastItem[];
    onDismiss: (id: number) => void;
}) {
    if (!toasts.length) return null;

    return (
        <div className="pointer-events-none fixed right-4 top-4 z-[9999] flex max-w-sm flex-col gap-3 sm:right-6 sm:top-6">
            {toasts.map((toast) => (
                <Toast key={toast.id} toast={toast} onDismiss={onDismiss} />
            ))}
        </div>
    );
}

export default Toast;
