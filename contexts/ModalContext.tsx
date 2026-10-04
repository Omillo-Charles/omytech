"use client";

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import ActionModal from "../components/modals/Action";
import ConfirmationModal from "../components/modals/Confirmation";

type ModalVariant = "default" | "danger";

type BaseModalOptions = {
    title: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: ModalVariant;
    onConfirm?: (value?: string) => void | Promise<void>;
};

type ConfirmationModalOptions = BaseModalOptions;

type ActionModalOptions = BaseModalOptions & {
    inputLabel?: string;
    inputPlaceholder?: string;
    inputType?: string;
    defaultValue?: string;
};

type ModalState =
    | ({ type: "confirmation" } & ConfirmationModalOptions)
    | ({ type: "action" } & ActionModalOptions);

type ModalContextValue = {
    showConfirmation: (options: ConfirmationModalOptions) => void;
    showAction: (options: ActionModalOptions) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

const defaultState: ModalState | null = null;

export function ModalProvider({ children }: { children: ReactNode }) {
    const [modal, setModal] = useState<ModalState | null>(defaultState);
    const [inputValue, setInputValue] = useState("");

    const closeModal = useCallback(() => {
        setModal(null);
        setInputValue("");
    }, []);

    const showConfirmation = useCallback((options: ConfirmationModalOptions) => {
        setInputValue("");
        setModal({
            type: "confirmation",
            title: options.title,
            description: options.description,
            confirmText: options.confirmText ?? "Confirm",
            cancelText: options.cancelText ?? "Cancel",
            variant: options.variant ?? "default",
            onConfirm: options.onConfirm,
        });
    }, []);

    const showAction = useCallback((options: ActionModalOptions) => {
        setInputValue(options.defaultValue ?? "");
        setModal({
            type: "action",
            title: options.title,
            description: options.description,
            confirmText: options.confirmText ?? "Continue",
            cancelText: options.cancelText ?? "Cancel",
            variant: options.variant ?? "default",
            inputLabel: options.inputLabel,
            inputPlaceholder: options.inputPlaceholder,
            inputType: options.inputType ?? "text",
            defaultValue: options.defaultValue,
            onConfirm: options.onConfirm,
        });
    }, []);

    const handleConfirm = useCallback(async () => {
        if (!modal) {
            return;
        }

        if (modal.onConfirm) {
            await modal.onConfirm(modal.type === "action" ? inputValue : undefined);
        }

        closeModal();
    }, [closeModal, inputValue, modal]);

    const value = useMemo<ModalContextValue>(
        () => ({
            showConfirmation,
            showAction,
            closeModal,
        }),
        [closeModal, showAction, showConfirmation],
    );

    return (
        <ModalContext.Provider value={value}>
            {children}
            {modal?.type === "confirmation" ? (
                <ConfirmationModal
                    open={Boolean(modal)}
                    title={modal.title}
                    description={modal.description}
                    confirmText={modal.confirmText ?? "Confirm"}
                    cancelText={modal.cancelText ?? "Cancel"}
                    variant={modal.variant ?? "default"}
                    onClose={closeModal}
                    onConfirm={handleConfirm}
                />
            ) : null}

            {modal?.type === "action" ? (
                <ActionModal
                    open={Boolean(modal)}
                    title={modal.title}
                    description={modal.description}
                    confirmText={modal.confirmText ?? "Continue"}
                    cancelText={modal.cancelText ?? "Cancel"}
                    variant={modal.variant ?? "default"}
                    inputLabel={modal.inputLabel}
                    inputPlaceholder={modal.inputPlaceholder}
                    inputType={modal.inputType ?? "text"}
                    defaultValue={modal.defaultValue ?? ""}
                    value={inputValue}
                    onChange={setInputValue}
                    onClose={closeModal}
                    onConfirm={handleConfirm}
                />
            ) : null}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal must be used inside a ModalProvider");
    }

    return context;
}

export default ModalContext;
