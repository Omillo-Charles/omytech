import type { Metadata } from "next";
import {
  FiCheck,
  FiClock,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import QuoteForm from "../../components/quote/QuoteForm";
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

          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
