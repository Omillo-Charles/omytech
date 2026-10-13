import Link from "next/link";
import { FiCpu, FiShield, FiUsers } from "react-icons/fi";
import type { IconType } from "react-icons";
import ScrollReveal from "./ScrollReveal";

const services: {
    title: string;
    description: string;
    Icon: IconType;
}[] = [
        {
            title: "IT Solutions",
            description:
                "Reliable websites, applications, and software built around the way your organization works.",
            Icon: FiCpu,
        },
        {
            title: "IT Consulting",
            description:
                "Practical guidance to help you choose the right technology and make it work for your team.",
            Icon: FiUsers,
        },
        {
            title: "Cyber Security",
            description:
                "Thoughtful security practices that help protect your systems, data, and customers.",
            Icon: FiShield,
        },
    ];

export default function WhyChooseUs() {
    return (
        <section
            aria-labelledby="why-choose-us-title"
            className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
            id="why-choose-us"
        >
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_2.1fr] lg:items-center lg:gap-12">
                <ScrollReveal className="max-w-xl" variant="left">
                    <div>
                        <p className="mb-3 text-xs font-bold uppercase text-blue-700">
                            Why choose us
                        </p>
                        <h2
                            className="font-heading text-3xl font-bold leading-tight text-slate-950 sm:text-4xl"
                            id="why-choose-us-title"
                        >
                            Why people choose our services
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                            We combine dependable technology with clear communication to make
                            digital work simpler and more effective for your organization.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ title, description, Icon }, index) => (
                        <ScrollReveal className="h-full" delay={index * 100} key={title} variant="up">
                            <article
                                className="flex min-h-64 flex-col border border-slate-100 bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.06)] sm:p-7"
                            >
                                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                    <Icon aria-hidden="true" className="h-6 w-6" />
                                </span>
                                <h3 className="font-heading text-base font-bold text-slate-950">
                                    {title}
                                </h3>
                                <p className="mt-2 flex-1 text-xs leading-6 text-slate-500 sm:text-sm">
                                    {description}
                                </p>
                                <Link
                                    className="mt-5 inline-flex items-center gap-2 self-start text-[10px] font-bold uppercase text-blue-700 transition hover:text-cyan-600"
                                    href="/#about"
                                >
                                    Read details <span aria-hidden="true">→</span>
                                </Link>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
