import React from 'react';

const TermsOfService = () => (
  <div className="pt-20 bg-black text-white min-h-screen">
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-cyan-400">Terms of Service</h1>
      <p className="mb-6 text-gray-300">Last updated: June 2024</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
        <p className="text-gray-300">By accessing or using OMYTECH's website and services, you agree to these Terms of Service.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">2. Use of Services</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>You must be at least 18 years old to use our services.</li>
          <li>You agree not to misuse our services or attempt to access them using unauthorized means.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">3. Intellectual Property</h2>
        <p className="text-gray-300">All content, trademarks, and data on this site are the property of OMYTECH or its licensors.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitation of Liability</h2>
        <p className="text-gray-300">OMYTECH is not liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">5. Changes to Terms</h2>
        <p className="text-gray-300">We may update these Terms of Service at any time. Continued use of our services constitutes acceptance of the new terms.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">6. Contact Us</h2>
        <p className="text-gray-300">For questions about these Terms, contact us at <a href="mailto:omytechkenya@gmail.com" className="text-cyan-400 underline">omytechkenya@gmail.com</a>.</p>
      </section>
    </div>
  </div>
);

export default TermsOfService; 