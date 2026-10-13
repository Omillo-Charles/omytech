import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Read the terms for using the OMYTECH Kenya website and information about our services.",
    alternates: {
        canonical: "/terms",
    },
};

const termsSections = [
    {
        title: "Using this website",
        paragraphs: [
            "You may use this website for lawful purposes and to learn about OMYTECH Kenya and our services. You must not attempt to disrupt the website, gain unauthorized access to it or its systems, or use its content in a way that violates applicable law or another person’s rights.",
        ],
    },
    {
        title: "Website information and services",
        paragraphs: [
            "Website content is provided for general information and may change without notice. It is not a substitute for professional advice. Descriptions of our services do not by themselves create a service agreement, guarantee a particular result, or constitute a binding offer.",
            "The scope, fees, deliverables, timelines, and other terms for any project will be agreed separately in writing between OMYTECH Kenya and the client.",
        ],
    },
    {
        title: "Intellectual property",
        paragraphs: [
            "Unless otherwise stated, the text, branding, and original materials on this website belong to OMYTECH Kenya or are used with permission. You may not reproduce or redistribute them for commercial use without prior permission. Third-party names, logos, and linked project materials remain the property of their respective owners.",
        ],
    },
    {
        title: "Third-party websites",
        paragraphs: [
            "Links to external websites are provided for convenience. OMYTECH Kenya does not control those websites and is not responsible for their content, availability, or practices. Visiting an external website is at your discretion and subject to its terms.",
        ],
    },
    {
        title: "Availability and liability",
        paragraphs: [
            "We aim to keep this website available and accurate, but do not guarantee uninterrupted access or that all information is complete and current. To the extent permitted by law, OMYTECH Kenya is not liable for losses arising from reliance on general website information or temporary website unavailability. Nothing in these terms limits rights or liabilities that cannot legally be limited.",
        ],
    },
    {
        title: "Updates and contact",
        paragraphs: [
            "We may update these terms as the website or our services change. The latest version will be published on this page. For questions, contact info@omytechkenya.co.ke or call +254 745 511 354.",
        ],
    },
];

export default function TermsPage() {
    return (
        <main className="flex-1 bg-slate-50 px-5 pb-16 pt-36 sm:px-8 sm:pb-24 sm:pt-44">
            <article className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm sm:p-10 lg:p-14">
                <header className="mb-10 border-b border-slate-200 pb-8">
                    <p className="mb-3 text-xs font-bold uppercase text-blue-700">
                        OMYTECH Kenya
                    </p>
                    <h1 className="font-heading text-3xl font-bold text-slate-950 sm:text-4xl">
                        Terms of Service
                    </h1>
                    <p className="mt-3 text-sm text-slate-500">
                        Last updated: October 13, 2026
                    </p>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                        These terms apply to your use of the OMYTECH Kenya website. Project
                        work is subject to the separate written agreement made for that work.
                    </p>
                </header>

                <div className="space-y-8">
                    {termsSections.map(({ title, paragraphs }) => (
                        <section key={title}>
                            <h2 className="font-heading text-lg font-bold text-slate-950">
                                {title}
                            </h2>
                            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                                {paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </article>
        </main>
    );
}
