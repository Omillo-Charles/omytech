"use client";

import { useState } from "react";
import {
  FiCheck,
  FiChevronDown,
  FiClock,
  FiCreditCard,
  FiPlus,
  FiSend,
  FiSmartphone,
} from "react-icons/fi";

type PaymentStatus = "Completed" | "Pending" | "Failed";

type PaymentRecord = {
  id: string;
  client: string;
  project: string;
  amount: string;
  date: string;
  method: string;
  status: PaymentStatus;
};

const initialPayments: PaymentRecord[] = [
  {
    id: "PAY-005",
    client: "Castra Households",
    project: "E-commerce platform",
    amount: "KES 5,000",
    date: "Sep 21, 2026",
    method: "M-Pesa",
    status: "Completed",
  },
  {
    id: "PAY-004",
    client: "Mhengagee Media",
    project: "Media website",
    amount: "KES 24,000",
    date: "Sep 18, 2026",
    method: "M-Pesa",
    status: "Completed",
  },
  {
    id: "PAY-003",
    client: "NTCOGK",
    project: "Event registration",
    amount: "KES 18,000",
    date: "Sep 15, 2026",
    method: "Bank transfer",
    status: "Completed",
  },
  {
    id: "PAY-002",
    client: "Soltec Electric",
    project: "Business website",
    amount: "KES 12,000",
    date: "Sep 12, 2026",
    method: "M-Pesa",
    status: "Pending",
  },
];

export default function AdminPayments() {
  const [payments, setPayments] = useState(initialPayments);
  const [promptSent, setPromptSent] = useState(false);
  const [recorded, setRecorded] = useState(false);

  const sendPrompt = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPromptSent(true);
    window.setTimeout(() => setPromptSent(false), 3500);
  };

  const recordPayment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const client = String(formData.get("client") || "New client");
    const project = String(formData.get("project") || "Project payment");
    const amount = String(formData.get("amount") || "0");
    const method = String(formData.get("method") || "M-Pesa");

    setPayments((current) => [
      {
        id: `PAY-${String(current.length + 6).padStart(3, "0")}`,
        client,
        project,
        amount: `KES ${Number(amount).toLocaleString("en-KE")}`,
        date: "Sep 21, 2026",
        method,
        status: "Completed",
      },
      ...current,
    ]);
    event.currentTarget.reset();
    setRecorded(true);
    window.setTimeout(() => setRecorded(false), 3500);
  };

  return (
    <div className="mt-8 grid gap-6">
      <section className="border border-[#cfe0ee] bg-white p-6 shadow-[0_12px_35px_rgba(7,26,45,0.05)] sm:p-8">
        <div className="flex flex-col gap-3 border-b border-[#e6eef5] pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-[#0b78b7]">
              M-Pesa collections
            </p>
            <h2
              className="mt-2 text-2xl font-black"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Send a payment prompt
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6b7d90]">
              Enter a client&apos;s Safaricom number and send an STK prompt for
              them to approve with their M-Pesa PIN.
            </p>
          </div>
          <div className="flex w-fit items-center gap-2 bg-[#eef8f1] px-3 py-2 text-xs font-semibold text-[#26834b]">
            <FiSmartphone className="h-4 w-4" /> M-Pesa ready
          </div>
        </div>

        <form onSubmit={sendPrompt} className="mt-6 grid gap-5">
          <div className="grid gap-5 md:grid-cols-3">
            <label className="grid gap-2 text-sm font-semibold">
              Client
              <select
                name="client"
                defaultValue=""
                required
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              >
                <option value="" disabled>
                  Select a client
                </option>
                <option>Castra Households</option>
                <option>Mhengagee Media</option>
                <option>Soltec Electric</option>
                <option>NTCOGK</option>
                <option>Other client</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Project
              <select
                name="project"
                defaultValue=""
                required
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              >
                <option value="" disabled>
                  Select a project
                </option>
                <option>E-commerce platform</option>
                <option>Media website</option>
                <option>Business website</option>
                <option>Event registration</option>
                <option>Other project</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Amount (KES)
              <input
                name="amount"
                type="number"
                min="1"
                required
                placeholder="5000"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <label className="grid gap-2 text-sm font-semibold">
              Safaricom phone number
              <input
                name="phone"
                type="tel"
                required
                placeholder="07XX XXX XXX"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-fit items-center justify-center gap-2 bg-[#0b78b7] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#071a2d]"
            >
              <FiSend className="h-4 w-4" /> Send M-Pesa prompt
            </button>
          </div>
          {promptSent && (
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#26834b]">
              <FiCheck className="h-4 w-4" /> Payment prompt queued for the
              client&apos;s phone.
            </p>
          )}
          <p className="text-xs leading-5 text-[#8a9aaa]">
            The STK request will be connected to the Safaricom Daraja API when
            the server payment credentials are configured. Never collect or
            store a client&apos;s M-Pesa PIN.
          </p>
        </form>
      </section>

      <section className="border border-[#dce5ef] bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-3 border-b border-[#e6eef5] pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-[#0b78b7]">
              Manual entry
            </p>
            <h2
              className="mt-2 text-2xl font-black"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Record a payment
            </h2>
            <p className="mt-2 text-sm text-[#6b7d90]">
              Add an offline, bank, or already-completed payment to a
              client&apos;s history.
            </p>
          </div>
          <FiPlus className="hidden h-5 w-5 text-[#0b78b7] sm:block" />
        </div>
        <form onSubmit={recordPayment} className="mt-6 grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Client name
              <input
                name="client"
                required
                placeholder="Client or organisation"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Project
              <input
                name="project"
                required
                placeholder="Project name"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Amount (KES)
              <input
                name="amount"
                type="number"
                min="1"
                required
                placeholder="5000"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Payment method
              <select
                name="method"
                defaultValue="M-Pesa"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              >
                <option>M-Pesa</option>
                <option>Bank transfer</option>
                <option>Cash</option>
                <option>Card</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 bg-[#071a2d] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#12385b]"
          >
            <FiPlus className="h-4 w-4" /> Record payment
          </button>
          {recorded && (
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#26834b]">
              <FiCheck className="h-4 w-4" /> Payment added to history.
            </p>
          )}
        </form>
      </section>

      <PaymentHistory payments={payments} />
    </div>
  );
}

function PaymentHistory({ payments }: { payments: PaymentRecord[] }) {
  return (
    <section className="border border-[#dce5ef] bg-white p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase text-[#0b78b7]">
            Client ledger
          </p>
          <h2
            className="mt-2 text-2xl font-black"
            style={{
              fontFamily: "var(--font-glacial-indifference), sans-serif",
            }}
          >
            Payment history
          </h2>
        </div>
        <FiClock className="h-5 w-5 text-[#9aabba]" />
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-[#e6eef5] text-xs uppercase text-[#8a9aaa]">
              <th className="pb-3 pr-4 font-semibold">Reference</th>
              <th className="pb-3 pr-4 font-semibold">Client / project</th>
              <th className="pb-3 pr-4 font-semibold">Amount</th>
              <th className="pb-3 pr-4 font-semibold">Method</th>
              <th className="pb-3 pr-4 font-semibold">Date</th>
              <th className="pb-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b border-[#f0f4f7] last:border-0"
              >
                <td className="py-4 pr-4 font-semibold text-[#6b7d90]">
                  {payment.id}
                </td>
                <td className="py-4 pr-4">
                  <p className="font-semibold">{payment.client}</p>
                  <p className="mt-1 text-xs text-[#8a9aaa]">
                    {payment.project}
                  </p>
                </td>
                <td className="py-4 pr-4 font-bold">{payment.amount}</td>
                <td className="py-4 pr-4 text-[#536579]">{payment.method}</td>
                <td className="py-4 pr-4 text-[#536579]">{payment.date}</td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold ${payment.status === "Completed" ? "bg-[#eef8f1] text-[#26834b]" : payment.status === "Pending" ? "bg-[#fff8dc] text-[#9b7410]" : "bg-[#fff1f1] text-[#9b3d3d]"}`}
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
  );
}
