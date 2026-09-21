import Image from "next/image";
import { FiCode, FiMonitor, FiSmartphone, FiZap } from "react-icons/fi";
import { colors } from "../../config/colors";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and business platforms designed to convert leads, improve trust, and support growth.",
    icon: FiMonitor,
    image: "/assets/services/web.png",
  },
  {
    title: "Mobile App Development",
    description:
      "User-friendly mobile experiences for Android and iOS that keep your customers engaged on the go.",
    icon: FiSmartphone,
    image: "/assets/services/mobile.png",
  },
  {
    title: "School & Learning Platforms",
    description:
      "Digital systems for schools, academies, and training organisations that manage enrolment, lessons, assessments, attendance, and learner progress.",
    icon: FiCode,
    image: "/assets/services/learning.png",
  },
  {
    title: "Healthcare & Clinic Systems",
    description:
      "Operational platforms for clinics and care providers that streamline appointments, patient records, billing, staff coordination, and daily workflows.",
    icon: FiZap,
    image: "/assets/services/hospital.png",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#f5f8fc] py-16 text-[#071a2d] sm:py-20"
    >
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
              fontFamily: "var(--font-glacial-indifference), sans-serif",
            }}
          >
            Digital solutions built for real business momentum.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon, image }) => (
            <div
              key={title}
              className="group overflow-hidden border border-[#dce5ef] bg-white shadow-[0_12px_35px_rgba(7,26,45,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#4ca7df]/60 hover:shadow-[0_18px_40px_rgba(7,26,45,0.1)]"
              style={{ borderRadius: 0 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#edf6fb]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div
                  className="flex h-12 w-12 items-center justify-center border border-[#cfe0ee] bg-[#eef6fb]"
                  style={{ borderRadius: 0 }}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: colors.primaryLight }}
                    aria-hidden="true"
                  />
                </div>

                <h3
                  className="mt-5 text-xl font-bold"
                  style={{
                    fontFamily: "var(--font-glacial-indifference), sans-serif",
                  }}
                >
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#536579]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
