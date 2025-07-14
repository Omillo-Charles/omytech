import React from 'react';

const PrivacyPolicy = () => (
  <div className="pt-20 bg-black text-white min-h-screen">
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-cyan-400">Privacy Policy</h1>
      <p className="mb-6 text-gray-300">Last updated: June 2024</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
        <p className="text-gray-300">OMYTECH is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>Personal information you provide (name, email, company, etc.)</li>
          <li>Usage data (pages visited, time spent, etc.)</li>
          <li>Cookies and tracking technologies</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>To provide and improve our services</li>
          <li>To communicate with you</li>
          <li>To analyze usage and trends</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
        <p className="text-gray-300">We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Rights</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>Access, update, or delete your personal information</li>
          <li>Opt out of marketing communications</li>
          <li>Request data portability</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">6. Changes to This Policy</h2>
        <p className="text-gray-300">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">7. Contact Us</h2>
        <p className="text-gray-300">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:omytechkenya@gmail.com" className="text-cyan-400 underline">omytechkenya@gmail.com</a>.</p>
      </section>
    </div>
  </div>
);

export default PrivacyPolicy; 