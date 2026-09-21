import type { Metadata } from "next";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiCalendar,
  FiChevronRight,
  FiCreditCard,
  FiGlobe,
  FiHeart,
  FiLayers,
  FiMonitor,
  FiShoppingBag,
  FiUsers,
} from "react-icons/fi";
import { colors } from "../../config/colors";

export const metadata: Metadata = {
  title: "Portfolio | OMYTECH Kenya",
  description:
    "Explore websites, e-commerce platforms, media experiences, church platforms, and event registration systems built by OMYTECH Kenya.",
};

const projects = [
  {
    name: "Castra Households",
    type: "E-commerce & retail",
    location: "Nairobi, Kenya",
    url: "https://castrahouseholds.co.ke",
    image: "/assets/portfolio/castrahouseholds.webp",
    tone: "bg-[#eaf6fb] text-[#0b78b7]",
    icon: FiShoppingBag,
    description:
      "A two-in-one e-commerce experience bringing Castra Households and Castra Kicks together under one digital storefront, with household products and footwear in a single shopping journey.",
    features: [
      "Multi-brand storefront",
      "Product catalogues",
      "E-commerce experience",
    ],
  },
  {
    name: "Mhengagee Media",
    type: "Media & publishing",
    location: "Nairobi, Kenya",
    url: "https://mhengagee.co.ke",
    image: "/assets/portfolio/mhengageemedia.webp",
    tone: "bg-[#fff4e8] text-[#b45c16]",
    icon: FiMonitor,
    description:
      "A rich media platform for a growing Nairobi startup, designed to showcase creative work, publish news, and give the brand a digital home built for discovery.",
    features: [
      "Portfolio showcase",
      "News display",
      "Media-focused experience",
    ],
  },
  {
    name: "Soltec Electric",
    type: "Business website",
    location: "Nairobi, Kenya",
    url: "https://soltecelectric.co.ke",
    image: "/assets/portfolio/soltecelectric.webp",
    tone: "bg-[#fff8dc] text-[#9b7410]",
    icon: FiGlobe,
    description:
      "A professional web presence for an electrical company, built to communicate expertise, build trust, and make it easier for customers to take the next step.",
    features: [
      "Service presentation",
      "Lead-focused structure",
      "Responsive website",
    ],
  },
  {
    name: "New Testament Church of God Kenya",
    type: "Church platform",
    location: "Kenya",
    url: "https://ntcogk.vercel.app",
    image: "/assets/portfolio/ntcogk.webp",
    tone: "bg-[#f0edff] text-[#6250a7]",
    icon: FiHeart,
    description:
      "A welcoming church website that helps the New Testament Church of God Kenya share its identity, connect with its community, and communicate its mission online.",
    features: [
      "Church information",
      "Community connection",
      "Mission-led content",
    ],
  },
  {
    name: "NTCOGK Youth Explosion",
    type: "Events & registration",
    location: "Kenya",
    url: "https://youthexplosion.vercel.app",
    image: "/assets/portfolio/youthexplosion.webp",
    tone: "bg-[#eaf9ee] text-[#26834b]",
    icon: FiCalendar,
    description:
      "A dedicated event platform for Youth Explosion, bringing registration, payment flows, and event information together in one clear experience for attendees.",
    features: ["Event registration", "Payment support", "Attendee experience"],
  },
  {
    name: "OMYTECH Kenya",
    type: "Digital solutions",
    location: "Nairobi, Kenya",
    url: "https://omytechkenya.co.ke",
    image: "/assets/logo2.png",
    tone: "bg-[#eaf6fb] text-[#0b78b7]",
    icon: FiLayers,
    description:
      "The OMYTECH Kenya digital home, bringing our services, solutions, portfolio, and project conversations together in one clear experience for businesses ready to move forward.",
    features: ["Brand experience", "Service discovery", "Project enquiries"],
  },
];

const capabilities = [
  { label: "Web experiences", icon: FiGlobe },
  { label: "E-commerce", icon: FiShoppingBag },
  { label: "Content platforms", icon: FiMonitor },
  { label: "Registration systems", icon: FiCreditCard },
];

export default function PortfolioPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#071a2d]">
      <section className="relative overflow-hidden border-b border-[#dce5ef] bg-[#f5f8fc] py-16 sm:py-20 lg:py-28">
        <div className="absolute -right-24 top-16 h-64 w-64 border border-[#b9d8eb] opacity-60 sm:h-80 sm:w-80" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 lg:px-8">
          <div>
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: colors.primary }}
            >
              Selected work
            </p>
            <h1
              className="mt-4 max-w-3xl text-[2.7rem] font-black leading-[1.06] sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Digital work made for real organisations.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#536579] sm:text-lg">
              From online stores and media platforms to church websites and
              event systems, we build digital experiences around the way people
              actually work, connect, and grow.
            </p>
          </div>

          <div className="border border-[#cfe0ee] bg-white p-6 shadow-[0_18px_50px_rgba(7,26,45,0.07)] sm:p-7">
            <p className="text-xs font-semibold uppercase text-[#6b7d90]">
              What we build
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {capabilities.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border border-[#e1eaf1] bg-[#f8fbfd] p-3"
                >
                  <Icon
                    className="h-4 w-4"
                    style={{ color: colors.primary }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p
                className="text-xs font-semibold uppercase"
                style={{ color: colors.primary }}
              >
                The projects
              </p>
              <h2
                className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
                style={{
                  fontFamily: "var(--font-glacial-indifference), sans-serif",
                }}
              >
                Different industries. One standard of care.
              </h2>
            </div>
            <span className="hidden text-sm font-semibold text-[#9aabba] sm:block">
              01 / {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2">
            {projects.map(
              (
                {
                  name,
                  type,
                  location,
                  url,
                  image,
                  tone,
                  icon: Icon,
                  description,
                  features,
                },
                index,
              ) => (
                <article
                  key={name}
                  className={`group flex flex-col border border-[#dce5ef] bg-white p-6 shadow-[0_12px_35px_rgba(7,26,45,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#4ca7df]/60 hover:shadow-[0_18px_40px_rgba(7,26,45,0.1)] sm:p-8 ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-8" : ""}`}
                >
                  <div
                    className={`relative min-h-[190px] overflow-hidden ${tone} ${index === 0 ? "lg:min-h-full" : ""}`}
                  >
                    <Image
                      src={image}
                      alt={`${name} logo`}
                      fill
                      className="object-contain p-10 transition duration-500 group-hover:scale-105 sm:p-12"
                    />
                  </div>

                  <div className="flex flex-1 flex-col pt-6 lg:pt-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className="text-xs font-semibold uppercase"
                          style={{ color: colors.primary }}
                        >
                          {type}
                        </p>
                        <h3
                          className="mt-3 text-2xl font-bold sm:text-3xl"
                          style={{
                            fontFamily:
                              "var(--font-glacial-indifference), sans-serif",
                          }}
                        >
                          {name}
                        </h3>
                      </div>
                      <Icon
                        className="mt-1 h-5 w-5 shrink-0"
                        style={{ color: colors.primary }}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#536579]">
                      {description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {features.map((feature) => (
                        <span
                          key={feature}
                          className="border border-[#dce5ef] px-2.5 py-1 text-[11px] font-semibold text-[#6b7d90]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#e6eef5] pt-5">
                      <span className="text-xs font-medium text-[#8a9aaa]">
                        {location}
                      </span>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b78b7] transition hover:text-[#071a2d]"
                      >
                        Visit project
                        <FiArrowUpRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f7fb] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: colors.primary }}
            >
              Your project next
            </p>
            <h2
              className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Have something worth putting online?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#536579]">
              Tell us what you are building, and we will help you find the right
              digital shape for it.
            </p>
          </div>
          <a
            href="/quote"
            className="inline-flex w-fit items-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b]"
          >
            Start your project
            <FiChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
