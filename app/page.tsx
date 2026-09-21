import CtaSection from "../components/home/CtaSection";
import Hero from "../components/home/Hero";
import ProcessSection from "../components/home/ProcessSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";

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
