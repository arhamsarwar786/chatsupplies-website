import React from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';

import {
  Bot,
  Lightbulb,
  User,
  MessageSquareText,
  Calendar,
  BarChart,
  TrendingUp,
  DollarSign,
  Scale,
  Smile,
  Zap
} from 'lucide-react';

// Reusable Button Component
const PrimaryButton = ({ children, className = '' }) => (
  <button
    className={`bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${className}`}
  >
    {children}
  </button>
);

// Feature Card Component
const FeatureCard = ({ title, description, imageUrl }) => (
  <div className="relative bg-gray-800 rounded-xl p-6 shadow-2xl text-white border border-gray-700 hover:border-teal-500 transition-all duration-300 overflow-hidden min-h-[500px] flex flex-col">
    {imageUrl && (
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    )}
    <div className="relative z-10 flex flex-col justify-between h-full">
      <div className="mt-auto">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">{description}</p>
        <PrimaryButton className="w-full">Get Free AI Success Strategy</PrimaryButton>
      </div>
    </div>
  </div>
);

const benefits = [
  {
    iconClass: 'fa-lightbulb',
    title: 'Boost Efficiency',
    description: 'Automate up to 80% of routine customer inquiries'
  },
  {
    iconClass: 'fa-chart-line',
    title: 'Increase Sales',
    description: 'Convert leads with 24/7 availability and instant responses'
  },
  {
    iconClass: 'fa-dollar-sign',
    title: 'Reduce Costs',
    description: 'Lower customer service expenses by up to 30%'
  },
  {
    iconClass: 'fa-users',
    title: 'Enhance Customer Satisfaction',
    description: 'Provide instant, accurate responses to improve customer experience'
  },
  {
    iconClass: 'fa-expand',
    title: 'Scale With Ease',
    description:
      'Handle thousands of conversations simultaneously without adding staff.'
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <main>
        {/* Solutions Section */}
        <section className="bg-gray-900 py-30 px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                Our <span className="text-teal-400">Services</span>
              </h2>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Empower your business with AI-tailored chatbot solutions that streamline communication,
                drive engagement, and deliver insights. Transform customer interactions into lasting
                relationships!
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section with Curved Background */}
        <section className="relative bg-[#8DEAE3] rounded-b-[90px] py-16 md:py-24 px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="/Images/Solutions.PNG"
                alt="AI Custom Chatbot Solutions"
                className="rounded-xl border-[6px] border-teal-500 shadow-lg w-full max-w-lg"
              />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-lg font-semibold text-teal-800 mb-3">
                AI Custom Chatbot Solutions:
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Revolutionize Your <span className="text-black">Business Communication</span>
              </h1>
              <p className="text-gray-800 text-lg leading-relaxed mb-8">
                Welcome to the future of business communication. Our AI Custom Chatbot Solutions are
                designed to transform how you interact with customers, streamline operations, and drive
                growth. With cutting-edge AI and ML, we provide intelligent digital assistants tailored
                to your unique business needs.
              </p>
              <PrimaryButton>
                Get Your FREE AI Success Strategy
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* Rest of your original sections remain unchanged */}

        <Footer />
      </main>
    </div>
  );
};

export default App;
