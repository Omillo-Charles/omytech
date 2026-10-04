"use client";

import { FiAlertTriangle, FiX } from "react-icons/fi";

type ConfirmationModalProps = {
    open: boolean;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "default" | "danger";
    onClose: () => void;
    onConfirm: () => void | Promise<void>;
};

export default function ConfirmationModal({
    open,
    title,
    description,
    confirmText = "Confirm",
    cancelText = "Cancel",
    variant = "default",
    onClose,
    onConfirm,
}: ConfirmationModalProps) {
    if (!open) {
        return null;
    }

    const confirmButtonClasses =
        variant === "danger"
            ? "bg-[#b42318] text-white hover:bg-[#7a1b14]"
            : "bg-[#071a2d] text-white hover:bg-[#12385b]";

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071a2d]/55 px-4">
            <div className="w-full max-w-md border border-[#dce5ef] bg-white p-5 shadow-[0_25px_80px_rgba(7,26,45,0.18)]">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div
                            className={`flex h-10 w-10 items-center justify-center ${variant === "danger" ? "bg-[#fef3f2] text-[#b42318]" : "bg-[#e8f6fc] text-[#0b78b7]"
                                }`}
                        >
                            <FiAlertTriangle className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-[#071a2d]">{title}</h3>
                        </div>
                    </div>

                    <button
                        type="button"
                        aria-label="Close modal"
                        onClick={onClose}
                        className="p-1 text-[#536579] hover:text-[#071a2d]"
                    >
                        <FiX className="h-4 w-4" aria-hidden="true" />
                    </button>
                </div>

                {description ? (
                    <p className="mt-4 text-sm leading-6 text-[#536579]">{description}</p>
                ) : null}

                <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="border border-[#dce5ef] bg-white px-4 py-2.5 text-sm font-semibold text-[#071a2d] hover:border-[#cfe0ee]"
                    >
                        {cancelText}
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        className={`px-4 py-2.5 text-sm font-semibold ${confirmButtonClasses}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}
