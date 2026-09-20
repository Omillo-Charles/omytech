import Image from 'next/image';
import { FiArrowRight, FiCheckCircle, FiCode, FiMonitor, FiSmartphone } from 'react-icons/fi';
import { colors } from '../../config/colors';

const highlights = [
  { label: 'Web Development', icon: FiMonitor },
  { label: 'Mobile Apps', icon: FiSmartphone },
  { label: 'Custom Solutions', icon: FiCode },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/herobanner.png"
          alt="OMYTECH Kenya team collaborating on digital projects"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#061827]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(18,113,179,0.35),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(0,168,240,0.18),_transparent_30%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-114px)] max-w-7xl items-center px-4 py-16 sm:min-h-[620px] sm:px-6 sm:py-20 lg:min-h-[100svh] lg:px-8">
        <div className="max-w-2xl text-white">
          <h1
            className="max-w-xl text-[2.6rem] font-black leading-[1.14] sm:text-5xl lg:text-6xl"
            style={{
              fontFamily: 'var(--font-glacial-indifference), sans-serif',
            }}
          >
            We build digital experiences that move businesses forward.
          </h1>

          <p
            className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8"
            style={{ fontFamily: 'var(--font-mulish), sans-serif' }}
          >
            OMYTECH Kenya delivers web development, mobile applications, and custom tech solutions that
            help organizations innovate, scale, and compete with confidence.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold shadow-[0_16px_32px_rgba(11,120,183,0.35)] transition hover:brightness-110"
              style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`, color: colors.white, borderRadius: 0 }}
            >
              Get a Quote
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              style={{ borderRadius: 0 }}
            >
              Explore Services
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
            {highlights.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-[#0d2340]/65 px-3 py-2 text-sm text-slate-100 backdrop-blur-sm"
                style={{ fontFamily: 'var(--font-mulish), sans-serif' }}
              >
                <Icon className="h-4 w-4" style={{ color: colors.primaryLight }} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
