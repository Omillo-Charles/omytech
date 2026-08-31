"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, ShoppingBag, Smartphone, Cpu, ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "High-Converting Websites",
    description: "Lightning-fast, bespoke websites engineered to capture attention, communicate value, and generate direct inquiries.",
    tag: "Web Studio",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description: "Full-scale online stores featuring M-Pesa payment gateways, real-time inventory management, and smooth customer checkout flows.",
    tag: "Digital Retail",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Intuitive, high-performance iOS and Android mobile applications built with native speed and seamless user experience.",
    tag: "Mobile Apps",
  },
  {
    icon: Cpu,
    title: "Enterprise Custom Tech",
    description: "Tailored internal tools, web portals, cloud infrastructure, and custom software systems designed around your operational needs.",
    tag: "Software Engineering",
  },
];

export default function HomeCapabilities() {
  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-8 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-fira font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-5xl font-glacial font-bold text-white leading-tight">
            Capabilities Engineered for Market Dominance
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-fira font-medium uppercase tracking-wider text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-glacial font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base font-fira text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
