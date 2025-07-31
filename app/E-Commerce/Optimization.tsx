'use client';

import React from 'react';

const Optimization: React.FC = () => { // Renamed from SectionClone
  const primaryColor = '#14b8a6'; // Your --primary color: teal
  const secondaryColor = '#d1f5ee'; // Your --secondary color: light teal

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white"> {/* Changed background to white */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content Area */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6" style={{ color: primaryColor }}> {/* Heading uses primary color */}
            E-commerce Optimization That Actually Increases Sales
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-800"> {/* Darker text for readability */}
            Ready to turn your website into a sales-generating machine? Our AI-driven e-commerce optimization transforms casual browsers into loyal customers through intelligent personalization, dynamic pricing, and conversion-focused design.
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-600"> {/* Slightly lighter text */}
            We analyze customer behavior patterns, optimize product placement, and create personalized shopping experiences that increase sales while improving customer satisfaction. E-commerce businesses using our optimization strategies see remarkable results:
          </p>
          <ul className="text-lg md:text-xl space-y-2 text-gray-800"> {/* Text color for list */}
            <li className="flex items-start">
              <span className="mr-2 mt-1" style={{ color: primaryColor }}>&bull;</span> {/* Primary color bullet */}
              <span>150% increases in conversion rates</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1" style={{ color: primaryColor }}>&bull;</span> {/* Primary color bullet */}
              <span>200% improvements in average order value</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1" style={{ color: primaryColor }}>&bull;</span> {/* Primary color bullet */}
              <span>300% growth in customer lifetime value</span>
            </li>
          </ul>
        </div>

        {/* Right Image Card Area */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md text-gray-800"
               style={{ borderColor: primaryColor, borderWidth: '2px', boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px ${secondaryColor}` }}> {/* Stronger shadow, primary border */}
            {/* Image at the bottom of the card - now the only content */}
            <img
              src="https://placehold.co/500x300/cccccc/333333?text=Data+Dashboard"
              alt="Data Optimization Dashboard"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Optimization; // Renamed export
