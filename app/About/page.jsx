"use client";

import Footer from '../Components/Footer';
import React, { useEffect } from 'react';
import Form from './Form'

const MissionValueCard = ({ iconClass, iconBgClass, iconColorClass, title, description }) => (
  <div className="bg-white p-4 md:py-8 md:px-4 rounded-xl shadow-md text-center w-full hover:scale-[1.02] transition-all">
    <div className={`w-16 h-16 rounded-md flex items-center justify-center mb-4 mx-auto ${iconBgClass}`}>
      <i className={`${iconClass} text-lg ${iconColorClass}`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-base text-gray-600 leading-relaxed">{description}</p>
  </div>
);


const TeamMemberCard = ({ imageSrc, name, title, description }) => (
  <div className="bg-[#FFFAFA] p-5 rounded-xl shadow-md text-center flex flex-col items-center hover:scale-[1.02] transition-all">
    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-indigo-100">
      <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
    <p className="text-base font-medium text-indigo-600 mb-2">{title}</p>
    <p className="text-sm text-gray-600 leading-snug max-w-xs">{description}</p>
  </div>
);

const RecognitionItem = ({ iconClass, iconBgClass, iconColorClass, title, text }) => (
  <div className="bg-white py-6 px-5 rounded-xl shadow-md text-center flex flex-col items-center hover:scale-[1.02] transition-all w-full max-w-full lg:max-w-[440px]">
    {/* Changed p-5 to py-6 px-5 */}
    <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto ${iconBgClass}`}>
      <i className={`${iconClass} text-xl ${iconColorClass}`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
  </div>
);

const AboutUsPage = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
<section className="w-screen ml-[calc(50%-50vw)] pt-[120px] pb-[40px] px-6 bg-indigo-600 text-white text-center flex justify-center items-center min-h-[30vh] box-border">
        <div className="max-w-2xl w-full mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold mb-4 leading-tight">About Our Company</h1>
          <p className="text-lg mb-8 text-indigo-100 leading-relaxed">
            We are passionate about building innovative AI solutions that empower businesses and delight customers.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="font-semibold text-base flex items-center">
              <i className="fas fa-rocket mr-2"></i> Innovation First
            </div>
            <div className="font-semibold text-base flex items-center">
              <i className="fas fa-users mr-2"></i> Customer Focused
            </div>
            <div className="font-semibold text-base flex items-center">
              <i className="fas fa-crown mr-2"></i> Industry Leading
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2> {/* Changed mb-12 to mb-6 */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <p className="text-gray-600 mb-6">
                Founded in 2020, AI Chat Supplies emerged from a simple observation:<br />
                businesses were struggling to provide instant, personalized customer support at scale. Our founders, experienced in AI and customer service, saw an opportunity to bridge this gap.
              </p>
              <p className="text-gray-600 mb-8">
                What started as a small team of passionate engineers has grown into a<br />
                leading provider of AI chat solutions, serving thousands of businesses worldwide. We believe that every customer interaction should be meaningful, efficient, and human-like.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-indigo-600">10K+</p>
                  <p className="text-gray-700">Happy Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-600">50M+</p>
                  <p className="text-gray-700">Conversations</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-600">99.9%</p>
                  <p className="text-gray-700">Uptime</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/Images/Teamwork.PNG"
                alt="Our Story"
                className="rounded-xl shadow-lg w-full max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen ml-[calc(50%-50vw)] py-16 px-6 bg-[#f2f4f6]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[800px] mx-auto mt-14"> {/* Changed max-w-[900px] to max-w-[800px] */}
            <MissionValueCard iconClass="fas fa-bullseye" iconBgClass="bg-indigo-100" iconColorClass="text-purple-800" title="Mission" description={<>To empower businesses with <br /> AI-driven communication tools that enhance customer experiences and drive growth through intelligent automation.</>} />
            <MissionValueCard iconClass="fas fa-eye" iconBgClass="bg-indigo-100" iconColorClass="text-purple-500" title="Vision" description={<>To become the global leader in AI chat solutions, making advanced conversational AI accessible to businesses of all sizes worldwide.</>} />
            <MissionValueCard iconClass="fas fa-heart" iconBgClass="bg-indigo-100" iconColorClass="text-yellow-400" title="Values" description={<>Innovation, transparency, customer-centricity, and ethical AI development guide everything we do in our pursuit of excellence.</>} />
          </div>
        </div>
      </section>
      <section className="w-screen ml-[calc(50%-50vw)] py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mb-10">The brilliant minds behind AI Chat Supplies</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMemberCard imageSrc="https://randomuser.me/api/portraits/men/32.jpg" name="Alex Johnson" title="CEO & Founder" description="Former Google AI researcher with 15+ years in machine learning and natural language processing." />
            <TeamMemberCard imageSrc="https://randomuser.me/api/portraits/women/44.jpg" name="Sarah Chen" title="CTO" description="AI architect and former Microsoft principal engineer, specializing in conversational AI and scalable systems." />
            <TeamMemberCard imageSrc="https://randomuser.me/api/portraits/men/75.jpg" name="Michael Rodriguez" title="Head of Product" description="Product strategist with expertise in user experience design and AI product development at scale." />
          </div>
        </div>
      </section>

      <section className="w-screen ml-[calc(50%-50vw)] py-16 px-6 bg-[#f2f4f6]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 max-w-[880px] mx-auto">
            <RecognitionItem iconClass="fas fa-trophy" iconBgClass="bg-indigo-100" iconColorClass="text-indigo-500" title="Industry Recognition" text="Winner of the 2023 AI Innovation Award and recognized as 'Best AI Chat Solution' by TechCrunch." />
            <RecognitionItem iconClass="fas fa-chart-line" iconBgClass="bg-indigo-100" iconColorClass="text-indigo-500" title="Growth Milestone" text="Achieved 300% year-over-year growth and expanded to serve clients across 50+ countries worldwide." />
            <RecognitionItem iconClass="fas fa-handshake" iconBgClass="bg-orange-50" iconColorClass="text-yellow-500" title="Strategic Partnerships" text="Partnered with leading CRM platforms and integrated with 100+ business tools and applications." />
            <RecognitionItem iconClass="fas fa-shield-alt" iconBgClass="bg-indigo-100" iconColorClass="text-indigo-500" title="Security Standards" text="SOC 2 Type II certified and GDPR compliant, ensuring the highest standards of data security and privacy." />
          </div>
        </div>
      </section>

      <section className="w-screen ml-[calc(50%-50vw)] py-16 px-8 bg-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6 leading-snug">Ready to Transform Your Customer Experience?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Start with our free trial and discover how AI can revolutionize your business communication.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-600 font-semibold py-4 px-8 rounded-xl text-lg shadow-md hover:bg-gray-100 transition-all">Start Free Trial</button>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all">Schedule Demo</button>
        </div>
      </section>

      <Footer />
      <Form/>
    </div>
  );
};

export default AboutUsPage;
