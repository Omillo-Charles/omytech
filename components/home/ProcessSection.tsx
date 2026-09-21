import { colors } from "../../config/colors";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn your goals, challenges, and audience so the solution fits the real business need.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We shape the right user experience and technical architecture before building begins.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We build, test, refine, and launch with support in place for continued growth.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#f2f7fb] py-16 text-slate-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-xs font-semibold uppercase"
            style={{ color: colors.primary }}
          >
            Our process
          </p>
          <h2
            className="mt-4 text-3xl font-black sm:text-4xl"
            style={{
              fontFamily: "var(--font-glacial-indifference), sans-serif",
            }}
          >
            A simple path from vision to delivery.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="border border-slate-200 bg-white p-6 sm:p-7"
              style={{ borderRadius: 0 }}
            >
              <p
                className="text-sm font-bold uppercase"
                style={{ color: colors.primary }}
              >
                {number}
              </p>
              <h3
                className="mt-5 text-2xl font-black"
                style={{
                  fontFamily: "var(--font-glacial-indifference), sans-serif",
                }}
              >
                {title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
