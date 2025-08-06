// app/components/WhyChooseUs.tsx
import React from 'react';

const WhyChoose = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-blue-950 text-white overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-300">
            Here’s what sets us apart from other services
          </p>
        </div>

        {/* Main content: image grid + text block side by side */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left: Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-1/2">
            <img
              src="/Icons/Lightning-Fast blue.svg"
              alt="Image 1"
              className="rounded-xl shadow-lg"
            />
            <img
              src="/Icons/Lightning-Fast green.svg"
              alt="Image 2"
              className="rounded-xl shadow-lg"
            />
            <img
              src="/Icons/Lightning-Fast orange.svg"
              alt="Image 3"
              className="rounded-xl shadow-lg"
            />
            <img
              src="/Icons/Lightning-Fast purple.svg"
              alt="Image 4"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Text Block with Custom Icon */}
          <div className="lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <img
                src="/Icons/face.svg" // ✅ Already updated path
                alt="Chatbot Icon"
                className="w-28 h-28 mb-6"
              />
              <p className="text-lg leading-relaxed text-gray-300">
                We go beyond basic chatbot functionality by offering real-time analysis, multilingual support, and ultra-fast customer service. Whether you're a solo creator or part of a large team, our platform empowers you with team collaboration tools, unlimited chat storage, and deep insights that drive smarter business decisions. From customizable flows to premium backup services, we're built for performance, reliability, and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
