"use client";

import { useState } from "react";
import { FiCheck, FiLock, FiSave, FiShield, FiTrash2 } from "react-icons/fi";

export default function UserSettings() {
  const [saved, setSaved] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [projectUpdates, setProjectUpdates] = useState(true);
  const [passwordFormOpen, setPasswordFormOpen] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deleteText, setDeleteText] = useState("");
  const [deletionRequested, setDeletionRequested] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  const handlePasswordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPasswordSaved(true);
    setPasswordFormOpen(false);
    window.setTimeout(() => setPasswordSaved(false), 2500);
  };

  return (
    <div className="mt-8 grid max-w-5xl gap-6">
      <section className="border border-[#dce5ef] bg-white p-6 sm:p-8">
        <div className="border-b border-[#e6eef5] pb-5">
          <p className="text-xs font-semibold uppercase text-[#0b78b7]">
            Your details
          </p>
          <h2
            className="mt-2 text-2xl font-black"
            style={{
              fontFamily: "var(--font-glacial-indifference), sans-serif",
            }}
          >
            Account information
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#6b7d90]">
            Keep your contact details current so the OMYTECH team can reach you
            easily.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              First name
              <input
                name="firstName"
                defaultValue="Jane"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Last name
              <input
                name="lastName"
                defaultValue="Doe"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Email address
              <input
                name="email"
                type="email"
                defaultValue="jane@company.com"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Phone number
              <input
                name="phone"
                type="tel"
                defaultValue="+254 745 511 354"
                className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold">
            Company or organisation
            <input
              name="company"
              defaultValue="Your company"
              className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none focus:border-[#0b78b7]"
            />
          </label>

          <div className="flex flex-col gap-4 border-t border-[#e6eef5] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#8a9aaa]">
              Changes will be saved to your client profile.
            </p>
            <button
              type="submit"
              className="inline-flex w-fit items-center gap-2 bg-[#071a2d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12385b]"
            >
              {saved ? (
                <FiCheck className="h-4 w-4" />
              ) : (
                <FiSave className="h-4 w-4" />
              )}
              {saved ? "Changes saved" : "Save changes"}
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
              Communication preferences
            </h2>
            <p className="mt-1 text-sm text-[#6b7d90]">
              Choose which updates you would like to receive.
            </p>
          </div>
        </div>
        <div className="mt-5 grid gap-4">
          <PreferenceRow
            label="Project updates"
            detail="Milestones, approvals, and delivery updates"
            checked={projectUpdates}
            onChange={setProjectUpdates}
          />
          <PreferenceRow
            label="OMYTECH updates"
            detail="Useful news, services, and occasional announcements"
            checked={emailUpdates}
            onChange={setEmailUpdates}
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
              Manage your password and account access.
            </p>
          </div>
          <FiLock className="h-5 w-5 text-[#0b78b7]" />
        </div>
        <div className="mt-5 border-t border-[#e6eef5] pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold">Password</p>
              <p className="mt-1 text-xs text-[#8a9aaa]">
                Use a strong password you do not reuse elsewhere.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPasswordFormOpen((open) => !open)}
              className="inline-flex w-fit items-center border border-[#cfe0ee] px-4 py-2.5 text-sm font-semibold text-[#071a2d] hover:border-[#0b78b7]"
            >
              {passwordFormOpen ? "Cancel" : "Change password"}
            </button>
          </div>
          {passwordSaved && (
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#26834b]">
              <FiCheck className="h-4 w-4" /> Password updated
            </p>
          )}
          {passwordFormOpen && (
            <form
              onSubmit={handlePasswordSubmit}
              className="mt-5 grid gap-4 border-t border-[#e6eef5] pt-5 sm:max-w-xl"
            >
              <label className="grid gap-2 text-sm font-semibold">
                Current password
                <input
                  type="password"
                  required
                  className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3 font-normal outline-none focus:border-[#0b78b7]"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                New password
                <input
                  type="password"
                  required
                  minLength={8}
                  className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3 font-normal outline-none focus:border-[#0b78b7]"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Confirm new password
                <input
                  type="password"
                  required
                  minLength={8}
                  className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3 font-normal outline-none focus:border-[#0b78b7]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-fit items-center gap-2 bg-[#071a2d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#12385b]"
              >
                <FiSave className="h-4 w-4" /> Update password
              </button>
            </form>
          )}
        </div>
        <div className="mt-7 border-t border-[#f0d8d8] pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#9b3d3d]">
                Delete account
              </p>
              <p className="mt-1 max-w-xl text-xs leading-5 text-[#8a6b6b]">
                This is permanent. Your account access and personal workspace
                data will be removed.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDeleteConfirmationOpen((open) => !open)}
              className="inline-flex w-fit items-center gap-2 border border-[#e3bcbc] px-4 py-2.5 text-sm font-semibold text-[#9b3d3d] hover:bg-[#fff5f5]"
            >
              <FiTrash2 className="h-4 w-4" /> Delete account
            </button>
          </div>
          {deleteConfirmationOpen && !deletionRequested && (
            <div className="mt-5 border border-[#e3bcbc] bg-[#fff8f8] p-5">
              <p className="text-sm font-semibold text-[#7f3030]">
                Are you sure you want to delete your account?
              </p>
              <p className="mt-2 text-xs leading-5 text-[#8a6b6b]">
                Type <strong>DELETE</strong> below to confirm this permanent
                action.
              </p>
              <input
                value={deleteText}
                onChange={(event) => setDeleteText(event.target.value)}
                aria-label="Type DELETE to confirm account deletion"
                className="mt-4 w-full border border-[#e3bcbc] bg-white px-4 py-3 text-sm outline-none focus:border-[#9b3d3d] sm:max-w-xs"
                placeholder="DELETE"
              />
              <div>
                <button
                  type="button"
                  disabled={deleteText !== "DELETE"}
                  onClick={() => setDeletionRequested(true)}
                  className="mt-4 inline-flex items-center gap-2 bg-[#9b3d3d] px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Confirm deletion
                </button>
              </div>
            </div>
          )}
          {deletionRequested && (
            <p className="mt-4 text-sm font-semibold text-[#9b3d3d]">
              Your deletion request has been recorded for account review.
            </p>
          )}
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
