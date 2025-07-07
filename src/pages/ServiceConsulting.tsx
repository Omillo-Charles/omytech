import React from 'react';

const ServiceConsulting = () => (
  <div className="min-h-screen bg-black py-20 px-4 pt-32">
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Consulting & Strategy</h1>
      <p className="text-lg text-gray-700 mb-6">
        Expert consulting helps you make informed decisions, avoid costly mistakes, and accelerate your digital transformation. With a clear strategy, you can optimize processes, maximize ROI, and achieve your business goals faster and more efficiently.
      </p>
      <ul className="list-disc pl-6 text-gray-600 mb-6">
        <li>Provides expert guidance</li>
        <li>Identifies growth opportunities</li>
        <li>Optimizes business processes</li>
        <li>Reduces risks and costs</li>
        <li>Drives innovation and success</li>
      </ul>
      <div className="mt-8 text-center">
        <a href="/contact" className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition">Book a Consultation</a>
      </div>
    </div>
  </div>
);

export default ServiceConsulting; 