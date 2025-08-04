'use client';

import React from 'react';

const Automated: React.FC = () => { // Changed component name
  const primaryColor = '#94d1c1'; // Primary color from n4.PNG
  const darkSectionBackground = '#5e0d16'; // Dark red background from w7.PNG
  const contentBackground = '#1c1c1f'; // Dark gray/black content background from w7.PNG

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden text-white"
      style={{ backgroundColor: darkSectionBackground }}
    >
      <div className="max-w-6xl mx-auto p-3 sm:p-5 lg:p-7 rounded-xl shadow-lg" // Decreased max-width from 7xl to 6xl
        style={{ backgroundColor: contentBackground }}
      >
        <div className="flex flex-col items-start px-3 sm:px-5 lg:px-7">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-left mb-4"
            style={{ color: primaryColor }}
          >
            Automated Conversion Rate Optimization
          </h2>
          {/* Introductory Paragraph */}
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-2xl mb-8">
            Stop guessing what will convert and let AI find the winning combinations
            for you. Our automated CRO system continuously tests multiple variables
            simultaneously to identify the highest-performing elements.
          </p>

          {/* Feature List */}
          <div className="w-full space-y-8">
            {/* Multivariate Testing */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src="https://placehold.co/500x300/4a5568/ffffff?text=Multivariate+Testing"
                  alt="Multivariate Testing Screenshot"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold mb-1">Multivariate Testing</h3>
                <p className="text-xs md:text-sm text-gray-300">
                  Test dozens of page elements simultaneously instead of one at a time,
                  accelerating your path to optimization by 500%.
                </p>
              </div>
            </div>

            {/* Checkout Optimization */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src="https://placehold.co/500x300/4a5568/ffffff?text=Checkout+Optimization"
                  alt="Checkout Optimization Screenshot"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold mb-1">Checkout Optimization</h3>
                <p className="text-xs md:text-sm text-gray-300">
                  Minimize abandonment with AI-optimized checkout flows that reduce
                  friction and address hesitation points before they occur.
                </p>
              </div>
            </div>

            {/* Device-Specific Optimization */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src="https://placehold.co/500x300/4a5568/ffffff?text=Device+Specific"
                  alt="Device-Specific Optimization Screenshot"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold mb-1">Device-Specific Optimization</h3>
                <p className="text-xs md:text-sm text-gray-300">
                  Create conversion experiences tailored to each device type,
                  increasing mobile conversion rates by an average of 78%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automated; // Changed export name
