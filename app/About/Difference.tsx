"use client";
import React, { FC } from "react";
import { ChevronDown } from "lucide-react";

const Different: FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-6xl mx-auto sm:py-16">
        {/* Section: Image and Text side-by-side */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 px-4">
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="/about-us/makes-us-different.png"
              alt="A team of people working in an office"
              className="w-full max-w-[500px] object-contain transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
              }}
            />
          </div>

          {/* Right Column: Heading and Description */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              <span className="relative">What Makes Us Different</span>
            </h3>
            <p className="mt-6 text-lg text-white leading-relaxed">
              We saw a gap in the market — customer engagement tools were either too
              complex or too generic. ChatSupplies was built to change that. With
              adaptive AI models that learn from user prompts and business data, our bots
              don’t just respond — they evolve. Through a seamless integration experience,
              businesses can onboard our system in minutes, manage their bots via an
              intuitive admin panel, and watch customer satisfaction grow organically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
