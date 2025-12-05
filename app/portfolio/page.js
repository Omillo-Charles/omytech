"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiFilter } from "react-icons/fi";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Ena Coach Website Revamp",
      description:
        "Complete website redesign and development for Ena Coach, featuring modern UI/UX, responsive design, and enhanced user experience.",
      category: "Web Development",
      image: "/portfolioImages/ena.png",
      link: "https://enacoach.vercel.app",
      tags: ["Next.js", "React", "UI/UX Design", "Responsive"],
    },
    {
      id: 2,
      title: "Ebenezer Academy Website Development",
      description:
        "Full-stack website development for Ebenezer Academy, featuring course management, student portal, and modern educational platform.",
      category: "Web Development",
      image: "/portfolioImages/ebenezer.png",
      link: "https://ebenezer-rosy.vercel.app",
      tags: ["Next.js", "React", "Education", "Full-Stack"],
    },
    {
      id: 3,
      title: "New Testament Church Of God Kenya Website",
      description:
        "Modern church website development with event management, sermon archives, online giving, and community engagement features.",
      category: "Web Development",
      image: "/portfolioImages/newTestament.png",
      link: "https://ntcogk.vercel.app",
      tags: ["Next.js", "React", "CMS", "Community"],
    },
    {
      id: 4,
      title: "Alianda Rollins - Professional Nurse Portfolio",
      description:
        "Professional portfolio website for Alianda Rollins, showcasing nursing expertise, qualifications, and healthcare services with a clean, modern design.",
      category: "Web Development",
      image: "/portfolioImages/rollins.png",
      link: "https://rollinsalianda.vercel.app",
      tags: ["Next.js", "React", "Portfolio", "Healthcare"],
    },
    {
      id: 5,
      title: "ZOMY - Freelance Client Collaboration Platform",
      description:
        "Comprehensive platform connecting freelancers with clients, featuring project management, real-time communication, secure payments, and seamless collaboration tools.",
      category: "Web Development",
      image: "/portfolioImages/zomy.png",
      link: "https://freelance.omytech.co.ke",
      tags: ["Next.js", "React", "Platform", "Collaboration", "Full-Stack"],
    },
    {
      id: 6,
      title: "Promptomy - AI Marketplace",
      description:
        "Innovative AI-powered marketplace for buying and selling prompts, featuring advanced search, prompt testing, secure transactions, and a vibrant community of AI enthusiasts.",
      category: "Web Development",
      image: "/portfolioImages/promptomy.png",
      link: "https://prompts.omytech.co.ke",
      tags: ["Next.js", "React", "AI", "Marketplace", "Full-Stack"],
    },
  ];

  const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="portfolio-page-modern">
      {/* Hero Section */}
      <section className="portfolio-hero-modern">
        <div className="portfolio-hero-bg">
          <div className="portfolio-blob portfolio-blob-1"></div>
          <div className="portfolio-blob portfolio-blob-2"></div>
          <div className="portfolio-blob portfolio-blob-3"></div>
        </div>
        <div className="portfolio-hero-container">
          <motion.div
            className="portfolio-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="portfolio-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              className="portfolio-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Showcasing our best work in web development, mobile apps, design,
              and digital solutions that empower businesses across Africa
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filter-section">
        <div className="portfolio-container">
          <div className="portfolio-filter-wrapper">
            {categories.map((category) => (
              <button
                key={category}
                className={`portfolio-filter-btn ${
                  activeFilter === category ? "active" : ""
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="portfolio-projects-section">
        <div className="portfolio-container">
          {filteredProjects.length > 0 ? (
            <motion.div
              className="portfolio-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="portfolio-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="portfolio-card-image">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="portfolio-img"
                    />
                    <div className="portfolio-card-overlay">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-view-btn"
                      >
                        <span>View Project</span>
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-card-content">
                    <span className="portfolio-category">
                      {project.category}
                    </span>
                    <h3 className="portfolio-card-title">{project.title}</h3>
                    <p className="portfolio-card-description">
                      {project.description}
                    </p>
                    <div className="portfolio-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="portfolio-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="portfolio-empty">
              <FiFilter size={64} />
              <h2>No Projects Found</h2>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta-section">
        <div className="portfolio-container">
          <div className="portfolio-cta-card">
            <h2 className="portfolio-cta-title">
              Ready to Start Your Project?
            </h2>
            <p className="portfolio-cta-text">
              Let's create something amazing together and bring your vision to
              life
            </p>
            <div className="portfolio-cta-buttons">
              <a href="/contact" className="portfolio-cta-btn primary">
                Get Started
              </a>
              <a href="/#services" className="portfolio-cta-btn secondary">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
