import { FiArrowRight } from 'react-icons/fi';
import { colors } from '../../config/colors';

export default function CtaSection() {
  return (
    <section className="bg-[#f5f8fc] py-16 text-[#071a2d] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-7 border border-[#dce5ef] bg-white p-8 shadow-[0_18px_50px_rgba(7,26,45,0.08)] sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: colors.primary }}
            >
              Let&apos;s build together
            </p>
            <h2
              className="mt-3 text-3xl font-black leading-tight sm:text-4xl"
              style={{
                fontFamily: 'var(--font-glacial-indifference), sans-serif',
              }}
            >
              Ready to turn your next idea into a digital success story?
            </h2>
          </div>

          <a
            href="/quote"
            className="group inline-flex w-fit items-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#12385b]"
          >
            Get a Quote
            <FiArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
