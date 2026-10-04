"use client";

import { FiX } from "react-icons/fi";

type ActionModalProps = {
    open: boolean;
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "default" | "danger";
    inputLabel?: string;
    inputPlaceholder?: string;
    inputType?: string;
    defaultValue?: string;
    value: string;
    onChange: (value: string) => void;
    onClose: () => void;
    onConfirm: () => void | Promise<void>;
};

export default function ActionModal({
    open,
    title,
    description,
    confirmText = "Continue",
    cancelText = "Cancel",
    variant = "default",
    inputLabel,
    inputPlaceholder,
    inputType = "text",
    value,
    onChange,
    onClose,
    onConfirm,
}: ActionModalProps) {
    if (!open) {
        return null;
    }

    const confirmButtonClasses =
        variant === "danger"
            ? "bg-[#b42318] text-white hover:bg-[#7a1b14]"
            : "bg-[#071a2d] text-white hover:bg-[#12385b]";

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071a2d]/55 px-4">
            <div className="w-full max-w-lg border border-[#dce5ef] bg-white p-5 shadow-[0_25px_80px_rgba(7,26,45,0.18)]">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-black text-[#071a2d]">{title}</h3>
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

                {inputLabel || inputPlaceholder ? (
                    <label className="mt-5 grid gap-2 text-sm font-semibold text-[#071a2d]">
                        {inputLabel}
                        <input
                            type={inputType}
                            value={value}
                            onChange={(event) => onChange(event.target.value)}
                            placeholder={inputPlaceholder}
                            className="w-full border border-[#cfe0ee] bg-[#fbfdff] px-3 py-3 text-[#071a2d] outline-none transition focus:border-[#0b78b7]"
                        />
                    </label>
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
