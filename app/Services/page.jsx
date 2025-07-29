"use client";

import React from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';


const AIChatbotSection = () => {
  const primaryColor = '#14b8a6'; // --primary
  const secondaryColor = '#d1f5ee'; // --secondary
  const sectionBackgroundColor = '#2d3748'; // A dark background color for the section, similar to your PDF

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      {/* Global styles for primary/secondary colors if not using a full Tailwind setup */}
      <style>{`
        :root {
          --primary: ${primaryColor};
          --secondary: ${secondaryColor};
        }
      `}</style>
      <div
        className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden"
        style={{
          backgroundColor: sectionBackgroundColor,
          borderRadius: '2rem 10rem 10rem 2rem',
        }}
      >
        {/* Content Area (Text) */}
        <div className="w-full md:w-2/5 p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: primaryColor }}>
            Custom AI Chatbot Development
          </h2>
          <p className="text-lg mb-8">
            Transform your customer interactions with a bespoke AI chatbot tailored to your brand voice and business needs.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Personalized AI Training:</h3>
              <p className="text-gray-300">
                We build your chatbot's knowledge base using your specific industry data and company information.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Multilingual Support:</h3>
              <p className="text-gray-300">
                Engage with customers globally through chatbots fluent in multiple languages.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Seamless Integration:</h3>
              <p className="text-gray-300">
                Our chatbots integrate smoothly with your existing websites, apps, and CRM systems.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-3/5 h-80 md:h-auto flex-shrink-0 flex items-center justify-center p-4">
          <img
            src="/api/files/uploaded:n16.jpg-e5dee184-8a23-49a2-a4c0-22f1d1b243f6"
            alt="AI Chatbot Development Visual"
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/333333/ffffff?text=Image+Not+Found'; }}
          />
        </div>
      </div>
    </div>
  );
};

const CustomerSupportSection = () => {
  const primaryColor = '#14b8a6'; // --primary
  const secondaryColor = '#d1f5ee'; // --secondary
  const sectionBackgroundColor = '#2d3748'; // A dark background color for the section

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div
        className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden"
        style={{
          backgroundColor: sectionBackgroundColor,
          borderRadius: '10rem 2rem 2rem 10rem',
        }}
      >
        {/* Image Section - on the left */}
        <div className="relative w-full md:w-3/5 h-80 md:h-auto flex-shrink-0 flex items-center justify-center p-4">
          <img
            src="/api/files/uploaded:n17.jpg-af56e585-dee3-423e-9008-a38b53474732"
            alt="24/7 Customer Support Automation"
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/333333/ffffff?text=Image+Not+Found'; }}
          />
        </div>

        {/* Content Area (Text) - on the right */}
        <div className="w-full md:w-2/5 p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: primaryColor }}>
            24/7 Customer Support Automation
          </h2>
          <p className="text-lg mb-8">
            Provide round-the-clock support without increasing your overhead.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Instant Response:</h3>
              <p className="text-gray-300">
                Address customer queries in seconds, any time of day.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Intelligent Escalation:</h3>
              <p className="text-gray-300">
                Seamlessly transfer complex issues to human agents when needed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">FAQ Handling:</h3>
              <p className="text-gray-300">
                Efficiently manage common questions, freeing up your team for high-value tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, description, bgColor, textColor }) => {
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
        <AIChatbotSection />
        
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

       
        <CustomerSupportSection />
        
<section className="bg-gradient-to-r from-zinc-900 to-neutral-800 text-white rounded-tr-[10rem] rounded-br-[10rem] overflow-hidden my-12 mx-4 md:mx-20 shadow-xl">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:px-16 md:py-24 gap-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Lead Generation and <br /> <span className="text-white">Qualification</span>
          </h2>
          <p className="mb-6 text-gray-300">
            Convert website visitors into qualified leads automatically.
          </p>
          <ul className="space-y-4 text-gray-200">
            <li>
              <span className="font-semibold text-white">Interactive Questionnaires:</span> Engage potential customers and gather crucial information.
            </li>
            <li>
              <span className="font-semibold text-white">Lead Scoring:</span> Automatically qualify leads based on your specific criteria.
            </li>
            <li>
              <span className="font-semibold text-white">Appointment Scheduling:</span> Allow qualified leads to book meetings directly with your sales team.
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/n18-image.jpg"
              alt="Lead generation meeting"
              width={500}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
     <div className="min-h-screen bg-gray-100 font-inter">
      {/* Top Section: E-commerce Enhancement */}
      {/* Now applying the curve and picture on the LEFT side */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-r-3xl rounded-l-[15rem] shadow-xl mx-auto max-w-6xl mt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Column: Image for E-commerce Enhancement (now on left) */}
          {/* Removed order classes as default flex order will place it on left */}
          <div className="lg:w-1/2 flex justify-center items-center">
            {/* Image Container with subtle shadow */}
            <div className="p-4 rounded-lg shadow-lg max-w-md w-full">
              <img
                src="https://placehold.co/600x400/D1D5DB/4B5563?text=E-commerce+Image" // Placeholder for e-commerce image
                alt="E-commerce enhancement"
                className="w-full h-auto rounded-md object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/D1D5DB/4B5563?text=Image+Not+Found";
                }}
              />
            </div>
          </div>

          {/* Right Column: Text Content for E-commerce Enhancement (now on right) */}
          {/* Removed order classes as default flex order will place it on right */}
          <div className="lg:w-1/2 lg:pl-16 text-gray-800">
            <h2 className="text-4xl font-bold mb-6 text-red-600"> {/* Using a red similar to n19.PNG */}
              E-commerce Enhancement
            </h2>
            <p className="text-lg mb-8">
              Boost your online sales with AI-powered shopping assistance.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Product Recommendations:</h3>
                <p className="text-gray-700">
                  Offer personalized product suggestions based on customer preferences and browsing history.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Shopping Cart Assistance:</h3>
                <p className="text-gray-700">
                  Reduce abandonment rates with timely interventions and support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Order Tracking:</h3>
                <p className="text-700">
                  Provide real-time updates on order status and shipping information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer or gap between sections if desired */}
      <div className="h-12"></div>

      {/* Bottom Section: AI-Powered Analytics and Insights */}
      {/* This section retains the rounded left and sweeping right curve, with picture on right. */}
      <section className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-l-3xl rounded-r-[15rem] shadow-xl mx-auto max-w-6xl mb-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          {/* Left Column: Text Content for AI-Powered Analytics */}
          <div className="lg:w-1/2 lg:pr-16 text-white">
            <h2 className="text-4xl font-bold mb-6">
              AI-Powered Analytics <br className="hidden sm:inline" /> and Insights
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Gain deep insights into customer behavior and preferences.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Conversation Analysis:</h3>
                <p className="text-gray-300">
                  Understand customer needs and pain points through chatbot interaction data.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Trend Identification:</h3>
                <p className="text-gray-300">
                  Spot emerging trends and opportunities in your market.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Reporting:</h3>
                <p className="text-gray-300">
                  Generate regular reports on chatbot performance and ROI.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image for AI-Powered Analytics */}
          <div className="lg:w-1/2 flex justify-center items-center">
            {/* Image Container with Red Background (as seen in n19.PNG) */}
            <div className="bg-red-700 p-4 rounded-lg shadow-lg max-w-md w-full">
              <img
                src="https://placehold.co/600x400/B91C1C/FFFFFF?text=Analytics+Image" // Placeholder for analytics image
                alt="AI-Powered Analytics"
                className="w-full h-auto rounded-md object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/B91C1C/FFFFFF?text=Image+Not+Found";
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      {/* Container for the entire section */}
      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl w-full flex flex-col lg:flex-row">

        {/* Curved background element (top-left) */}
        {/* This div creates the large curved shape using a very large rounded-tl class */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-200 rounded-tl-[999px] transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-75 hidden md:block"></div>

        {/* Image Section - Left Side */}
        <div className="relative z-10 w-full lg:w-1/2 p-4 sm:p-6 flex items-center justify-center">
          {/* Using a placeholder image URL for demonstration. Replace with your actual image path. */}
          <img
            src="https://placehold.co/600x400/D1D5DB/1F2937?text=Your+Image+Here" // Placeholder for image_89e77a.jpg
            alt="Ongoing Optimization and Support"
            className="rounded-lg shadow-md w-full h-auto max-w-md lg:max-w-none"
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop if image fails again
              e.target.src = "https://placehold.co/600x400/D1D5DB/1F2937?text=Image+Not+Found"; // Fallback image
            }}
          />
        </div>

        {/* Content Section - Right Side */}
        <div className="relative z-10 w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4 sm:mb-6 leading-tight">
            Ongoing Optimization and Support
          </h2>
          <p className="text-gray-700 mb-4 text-base sm:text-lg">
            Ensure your chatbot evolves with your business needs.
          </p>

          <ul className="list-none space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">&bull;</span>
              <div>
                <strong className="block text-gray-800 text-lg">Regular Updates:</strong>
                <span className="text-base">Offer personalized product suggestions based on customer preferences and browsing history.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">&bull;</span>
              <div>
                <strong className="block text-gray-800 text-lg">Performance Tuning:</strong>
                <span className="text-base">Continuously improve response accuracy and conversation flow.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">&bull;</span>
              <div>
                <strong className="block text-gray-800 text-lg">Technical Support:</strong>
                <span className="text-base">Receive prompt assistance for any technical issues or questions.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;