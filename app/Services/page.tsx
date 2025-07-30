"use client";

import React from 'react';
import Footer from '../Components/Footer';
import Image from 'next/image';
import LeadGeneration from './LeadGeneration';
import AIChatbot from './AIChatbot';
import CustomerSupport from './CustomerSupport';
import EcommerceEnhancement from './ECommerceEnhancement';
import Analytics from './Analytics';
import LayoutComponent from './Layout';
import popUp from './popUp';


interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

const Card = ({ title, description, bgColor, textColor }: CardProps) => {
  const buttonStyle = {
    backgroundColor: bgColor === '--primary'
      ? 'var(--secondary)'
      : 'var(--primary)',
  };

  return (
    <div
      className={`${textColor} p-6 rounded-lg shadow-lg flex flex-col justify-between items-center text-center transition-all duration-300 transform hover:scale-105`}
      style={{ backgroundColor: `var(${bgColor})` }}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-base mb-6 flex-grow">{description}</p>
      <button
        className="px-6 py-3 rounded-md font-semibold transition-colors duration-300 text-white hover:brightness-110"
        style={buttonStyle}
      >
        Learn More
      </button>
    </div>
  );
};

const cardsData = [
  {
    title: 'Custom AI Chatbot Development',
    description: 'Transform your customer interactions with a bespoke AI chatbot tailored to your brand voice and business needs.',
    bgColor: '--primary',
    textColor: 'text-white',
  },
  {
    title: '24/7 Customer Support Automation',
    description: 'Provide round-the-clock support without increasing your overhead.',
    bgColor: '--secondary',
    textColor: 'text-gray-900',
  },
  {
    title: 'Lead Generation and Qualification',
    description: 'Convert website visitors into qualified leads automatically.',
    bgColor: '--primary',
    textColor: 'text-white',
  },
  {
    title: 'E-commerce Enhancement',
    description: 'Boost your online sales with AI-powered shopping assistance.',
    bgColor: '--secondary',
    textColor: 'text-gray-900',
  },
  {
    title: 'AI-Powered Analytics and Insights',
    description: 'Gain deep insights into customer behavior and preferences.',
    bgColor: '--primary',
    textColor: 'text-white',
  },
  {
    title: 'Customer Behavior Insights',
    description: 'Gain deep insights into customer behavior and preferences for better decision-making.',
    bgColor: '--secondary',
    textColor: 'text-gray-900',
  },
];


const App = () => {
  return (
    <div>
      <main>
        <section className="bg-gray-900 pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                <span className="text-white">Our</span>{' '}
                <span style={{ color: 'var(--primary)' }}>Services</span>
              </h2>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Step into the future of customer engagement with <br />
                Smarter Revolution's AI-powered solutions. We elevate<br />
                your business with intelligent, transformative communication.
              </p>
            </div>
          </div>
        </section>

        <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>

        <AIChatbot/>
        <CustomerSupport/>
        <LeadGeneration/>
        <EcommerceEnhancement/>
        <Analytics />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-8">
          <LayoutComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;