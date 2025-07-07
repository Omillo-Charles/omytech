import React from 'react';

const ServiceEcommerce = () => (
  <div className="min-h-screen bg-black py-20 px-4 pt-32">
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">
      <h1 className="text-4xl font-bold text-orange-700 mb-6">E-commerce Solutions</h1>
      <p className="text-lg text-gray-700 mb-6">
        An online store opens your business to a global market, increases sales opportunities, and provides valuable customer insights. E-commerce solutions streamline operations, improve customer experience, and help you scale efficiently in the digital age.
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Reaches customers worldwide</li>
        <li>Operates 24/7 for continuous sales</li>
        <li>Automates inventory and order management</li>
        <li>Provides data-driven insights</li>
        <li>Enhances customer convenience</li>
      </ul>
      <div className="mt-8 text-center">
        <a href="/contact" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-orange-700 transition">Launch My Store</a>
      </div>
    </div>
  </div>
);

export default ServiceEcommerce; 