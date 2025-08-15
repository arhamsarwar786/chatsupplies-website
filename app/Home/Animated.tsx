"use client"

import Head from 'next/head';
import { useState } from 'react';

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <Head>
        <title>ChatSupplies - AI Assistant</title>
      </Head>

      <div 
        className="min-h-screen text-white flex flex-col justify-center items-center relative overflow-hidden"
       
      >

        {/* Top left logo */}
        <div className="absolute top-8 left-8 flex items-center space-x-3 z-20">
          <img src="/Icons/face.svg" alt="Face Logo" className="w-12 h-12" />
          <h1 className="text-3xl font-bold">ChatSupplies</h1>
        </div>

        {/* Main content area */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8 py-16 gap-8">

          {/* Left content */}
          <div className="w-full md:w-[60%] text-center md:text-left z-10 mt-32 flex flex-col items-center md:items-start">
            {/* Robot image on mobile */}
            <img
              src="/Icons/Bot.svg"
              alt="Robot"
              className="w-64 mb-10 md:hidden -mt-10"
            />

            <p className="text-[30px] font-normal leading-[120%] font-[Mont-Bold] mb-8">
              Looking for an AI assistant to effortlessly meet<br />
              your customer needs<br />
              and boost business efficiency?
            </p>

            <button 
              onClick={togglePopup}
              className="mt-16 border-4 border-[#FFFFFF] bg-transparent text-[#FFFFFF] font-Mont-Block py-3 px-8 rounded-full hover:bg-white hover:text-[#0E1B4F] transition"
            >
              Book a demo
            </button>
          </div>

          {/* Right content: Robot on desktop */}
          <div className="w-full md:w-[40%] hidden md:flex justify-center md:justify-end z-10 -mt-12 md:-mt-20 relative">
            {/* Container for background + robot */}
            <div className="relative flex items-center justify-center">
              {/* SVG background */}
              <img
                src="/Lines/RobotBackground.svg"
                alt="Robot Background"
                className="absolute scale-125 w-full h-full object-contain z-0 "
              />

              {/* Robot */}
              <img
                src="/Icons/Bot.svg"
                alt="Robot"
                className="w-64 md:w-80 lg:w-[24rem] max-w-full h-auto relative z-10 -translate-x-8"
              />
            </div>
          </div>

        </div>

        {/* Popup overlay and container */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/60  flex items-center justify-center z-50">
            <div className="bg-white text-[#0E1B4F] p-8 rounded-lg max-w-md w-full mx-4 relative">
              <button 
                onClick={togglePopup}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">Book a Demo</h2>
              <p className="mb-6">Fill out this form and we'll get back to you shortly to schedule a demo.</p>
              <form>
                <div className="mb-4">
                  <label className="block mb-2">Name</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div className="mb-6">
                  <label className="block mb-2">Website(URL)</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                  <div className="mb-6">
                  <label className="block mb-2">Contact</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <button 
                  type="button"
                  className="w-full bg-[#0055FF] text-white py-2 px-4 rounded hover:bg-[#0044CC] transition cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Curved vector line from public folder */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 lg:right-[-7%] lg:translate-x-0 lg:w-auto">
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    className="w-full h-full"
  >
    <image 
      href="/Lines/Vector Line.svg" 
      width="100%" 
      height="100%"
    />
  </svg>
</div>

      </div>
    </>
  );
}
