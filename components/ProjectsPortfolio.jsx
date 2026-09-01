"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";

const projects = [
  {
    title: "Castra Households",
    category: "Households Seller",
    image: "/projects/castra.png",
    link: "https://castrahouseholds.co.ke",
  },
  {
    title: "Soltec Electric",
    category: "Electrical Company",
    image: "/projects/soltec.png",
    link: "https://soltecelectric.co.ke",
  },
  {
    title: "NTCOGK",
    category: "Church Website",
    image: "/projects/ntcogk.png",
    link: "https://ntcogk.vercel.app",
  },
];

export default function ProjectsPortfolio({ className = "pt-28" }) {
  const whatsappMessage = encodeURIComponent(
    "Hello OMYTECH, I am interested in getting a website or a custom tech solution."
  );
  const whatsappUrl = `https://wa.me/254745511354?text=${whatsappMessage}`;

  return (
    <section className={`relative pb-16 px-4 sm:px-6 md:px-8 bg-[#0A0A0A] ${className}`}>
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group block w-full bg-white/[0.02] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-white/25 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,114,206,0.12)]"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-[460px] md:h-[560px] lg:h-[650px] overflow-hidden bg-white/5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
            </div>

            <div className="p-4 sm:p-8 md:p-10 flex items-center justify-between gap-3 border-t border-white/5 bg-[#0A0A0A]/90 backdrop-blur-md">
              <div>
                <span className="inline-block text-[10px] sm:text-xs font-fira font-semibold uppercase tracking-wider text-cyan-400 mb-0.5 sm:mb-1">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-3xl md:text-4xl font-glacial font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-white group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 flex-shrink-0">
                <ArrowUpRight className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </motion.a>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto pt-12 pb-4"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-glacial font-bold text-white mb-8 leading-tight">
            Ready to get a website that converts or a custom tech solution?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+254745511354"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-2.5 bg-white text-black font-glacial font-bold text-sm sm:text-base rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] shadow-md shadow-white/10"
            >
              <FaPhone className="w-4 h-4 text-blue-600" />
              Call Us
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-2.5 bg-emerald-500 text-white font-glacial font-bold text-sm sm:text-base rounded-xl hover:bg-emerald-400 transition-all duration-300 hover:scale-[1.02] shadow-md shadow-emerald-500/20"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
