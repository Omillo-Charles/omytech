import Image from "next/image";
import { FaGithub, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import {
  FiArrowRight,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { colors } from "../../config/colors";

const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "Digital Solutions", href: "/solutions" },
  ],
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/omyt3ch",
    icon: FaInstagram,
  },
  { label: "TikTok", href: "https://www.tiktok.com/@omyt3ch", icon: FaTiktok },
  { label: "X", href: "https://x.com/omyt3ch", icon: FaXTwitter },
  { label: "GitHub", href: "https://github.com/omyt3ch", icon: FaGithub },
];

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t border-white/10"
      style={{ background: "#071a2d", color: colors.white }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#2a5b87]/70 bg-[#0d2340]">
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
                  className="text-lg font-bold uppercase"
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
            </div>

            <p
              className="max-w-sm text-sm leading-7 opacity-80"
              style={{ fontFamily: "var(--font-mulish), sans-serif" }}
            >
              Helping businesses grow through modern web platforms, mobile
              applications, and digital innovation built for real-world impact.
            </p>

            <div className="mt-6">
              <p
                className="text-xs font-semibold uppercase"
                style={{ color: colors.primaryLight }}
              >
                Follow us
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${label} @omyt3ch`}
                    title={`${label} @omyt3ch`}
                    className="flex h-9 w-9 items-center justify-center border border-[#2a5b87]/70 text-white opacity-80 transition hover:border-[#4ca7df] hover:bg-[#0d2340] hover:opacity-100"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3
              className="mb-5 text-sm font-semibold uppercase"
              style={{ color: colors.primaryLight }}
            >
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="opacity-80 transition hover:opacity-100"
                    style={{ color: colors.white }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-5 text-sm font-semibold uppercase"
              style={{ color: colors.primaryLight }}
            >
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="opacity-80 transition hover:opacity-100"
                    style={{ color: colors.white }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-5 text-sm font-semibold uppercase"
              style={{ color: colors.primaryLight }}
            >
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 opacity-80">
                <FiPhone className="h-4 w-4" aria-hidden="true" />
                <span>+254745511354</span>
              </li>
              <li className="flex min-w-0 items-start gap-3 opacity-80">
                <FiMail className="h-4 w-4" aria-hidden="true" />
                <span className="break-all">info@omytechkenya.co.ke</span>
              </li>
              <li className="flex min-w-0 items-start gap-3 opacity-80">
                <FiMapPin className="h-4 w-4" aria-hidden="true" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex min-w-0 items-start gap-3 opacity-80">
                <FiGlobe className="h-4 w-4" aria-hidden="true" />
                <span className="break-all">omytechkenya.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm opacity-70" style={{ color: colors.white }}>
            © 2026 OMYTECH Kenya. All rights reserved.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-semibold transition hover:brightness-110"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
              color: colors.white,
            }}
          >
            Let&apos;s Talk
            <FiArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
