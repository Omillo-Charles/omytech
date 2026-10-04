"use client";

import { useEffect, useState } from "react";
import { FiCalendar, FiMail, FiMessageSquare } from "react-icons/fi";
import { contactApi } from "../../config/api";
import { useAuth } from "../../contexts/AuthContext";

const statusColors: Record<string, string> = {
    RECEIVED: "bg-[#e8f6fc] text-[#0b78b7]",
    REVIEWING: "bg-[#fff7e6] text-[#9a5a00]",
    RESPONDED: "bg-[#eef8f1] text-[#26834b]",
};

type ContactRecord = {
    id: string;
    name: string;
    email: string;
    service: string | null;
    message: string;
    createdAt: string;
    status?: string;
};

export default function ContactsPanel() {
    const { accessToken } = useAuth();
    const [contacts, setContacts] = useState<ContactRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContacts = async () => {
            if (!accessToken) {
                setLoading(false);
                setError("Sign in to view your messages.");
                return;
            }

            try {
                const response = await contactApi.getMyContacts(accessToken);
                const records = response.data?.contacts ?? [];
                setContacts(records as ContactRecord[]);
            } catch {
                setError("We could not load your contacts right now.");
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, [accessToken]);

    return (
        <section className="mt-8 space-y-4">
            <div className="space-y-4">
                {loading ? (
                    <div className="border border-[#dce5ef] bg-white p-5 text-sm text-[#536579]">
                        Loading messages...
                    </div>
                ) : error ? (
                    <div className="border border-[#dce5ef] bg-white p-5 text-sm text-[#536579]">
                        {error}
                    </div>
                ) : contacts.length === 0 ? (
                    <div className="border border-[#dce5ef] bg-white p-5 text-sm text-[#536579]">
                        No messages yet.
                    </div>
                ) : (
                    contacts.map((message) => (
                        <article
                            key={message.id}
                            className="border border-[#dce5ef] bg-white p-5 shadow-[0_10px_25px_rgba(7,26,45,0.03)]"
                        >
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#0b78b7]">
                                        <FiMail className="h-3.5 w-3.5" aria-hidden="true" />
                                        {message.service ?? "General enquiry"}
                                    </div>
                                    <h3 className="mt-3 text-xl font-black text-[#071a2d]">
                                        {message.name}
                                    </h3>
                                </div>

                                <span
                                    className={`inline-flex w-fit border border-[#dce5ef] bg-[#f7fafc] px-2.5 py-1.5 text-[11px] font-semibold uppercase text-[#536579] ${statusColors[message.status ?? "RECEIVED"] ?? "bg-[#f7fafc] text-[#536579]"}`}
                                >
                                    {message.status ?? "Received"}
                                </span>
                            </div>

                            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#536579]">{message.message}</p>

                            <div className="mt-5 flex flex-col gap-3 border-t border-[#edf2f7] pt-4 text-sm text-[#536579] sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-2">
                                    <FiCalendar className="h-4 w-4 text-[#0b78b7]" aria-hidden="true" />
                                    Sent on {new Date(message.createdAt).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </div>

                                <button
                                    type="button"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#071a2d] transition hover:text-[#0b78b7]"
                                >
                                    <FiMessageSquare className="h-4 w-4" aria-hidden="true" />
                                    View message
                                </button>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </section>
    );
}
