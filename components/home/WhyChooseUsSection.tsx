import Image from 'next/image';
import { FiArrowRight, FiCheckCircle, FiShield, FiTrendingUp } from 'react-icons/fi';
import { colors } from '../../config/colors';

const points = [
  'Product-first thinking that matches business goals.',
  'Clear communication and honest delivery timelines.',
  'Systems designed to scale with your company.',
  'Reliable support after launch and beyond.',
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 text-slate-900 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div className="relative overflow-hidden border border-slate-200 bg-slate-100">
          <div className="absolute inset-0">
            <Image
              src="/assets/herobanner.png"
              alt="OMYTECH Kenya working on digital growth projects"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#061827]/75" />
          </div>

          <div className="relative flex min-h-[360px] flex-col justify-end p-6 text-white sm:min-h-[420px] sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-white/5" style={{ borderRadius: 0 }}>
                <FiTrendingUp className="h-5 w-5" style={{ color: colors.primaryLight }} aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold uppercase sm:text-lg">Results driven</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-white/15 bg-[#0b1f38]/75 p-4">
                <p className="text-3xl font-black" style={{ color: colors.primaryLight }}>5+</p>
                <p className="mt-2 text-sm uppercase text-slate-200">Years of growth</p>
              </div>
              <div className="border border-white/15 bg-[#0b1f38]/75 p-4">
                <p className="text-3xl font-black" style={{ color: colors.primaryLight }}>100%</p>
                <p className="mt-2 text-sm uppercase text-slate-200">Custom approach</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p
            className="text-xs font-semibold uppercase"
            style={{ color: colors.primary }}
          >
            Why choose us
          </p>

          <h2
            className="mt-4 text-3xl font-black sm:text-4xl"
            style={{
              fontFamily: 'var(--font-glacial-indifference), sans-serif',
            }}
          >
            Strategy, creativity, and execution under one roof.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            We blend technology, design thinking, and business understanding to deliver digital experiences
            that are practical, scalable, and made to grow with your goals.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 items-center justify-center border border-[#2a5b87]/50 bg-[#edf8ff]"
                  style={{ borderRadius: 0 }}
                >
                  <FiCheckCircle className="h-4 w-4" style={{ color: colors.primary }} aria-hidden="true" />
                </span>
                <span className="text-base text-slate-700">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              style={{ borderRadius: 0 }}
            >
              Book a consultation
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="inline-flex items-center gap-2 border border-[#dfeaf5] bg-[#f5f9ff] px-4 py-3.5 text-sm font-medium text-slate-700">
              <FiShield className="h-4 w-4" style={{ color: colors.primary }} aria-hidden="true" />
              Trusted delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
