"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Brush as DesignIcon,
  Security as SecurityIcon,
  AutoGraph as AiIcon,
  Lightbulb as StrategyIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";

const services = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "High-performance web and mobile applications built with modern frameworks for scale and speed.",
    icon: <CodeIcon />,
    color: "#3b82f6",
    features: ["Web Development", "Mobile Apps", "API Integration"],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    description: "Scalable, secure, and reliable cloud solutions to power your digital ecosystem with 99.9% uptime.",
    icon: <StorageIcon />,
    color: "#06b6d4",
    features: ["AWS/Azure Setup", "DevOps", "Server Management"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centric interfaces that blend aesthetic beauty with seamless functionality for maximum engagement.",
    icon: <DesignIcon />,
    color: "#f59e0b",
    features: ["Interface Design", "User Research", "Prototyping"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Enterprise-grade security audits and system hardening to protect your data and digital assets.",
    icon: <SecurityIcon />,
    color: "#ef4444",
    features: ["Security Audits", "Penetration Testing", "Compliance"],
  },
  {
    id: "ai-data-science",
    title: "AI & Data Science",
    description: "Custom AI models and data analytics that turn raw information into actionable business intelligence.",
    icon: <AiIcon />,
    color: "#10b981",
    features: ["Machine Learning", "Data Analytics", "Predictive Models"],
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description: "Comprehensive roadmaps for digital growth, focusing on market penetration and user acquisition.",
    icon: <StrategyIcon />,
    color: "#06b6d4",
    features: ["SEO Optimization", "Growth Strategy", "Market Analysis"],
  },
];

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

      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/services/${service.id}`}>
                  <div className="relative h-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color,
                      }}
                    >
                      {React.cloneElement(service.icon, { className: "w-7 h-7" })}
                    </div>

                    <h3 className="text-base md:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs md:text-base text-gray-400 mb-6 leading-relaxed" style={{ lineHeight: "1.8", overflow: "visible" }}>
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[10px] md:text-sm font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: service.color }}>
                      Learn More
                      <ArrowIcon className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
