import React from 'react';

const WhyChoose = () => {
  return (
<section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0055FF] text-white overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center ">
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

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 relative">
          {/* Left: Manual Positioned Cards */}
          <div className="relative w-full lg:w-[60%] min-h-[650px] p-0 -mt-16 scale-90 sm:scale-100 very-small-scale mx-auto px-4 md:p-0">
            {/* The absolute positioning inside this container will now respect the padding */}
            <div className="relative h-full very-small-shift">
              {/* Card 1 */}
              <div
                className="absolute w-[300px] h-[358px]"
                style={{
                  top: '0px',
                  left: '0px',
                  backgroundImage: "url('/Icons/WhyChooseUs/Lightning-Fast green.svg')",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="absolute text-left"
                  style={{
                    top: '63%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <h3 className="font-montbold text-[20px] md:text-[15.5px] font-[550] text-white">
                    Ultra-Fast Support
                  </h3>
                  <p className="font-montbold text-gray-200 text-[8px] md:text-[11px]">
                    24/7 support available if you encounter any kind of problem
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="absolute w-[300px] h-[358px]"
                style={{
                  top: '43px',
                  left: '300px', /* Increased from 299px to 300px */
                  backgroundImage: "url('/Icons/WhyChooseUs/Lightning-Fast blue.svg')",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="absolute text-left"
                  style={{
                    top: '63%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <h3 className="font-montbold text-[20px] md:text-[15.5px] font-[550] text-white">
                    Multilingual Support
                  </h3>
                  <p className="font-montbold text-gray-200 text-[8px] md:text-[11px]">
                    10+ languages are supported for connecting users from all over the world
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="absolute w-[300px] h-[358px]"
                style={{
                  top: '230px',
                  left: '0px',
                  backgroundImage: "url('/Icons/WhyChooseUs/Lightning-Fast purple.svg')",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="absolute text-left"
                  style={{
                    top: '63%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <h3 className="font-montbold text-[20px] md:text-[15.5px] font-[550] text-white">
                    Team Access
                  </h3>
                  <p className="font-montbold text-gray-200 text-[8px] md:text-[11px]">
                    Role-based access in admin panel for up to 10 team members
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div
                className="absolute w-[300px] h-[300px]"
                style={{
                  top: '307px',
                  left: '300px', /* Increased from 299px to 300px */
                  backgroundImage: "url('/Icons/WhyChooseUs/Lightning-Fast orange.svg')",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="absolute text-left"
                  style={{
                    top: '72%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <h3 className="font-montbold text-[20px] md:text-[14px] font-[550] text-white">
                    Analysis & Insights
                  </h3>
                  <p className="font-montbold text-gray-200 text-[8px] md:text-[11px]">
                    Insight driven data analysis for real-time business decisions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden lg:block w-[2px] h-[462px] rounded-full mt-18"
            style={{ backgroundColor: '#FFFFFF4D' }}
          ></div>

          {/* Right: Text Block */}
          <div className="lg:w-[40%] flex justify-start mt-18">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left text-gray-300">
              {/* SVG wrapper for perfect center */}
              <div className="flex items-center justify-center w-full mb-6">
                <img
                  src="/Icons/face.svg"
                  alt="Chatbot Icon"
                  className="w-28 h-28"
                />
              </div>

              {/* Description text */}
              <p
                className="text-[20px] font-normal text-left"
                style={{
                  fontFamily: 'Mont-Bold',
                  fontWeight: 'bold',
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