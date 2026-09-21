import type { Metadata } from "next";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiCloud,
  FiLayers,
  FiRefreshCw,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";
import { colors } from "../../config/colors";

export const metadata: Metadata = {
  title: "Solutions | OMYTECH Kenya",
  description:
    "Practical digital solutions that connect your people, processes, customers, and growth goals.",
};

const solutionPaths = [
  {
    title: "Launch something new",
    description:
      "Turn an idea into a clear, credible digital product with the strategy, design, and technology to get it moving.",
    icon: FiLayers,
    accent: "01",
    tags: ["Discovery", "Product design", "MVP development"],
  },
  {
    title: "Run smarter operations",
    description:
      "Replace scattered tools and repetitive work with connected systems that give your team more time and better visibility.",
    icon: FiRefreshCw,
    accent: "02",
    tags: ["Automation", "Custom software", "Integrations"],
  },
  {
    title: "Reach more customers",
    description:
      "Build a stronger digital presence with experiences and campaigns that make your brand easier to discover and trust.",
    icon: FiBarChart2,
    accent: "03",
    tags: ["Web presence", "Digital marketing", "Social media"],
  },
  {
    title: "Scale with confidence",
    description:
      "Improve the digital foundation behind your growth with reliable platforms, insights, support, and continuous improvement.",
    icon: FiCloud,
    accent: "04",
    tags: ["Cloud support", "Analytics", "Optimisation"],
  },
];

const buildingBlocks = [
  { label: "Your customers", icon: FiUsers },
  { label: "Your operations", icon: FiRefreshCw },
  { label: "Your digital product", icon: FiShoppingCart },
];

const principles = [
  "We start with the business problem, not a technology trend.",
  "We connect design, development, marketing, and support around one goal.",
  "We build in practical stages so you can see progress and make decisions early.",
];

export default function SolutionsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#071a2d]">
      <section className="relative overflow-hidden border-b border-[#dce5ef] bg-[#f5f8fc] py-16 sm:py-20 lg:py-28">
        <div className="absolute -right-24 top-12 h-64 w-64 border border-[#b9d8eb] opacity-60 sm:h-80 sm:w-80" />
        <div className="absolute right-12 top-28 h-32 w-32 border border-[#cfe5f2] bg-white/50 sm:right-24 sm:h-44 sm:w-44" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: colors.primary }}
            >
              Solutions for momentum
            </p>
            <h1
              className="mt-4 max-w-3xl text-[2.7rem] font-black leading-[1.06] sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Turn digital friction into forward motion.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#536579] sm:text-lg">
              The best technology feels simple to the people using it. We bring
              strategy, design, software, and growth together to make your
              business easier to run and easier to choose.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b]"
              >
                Find your opportunity
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#solution-paths"
                className="inline-flex items-center justify-center px-2 py-3.5 text-sm font-semibold text-[#0b78b7] hover:text-[#071a2d]"
              >
                Explore solutions
              </a>
            </div>
          </div>

          <div className="relative border border-[#cfe0ee] bg-white p-5 shadow-[0_22px_55px_rgba(7,26,45,0.08)] sm:p-7">
            <div className="flex items-center justify-between border-b border-[#e6eef5] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase text-[#6b7d90]">
                  The connected view
                </p>
                <p
                  className="mt-2 text-xl font-bold"
                  style={{
                    fontFamily: "var(--font-glacial-indifference), sans-serif",
                  }}
                >
                  One system. More momentum.
                </p>
              </div>
              <div
                className="flex h-11 w-11 items-center justify-center bg-[#e8f6fc]"
                style={{ color: colors.primary }}
              >
                <FiLayers className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <div className="grid gap-3 pt-5">
              {buildingBlocks.map(({ label, icon: Icon }, index) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border border-[#dce5ef] bg-[#f8fbfd] p-3.5"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center bg-white"
                    style={{ color: colors.primary }}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold">{label}</span>
                  {index < buildingBlocks.length - 1 && (
                    <span
                      className="ml-auto h-px w-6 bg-[#9ccce5]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-[#536579]">
              We help the moving parts work together, so every improvement
              supports the bigger picture.
            </p>
          </div>
        </div>
      </section>

      <section id="solution-paths" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: colors.primary }}
            >
              Choose your next move
            </p>
            <h2
              className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Start with the challenge in front of you.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#536579]">
              Every business is at a different stage. These solution paths help
              us focus the right capabilities around the result you need most.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2">
            {solutionPaths.map(
              ({ title, description, icon: Icon, accent, tags }) => (
                <article
                  key={title}
                  className="group border border-[#dce5ef] bg-white p-6 shadow-[0_12px_35px_rgba(7,26,45,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#4ca7df]/60 hover:shadow-[0_18px_40px_rgba(7,26,45,0.1)] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center bg-[#eef6fb]"
                      style={{ color: colors.primary }}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold text-[#9aabba]">
                      {accent}
                    </span>
                  </div>
                  <h3
                    className="mt-7 text-2xl font-bold"
                    style={{
                      fontFamily:
                        "var(--font-glacial-indifference), sans-serif",
                    }}
                  >
                    {title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#536579]">
                    {description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#dce5ef] px-2.5 py-1 text-[11px] font-semibold text-[#6b7d90]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f7fb] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: colors.primary }}
            >
              Built around reality
            </p>
            <h2
              className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Useful beats impressive every time.
            </h2>
          </div>

          <div className="grid gap-4">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-start gap-3 border border-[#dce5ef] bg-white p-5 sm:p-6"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-[#e7f5fc]"
                  style={{ color: colors.primary }}
                >
                  <FiCheck className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm leading-6 text-[#536579] sm:text-base">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-7 border border-[#dce5ef] bg-[#f5f8fc] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-2xl">
              <p
                className="text-xs font-semibold uppercase"
                style={{ color: colors.primary }}
              >
                Your next move starts here
              </p>
              <h2
                className="mt-3 text-3xl font-black leading-tight sm:text-4xl"
                style={{
                  fontFamily: "var(--font-glacial-indifference), sans-serif",
                }}
              >
                Tell us what is getting in the way.
              </h2>
            </div>
            <a
              href="/contact"
              className="inline-flex w-fit items-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b]"
            >
              Talk to our team
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
