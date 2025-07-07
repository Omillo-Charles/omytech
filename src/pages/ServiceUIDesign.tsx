import React from 'react';

const ServiceUIDesign = () => (
  <div className="min-h-screen bg-black py-20 px-4 pt-32">
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">UI/UX Design</h1>
      <p className="text-lg text-gray-700 mb-6">
        Exceptional UI/UX design is the key to user satisfaction and business growth. A beautiful, intuitive interface keeps users engaged, reduces bounce rates, and increases conversions. Make your brand memorable with a seamless and delightful digital experience.
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Improves user satisfaction</li>
        <li>Boosts conversion rates</li>
        <li>Strengthens brand identity</li>
        <li>Reduces support costs</li>
        <li>Encourages repeat business</li>
      </ul>
      <div className="mt-8 text-center">
        <a href="/contact" className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-pink-700 transition">Get a Design Audit</a>
      </div>
    </div>
  </div>
);

export default ServiceUIDesign; 