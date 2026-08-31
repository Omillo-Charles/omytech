import React from "react";
import HomeHero from "@/components/HomeHero";
import ProjectsPortfolio from "@/components/ProjectsPortfolio";
import HomeCapabilities from "@/components/HomeCapabilities";
import HomeWhyChooseUs from "@/components/HomeWhyChooseUs";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata = {
  title: "OMYTECH Kenya - High-Converting Websites & Software Engineering",
  description:
    "OMYTECH Kenya designs and builds high-performing websites, custom e-commerce platforms, and scalable digital solutions for businesses in Kenya and across Africa.",
  openGraph: {
    title: "OMYTECH Kenya - High-Converting Websites & Software Engineering",
    description:
      "Leading technology studio in Kenya providing high-converting web development, mobile apps, UI/UX design, and digital solutions.",
  },
  verification: {
    google: "j54xnHHGgdTOttZZomxNJXC5sOBP4bXhvC0YnIa-UYk",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Portfolio Showcase */}
      <ProjectsPortfolio className="pt-0" />

      {/* 3. Core Capabilities */}
      <HomeCapabilities />

      {/* 4. Engineering Principles & Value Prop */}
      <HomeWhyChooseUs />

      {/* 5. Industry Marquee Carousel */}
      <LogoCarousel />
    </main>
  );
}
