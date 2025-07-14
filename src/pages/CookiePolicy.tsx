import React from 'react';

const CookiePolicy = () => (
  <div className="pt-20 bg-black text-white min-h-screen">
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-cyan-400">Cookie Policy</h1>
      <p className="mb-6 text-gray-300">Last updated: June 2024</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">1. What Are Cookies?</h2>
        <p className="text-gray-300">Cookies are small text files stored on your device to help websites function and analyze usage.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Cookies</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>To remember your preferences</li>
          <li>To analyze site traffic and usage</li>
          <li>To improve our website and services</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">3. Managing Cookies</h2>
        <p className="text-gray-300">You can control cookies through your browser settings. Disabling cookies may affect your experience on our site.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">4. Contact Us</h2>
        <p className="text-gray-300">For questions about our Cookie Policy, contact us at <a href="mailto:omytechkenya@gmail.com" className="text-cyan-400 underline">omytechkenya@gmail.com</a>.</p>
      </section>
    </div>
  </div>
);

export default CookiePolicy; 