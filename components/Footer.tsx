import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import ScrollReveal from "./ScrollReveal";

const footerLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Contact", href: "/#contact" },
];

const services = [
    "Web development",
    "Mobile applications",
    "Business software",
    "Digital solutions",
];

const socialLinks = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/omyt3ch",
        Icon: FaInstagram,
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@omyt3ch",
        Icon: FaTiktok,
    },
    { label: "X", href: "https://x.com/omyt3ch", Icon: FaXTwitter },
    { label: "GitHub", href: "https://github.com/omyt3ch", Icon: FaGithub },
];

export default function Footer() {
    return (
        <footer className="mt-auto text-white">
            <section
                aria-labelledby="footer-cta-title"
                className="relative isolate overflow-hidden bg-slate-950"
            >
                <Image
                    alt=""
                    className="-z-20 object-cover object-center"
                    fill
                    sizes="100vw"
                    src="/assets/heroimage.png"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061a3a]/95 via-[#061a3a]/85 to-[#061a3a]/45"
                />
                <ScrollReveal className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:items-center md:justify-between" variant="up">
                    <div className="max-w-2xl">
                        <h2
                            className="font-heading text-2xl font-bold sm:text-3xl"
                            id="footer-cta-title"
                        >
                            Ready to bring your idea to life?
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-slate-200">
                            Let’s build a digital solution that moves your business forward.
                        </p>
                    </div>
                    <a
                        className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start bg-white px-5 text-sm font-bold text-slate-900 transition hover:bg-cyan-100 md:self-auto"
                        href="https://wa.me/254745511354"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Start a project <span aria-hidden="true">→</span>
                    </a>
                </ScrollReveal>
            </section>

            <div className="bg-[#061a3a]">
                <ScrollReveal className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-5 py-10 sm:px-8 sm:py-12 md:grid-cols-4 md:gap-10" delay={100} variant="up">
                    <div className="col-span-2 md:col-span-1">
                        <Link
                            aria-label="OMYTECH Kenya home"
                            className="inline-flex items-center gap-3"
                            href="/#home"
                        >
                            <Image
                                alt=""
                                className="h-11 w-11 rounded-full bg-white object-contain"
                                height={44}
                                src="/assets/logo1.png"
                                width={44}
                            />
                            <span className="leading-tight">
                                <span className="block font-heading text-lg font-extrabold">
                                    OMYTECH
                                </span>
                                <span className="block text-[9px] font-semibold text-slate-300">
                                    KENYA
                                </span>
                            </span>
                        </Link>
                        <p className="mt-4 max-w-xs text-xs leading-5 text-slate-300">
                            Helping businesses grow with thoughtful websites, applications,
                            and dependable software.
                        </p>
                        <ul aria-label="Social media" className="mt-5 flex gap-2.5">
                            {socialLinks.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        aria-label={label}
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-blue-600"
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

                    <nav aria-label="Footer navigation">
                        <h3 className="mb-4 text-sm font-bold">Quick links</h3>
                        <ul className="space-y-2.5 text-xs text-slate-300">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <Link className="transition hover:text-white" href={link.href}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h3 className="mb-4 text-sm font-bold">What we do</h3>
                        <ul className="space-y-2.5 text-xs text-slate-300">
                            {services.map((service) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    <address className="not-italic">
                        <h3 className="mb-4 text-sm font-bold">Contact us</h3>
                        <ul className="space-y-3 text-xs leading-5 text-slate-300">
                            <li>Nairobi, Kenya</li>
                            <li>
                                <a className="transition hover:text-white" href="tel:+254745511354">
                                    +254 745 511 354
                                </a>
                            </li>
                            <li className="break-all">
                                <a
                                    className="transition hover:text-white"
                                    href="mailto:info@omytechkenya.co.ke"
                                >
                                    info@omytechkenya.co.ke
                                </a>
                            </li>
                            <li>Mon–Fri: 9 AM–6 PM</li>
                        </ul>
                    </address>
                </ScrollReveal>

                <div className="border-t border-white/15">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 text-[11px] text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between">
                        <p>© {new Date().getFullYear()} OMYTECH Kenya. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link className="transition hover:text-white" href="/privacy">
                                Privacy policy
                            </Link>
                            <Link className="transition hover:text-white" href="/terms">
                                Terms of service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
