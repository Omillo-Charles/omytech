import { useMemo, useState } from "react";
import { FiCheck, FiCreditCard, FiPlus } from "react-icons/fi";

type PaymentStatus = "Completed" | "Pending";

type PaymentRecord = {
    project: string;
    invoice: string;
    amount: string;
    date: string;
    method: string;
    status: PaymentStatus;
};

const initialPayments: PaymentRecord[] = [
    {
        project: "Website redesign",
        invoice: "INV-204 / Phase 1",
        amount: "KES 120,000",
        date: "Sep 18, 2026",
        method: "M-Pesa",
        status: "Completed",
    },
    {
        project: "Brand strategy sprint",
        invoice: "INV-205 / Brand sprint",
        amount: "KES 48,500",
        date: "Aug 29, 2026",
        method: "Bank transfer",
        status: "Completed",
    },
    {
        project: "Hosting & maintenance",
        invoice: "INV-206 / Maintenance",
        amount: "KES 16,200",
        date: "Aug 12, 2026",
        method: "M-Pesa",
        status: "Completed",
    },
];

const paymentOptions = {
    projects: [
        "Website redesign",
        "Brand strategy sprint",
        "Hosting & maintenance",
        "Mobile app MVP",
    ],
    invoices: [
        "INV-204 / Phase 1",
        "INV-205 / Phase 2",
        "INV-206 / Maintenance",
        "INV-207 / Discovery",
    ],
    methods: ["M-Pesa"],
};

const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
        maximumFractionDigits: 0,
    }).format(value);

export default function PaymentsPanel() {
    const [form, setForm] = useState({
        project: "Website redesign",
        invoice: "INV-204 / Phase 1",
        amount: "64000",
        method: "M-Pesa",
    });
    const [payments, setPayments] = useState<PaymentRecord[]>(initialPayments);
    const [notice, setNotice] = useState<string | null>(null);

    const outstandingBalance = useMemo(() => {
        const totalPaid = payments.reduce((sum, payment) => {
            const numericAmount = Number(payment.amount.replace(/[^\d]/g, ""));
            return sum + numericAmount;
        }, 0);

        return Math.max(0, 64000 - totalPaid);
    }, [payments]);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const amountValue = Number(form.amount);
        if (!form.project || !form.invoice || !form.method || !amountValue || amountValue < 1) {
            setNotice("Please complete all payment details before submitting.");
            return;
        }

        const newPayment: PaymentRecord = {
            project: form.project,
            invoice: form.invoice,
            amount: formatCurrency(amountValue),
            date: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
            method: form.method,
            status: "Completed",
        };

        setPayments((current) => [newPayment, ...current]);
        setForm({
            project: "Website redesign",
            invoice: "INV-204 / Phase 1",
            amount: "64000",
            method: "M-Pesa",
        });
        setNotice(`Demo payment recorded for ${form.project}. This is a front-end-only flow until the API is ready.`);
    };

    return (
        <div className="mt-8 grid gap-6">
            <section className="overflow-hidden border border-[#cfe0ee] bg-white p-4 shadow-[0_12px_35px_rgba(7,26,45,0.05)] sm:p-6 lg:p-8">
                <div className="flex flex-col gap-3 border-b border-[#e6eef5] pb-4 sm:flex-row sm:items-start sm:justify-between sm:pb-5">
                    <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase text-[#0b78b7]">
                            Pay now
                        </p>
                        <h2
                            className="mt-2 text-xl font-black sm:text-2xl"
                            style={{
                                fontFamily: "var(--font-glacial-indifference), sans-serif",
                            }}
                        >
                            Make a payment
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6b7d90]">
                            Select the project and invoice you want to settle, then complete the payment with your preferred method.
                        </p>
                    </div>
                    <div className="flex w-fit items-center gap-2 rounded-full bg-[#eef8f1] px-3 py-2 text-[11px] font-semibold text-[#26834b] sm:text-xs">
                        <FiCreditCard className="h-4 w-4" /> Balance due
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 grid gap-5 sm:mt-6">
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <label className="grid gap-2 text-sm font-semibold text-[#071a2d]">
                            Project
                            <select
                                name="project"
                                value={form.project}
                                onChange={handleInputChange}
                                className="w-full min-w-0 border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal text-[#071a2d] outline-none transition focus:border-[#0b78b7]"
                            >
                                <option value="" disabled>
                                    Select a project
                                </option>
                                {paymentOptions.projects.map((project) => (
                                    <option key={project} value={project}>
                                        {project}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="grid gap-2 text-sm font-semibold text-[#071a2d]">
                            Invoice
                            <select
                                name="invoice"
                                value={form.invoice}
                                onChange={handleInputChange}
                                className="w-full min-w-0 border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal text-[#071a2d] outline-none transition focus:border-[#0b78b7]"
                            >
                                <option value="" disabled>
                                    Select invoice
                                </option>
                                {paymentOptions.invoices.map((invoice) => (
                                    <option key={invoice} value={invoice}>
                                        {invoice}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="grid gap-2 text-sm font-semibold text-[#071a2d]">
                            Amount (KES)
                            <input
                                type="number"
                                name="amount"
                                min="1"
                                value={form.amount}
                                onChange={handleInputChange}
                                placeholder="5000"
                                className="w-full min-w-0 border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal text-[#071a2d] outline-none transition focus:border-[#0b78b7]"
                            />
                        </label>

                        <label className="grid gap-2 text-sm font-semibold text-[#071a2d]">
                            Payment method
                            <select
                                name="method"
                                value={form.method}
                                onChange={handleInputChange}
                                className="w-full min-w-0 border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal text-[#071a2d] outline-none transition focus:border-[#0b78b7]"
                            >
                                {paymentOptions.methods.map((method) => (
                                    <option key={method} value={method}>
                                        {method}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="flex w-full flex-col gap-3 border border-[#e6eef5] bg-[#f8fbfe] p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
                        <div className="min-w-0">
                            <p className="text-sm text-[#6b7d90]">Outstanding balance</p>
                            <p className="mt-1 text-2xl font-black text-[#071a2d] sm:text-3xl">
                                {formatCurrency(outstandingBalance)}
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center bg-[#071a2d] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#12385b]"
                        >
                            Make payment
                        </button>
                    </div>

                    {notice && (
                        <div className="border border-[#d9ecf7] bg-[#edf8ff] px-3 py-2 text-sm text-[#0b78b7]">
                            {notice}
                        </div>
                    )}
                </form>
            </section>

            <section className="overflow-hidden border border-[#dce5ef] bg-white p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col gap-3 border-b border-[#e6eef5] pb-4 sm:flex-row sm:items-start sm:justify-between sm:pb-5">
                    <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase text-[#0b78b7]">
                            Client ledger
                        </p>
                        <h2
                            className="mt-2 text-xl font-black sm:text-2xl"
                            style={{
                                fontFamily: "var(--font-glacial-indifference), sans-serif",
                            }}
                        >
                            Payments already made
                        </h2>
                    </div>
                    <FiCheck className="h-5 w-5 text-[#26834b]" />
                </div>

                <div className="mt-5 overflow-x-auto sm:mt-6">
                    <table className="w-full min-w-[620px] text-left text-sm">
                        <thead>
                            <tr className="border-b border-[#e6eef5] text-xs uppercase text-[#8a9aaa]">
                                <th className="pb-3 pr-4 font-semibold">Project</th>
                                <th className="pb-3 pr-4 font-semibold">Invoice</th>
                                <th className="pb-3 pr-4 font-semibold">Amount</th>
                                <th className="pb-3 pr-4 font-semibold">Method</th>
                                <th className="pb-3 pr-4 font-semibold">Date</th>
                                <th className="pb-3 font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment) => (
                                <tr key={`${payment.project}-${payment.invoice}-${payment.date}`} className="border-b border-[#f0f4f7] last:border-0">
                                    <td className="py-4 pr-4">
                                        <p className="font-semibold text-[#071a2d]">{payment.project}</p>
                                    </td>
                                    <td className="py-4 pr-4 text-[#536579]">{payment.invoice}</td>
                                    <td className="py-4 pr-4 font-bold text-[#071a2d]">{payment.amount}</td>
                                    <td className="py-4 pr-4 text-[#536579]">{payment.method}</td>
                                    <td className="py-4 pr-4 text-[#536579]">{payment.date}</td>
                                    <td className="py-4">
                                        <span
                                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${payment.status === "Completed" ? "bg-[#eef8f1] text-[#26834b]" : "bg-[#fff4d9] text-[#a86100]"}`}
                                        >
                                            {payment.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
