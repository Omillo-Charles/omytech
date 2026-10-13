import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Learn how OMYTECH Kenya handles information when you use our website or contact us.",
    alternates: {
        canonical: "/privacy",
    },
};

const policySections = [
    {
        title: "Information you provide",
        paragraphs: [
            "When you contact OMYTECH Kenya, you may choose to share your name, email address, phone number, organization, and details about a project or enquiry. We use the information you provide to respond and discuss the services you request.",
            "Our website hosting may also process limited technical information, such as browser and request details, to deliver pages and help protect the site.",
        ],
    },
    {
        title: "How we use information",
        paragraphs: [
            "We use information to respond to enquiries, communicate about potential or active work, provide requested services, maintain website security, and meet applicable legal obligations.",
        ],
    },
    {
        title: "Sharing and retention",
        paragraphs: [
            "We do not sell personal information. We may share it with service providers where reasonably necessary to operate our website or communicate with you, or where disclosure is required by law. We keep information only for as long as it is needed for these purposes or for legitimate business and legal requirements.",
        ],
    },
    {
        title: "Cookies and external links",
        paragraphs: [
            "Your browser may process cookies or similar technologies used to deliver site functionality. You can manage these through your browser settings. Our website may link to third-party websites; their privacy practices are governed by their own policies, not this one.",
        ],
    },
    {
        title: "Your choices and contacting us",
        paragraphs: [
            "You may contact us to ask about personal information you have shared with us or request that we correct or delete it, subject to applicable legal requirements. Contact OMYTECH Kenya at info@omytechkenya.co.ke or +254 745 511 354.",
        ],
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="flex-1 bg-slate-50 px-5 pb-16 pt-36 sm:px-8 sm:pb-24 sm:pt-44">
            <article className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm sm:p-10 lg:p-14">
                <header className="mb-10 border-b border-slate-200 pb-8">
                    <p className="mb-3 text-xs font-bold uppercase text-blue-700">
                        OMYTECH Kenya
                    </p>
                    <h1 className="font-heading text-3xl font-bold text-slate-950 sm:text-4xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-3 text-sm text-slate-500">
                        Last updated: October 13, 2026
                    </p>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                        This policy describes how OMYTECH Kenya handles information when you
                        visit our website or get in touch with us.
                    </p>
                </header>

                <div className="space-y-8">
                    {policySections.map(({ title, paragraphs }) => (
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
