"use client";
import React, { FC } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection: FC = () => {

    return (
        <div className="min-h-screen p-4 sm:p-8 font-sans">
            <div className="max-w-6xl mx-auto py-12 sm:py-16">
                {/* 1. Top Section: About Us Header and Intro */}
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white inline-block relative pb-2">
                        About Us
                    </h2>
                    <div className="mt-6 text-lg text-white max-w-3xl mx-auto leading-relaxed">
                        <p className="mb-2 font-black">
                            “We don't just build chatbots — we build intelligent conversations.”
                        </p>
                        <p>
                            At <strong className="text-white font-black">ChatSupplies
                            </strong>
                            , we're reimagining how businesses connect, engage, and grow. Our
                            AI-powered chatbots aren't just tools — they're intelligent partners that evolve with every
                            interaction. We bridge the gap between automation and emotion, enabling every website to
                            deliver instant, human-like experiences without writing a single line of code.
                        </p>
                    </div>
                </div>

                {/* 2. Bottom Section: Image and Text Column Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-4">
                    {/* Left Column: Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div>
                            <img
                                src="about-us/our-mission.png"
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
                                Our Mission
                            </span>
                        </h3>
                        <p className="mt-6 text-lg text-white leading-relaxed">
                            To simplify AI adoption through a zero-code, fully optimized platform that allows teams to
                            deploy, train, and scale chatbots effortlessly — ensuring every digital interaction feels personal,
                            intelligent, and efficient.
                        </p>
                    </div>
                </div>

                {/* 3. Vision Section: Text and Image Column Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-4 mt-16">
                    {/* Left Column: Heading and Description */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                            <span className="relative">
                                Our Vision
                            </span>
                        </h3>
                        <p className="mt-6 text-lg text-white leading-relaxed">
                            To empower every business — big or small — with smart, self-learning chatbots that drive
                            meaningful conversations, enhance customer loyalty, and transform engagement into growth.
                        </p>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div>
                            <img
                                src="about-us/our-vision.png"
                                alt="Chatbot illustration"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;

                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;