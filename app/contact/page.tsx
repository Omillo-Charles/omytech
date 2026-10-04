import type { Metadata } from "next";
import {
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import ContactForm from "../../components/contact/ContactForm";
import { colors } from "../../config/colors";

export const metadata: Metadata = {
  title: "Contact | OMYTECH Kenya",
  description:
    "Tell OMYTECH Kenya about your project, business challenge, or digital growth opportunity.",
};

const contactDetails = [
  {
    label: "Email us",
    value: "info@omytechkenya.co.ke",
    href: "mailto:info@omytechkenya.co.ke",
    icon: FiMail,
  },
  {
    label: "Call us",
    value: "+254 745 511 354",
    href: "tel:+254745511354",
    icon: FiPhone,
  },
  {
    label: "Find us",
    value: "Nairobi, Kenya",
    href: "#location",
    icon: FiMapPin,
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#071a2d]">
      <section className="border-b border-[#dce5ef] bg-[#f5f8fc] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: colors.primary }}
            >
              Start a conversation
            </p>
            <h1
              className="mt-4 max-w-xl text-[2.7rem] font-black leading-[1.06] sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Let&apos;s make your next move clearer.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#536579] sm:text-lg">
              Whether you have a clear brief or just a problem worth solving,
              tell us what you are working on. We&apos;ll help you find the
              right place to begin.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {contactDetails.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 border border-[#dce5ef] bg-white p-4 transition-colors hover:border-[#8cc8e5]"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#e8f6fc]"
                    style={{ color: colors.primary }}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase text-[#6b7d90]">
                      {label}
                    </span>
                    <span className="mt-1 block truncate text-sm font-semibold">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section id="location" className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="border border-[#dce5ef] bg-[#f2f7fb] p-7 sm:p-8">
            <div
              className="flex h-11 w-11 items-center justify-center bg-white"
              style={{ color: colors.primary }}
            >
              <FiMapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2
              className="mt-6 text-2xl font-black"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Based in Nairobi
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#536579]">
              We work with ambitious businesses in Kenya and beyond,
              collaborating remotely or meeting in person when the project calls
              for it.
            </p>
          </div>

          <div className="border border-[#dce5ef] bg-white p-7 sm:p-8">
            <div
              className="flex h-11 w-11 items-center justify-center bg-[#e8f6fc]"
              style={{ color: colors.primary }}
            >
              <FiClock className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2
              className="mt-6 text-2xl font-black"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              What happens next?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#536579]">
              We&apos;ll review your enquiry, ask the useful questions, and get
              back to you with a clear next step. No pressure, no unnecessary
              jargon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
