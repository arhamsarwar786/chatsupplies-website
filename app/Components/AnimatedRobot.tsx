"use client";

import React from 'react';

const AnimatedRobot = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Robot Head */}
      <div className="relative w-40 h-32 bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center p-2 z-10 overflow-hidden">
        <div
          className="absolute inset-0 rounded-[2.5rem]"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 70%)',
          }}
        />
        <div className="w-32 h-24 bg-[#2C3E50] rounded-[1.5rem] flex flex-col items-center justify-center space-y-1 relative">
          <div className="flex space-x-6 mt-2">
            <div className="w-4 h-4 bg-cyan-300 rounded-full" />
            <div className="w-4 h-4 bg-cyan-300 rounded-full" />
          </div>
          <svg
            width="40"
            height="10"
            viewBox="0 0 40 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1"
          >
            <path
              d="M10 5C10 5 15 8 20 8C25 8 30 5 30 5"
              stroke="rgb(103 232 249)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          {/* Whiskers */}
          <div className="absolute top-1/2 left-5 -translate-y-1/2 flex flex-col space-y-1">
            <div className="w-4 h-0.5 bg-cyan-300 rounded-full" />
            <div className="w-4 h-0.5 bg-cyan-300 rounded-full" />
          </div>
          <div className="absolute top-1/2 right-5 -translate-y-1/2 flex flex-col space-y-1">
            <div className="w-4 h-0.5 bg-cyan-300 rounded-full" />
            <div className="w-4 h-0.5 bg-cyan-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* Robot Body */}
      <div className="relative w-36 h-36 bg-white rounded-full shadow-xl flex flex-col items-center justify-center overflow-hidden -mt-4 z-10">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Arms - positioned absolutely relative to the main container */}
      {/* Waving Arm (viewer's left, robot's right) */}
      <div
        className="absolute w-16 h-28 bg-white rounded-[2rem] shadow-lg origin-top-right transform rotate-[45deg] z-20"
        style={{ top: '90px', left: 'calc(50% - 100px)' }}
      >
        <div
          className="absolute inset-0 rounded-[2rem]"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Hidden Arm (viewer's right, robot's left) */}
      <div
        className="absolute w-16 h-28 bg-white rounded-[2rem] shadow-lg origin-top-left transform -rotate-[10deg] opacity-75 z-0"
        style={{ top: '90px', right: 'calc(50% - 100px)' }}
      >
        <div
          className="absolute inset-0 rounded-[2rem]"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedRobot;
