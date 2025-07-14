import React from 'react';

const GDPRCompliance = () => (
  <div className="pt-20 bg-black text-white min-h-screen">
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-cyan-400">GDPR Compliance</h1>
      <p className="mb-6 text-gray-300">Last updated: June 2024</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">1. Your Data Rights</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>Right to access, update, or delete your data</li>
          <li>Right to data portability</li>
          <li>Right to restrict or object to processing</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">2. Data Collection & Use</h2>
        <p className="text-gray-300">We only collect data necessary to provide our services and never sell your personal information.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">3. Data Security</h2>
        <p className="text-gray-300">We use industry-standard security measures to protect your data and comply with GDPR requirements.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">4. Contact Us</h2>
        <p className="text-gray-300">For GDPR-related requests, contact us at <a href="mailto:omytechkenya@gmail.com" className="text-cyan-400 underline">omytechkenya@gmail.com</a>.</p>
      </section>
    </div>
  </div>
);

export default GDPRCompliance; 