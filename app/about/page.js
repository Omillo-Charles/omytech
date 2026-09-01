"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code as CodeIcon,
  Groups as GroupsIcon,
  RocketLaunch as RocketIcon,
  Security as SecurityIcon,
  Lightbulb as InnovationIcon,
  Favorite as HeartIcon,
  ArrowForward as ArrowIcon
} from "@mui/icons-material";

const values = [
  {
    icon: <CodeIcon />,
    title: "Technical Excellence",
    description: "We build with precision, leveraging modern stacks and clean architecture to deliver robust solutions.",
    color: "#3b82f6"
  },
  {
    icon: <InnovationIcon />,
    title: "Innovation First",
    description: "We stay ahead of the curve, constantly exploring new technologies and methodologies to solve complex problems.",
    color: "#f59e0b"
  },
  {
    icon: <GroupsIcon />,
    title: "Collaborative Spirit",
    description: "Working as partners with our clients, we bridge the gap between complex problems and digital success.",
    color: "#10b981"
  },
  {
    icon: <SecurityIcon />,
    title: "Security Focused",
    description: "Every line of code is written with security in mind, ensuring your data and users remain protected.",
    color: "#ef4444"
  },
  {
    icon: <RocketIcon />,
    title: "Growth Mindset",
    description: "We're committed to continuous learning and improvement, both for ourselves and our clients.",
    color: "#06b6d4"
  },
  {
    icon: <HeartIcon />,
    title: "African Pride",
    description: "Building world-class solutions from Kenya, showcasing African talent and innovation to the global stage.",
    color: "#ec4899"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-sm font-fira font-semibold mb-6"
          >
            About OMYTECH
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-glacial font-bold mb-6 leading-tight"
          >
            <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent pb-2">
              Building the Future
            </span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent pb-2">
              of African Tech
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto font-fira font-normal mb-8 leading-relaxed"
          >
            We are a collective of engineers, designers, and strategists dedicated to
            transforming ambitious ideas into powerful digital realities. Based in Nairobi,
            serving the world.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm text-center"
          >
            <h2 className="text-2xl md:text-4xl font-glacial font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-fira text-gray-300 leading-relaxed max-w-3xl mx-auto">
              To empower Kenyan and global businesses through innovative, secure, and
              scalable technology solutions that drive growth and create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-5xl font-glacial font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-fira">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${value.color}15`,
                    color: value.color
                  }}
                >
                  {React.cloneElement(value.icon, { className: "w-7 h-7" })}
                </div>

                <h3 className="text-lg md:text-xl font-glacial font-bold text-white mb-3">
                  {value.title}
                </h3>

                <p className="text-sm md:text-base font-fira text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-5xl font-glacial font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-fira">
              Talented individuals passionate about technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-sm text-center"
          >
            <div className="flex justify-center -space-x-4 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#0A0A0A]"
                  style={{
                    background: `linear-gradient(135deg, ${['#3b82f6', '#10b981', '#f59e0b', '#06b6d4', '#ec4899'][i - 1]} 0%, ${['#1e40af', '#059669', '#d97706', '#0891b2', '#be185d'][i - 1]} 100%)`
                  }}
                />
              ))}
            </div>
            <h3 className="text-xl md:text-2xl font-glacial font-bold text-white mb-3">
              15+ Talented Professionals
            </h3>
            <p className="text-sm md:text-base font-fira text-gray-400 mb-6 leading-relaxed">
              Engineers, designers, and strategists working together to create exceptional digital experiences
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-glacial font-bold transition-colors"
            >
              Join Our Team
              <ArrowIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-glacial font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-gray-400 mb-8 text-sm md:text-base font-fira leading-relaxed">
                Let's discuss how we can help transform your business with technology
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm md:text-base font-glacial font-bold rounded-xl hover:scale-105 transition-all duration-300"
              >
                Get Started
                <ArrowIcon className="w-5 h-5 text-blue-600" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
