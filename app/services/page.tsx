import type { Metadata } from 'next';
import {
  FiArrowRight,
  FiCheck,
  FiCloud,
  FiCode,
  FiGlobe,
  FiMonitor,
  FiPenTool,
  FiShare2,
  FiShoppingBag,
  FiSmartphone,
  FiTrendingUp,
} from 'react-icons/fi';
import { colors } from '../../config/colors';

export const metadata: Metadata = {
  title: 'Services | OMYTECH Kenya',
  description:
    'Explore web development, mobile apps, UI/UX design, digital marketing, social media management, and custom software services from OMYTECH Kenya.',
};

const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'High-performing websites and web platforms that communicate your value clearly, convert visitors, and grow with your business.',
    icon: FiMonitor,
    tags: ['Business websites', 'Web platforms', 'E-commerce'],
  },
  {
    number: '02',
    title: 'Mobile App Development',
    description:
      'Useful, intuitive mobile experiences for Android and iOS that make it easier for customers and teams to stay connected.',
    icon: FiSmartphone,
    tags: ['Android & iOS', 'Product apps', 'Mobile-first UX'],
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description:
      'Clear user journeys and polished interfaces that make complex products easier to understand, use, and remember.',
    icon: FiPenTool,
    tags: ['User research', 'Wireframes', 'Design systems'],
  },
  {
    number: '04',
    title: 'Custom Software',
    description:
      'Purpose-built software that brings your workflows, data, and teams together while removing repetitive manual work.',
    icon: FiCode,
    tags: ['Business systems', 'Automation', 'Integrations'],
  },
  {
    number: '05',
    title: 'Social Media Management',
    description:
      'Consistent, thoughtful social media presence that keeps your brand visible, relevant, and connected to its audience.',
    icon: FiShare2,
    tags: ['Content planning', 'Community', 'Brand voice'],
  },
  {
    number: '06',
    title: 'Digital Marketing',
    description:
      'Practical digital campaigns built around your goals, from stronger discoverability to qualified leads and measurable growth.',
    icon: FiTrendingUp,
    tags: ['Campaigns', 'SEO', 'Performance'],
  },
  {
    number: '07',
    title: 'E-commerce Solutions',
    description:
      'Reliable online stores with smooth customer journeys, secure payments, and the tools you need to manage your growth.',
    icon: FiShoppingBag,
    tags: ['Online stores', 'Payments', 'Product journeys'],
  },
  {
    number: '08',
    title: 'Cloud & Digital Support',
    description:
      'Ongoing technical care, hosting guidance, and improvements that keep your digital products dependable after launch.',
    icon: FiCloud,
    tags: ['Maintenance', 'Hosting', 'Technical support'],
  },
];

const principles = [
  'Business goals come before technology choices.',
  'Every solution is designed around real people and real workflows.',
  'We communicate clearly from the first conversation to launch.',
];

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#071a2d]">
      <section className="border-b border-[#dce5ef] bg-[#f5f8fc] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase" style={{ color: colors.primary }}>
              What we do
            </p>
            <h1
              className="mt-4 max-w-3xl text-[2.7rem] font-black leading-[1.08] sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: 'var(--font-glacial-indifference), sans-serif',
              }}
            >
              Digital services that move your business forward.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#536579] sm:text-lg">
              From your first website to a complete digital ecosystem, we help businesses build, launch, and grow with technology that makes sense.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b]"
            >
              Start a conversation
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="border border-[#cfe0ee] bg-white p-6 shadow-[0_18px_50px_rgba(7,26,45,0.07)] sm:p-8">
            <div className="flex items-center gap-3 border-b border-[#e6eef5] pb-5">
              <div className="flex h-11 w-11 items-center justify-center bg-[#eef6fb]" style={{ color: colors.primary }}>
                <FiGlobe className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold">One digital partner</p>
                <p className="mt-1 text-xs text-[#6b7d90]">Strategy, design, technology, and growth</p>
              </div>
            </div>
            <p className="pt-5 text-sm leading-7 text-[#536579]">
              We bring the right mix of creative thinking and technical execution to every project, whether you need one focused service or a complete digital solution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase" style={{ color: colors.primary }}>
              Our capabilities
            </p>
            <h2
              className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
              style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}
            >
              Everything you need to build a stronger digital presence.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ number, title, description, icon: Icon, tags }) => (
              <article
                key={title}
                className="group flex min-h-[300px] flex-col border border-[#dce5ef] bg-white p-6 shadow-[0_12px_35px_rgba(7,26,45,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#4ca7df]/60 hover:shadow-[0_18px_40px_rgba(7,26,45,0.1)] sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#cfe0ee] bg-[#eef6fb]" style={{ color: colors.primary }}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-[#9aabba]">{number}</span>
                </div>
                <h3
                  className="mt-7 text-xl font-bold"
                  style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}
                >
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#536579]">{description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {tags.map((tag) => (
                    <span key={tag} className="border border-[#dce5ef] px-2.5 py-1 text-[11px] font-semibold text-[#6b7d90]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f7fb] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase" style={{ color: colors.primary }}>
              How we work
            </p>
            <h2
              className="mt-4 text-3xl font-black leading-tight sm:text-4xl"
              style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}
            >
              Clear thinking behind every build.
            </h2>
          </div>

          <div className="grid gap-4">
            {principles.map((principle) => (
              <div key={principle} className="flex items-start gap-3 border border-[#dce5ef] bg-white p-5 sm:p-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-[#e7f5fc]" style={{ color: colors.primary }}>
                  <FiCheck className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm leading-6 text-[#536579] sm:text-base">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-7 border border-[#dce5ef] bg-[#f5f8fc] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase" style={{ color: colors.primary }}>
                Have a project in mind?
              </p>
              <h2
                className="mt-3 text-3xl font-black leading-tight sm:text-4xl"
                style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}
              >
                Let&apos;s find the right digital solution for your next step.
              </h2>
            </div>
            <a href="/quote" className="inline-flex w-fit items-center gap-3 bg-[#071a2d] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#12385b]">
              Get a Quote
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
