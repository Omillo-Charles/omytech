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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
              className="group block h-full bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,114,206,0.12)]"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              <div className="p-4 flex items-center justify-between gap-3 border-t border-white/5 bg-[#0A0A0A]/90 backdrop-blur-md">
                <div>
                  <span className="inline-block text-[10px] font-fira font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-glacial font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-white group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
