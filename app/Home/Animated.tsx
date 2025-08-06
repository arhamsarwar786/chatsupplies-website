// pages/index.tsx

import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ChatSupplies - AI Assistant</title>
      </Head>

      <div className="min-h-screen bg-[#0E1B4F] text-white flex flex-col justify-center items-center relative overflow-hidden">

        {/* Top left logo, brand name, and small bot icon */}
        <div className="absolute top-8 left-8 flex items-center space-x-3 z-20">
          <img src="/Icons/face.svg" alt="Face Logo" className="w-12 h-12" />
          <h1 className="text-3xl font-bold">ChatSupplies</h1>
        </div>

        {/* Main content area */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8 py-16 gap-8">

          {/* Left content: Text and button */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10">
            <p className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
              Looking for an AI assistant to effortlessly meet your customer needs and boost business efficiency?
            </p>
            <button className="bg-white text-[#0E1B4F] font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition">
              Book a demo
            </button>
          </div>

          {/* Right content: Responsive Robot SVG */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 -mt-12 md:-mt-20">
            <img
              src="/Icons/Bot.svg"
              alt="Robot"
              className="w-64 md:w-80 lg:w-[24rem] max-w-full h-auto"
            />
          </div>

        </div>

        {/* Background decorative circles */}
        <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 -right-24 -bottom-24" />
        <div className="absolute w-72 h-72 rounded-full bg-blue-400/20 -right-16 -bottom-16" />
        <div className="absolute w-64 h-64 rounded-full bg-blue-300/10 -left-20 -top-20" />
      </div>
    </>
  );
}
