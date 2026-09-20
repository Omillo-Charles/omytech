import { FiCode, FiMonitor, FiSmartphone, FiZap } from 'react-icons/fi';
import { colors } from '../../config/colors';

const services = [
  {
    title: 'Web Development',
    description:
      'Custom websites and business platforms designed to convert leads, improve trust, and support growth.',
    icon: FiMonitor,
  },
  {
    title: 'Mobile App Development',
    description:
      'User-friendly mobile experiences for Android and iOS that keep your customers engaged on the go.',
    icon: FiSmartphone,
  },
  {
    title: 'Custom Software',
    description:
      'Tailored digital tools and internal systems that automate operations and simplify daily workflows.',
    icon: FiCode,
  },
  {
    title: 'Growth & Innovation',
    description:
      'Strategy-led digital solutions that help modern businesses launch faster, scale smarter, and stay competitive.',
    icon: FiZap,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#f5f8fc] py-16 text-[#071a2d] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-xs font-semibold uppercase"
            style={{ color: colors.primaryLight }}
          >
            What we do
          </p>
          <h2
            className="mt-4 text-3xl font-black sm:text-4xl"
            style={{
              fontFamily: 'var(--font-glacial-indifference), sans-serif',
            }}
          >
            Digital solutions built for real business momentum.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group border border-[#dce5ef] bg-white p-5 shadow-[0_12px_35px_rgba(7,26,45,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#4ca7df]/60 hover:shadow-[0_18px_40px_rgba(7,26,45,0.1)] sm:p-6"
              style={{ borderRadius: 0 }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center border border-[#cfe0ee] bg-[#eef6fb]"
                style={{ borderRadius: 0 }}
              >
                <Icon className="h-6 w-6" style={{ color: colors.primaryLight }} aria-hidden="true" />
              </div>

              <h3
                className="mt-6 text-xl font-bold"
                style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}
              >
                {title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#536579]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
