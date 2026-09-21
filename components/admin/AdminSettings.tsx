"use client";

import { useState } from "react";
import { FiCheck, FiLock, FiSave, FiShield } from "react-icons/fi";

export default function AdminSettings() {
  const [saved, setSaved] = useState(false);
  const [quoteAlerts, setQuoteAlerts] = useState(true);
  const [paymentAlerts, setPaymentAlerts] = useState(true);
  const [projectAlerts, setProjectAlerts] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="mt-8 grid max-w-5xl gap-6">
      <section className="border border-[#dce5ef] bg-white p-6 sm:p-8">
        <div className="border-b border-[#e6eef5] pb-5">
          <p className="text-xs font-semibold uppercase text-[#0b78b7]">
            Workspace configuration
          </p>
          <h2
            className="mt-2 text-2xl font-black"
            style={{
              fontFamily: "var(--font-glacial-indifference), sans-serif",
            }}
          >
            Organisation profile
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#6b7d90]">
            Manage the details used across proposals, invoices, and client
            communication.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Organisation name
              <input
                name="organisation"
                defaultValue="OMYTECH Kenya"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Support email
              <input
                name="email"
                type="email"
                defaultValue="info@omytechkenya.co.ke"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Phone number
              <input
                name="phone"
                type="tel"
                defaultValue="+254 745 511 354"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Default currency
              <select
                name="currency"
                defaultValue="KES"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              >
                <option>KES</option>
                <option>USD</option>
              </select>
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold">
            Workspace description
            <textarea
              name="description"
              defaultValue="Digital services, software, design, and growth solutions for ambitious businesses."
              rows={3}
              className="resize-y border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
            />
          </label>
          <div className="flex flex-col gap-4 border-t border-[#e6eef5] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#8a9aaa]">
              These defaults apply to new client workflows.
            </p>
            <button
              type="submit"
              className="inline-flex w-fit items-center gap-2 bg-[#071a2d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#12385b]"
            >
              {saved ? (
                <FiCheck className="h-4 w-4" />
              ) : (
                <FiSave className="h-4 w-4" />
              )}
              {saved ? "Settings saved" : "Save settings"}
            </button>
          </div>
        </form>
      </section>

      <section className="border border-[#dce5ef] bg-white p-6 sm:p-8">
        <div className="flex items-start gap-3 border-b border-[#e6eef5] pb-5">
          <div className="flex h-10 w-10 items-center justify-center bg-[#e8f6fc] text-[#0b78b7]">
            <FiShield className="h-5 w-5" />
          </div>
          <div>
            <h2
              className="text-xl font-black"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Admin notifications
            </h2>
            <p className="mt-1 text-sm text-[#6b7d90]">
              Choose which operational events need your attention.
            </p>
          </div>
        </div>
        <div className="mt-5 grid gap-4">
          <PreferenceRow
            label="New quote requests"
            detail="Get notified when a prospect submits a quote form"
            checked={quoteAlerts}
            onChange={setQuoteAlerts}
          />
          <PreferenceRow
            label="Payment activity"
            detail="Know when invoices are paid or approaching their due date"
            checked={paymentAlerts}
            onChange={setPaymentAlerts}
          />
          <PreferenceRow
            label="Project activity"
            detail="Receive updates when milestones or client approvals change"
            checked={projectAlerts}
            onChange={setProjectAlerts}
          />
        </div>
      </section>

      <section className="border border-[#dce5ef] bg-white p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              className="text-xl font-black"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Security
            </h2>
            <p className="mt-1 text-sm text-[#6b7d90]">
              Protect access to the operations workspace.
            </p>
          </div>
          <FiLock className="h-5 w-5 text-[#0b78b7]" />
        </div>
        <div className="mt-5 flex flex-col gap-4 border-t border-[#e6eef5] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">Admin password</p>
            <p className="mt-1 text-xs text-[#8a9aaa]">
              Change your password regularly and keep it unique.
            </p>
          </div>
          <a
            href="mailto:info@omytechkenya.co.ke?subject=Admin%20password%20change"
            className="inline-flex w-fit border border-[#cfe0ee] px-4 py-2.5 text-sm font-semibold text-[#071a2d] hover:border-[#0b78b7]"
          >
            Request password change
          </a>
        </div>
      </section>
    </div>
  );
}

function PreferenceRow({
  label,
  detail,
  checked,
  onChange,
}: {
  label: string;
  detail: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 border border-[#e6eef5] p-4">
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        <span className="mt-1 block text-xs text-[#8a9aaa]">{detail}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-4 w-4 accent-[#0b78b7]"
      />
    </label>
  );
}
