import type { Metadata } from "next";
import CtaSection from "../components/home/CtaSection";
import Hero from "../components/home/Hero";
import ProcessSection from "../components/home/ProcessSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";

export const metadata: Metadata = {
  title: "Web, Mobile & Software Development in Kenya",
  description:
    "OMYTECH Kenya helps businesses, schools, clinics, and organisations build modern websites, mobile apps, digital systems, and growth strategies that move them forward.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CtaSection />
    </main>
  );
}
