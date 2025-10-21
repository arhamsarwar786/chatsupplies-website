"use client";

import Head from "next/head";
import { useState } from "react";
import { User, Mail, ChevronDown, MessageSquare } from "lucide-react";
import Form from "../Components/Form";

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

            <button
              onClick={togglePopup}
              className="mt-24 border-4 border-[#FFFFFF] bg-transparent text-[#FFFFFF] py-3 px-8 rounded-full hover:bg-white hover:text-[#0E1B4F] transition cursor-pointer " style={{ fontFamily: 'Mont', fontWeight: 900 }}
            >
              Let's try it
            </button>
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

        {/* Popup overlay */}
        <div
          className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300 ${showPopup ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <div
            className={`bg-white text-[#0E1F4F] p-8 rounded-lg max-w-md w-full mx-4 relative font-mont transform transition-all duration-300 ease-out ${showPopup
                ? "scale-100 opacity-100 translate-y-0"
                : "scale-95 opacity-0 -translate-y-4"
              }`}
          >
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              ✕
            </button>
            <h2 className="text-2xl mb-4 font-bold">Let's Try it</h2>
            <p className="mb-6 font-normal">
              Fill out this form and we'll get back to you shortly to schedule a demo.
            </p>
          <Form/>
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
      </div>
    </>
  );
}
