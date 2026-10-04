"use client";

import { useEffect, useState } from "react";
import { FiCalendar, FiCheckCircle, FiFileText } from "react-icons/fi";
import { quoteApi } from "../../config/api";
import { useAuth } from "../../contexts/AuthContext";

const statusColors: Record<string, string> = {
    PENDING: "bg-[#fff7e6] text-[#9a5a00]",
    REVIEWED: "bg-[#e8f6fc] text-[#0b78b7]",
    CONTACTED: "bg-[#eef8f1] text-[#26834b]",
    CLOSED: "bg-[#eef2f7] text-[#536579]",
};

type QuoteRecord = {
    id: string;
    service: string | null;
    company: string | null;
    budget: string | null;
    timeline: string | null;
    status: "PENDING" | "REVIEWED" | "CONTACTED" | "CLOSED";
    createdAt: string;
    message: string;
};

export default function QuotesPanel() {
    const { accessToken } = useAuth();
    const [quotes, setQuotes] = useState<QuoteRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuotes = async () => {
            if (!accessToken) {
                setLoading(false);
                setError("Sign in to view your quote requests.");
                return;
            }

            try {
                const response = await quoteApi.getMyQuotes(accessToken);
                const records = response.data?.quotes ?? [];
                setQuotes(records as QuoteRecord[]);
            } catch {
                setError("We could not load your quote requests right now.");
            } finally {
                setLoading(false);
            }
        };

        fetchQuotes();
    }, [accessToken]);

    return (
        <section className="mt-8 space-y-4">
            <div className="space-y-4">
                {loading ? (
                    <div className="border border-[#dce5ef] bg-white p-5 text-sm text-[#536579]">
                        Loading quote requests...
                    </div>
                ) : error ? (
                    <div className="border border-[#dce5ef] bg-white p-5 text-sm text-[#536579]">
                        {error}
                    </div>
                ) : quotes.length === 0 ? (
                    <div className="border border-[#dce5ef] bg-white p-5 text-sm text-[#536579]">
                        No quote requests yet.
                    </div>
                ) : (
                    quotes.map((quote) => (
                        <article
                            key={quote.id}
                            className="border border-[#dce5ef] bg-white p-5 shadow-[0_10px_25px_rgba(7,26,45,0.03)]"
                        >
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#0b78b7]">
                                        <FiFileText className="h-3.5 w-3.5" aria-hidden="true" />
                                        {quote.service ?? "General enquiry"}
                                    </div>
                                    <h3 className="mt-3 text-xl font-black text-[#071a2d]">
                                        {quote.company ?? "Client request"}
                                    </h3>
                                </div>

                                <span
                                    className={`inline-flex w-fit border border-[#dce5ef] px-2.5 py-1.5 text-[11px] font-semibold uppercase ${statusColors[quote.status] ?? "bg-[#f7fafc] text-[#536579]"}`}
                                >
                                    {quote.status}
                                </span>
                            </div>

                            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#536579]">
                                {quote.message}
                            </p>

                            <div className="mt-5 flex flex-col gap-3 border-t border-[#edf2f7] pt-4 text-sm text-[#536579] sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-2">
                                    <FiCalendar className="h-4 w-4 text-[#0b78b7]" aria-hidden="true" />
                                    Sent on {new Date(quote.createdAt).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </div>

                                <div className="flex items-center gap-2 text-[#071a2d]">
                                    <FiCheckCircle className="h-4 w-4 text-[#26834b]" aria-hidden="true" />
                                    {quote.budget ? `Budget: ${quote.budget}` : "Budget: not specified"}
                                </div>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </section>
    );
}
