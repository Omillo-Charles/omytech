"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
    type ReactNode,
} from "react";
import { ToastViewport, type ToastItem, type ToastVariant } from "../components/floaters/Toast";

type ToastOptions = {
    title: string;
    description?: string;
    variant?: ToastVariant;
    duration?: number;
};

type ToastContextValue = {
    showToast: (options: ToastOptions) => number;
    dismissToast: (id: number) => void;
    success: (title: string, description?: string) => number;
    error: (title: string, description?: string) => number;
    info: (title: string, description?: string) => number;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<ToastItem[]>([]);
    const timeoutRefs = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

    const dismissToast = useCallback((id: number) => {
        setToasts((current) => current.filter((toast) => toast.id !== id));

        const timer = timeoutRefs.current.get(id);
        if (timer) {
            clearTimeout(timer);
            timeoutRefs.current.delete(id);
        }
    }, []);

    const showToast = useCallback(
        ({ title, description, variant = "info", duration = 4000 }: ToastOptions) => {
            const nextId = Date.now() + Math.random();
            const toast: ToastItem = {
                id: nextId,
                type: variant,
                title,
                description,
                duration,
            };

            setToasts((current) => [...current, toast]);

            const timer = setTimeout(() => {
                dismissToast(nextId);
            }, duration);

            timeoutRefs.current.set(nextId, timer);

            return nextId;
        },
        [dismissToast]
    );

    const success = useCallback(
        (title: string, description?: string) => {
            return showToast({ title, description, variant: "success" });
        },
        [showToast]
    );

    const error = useCallback(
        (title: string, description?: string) => {
            return showToast({ title, description, variant: "error" });
        },
        [showToast]
    );

    const info = useCallback(
        (title: string, description?: string) => {
            return showToast({ title, description, variant: "info" });
        },
        [showToast]
    );

    const value = useMemo<ToastContextValue>(
        () => ({ showToast, dismissToast, success, error, info }),
        [dismissToast, error, info, showToast, success]
    );

    return (
        <ToastContext.Provider value={value}>
            {children}
            <ToastViewport toasts={toasts} onDismiss={dismissToast} />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error("useToast must be used inside a ToastProvider");
    }

    return context;
}

export default ToastContext;
