"use client";

import Head from "next/head";
import { useState } from "react";
import { User, Mail, ChevronDown, MessageSquare } from "lucide-react";
import NewForm from "../Components/NewForm";

export default function Animated() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="min-h-screen text-white flex flex-col justify-center items-center relative overflow-hidden font-mont">

        {/* Main content area */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8 py-16 gap-8">
          {/* Left content */}
          <div className="w-full md:w-[60%] text-center md:text-left z-10 mt-32 flex flex-col items-center md:items-start">
            {/* Robot with background for mobile screens */}
            <div className="relative w-64 h-64 flex justify-center items-center mb-10 md:hidden -mt-10">
              <img
                src="/Lines/RobotBackground.svg"
                alt="Robot Background"
                className="absolute inset-0 w-full h-full object-contain scale-125 z-0"
              />
              <img
                src="/Icons/Bot.svg"
                alt="Robot"
                className="w-full h-auto relative z-10"
              />
            </div>

            <p className="text-[28px] leading-[130%] mt-5 md:-mt-20 font-bold">
              Looking for an AI assistant to effortlessly meet
              <br />
              your customer needs
              <br />
              and boost business efficiency?
            </p>

            <div className="mt-24 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={() => window.open("https://admin.chatsupplies.com/auth/signup", "_blank")}
                className="flex items-center justify-center border-4 border-[#FFFFFF] bg-transparent text-[#FFFFFF] py-3 px-8 rounded-full hover:bg-white hover:text-[#0E1B4F] transition cursor-pointer"
                style={{ fontFamily: 'Mont', fontWeight: 900 }}
              >
                Let's try it
              </button>

              <button
                onClick={togglePopup}
                className="flex items-center justify-center border-4 border-[#FFFFFF] bg-white text-[#0E1B4F] py-3 px-8 rounded-full hover:bg-white hover:text-[#0E1B4F] transition cursor-pointer"
                style={{ fontFamily: 'Mont', fontWeight: 900 }}
              >
                Hire us
              </button>
            </div>


          </div>

          {/* Right content: Robot with background (desktop only) */}
          <div className="hidden md:flex w-full md:w-[40%] justify-center md:justify-end z-10 -mt-12 md:-mt-20 relative">
            <div className="relative flex items-center justify-center w-full h-full">
              <img
                src="/Lines/RobotBackground.svg"
                alt="Robot Background"
                className="absolute inset-0 scale-125 w-full h-full object-contain z-0"
              />
              <img
                src="/Icons/Bot.svg"
                alt="Robot"
                className="w-64 md:w-80 lg:w-[24rem] max-w-full h-auto relative z-10 -translate-x-4"
              />
            </div>
          </div>
        </div>

        {/* Curved vector line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 lg:right-[-3%] lg:translate-x-0 lg:w-auto">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            className="w-full h-full"
          >
            <image href="/Lines/VectorLine.svg" width="100%" height="100%" />
          </svg>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
              <button
                onClick={togglePopup}
                className="absolute top-2 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <NewForm />
            </div>
          </div>
        )}
      </div>
    </>
  );
}