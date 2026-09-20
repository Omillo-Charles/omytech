import type { Metadata } from 'next';
import { FiArrowRight, FiCheckCircle, FiFileText } from 'react-icons/fi';
import { colors } from '../../config/colors';

export const metadata: Metadata = {
  title: 'Terms of Service | OMYTECH Kenya',
  description: 'The terms that govern use of the OMYTECH Kenya website and digital services.',
};

const sections = [
  { id: 'acceptance', label: 'Acceptance of terms' },
  { id: 'services', label: 'Our services' },
  { id: 'projects', label: 'Projects and fees' },
  { id: 'intellectual-property', label: 'Intellectual property' },
  { id: 'acceptable-use', label: 'Acceptable use' },
  { id: 'liability', label: 'Liability' },
  { id: 'ending', label: 'Ending the relationship' },
  { id: 'contact', label: 'Contact' },
];

export default function TermsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#071a2d]">
      <section className="border-b border-[#dce5ef] bg-[#f5f8fc] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-3xl items-start gap-5">
            <div className="hidden h-14 w-14 shrink-0 items-center justify-center bg-[#e8f6fc] sm:flex" style={{ color: colors.primary }}>
              <FiFileText className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase" style={{ color: colors.primary }}>Legal</p>
              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>
                Terms of Service
              </h1>
              <p className="mt-5 text-base leading-8 text-[#536579] sm:text-lg">
                These terms explain the rules for using the OMYTECH Kenya website and working with us on digital projects.
              </p>
              <p className="mt-5 text-sm font-semibold text-[#6b7d90]">Effective date: September 20, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[220px_1fr] lg:gap-20 lg:px-8">
        <aside className="h-fit border border-[#dce5ef] bg-[#f8fbfd] p-5 lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase text-[#6b7d90]">On this page</p>
          <nav className="mt-4 grid gap-3">
            {sections.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="text-sm text-[#536579] transition hover:text-[#0b78b7]">{label}</a>
            ))}
          </nav>
        </aside>

        <article className="max-w-3xl space-y-10 text-[#536579]">
          <section id="acceptance">
            <h2 className="text-2xl font-black text-[#071a2d] sm:text-3xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>1. Acceptance of these terms</h2>
            <p className="mt-4 leading-8">By accessing this website, submitting an enquiry, or engaging OMYTECH Kenya for services, you agree to these Terms of Service. If you are acting for a company or organisation, you confirm that you have authority to accept these terms on its behalf.</p>
            <p className="mt-4 leading-8">If you do not agree with these terms, please do not use the website or engage our services. We may update these terms from time to time. The version published on this page will apply from its effective date.</p>
          </section>

          <section id="services">
            <h2 className="text-2xl font-black text-[#071a2d] sm:text-3xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>2. Our services</h2>
            <p className="mt-4 leading-8">OMYTECH Kenya provides digital services that may include web development, mobile app development, UI/UX design, custom software, e-commerce, social media management, digital marketing, hosting guidance, maintenance, and related consulting.</p>
            <p className="mt-4 leading-8">The exact scope, deliverables, assumptions, milestones, responsibilities, timeline, and acceptance criteria for a project will be agreed in a written proposal, statement of work, quotation, or other project agreement. Where a project agreement conflicts with these terms, the project agreement will control for that project.</p>
          </section>

          <section id="projects">
            <h2 className="text-2xl font-black text-[#071a2d] sm:text-3xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>3. Projects, approvals, and fees</h2>
            <p className="mt-4 leading-8">A project begins when both parties have approved the scope and any required deposit or initial payment has been received. Estimates are based on the information available at the time and may change when the scope, requirements, content, integrations, or timeline changes.</p>
            <ul className="mt-5 grid gap-4">
              {[
                'You will provide accurate information, timely feedback, content, access, and approvals needed to keep the project moving.',
                'Additional work outside the agreed scope may require a revised estimate or written change approval.',
                'Invoices are due according to the payment schedule in the project agreement. Work may be paused where an invoice is overdue.',
                'Third-party costs such as domains, hosting, paid software, advertising spend, stock assets, transaction fees, and platform charges are normally separate unless stated otherwise.',
              ].map((item) => <li key={item} className="flex items-start gap-3 leading-7"><FiCheckCircle className="mt-1 h-4 w-4 shrink-0" style={{ color: colors.primary }} aria-hidden="true" />{item}</li>)}
            </ul>
          </section>

          <section id="intellectual-property">
            <h2 className="text-2xl font-black text-[#071a2d] sm:text-3xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>4. Intellectual property</h2>
            <p className="mt-4 leading-8">You retain ownership of materials you provide to us, including your brand assets, text, images, data, and other content. You confirm that you have the right to provide those materials and that our use of them for the project will not infringe another person&apos;s rights.</p>
            <p className="mt-4 leading-8">Once all agreed project fees have been paid, you receive the rights to the final, client-specific deliverables described in the project agreement, subject to any third-party licences. OMYTECH retains ownership of its pre-existing tools, methods, reusable components, know-how, and general skills.</p>
            <p className="mt-4 leading-8">Unless you ask us not to in writing, we may identify the project and display approved work in our portfolio and marketing materials. We will not knowingly publish confidential information.</p>
          </section>

          <section id="acceptable-use">
            <h2 className="text-2xl font-black text-[#071a2d] sm:text-3xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>5. Acceptable use</h2>
            <p className="mt-4 leading-8">You must use this website and our services lawfully and responsibly. You must not misuse our website, attempt to gain unauthorised access, interfere with its operation, introduce malicious code, impersonate another person, or use our services to create, distribute, or promote unlawful, fraudulent, harmful, or infringing content.</p>
          </section>

          <section id="liability">
            <h2 className="text-2xl font-black text-[#071a2d] sm:text-3xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>6. Disclaimers and liability</h2>
            <p className="mt-4 leading-8">We will provide our services with reasonable skill and care. However, digital products depend on third-party platforms, networks, devices, content, and decisions outside our control. We do not guarantee uninterrupted availability, a particular search ranking, revenue result, conversion rate, or business outcome unless expressly agreed in writing.</p>
            <p className="mt-4 leading-8">To the extent permitted by law, OMYTECH Kenya will not be liable for indirect, incidental, special, or consequential loss, loss of profits, loss of revenue, loss of data, or business interruption arising from use of the website or services. Nothing in these terms excludes liability that cannot legally be excluded.</p>
          </section>

          <section id="ending">
            <h2 className="text-2xl font-black text-[#071a2d] sm:text-3xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>7. Suspension and termination</h2>
            <p className="mt-4 leading-8">Either party may end a project according to the terms of the relevant project agreement. If no separate process is agreed, either party may request termination in writing. You remain responsible for approved work completed, committed third-party costs, and non-refundable payments up to the termination date.</p>
            <p className="mt-4 leading-8">We may suspend access or services where there is a serious breach, unlawful activity, a security risk, or an overdue payment. Provisions relating to intellectual property, confidentiality, payment, liability, and dispute resolution will continue after termination where applicable.</p>
          </section>

          <section id="contact" className="border border-[#dce5ef] bg-[#f5f8fc] p-6 sm:p-8">
            <h2 className="text-2xl font-black text-[#071a2d] sm:text-3xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>8. Contact us</h2>
            <p className="mt-4 leading-8">Questions about these terms can be sent to <a className="font-semibold text-[#0b78b7]" href="mailto:info@omytechkenya.co.ke">info@omytechkenya.co.ke</a>. OMYTECH Kenya is based in Nairobi, Kenya.</p>
            <a href="/contact" className="mt-6 inline-flex items-center gap-2 bg-[#071a2d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12385b]">Contact OMYTECH <FiArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </section>
        </article>
      </div>
    </main>
  );
}