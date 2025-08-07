import React from 'react';

const WhyChoose = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-blue-950 text-white overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            className="text-[48px] leading-[100%] font-normal text-white mx-auto"
            style={{
              fontFamily: 'Mont-Black',
              fontWeight: 'bold',
              fontStyle: 'normal',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            Why Choose Us?
          </h1>

          <p
            className="text-[32px] leading-[100%] font-normal text-white text-center mx-auto mt-6"
            style={{
              fontFamily: 'Mont-SemiBold',
              fontStyle: 'normal',
              verticalAlign: 'middle',
            }}
          >
            Here’s what sets us apart from other services
          </p>
        </div>

        {/* Main content: Cards + text block side by side */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 relative">
          {/* Left: Card Grid (65%) */}
          <div className="relative w-full lg:w-[65%] h-auto min-h-[550px] flex items-center justify-center p-4">
            
            {/* Individual Cards with text, using a responsive grid layout */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-20 w-full relative z-10">


              {/* Card 1 - Top Left (Higher position, green) */}
             <div className="relative flex-1 w-full h-auto -mt-20">
  <div 
    className="relative w-full h-full p-4 md:p-6 flex flex-col justify-between" 
    style={{ 
      backgroundImage: "url('/Icons/WhyChooseUs/Lightning-Fast green.svg')", 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      minHeight: '200px' 
    }}
  >
    {/* Center-aligned text container */}
    <div className="absolute inset-0 flex items-center justify-center text-center">
      <div>
        <h3 className="font-semibold text-lg md:text-2xl text-white">Center Text</h3>
        <p className="text-gray-200 text-sm mt-2">Additional centered information</p>
      </div>
    </div>
    
    {/* Existing bottom-aligned content */}
    <div className="text-left mt-auto">
      <h3 className="font-semibold text-lg md:text-2xl">Ultra-Fast Support</h3>
      <p className="text-gray-300 text-sm mt-1">Encounter any kind of problem.</p>
    </div>
  </div>
</div>
              {/* Card 2 - Top Right (Lower position, blue) */}
              <div className="relative flex-1 w-full h-auto mt-20">
                <div className="relative w-full h-full p-4 md:p-6 flex flex-col justify-between" style={{ backgroundImage: "url('/Icons/WhyChooseUs/Lightning-Fast blue.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '200px' }}>
                  <div className="text-left mt-auto">
                    <h3 className="font-semibold text-lg md:text-2xl">Multilingual Support</h3>
                    <p className="text-gray-300 text-sm mt-1">6+ languages are supported for connecting users from all over the world</p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Bottom Left (Higher position, purple) */}
              <div className="relative flex-1 w-full h-auto -mt-20">
                <div className="relative w-full h-full p-4 md:p-6 flex flex-col justify-between" style={{ backgroundImage: "url('/Icons/WhyChooseUs/Lightning-Fast purple.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '200px' }}>
                  <div className="text-left mt-auto">
                    <h3 className="font-semibold text-lg md:text-2xl">Team Access</h3>
                    <p className="text-gray-300 text-sm mt-1">Role-based access in admin panel for up to 10 team members</p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Bottom Right (Lower position, orange) */}
              <div className="relative flex-1 w-full h-auto mt-20">
                <div className="relative w-full h-full p-4 md:p-6 flex flex-col justify-between" style={{ backgroundImage: "url('/Icons/WhyChooseUs/Lightning-Fast orange.svg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '200px' }}>
                  <div className="text-left mt-auto">
                    <h3 className="font-semibold text-lg md:text-2xl">Analysis & Insights</h3>
                    <p className="text-gray-300 text-sm mt-1">Insight driven data analysis for real-time business decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div
            className="hidden lg:block w-[2px] h-[462px] rounded-full"
            style={{
              backgroundColor: '#FFFFFF4D',
            }}
          />

          {/* Right: Text Block (35%) */}
          <div className="lg:w-[35%] flex justify-start">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left text-gray-300">
              <img
                src="/Icons/face.svg"
                alt="Chatbot Icon"
                className="w-28 h-28 mb-6"
              />
              <p
                className="text-[22px] font-normal text-left"
                style={{
                  fontFamily: 'Mont-Bold',
                  fontWeight: '400',
                  fontStyle: 'normal',
                }}
              >
                We go beyond basic chatbot functionality by offering real-time analysis,
                multilingual support, and ultra-fast customer service. Whether you're a solo
                creator or part of a large team, our platform empowers you with team
                collaboration tools, unlimited chat storage, and deep insights that drive
                smarter business decisions. From customizable flows to premium backup
                services, we're built for performance, reliability, and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
