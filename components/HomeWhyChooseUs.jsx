"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Headphones, Code2 } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Conversion-Focused Architecture",
    description: "Every layout, button, and visual element is strategically designed to guide visitors directly toward calling or messaging your business.",
  },
  {
    icon: Zap,
    title: "Obsessive Load Performance",
    description: "We build with Next.js and modern Web Vitals optimization to guarantee sub-second page loads that maximize search engine rankings.",
  },
  {
    icon: Code2,
    title: "Bespoke Modern Engineering",
    description: "No slow page-builders or vulnerable generic templates. Clean, maintainable code engineered specifically for your business goals.",
  },
  {
    icon: Headphones,
    title: "Direct Founder Support",
    description: "Instant phone and WhatsApp accessibility (+254 745 511 354). No long ticket wait times when you need updates or technical assistance.",
  },
];

export default function HomeWhyChooseUs() {
  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-8 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-fira font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Why OMYTECH Kenya
          </span>
          <h2 className="text-3xl sm:text-5xl font-glacial font-bold text-white leading-tight">
            Built with Uncompromising Engineering Precision
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.015] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-glacial font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-fira text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
