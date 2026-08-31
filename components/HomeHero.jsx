"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, ShieldCheck, Sparkles, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function HomeHero() {
  const whatsappMessage = encodeURIComponent(
    "Hello OMYTECH Kenya, I would like to discuss building a website or custom tech solution."
  );
  const whatsappUrl = `https://wa.me/254745511354?text=${whatsappMessage}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 md:px-8 bg-[#0A0A0A] overflow-hidden">
      {/* Dynamic Ambient Background Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-blue-600/15 to-cyan-400/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-fira font-medium text-gray-300">
            High-Performance Digital Studio in Kenya
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-glacial font-bold text-white tracking-tight leading-[1.12] mb-8"
        >
          Engineering Websites & Software <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            That Convert Visitors Into Clients
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm sm:text-lg md:text-xl text-gray-400 font-fira font-normal max-w-3xl mx-auto leading-relaxed mb-10"
        >
          OMYTECH designs and builds modern high-speed websites, custom e-commerce platforms, and scalable digital solutions tailored to accelerate growth for Kenyan businesses and beyond.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16"
        >
          <a
            href="tel:+254745511354"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-2.5 bg-white text-black font-glacial font-bold text-sm sm:text-base rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-white/10"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            Call Us
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-2.5 bg-white/5 border border-white/15 text-white font-glacial font-bold text-sm sm:text-base rounded-xl hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-[1.02] backdrop-blur-md"
          >
            <FaWhatsapp className="w-5 h-5 text-emerald-400" />
            Chat
          </a>
        </motion.div>

        {/* Key Highlight Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10"
        >
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-xl sm:text-2xl font-glacial font-bold text-white">Sub-Second</span>
            </div>
            <p className="text-xs sm:text-sm font-fira text-gray-400">Ultra-Fast Load Speeds</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xl sm:text-2xl font-glacial font-bold text-white">100%</span>
            </div>
            <p className="text-xs sm:text-sm font-fira text-gray-400">Mobile & SEO Optimized</p>
          </div>

          <div className="col-span-2 md:col-span-1 p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xl sm:text-2xl font-glacial font-bold text-white">Custom UI</span>
            </div>
            <p className="text-xs sm:text-sm font-fira text-gray-400">Zero Cookie-Cutter Templates</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
