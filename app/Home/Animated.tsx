// pages/index.tsx

import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ChatSupplies - AI Assistant</title>
      </Head>

      <div className="min-h-screen bg-[#0055FF] text-white flex flex-col justify-center items-center relative overflow-hidden">

        {/* Top left logo */}
        <div className="absolute top-8 left-8 flex items-center space-x-3 z-20">
          <img src="/Icons/face.svg" alt="Face Logo" className="w-12 h-12" />
          <h1 className="text-3xl font-bold">ChatSupplies</h1>
        </div>

        {/* Main content area */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8 py-16 gap-8">

          {/* Left content: Wider text */}
          <div className="w-full md:w-[60%] text-center md:text-left z-10 mt-32 flex flex-col items-center md:items-start">
            {/* Robot image ONLY on mobile/tablet, hidden on md+ */}
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

            <button className="mt-16 border-4 border-[#FFFFFF] bg-transparent text-[#FFFFFF] font-Mont-Block py-3 px-8 rounded-full hover:bg-white hover:text-[#0E1B4F] transition">
              Book a demo
            </button>

          </div>

          {/* Right content: Robot image on desktop, hidden on mobile/tablet */}
          <div className="w-full md:w-[40%] hidden md:flex justify-center md:justify-end z-10 -mt-12 md:-mt-20">
            <img
              src="/Icons/Bot.svg"
              alt="Robot"
              className="w-64 md:w-80 lg:w-[24rem] max-w-full h-auto"
            />
          </div>
        </div>

        {/* Curved vector line behind the robot */}
        <svg
          className="absolute top-0 right-[3%] h-full w-[400px] z-0 pointer-events-none"
          viewBox="0 0 400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M50 0 C350 200, 50 400, 300 800"
            stroke="#4F7DF3"
            strokeOpacity="0.3"
            strokeWidth="50"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

      </div>
    </>
  );
}
