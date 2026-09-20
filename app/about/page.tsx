import type { Metadata } from 'next';
import Image from 'next/image';
import {
  FiArrowRight,
  FiCompass,
  FiHeart,
  FiLayers,
  FiShield,
  FiTarget,
} from 'react-icons/fi';
import { colors } from '../../config/colors';

export const metadata: Metadata = {
  title: 'About | OMYTECH Kenya',
  description:
    'Learn how OMYTECH Kenya combines strategy, design, technology, and care to build digital experiences that move businesses forward.',
};

const values = [
  {
    title: 'Clarity over complexity',
    description: 'We make technology easier to understand, use, and act on, for both your team and your customers.',
    icon: FiCompass,
  },
  {
    title: 'Purpose before polish',
    description: 'Good design should look considered, but it should work even harder behind the scenes.',
    icon: FiTarget,
  },
  {
    title: 'Built for the long run',
    description: 'We create flexible foundations that can support your next stage, not just your next launch.',
    icon: FiLayers,
  },
  {
    title: 'People at the centre',
    description: 'The best digital products respect people’s time, context, goals, and everyday reality.',
    icon: FiHeart,
  },
];

const commitments = [
  'We listen before we recommend.',
  'We explain decisions in plain language.',
  'We keep momentum visible throughout the work.',
  'We stay invested after launch.',
];

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#071a2d]">
      <section className="border-b border-[#dce5ef] bg-[#f5f8fc] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase" style={{ color: colors.primary }}>
              About OMYTECH
            </p>
            <h1
              className="mt-4 max-w-3xl text-[2.7rem] font-black leading-[1.06] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}
            >
              Technology with a human point of view.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#536579] sm:text-lg">
              OMYTECH Kenya helps ambitious businesses use digital tools with more confidence. We combine strategy, design, development, and growth thinking to turn good ideas into useful experiences.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b]"
            >
              Work with us
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="relative min-h-[360px] overflow-hidden border border-[#cfe0ee] bg-[#dbeaf3] shadow-[0_20px_55px_rgba(7,26,45,0.1)] sm:min-h-[440px]">
            <Image
              src="/assets/herobanner.png"
              alt="The OMYTECH Kenya team collaborating on digital projects"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#061827]/45" />
            <div className="absolute bottom-5 left-5 right-5 border border-white/20 bg-[#071a2d]/85 p-5 text-white backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
              <p className="text-xs font-semibold uppercase" style={{ color: colors.primaryLight }}>
                Based in Kenya
              </p>
              <p className="mt-2 text-lg font-semibold leading-7">
                Local understanding. Digital ambition without limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase" style={{ color: colors.primary }}>
              Why we exist
            </p>
            <h2
              className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
              style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}
            >
              Digital should make business feel more possible.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#536579] sm:text-lg">
            <p>
              Too many digital projects begin with a tool and end with a system nobody enjoys using. We believe the starting point should be different: understand the people, the pressure, and the opportunity first.
            </p>
            <p>
              That is why our work brings business thinking and technology together. Whether we are shaping a brand presence, building software, or helping a team grow online, we focus on making the next step clearer and more valuable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f7fb] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase" style={{ color: colors.primary }}>
              What guides us
            </p>
            <h2
              className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
              style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}
            >
              The standard behind the work.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description, icon: Icon }) => (
              <article key={title} className="border border-[#dce5ef] bg-white p-6 shadow-[0_12px_35px_rgba(7,26,45,0.05)] sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center bg-[#e8f6fc]" style={{ color: colors.primary }}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#536579]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase" style={{ color: colors.primary }}>
              Our commitment
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>
              A partner who stays close to the work.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#536579]">
              The strongest results come from good collaboration. We keep communication open, decisions grounded, and the work connected to the outcome you care about.
            </p>
          </div>

          <div className="border border-[#dce5ef] bg-[#f5f8fc] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-[#dce5ef] pb-5">
              <div className="flex h-11 w-11 items-center justify-center bg-white" style={{ color: colors.primary }}>
                <FiShield className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold">How we show up</p>
                <p className="mt-1 text-xs text-[#6b7d90]">From first conversation to beyond launch</p>
              </div>
            </div>
            <ul className="space-y-4">
              {commitments.map((commitment) => (
                <li key={commitment} className="flex items-start gap-3 text-sm leading-6 text-[#536579]">
                  <span className="mt-1 h-2 w-2 shrink-0 bg-[#0b78b7]" aria-hidden="true" />
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-7 border border-[#dce5ef] bg-[#f5f8fc] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase" style={{ color: colors.primary }}>
                Let&apos;s build what matters
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>
                Have a challenge worth solving?
              </h2>
            </div>
            <a href="/contact" className="inline-flex w-fit items-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b]">
              Start a conversation
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}