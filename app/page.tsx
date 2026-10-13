import type { Metadata } from "next";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs";

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
      <WhyChooseUs />
      <Portfolio />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
