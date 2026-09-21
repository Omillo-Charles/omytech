import type { Metadata } from "next";
import { FiArrowRight, FiCheckCircle, FiLock, FiShield } from "react-icons/fi";
import { colors } from "../../config/colors";

export const metadata: Metadata = {
  title: "Privacy Policy | OMYTECH Kenya",
  description:
    "How OMYTECH Kenya collects, uses, protects, and handles personal information.",
};

const sections = [
  { id: "information", label: "Information we collect" },
  { id: "use", label: "How we use information" },
  { id: "sharing", label: "Sharing information" },
  { id: "retention", label: "Retention and security" },
  { id: "rights", label: "Your choices and rights" },
  { id: "children", label: "Children and third parties" },
  { id: "changes", label: "Policy changes" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#071a2d]">
      <section className="border-b border-[#dce5ef] bg-[#f5f8fc] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-3xl items-start gap-5">
            <div
              className="hidden h-14 w-14 shrink-0 items-center justify-center bg-[#e8f6fc] sm:flex"
              style={{ color: colors.primary }}
            >
              <FiShield className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase"
                style={{ color: colors.primary }}
              >
                Legal
              </p>
              <h1
                className="mt-4 text-4xl font-black leading-tight sm:text-5xl"
                style={{
                  fontFamily: "var(--font-glacial-indifference), sans-serif",
                }}
              >
                Privacy Policy
              </h1>
              <p className="mt-5 text-base leading-8 text-[#536579] sm:text-lg">
                This policy explains what information OMYTECH Kenya collects,
                why we collect it, and the choices available to you.
              </p>
              <p className="mt-5 text-sm font-semibold text-[#6b7d90]">
                Effective date: September 20, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[220px_1fr] lg:gap-20 lg:px-8">
        <aside className="h-fit border border-[#dce5ef] bg-[#f8fbfd] p-5 lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase text-[#6b7d90]">
            On this page
          </p>
          <nav className="mt-4 grid gap-3">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-[#536579] transition hover:text-[#0b78b7]"
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="max-w-3xl space-y-10 text-[#536579]">
          <section className="border border-[#cfe0ee] bg-[#f5f8fc] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <FiLock
                className="mt-1 h-5 w-5 shrink-0"
                style={{ color: colors.primary }}
                aria-hidden="true"
              />
              <p className="leading-7">
                We aim to collect only the information we need, use it for clear
                purposes, and handle it with care. This policy applies to
                information collected through our website, forms,
                communications, and services.
              </p>
            </div>
          </section>

          <section id="information">
            <h2
              className="text-2xl font-black text-[#071a2d] sm:text-3xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              1. Information we collect
            </h2>
            <p className="mt-4 leading-8">
              We may collect information you choose to provide when you contact
              us, request a quote, create an account, subscribe to updates, or
              work with us. This may include your name, email address, phone
              number, company, project details, budget information, messages,
              account credentials, and any content you send.
            </p>
            <p className="mt-4 leading-8">
              We may also receive limited technical information when you use the
              website, such as browser type, device information, approximate
              location, pages viewed, referring website, and basic usage or
              error data. We use this information to keep the website secure and
              improve its performance.
            </p>
          </section>

          <section id="use">
            <h2
              className="text-2xl font-black text-[#071a2d] sm:text-3xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              2. How we use information
            </h2>
            <ul className="mt-5 grid gap-4">
              {[
                "Respond to enquiries, quote requests, support questions, and other messages.",
                "Plan, deliver, maintain, and improve digital services and project work.",
                "Create and manage user accounts where account functionality is provided.",
                "Send service updates, relevant information, or marketing where permitted and where you have not opted out.",
                "Protect the website, investigate misuse, prevent fraud, and meet legal or regulatory obligations.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 leading-7">
                  <FiCheckCircle
                    className="mt-1 h-4 w-4 shrink-0"
                    style={{ color: colors.primary }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="sharing">
            <h2
              className="text-2xl font-black text-[#071a2d] sm:text-3xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              3. When we share information
            </h2>
            <p className="mt-4 leading-8">
              We do not sell personal information. We may share information with
              trusted service providers who help us operate our website, manage
              communications, process payments, provide hosting, deliver
              analytics, or complete project work. These providers may use
              information only to provide services to us and must handle it
              appropriately.
            </p>
            <p className="mt-4 leading-8">
              We may also share information where you ask us to, where it is
              necessary to deliver a service you requested, to protect rights or
              safety, to investigate unlawful activity, or where required by
              law. If a business transfer occurs, information may be transferred
              as part of the relevant business assets subject to applicable
              requirements.
            </p>
          </section>

          <section id="retention">
            <h2
              className="text-2xl font-black text-[#071a2d] sm:text-3xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              4. Retention and security
            </h2>
            <p className="mt-4 leading-8">
              We keep personal information only for as long as reasonably needed
              for the purpose it was collected, to provide services, resolve
              disputes, maintain business records, or comply with legal
              obligations. Retention periods vary depending on the type of
              information and the relationship involved.
            </p>
            <p className="mt-4 leading-8">
              We use reasonable administrative, technical, and organisational
              safeguards to protect information. No internet transmission or
              storage system can be guaranteed completely secure, so please
              avoid sending passwords, payment card details, or other highly
              sensitive information through ordinary contact forms.
            </p>
          </section>

          <section id="rights">
            <h2
              className="text-2xl font-black text-[#071a2d] sm:text-3xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              5. Your choices and rights
            </h2>
            <p className="mt-4 leading-8">
              Depending on applicable law, you may have the right to ask what
              personal information we hold about you, request correction or
              deletion, object to certain uses, request a copy, withdraw consent
              where processing is based on consent, or complain to a relevant
              data protection authority.
            </p>
            <p className="mt-4 leading-8">
              You can opt out of marketing messages by using the unsubscribe
              option provided or by contacting us. Some operational, legal, or
              transactional messages may still need to be sent.
            </p>
          </section>

          <section id="children">
            <h2
              className="text-2xl font-black text-[#071a2d] sm:text-3xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              6. Children and third-party services
            </h2>
            <p className="mt-4 leading-8">
              Our website and services are intended for businesses and general
              audiences. We do not knowingly collect personal information from
              children without appropriate consent. If you believe a child has
              provided information to us, please contact us.
            </p>
            <p className="mt-4 leading-8">
              Our website may link to third-party websites, platforms, payment
              providers, or social networks. Their privacy practices are
              governed by their own policies, and we are not responsible for
              their content or handling of information.
            </p>
          </section>

          <section id="changes">
            <h2
              className="text-2xl font-black text-[#071a2d] sm:text-3xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              7. Changes to this policy
            </h2>
            <p className="mt-4 leading-8">
              We may update this policy when our services, technology, or legal
              obligations change. The latest version will be published on this
              page with a revised effective date. We encourage you to review it
              periodically.
            </p>
          </section>

          <section
            id="contact"
            className="border border-[#dce5ef] bg-[#f5f8fc] p-6 sm:p-8"
          >
            <h2
              className="text-2xl font-black text-[#071a2d] sm:text-3xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              8. Contact us
            </h2>
            <p className="mt-4 leading-8">
              For privacy questions or requests, email{" "}
              <a
                className="font-semibold text-[#0b78b7]"
                href="mailto:info@omytechkenya.co.ke"
              >
                info@omytechkenya.co.ke
              </a>
              . Please include enough detail for us to understand and respond to
              your request.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-[#071a2d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12385b]"
            >
              Contact OMYTECH{" "}
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </section>
        </article>
      </div>
    </main>
  );
}
