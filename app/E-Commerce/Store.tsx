'use client';

import React from 'react';

const Store: React.FC = () => {
  const primaryColor = '#94d1c1'; // Primary color from n4.PNG
  const secondaryColor = '#d1f5ee'; // Secondary color (light teal) from n4.PNG
  const redBackground = '#e54d42'; // Red background from w8.PNG (original button text color, kept for reference if needed elsewhere)
  const cardBackground = '#1c1c1f'; // Dark background for the image card from w8.PNG, now used for button text

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden text-white"
      style={{ backgroundColor: primaryColor }} // Changed background color to theme's primary
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content Area */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
            style={{ color: cardBackground }} // Changed heading color for contrast on light background
          >
            Your Store, Optimized for Maximum Performance
          </h2>
          <p className="text-base text-gray-800 leading-relaxed mb-6"> {/* Changed text color for contrast */}
            Every e-commerce optimization strategy we develop is custom-tailored to your
            specific product catalog, customer demographics, and business model. We enhance
            what's working and fix what's not.
          </p>
          <p className="text-base text-gray-800 leading-relaxed mb-10"> {/* Changed text color for contrast */}
            Our comprehensive analysis identifies your store's unique optimization
            opportunities and prioritizes them based on potential revenue impact. This
            ensures you get the fastest possible ROI from your optimization investment.
          </p>
          <button
            className="px-8 py-4 font-bold rounded-md shadow-lg transition-colors duration-300"
            style={{
              backgroundColor: 'white', // Default background is white
              color: cardBackground, // Button text color is dark from theme
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = secondaryColor)} // Hover effect: background to secondaryColor
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')} // Reset background on mouse leave
          >
            Schedule Your Strategy Session
          </button>
        </div>

        {/* Right Image Card Area */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="p-4 rounded-lg shadow-2xl" style={{ backgroundColor: cardBackground }}>
            <img
              src="https://placehold.co/500x700/4a5568/ffffff?text=E-commerce+Optimization+Dashboard"
              alt="E-commerce Optimization Dashboard"
              className="rounded-lg max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
