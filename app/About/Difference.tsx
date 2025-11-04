"use client";
import React, { FC } from "react";
import { ChevronDown } from "lucide-react";

const Different: FC = () => {
   
    return (
        <div className="min-h-screen p-4 sm:p-8 font-sans">
            <div className="max-w-6xl mx-auto py-12 sm:py-16">
                {/* 1. Top Section: About Us Header and Intro */}
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative pb-2">
                        What Makes Us Different
                    </h2>

                </div>

                {/* 2. Bottom Section: Image and Text Column Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-4">
                    {/* Left Column: Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div>
                            <img
                                src="/about-us/makes-us-different.png"
                                alt="A team of people working in an office"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                  
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Column: Heading and Description */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                            <span className="relative">
                            What Makes Us Different
                            </span>

                        </h3>
                        <p className="mt-6 text-lg text-white leading-relaxed">
                            We saw a gap in the market — customer engagement tools were either too complex or too
                            generic. ChatSupplies was built to change that. With adaptive AI models that learn from user
                            prompts and business data, our bots don’t just respond — they evolve.
                            Through a seamless integration experience, businesses can onboard our system in minutes,
                            manage their bots via an intuitive admin panel, and watch customer satisfaction grow
                            organically.


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Different;