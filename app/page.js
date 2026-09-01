import React from "react";
import Link from "next/link";

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
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-sm font-fira font-semibold mb-6">
            OMYTECH Kenya
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-glacial font-bold mb-6 leading-tight tracking-tight">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent pb-2">
              Simple solutions.
            </span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent pb-2">
              Powerful results.
            </span>
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto font-fira font-normal leading-relaxed mb-10">
            We build modern websites and digital systems that help businesses in Kenya and beyond grow with clarity, speed, and confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-xl font-glacial font-bold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300"
            >
              Our Work
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/15 text-white rounded-xl font-glacial font-bold text-sm sm:text-base hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
