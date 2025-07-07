import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI Projects' },
    { id: 'ecommerce', name: 'E-commerce' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Nairobi Smart Travel Assistant',
      category: 'web',
      image: 'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Smart travel assistant for Nairobi using Bolt API to suggest optimal routes.',
      tech: ['React', 'Tailwind', 'Bolt API', 'Firebase'],
      liveUrl: 'https://nairobi-travel.vercel.app',
      githubUrl: 'https://github.com/omillocharles/nairobi-smart-travel',
      views: '2.9k'
    },
    {
      id: 2,
      title: 'SignBridge AI',
      category: 'ai',
      image: 'https://images.pexels.com/photos/4144091/pexels-photo-4144091.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'AI assistant that translates sign language to English in real-time.',
      tech: ['Next.js', 'Tailwind', 'TensorFlow', 'Vercel'],
      liveUrl: 'https://signbridgeai.vercel.app',
      githubUrl: 'https://github.com/omillocharles/signbridgeai',
      views: '3.5k'
    },
    {
      id: 3,
      title: 'OMYTECH Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Official website for OMYTECH — a digital agency for modern web solutions.',
      tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://omytech.vercel.app',
      githubUrl: 'https://github.com/omillocharles/omytech',
      views: '4.1k'
    },
    {
      id: 4,
      title: 'Nexus Academy Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/4145196/pexels-photo-4145196.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Online learning platform for Nexus Academy with student/teacher access.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://nexusacademy.vercel.app',
      githubUrl: 'https://github.com/omillocharles/nexus-academy',
      views: '2.3k'
    },
    {
      id: 5,
      title: 'Chama Management Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A chama savings and contribution management system with member features.',
      tech: ['React', 'Firebase', 'Tailwind'],
      liveUrl: '#',
      githubUrl: 'https://github.com/omillocharles/chama-platform',
      views: '1.6k'
    },
    {
      id: 6,
      title: 'E-Commerce Template',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Responsive e-commerce website template with cart, checkout and payment.',
      tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/omillocharles/ecommerce-template',
      views: '2.1k'
    },
    {
      id: 7,
      title: 'ShopSphere E-Commerce',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Full-stack e-commerce platform with admin dashboard, cart, and Stripe integration.',
      tech: ['React', 'MongoDB', 'Express', 'Stripe'],
      liveUrl: 'https://shop-sphere-2n6k.vercel.app/',
      githubUrl: 'https://github.com/Anwishta/ShopSphere',
      views: '5.3k'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            Our Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-4 mb-12 mt-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-200"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Views Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Eye className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">{project.views}</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 capitalize">
                    {project.category.replace('-', ' ')}
                  </span>
                  <a
                    href={project.liveUrl}
                    className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see your project here?
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
