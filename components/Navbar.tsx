"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="bg-white/95 text-slate-600">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-[10px] font-semibold sm:justify-between sm:px-8 sm:text-xs">
                    <span className="hidden sm:inline">Your digital growth partner</span>
                    <a
                        className="transition hover:text-blue-700 sm:ml-auto"
                        href="mailto:info@omytechkenya.co.ke"
                    >
                        info@omytechkenya.co.ke
                    </a>
                    <span aria-hidden="true" className="hidden h-3 w-px bg-slate-300 sm:inline-block" />
                    <a
                        className="transition hover:text-blue-700"
                        href="tel:+254745511354"
                    >
                        +254 745 511 354
                    </a>
                </div>
            </div>

            <div className="border-y border-white/15 bg-slate-950/55 text-white backdrop-blur-sm">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[76px] sm:px-8">
                    <Link
                        aria-label="OMYTECH Kenya home"
                        className="flex items-center gap-3"
                        href="/#home"
                        onClick={() => setMenuOpen(false)}
                    >
                        <Image
                            alt=""
                            className="h-10 w-10 rounded-full bg-white object-contain sm:h-11 sm:w-11"
                            height={44}
                            priority
                            src="/assets/logo1.png"
                            width={44}
                        />
                        <span className="leading-tight">
                            <span className="block font-heading text-base font-extrabold sm:text-lg">
                                OMYTECH
                            </span>
                            <span className="block text-[9px] font-semibold text-slate-300">
                                KENYA
                            </span>
                        </span>
                    </Link>

                    <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                className="text-xs font-bold uppercase text-white/85 transition hover:text-cyan-300"
                                href={link.href}
                                key={link.label}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            className="inline-flex items-center gap-2 rounded-sm bg-blue-600 px-4 py-3 text-[10px] font-extrabold uppercase transition hover:bg-cyan-500 xl:px-5"
                            href="/#contact"
                        >
                            Get started <span aria-hidden="true">→</span>
                        </Link>
                    </nav>

                    <button
                        aria-controls="mobile-navigation"
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded border border-white/25 lg:hidden"
                        onClick={() => setMenuOpen((open) => !open)}
                        type="button"
                    >
                        <span className="h-0.5 w-5 bg-white" />
                        <span className="h-0.5 w-5 bg-white" />
                        <span className="h-0.5 w-5 bg-white" />
                    </button>
                </div>

                {menuOpen && (
                    <nav
                        aria-label="Mobile navigation"
                        className="absolute inset-x-0 top-full border-t border-white/10 bg-slate-950/95 px-5 py-4 shadow-xl backdrop-blur-md lg:hidden"
                        id="mobile-navigation"
                    >
                        <ul className="mx-auto flex max-w-7xl flex-col">
                            {navLinks.map((link) => (
                                <li className="border-b border-white/10 last:border-0" key={link.label}>
                                    <Link
                                        className="block py-3 text-sm font-semibold text-white/90 transition hover:text-cyan-300"
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}
