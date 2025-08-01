'use client';

import React from 'react';

const Personalization: React.FC = () => { // Renamed component
  const primaryColor = '#14b8a6'; // Your --primary color: teal
  const secondaryColor = '#d1f5ee'; // Your --secondary color: light teal
  const darkBackground = '#2d2d34'; // Dark background color from w3.PNG
  const redAccentColor = '#e54d42'; // The specific red accent color from w3.PNG

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden text-white"
      style={{ backgroundColor: darkBackground }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content Area - Features */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-12">
            AI-Powered Personalization Engine
          </h2>

          {/* Feature Blocks - Corrected to match the image */}
          <div className="space-y-8">
            {/* Visitor Profiling */}
            <div className="flex items-start">
              {/* Custom shape for the icon background */}
              <div className="flex-shrink-0 relative mr-4" style={{ width: '60px', height: '60px' }}>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: redAccentColor,
                    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)', // Custom polygon shape
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Icon - Using Font Awesome placeholder. Ensure FA is loaded in your project. */}
                  <i className="fas fa-user text-white text-2xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Visitor Profiling</h3>
                <p className="text-gray-300 text-base">
                  Our AI analyzes browsing history, purchase patterns, and real-time behavior to create detailed customer profiles within seconds of a visitor arriving at your store.
                </p>
              </div>
            </div>

            {/* Experience Customization */}
            <div className="flex items-start">
              <div className="flex-shrink-0 relative mr-4" style={{ width: '60px', height: '60px' }}>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: redAccentColor,
                    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-magic text-white text-2xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Experience Customization</h3>
                <p className="text-gray-300 text-base">
                  Based on profile data, we dynamically adjust product displays, messaging, and offers to match each visitor's preferences and purchase intent level.
                </p>
              </div>
            </div>

            {/* Continuous Optimization */}
            <div className="flex items-start">
              <div className="flex-shrink-0 relative mr-4" style={{ width: '60px', height: '60px' }}>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: redAccentColor,
                    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-chart-line text-white text-2xl"></i>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                <p className="text-gray-300 text-base">
                  The system learns from every interaction, constantly refining personalization strategies to improve conversion metrics and customer satisfaction scores.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://placehold.co/500x700/8B4513/ffffff?text=Personalization+Image"
            alt="AI-Powered Personalization"
            className="rounded-lg shadow-2xl max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Personalization;
