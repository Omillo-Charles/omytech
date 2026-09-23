"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiGrid,
  FiZap,
  FiFolder,
  FiInfo,
  FiMail,
  FiUser,
  FiMenu,
  FiStar,
} from "react-icons/fi";
import { colors } from "../../config/colors";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const mobilePrimaryLinks = [
  { label: "Home", icon: FiHome },
  { label: "Services", icon: FiGrid },
  { label: "Contact", icon: FiMail },
];

const mobileMoreLinks = [
  { label: "Solutions", icon: FiZap },
  { label: "Portfolio", icon: FiFolder },
  { label: "About", icon: FiInfo },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header
      style={{ background: "#071a2d" }}
      className="sticky top-0 z-50 border-b border-[#1d3d5f]/80 shadow-[0_18px_40px_rgba(2,10,20,0.38)]"
    >
      <nav
        className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8"
        style={{ fontFamily: "var(--font-mulish), sans-serif" }}
      >
        <div className="flex items-center justify-between gap-3 md:hidden">
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="OMYTECH Kenya home"
          >
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#2a5b87]/70 bg-[#0d2340] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              <Image
                src="/assets/logo2.png"
                alt="OMYTECH Kenya logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span
                className="text-base font-bold uppercase"
                style={{
                  fontFamily: "var(--font-glacial-indifference), sans-serif",
                  color: colors.white,
                }}
              >
                OMYTECH
              </span>
              <span
                className="mt-1 text-[9px] font-semibold uppercase"
                style={{ color: colors.primaryLight }}
              >
                Kenya
              </span>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <a
              href="/auth"
              aria-label="Sign in or create an account"
              aria-current={isActive("/auth") ? "page" : undefined}
              className={`inline-flex h-10 w-10 items-center justify-center transition-colors duration-200 hover:text-[#9ad9ff] ${isActive("/auth") ? "text-[#9ad9ff]" : "text-white"}`}
            >
              <FiUser className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-[#9ad9ff]"
            >
              <FiMenu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="-mx-4 mt-2 border-t border-white/10 pt-2 md:hidden">
          <div className="flex items-stretch justify-center gap-2 px-4">
            {mobilePrimaryLinks.map(({ label, icon: Icon }) => {
              const href =
                label === "Home"
                  ? "/"
                  : label === "Services"
                    ? "/services"
                    : "/contact";
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`flex flex-1 items-center justify-center gap-1.5 border-b-2 px-1 py-1.5 text-center text-[10px] font-semibold uppercase transition hover:text-[#9ad9ff] ${isActive(href) ? "border-[#3db9f1] text-[#9ad9ff]" : "border-transparent"}`}
                  style={{
                    color: isActive(href) ? colors.primaryLight : colors.white,
                  }}
                >
                  <Icon
                    className="h-3.5 w-3.5 shrink-0 self-center"
                    aria-hidden="true"
                  />
                  <span className="flex items-center leading-none">
                    {label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mt-2 space-y-2 border-t border-white/10 pt-3 md:hidden">
            {mobileMoreLinks.map(({ label, icon: Icon }) => {
              const href =
                label === "Home"
                  ? "/"
                  : label === "Portfolio"
                    ? "/portfolio"
                    : "/about";
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition hover:border-[#2a5b87]/70 hover:bg-[#0e2542] ${isActive(href) ? "border-[#2a5b87]/70 bg-[#0e2542]" : "border-transparent"}`}
                  style={{ color: colors.white }}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{label}</span>
                </a>
              );
            })}

            <a
              href="/quote"
              aria-current={isActive("/quote") ? "page" : undefined}
              className={`flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold shadow-[0_10px_25px_rgba(11,120,183,0.35)] transition hover:brightness-110 ${isActive("/quote") ? "ring-2 ring-[#9ad9ff] ring-offset-2 ring-offset-[#071a2d]" : ""}`}
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                color: colors.white,
              }}
            >
              <FiStar className="h-4 w-4" aria-hidden="true" />
              <span>Get a Quote</span>
            </a>
          </div>
        )}

        <div className="hidden items-center justify-between md:flex">
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="OMYTECH Kenya home"
          >
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#2a5b87]/70 bg-[#0d2340] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              <Image
                src="/assets/logo2.png"
                alt="OMYTECH Kenya logo"
                width={44}
                height={44}
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span
                className="text-lg font-bold uppercase"
                style={{
                  fontFamily: "var(--font-glacial-indifference), sans-serif",
                  color: colors.white,
                }}
              >
                OMYTECH
              </span>
              <span
                className="mt-1 text-[10px] font-semibold uppercase"
                style={{ color: colors.primaryLight }}
              >
                Kenya
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`border-b-2 pb-1 text-sm font-medium transition-all duration-200 hover:text-white/80 ${isActive(item.href) ? "border-[#3db9f1]" : "border-transparent"}`}
                style={{
                  color: isActive(item.href)
                    ? colors.primaryLight
                    : colors.white,
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/auth"
              aria-label="Sign in or create an account"
              aria-current={isActive("/auth") ? "page" : undefined}
              className={`inline-flex h-11 w-11 items-center justify-center transition-colors duration-200 hover:text-[#9ad9ff] ${isActive("/auth") ? "text-[#9ad9ff]" : "text-white"}`}
            >
              <FiUser className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="/quote"
              aria-current={isActive("/quote") ? "page" : undefined}
              className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold shadow-[0_10px_25px_rgba(11,120,183,0.35)] transition-all duration-200 hover:brightness-110 sm:inline-flex ${isActive("/quote") ? "ring-2 ring-[#9ad9ff] ring-offset-2 ring-offset-[#071a2d]" : ""}`}
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                color: colors.white,
              }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
