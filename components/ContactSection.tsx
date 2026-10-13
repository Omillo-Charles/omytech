import {
    FaGithub,
    FaInstagram,
    FaTiktok,
    FaXTwitter,
} from "react-icons/fa6";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import type { IconType } from "react-icons";
import ScrollReveal from "./ScrollReveal";

const contactDetails: {
    label: string;
    value: string;
    href?: string;
    Icon: IconType;
}[] = [
        {
            label: "Our Office",
            value: "UpperHill, Nairobi, Kenya",
            Icon: FiMapPin,
        },
        {
            label: "Email support",
            value: "info@omytechkenya.co.ke",
            href: "mailto:info@omytechkenya.co.ke",
            Icon: FiMail,
        },
        {
            label: "Call us",
            value: "+254 745 511 354",
            href: "tel:+254745511354",
            Icon: FiPhone,
        },
        {
            label: "Office hours",
            value: "Mon–Fri: 9 AM–6 PM",
            Icon: FiClock,
        },
    ];

const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/omyt3ch", Icon: FaInstagram },
    { label: "TikTok", href: "https://www.tiktok.com/@omyt3ch", Icon: FaTiktok },
    { label: "X", href: "https://x.com/omyt3ch", Icon: FaXTwitter },
    { label: "GitHub", href: "https://github.com/omyt3ch", Icon: FaGithub },
];

export default function ContactSection() {
    return (
        <section
            aria-labelledby="contact-title"
            className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
            id="contact"
        >
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
                <ScrollReveal variant="left">
                    <div>
                        <p className="mb-3 text-xs font-bold uppercase text-blue-700">
                            Get in touch
                        </p>
                        <h2
                            className="font-heading max-w-xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl"
                            id="contact-title"
                        >
                            Seamless Communication, Global Impact.
                        </h2>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                            Have a project in mind or a question about our services? Reach out
                            and let’s find the right digital solution for your goals.
                        </p>

                        <div className="mt-8 border-t border-slate-200 pt-6">
                            <h3 className="text-sm font-bold text-slate-900">
                                Follow our social networks
                            </h3>
                            <ul aria-label="Social media" className="mt-4 flex gap-2.5">
                                {socialLinks.map(({ label, href, Icon }) => (
                                    <li key={label}>
                                        <a
                                            aria-label={label}
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                                            href={href}
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            <Icon aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={120} variant="right">
                    <address className="not-italic">
                        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
                            {contactDetails.map(({ label, value, href, Icon }) => (
                                <li className="flex min-w-0 items-start gap-3 border-b border-slate-200 py-4 sm:border-0 sm:py-2" key={label}>
                                    <span
                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-blue-50 text-blue-700"
                                    >
                                        <Icon aria-hidden="true" className="h-5 w-5" />
                                    </span>
                                    <span className="min-w-0 pt-0.5">
                                        <span className="block text-xs font-bold text-slate-900">
                                            {label}
                                        </span>
                                        {href ? (
                                            <a
                                                className="mt-1 block break-words text-xs leading-5 text-slate-600 transition hover:text-cyan-700"
                                                href={href}
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            <span className="mt-1 block text-xs leading-5 text-slate-600">
                                                {value}
                                            </span>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </address>
                </ScrollReveal>
            </div>
        </section>
    );
}