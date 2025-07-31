'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  const primaryColor = '#14b8a6'; // Your --primary color
  const secondaryColor = '#d1f5ee'; // Your --secondary color

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#2d2d34' }} 
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content Area */}
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 pr-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              AI-Driven E-commerce That <br /> Converts Browsers Into Buyers
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-300">
              Optimize every aspect of your online store with artificial intelligence that personalizes experiences, maximizes conversions, and increases average order values.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#schedule"
                className="px-8 py-3 rounded-lg shadow-lg font-bold text-white transition-colors duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#e54d42' }} // Using the specific red from your PDF for these buttons
              >
                Schedule Strategy Session
              </a>
              <a
                href="#results"
                className="px-8 py-3 rounded-lg shadow-lg font-bold transition-colors duration-300 border-2 transform hover:scale-105"
                style={{ borderColor: '#e54d42', color: '#e54d42', backgroundColor: 'transparent' }} // Specific red border and text
              >
                See Our Results
              </a>
            </div>
          </div>

          {/* Right Image Area - Now an empty placeholder */}
          <div className="md:w-1/2 flex justify-center md:justify-end pl-0 md:pl-12">
            {/* This div now serves as an empty placeholder for the picture */}
            <div className="w-full max-w-md h-64 md:h-96 rounded-lg bg-gray-700 flex items-center justify-center text-gray-400 text-lg">
              {/* Placeholder for your image */}
              Picture Placeholder
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
