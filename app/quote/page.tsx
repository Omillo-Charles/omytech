import type { Metadata } from "next";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { colors } from "../../config/colors";

export const metadata: Metadata = {
  title: "Get a Quote | OMYTECH Kenya",
  description:
    "Share your project details with OMYTECH Kenya and get a clear starting point for your digital project.",
};

const expectations = [
  "A thoughtful review of your project goals",
  "Questions that help us understand the real opportunity",
  "A clear recommendation for the best next step",
];

export default function QuotePage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#071a2d]">
      <section className="border-b border-[#dce5ef] bg-[#f5f8fc] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20 lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: colors.primary }}
            >
              Get a quote
            </p>
            <h1
              className="mt-4 max-w-xl text-[2.7rem] font-black leading-[1.06] sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Give your idea a useful starting point.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#536579] sm:text-lg">
              Share what you are building, improving, or trying to solve. The
              more context you give us, the more useful our first response can
              be.
            </p>

            <div className="mt-8 border border-[#cfe0ee] bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3 border-b border-[#e6eef5] pb-5">
                <div
                  className="flex h-11 w-11 items-center justify-center bg-[#e8f6fc]"
                  style={{ color: colors.primary }}
                >
                  <FiClock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold">What happens next?</p>
                  <p className="mt-1 text-xs text-[#6b7d90]">
                    A clear response, without the jargon
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-4">
                {expectations.map((expectation) => (
                  <li
                    key={expectation}
                    className="flex items-start gap-3 text-sm leading-6 text-[#536579]"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#e7f5fc]"
                      style={{ color: colors.primary }}
                    >
                      <FiCheck className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {expectation}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 text-sm text-[#536579] sm:flex-row lg:flex-col">
              <a
                href="mailto:info@omytechkenya.co.ke"
                className="inline-flex items-center gap-2 hover:text-[#0b78b7]"
              >
                <FiMail
                  className="h-4 w-4"
                  style={{ color: colors.primary }}
                  aria-hidden="true"
                />
                info@omytechkenya.co.ke
              </a>
              <a
                href="tel:+254745511354"
                className="inline-flex items-center gap-2 hover:text-[#0b78b7]"
              >
                <FiPhone
                  className="h-4 w-4"
                  style={{ color: colors.primary }}
                  aria-hidden="true"
                />
                +254 745 511 354
              </a>
            </div>
          </div>

          <div className="border border-[#cfe0ee] bg-white p-6 shadow-[0_20px_55px_rgba(7,26,45,0.08)] sm:p-8 lg:p-10">
            <div className="mb-7 border-b border-[#e6eef5] pb-5">
              <p
                className="text-xs font-semibold uppercase"
                style={{ color: colors.primary }}
              >
                Project details
              </p>
              <h2
                className="mt-3 text-2xl font-black sm:text-3xl"
                style={{
                  fontFamily: "var(--font-glacial-indifference), sans-serif",
                }}
              >
                Help us understand the opportunity.
              </h2>
            </div>

            <form
              action="mailto:info@omytechkenya.co.ke"
              method="post"
              encType="text/plain"
              className="grid gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Your name
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none transition focus:border-[#0b78b7]"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Work email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none transition focus:border-[#0b78b7]"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold">
                Company or organisation
                <input
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none transition focus:border-[#0b78b7]"
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  What do you need?
                  <select
                    name="service"
                    defaultValue=""
                    className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none transition focus:border-[#0b78b7]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Web development</option>
                    <option>Mobile app development</option>
                    <option>UI/UX design</option>
                    <option>Custom software</option>
                    <option>Digital marketing or social media</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Estimated budget
                  <select
                    name="budget"
                    defaultValue=""
                    className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none transition focus:border-[#0b78b7]"
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option>KES 20,000 - 30,000</option>
                    <option>KES 30,000 - 40,000</option>
                    <option>KES 40,000 - 50,000</option>
                    <option>Above KES 50,000</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold">
                When would you like to start?
                <select
                  name="timeline"
                  defaultValue=""
                  className="border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none transition focus:border-[#0b78b7]"
                >
                  <option value="" disabled>
                    Select a timeline
                  </option>
                  <option>As soon as possible</option>
                  <option>Within the next month</option>
                  <option>Within the next three months</option>
                  <option>Just exploring for now</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-semibold">
                Tell us about the project
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="What are you trying to build, improve, or solve?"
                  className="resize-y border border-[#cfe0ee] bg-[#fbfdff] px-4 py-3.5 font-normal outline-none transition focus:border-[#0b78b7]"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-fit items-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b]"
              >
                Request a quote
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
