'use client';

import React from 'react';

const IntelligentProductRecommendationSystems: React.FC = () => {
  const darkBackground = '#2d2d34'; // Dark background color from w6.PNG
  const redAccentColor = '#e54d42'; // The specific red accent color from w6.PNG

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden text-white"
      style={{ backgroundColor: darkBackground }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16 flex flex-col items-center">
        {/* Main Heading - Aligned to the left */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-12 text-left w-full">
          Intelligent Product Recommendation Systems
        </h2>

        {/* Content Area: Left Text and Right Features */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full"> {/* Adjusted gap for closer columns */}
          {/* Left Text Block */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <p className="text-xs text-gray-300 leading-relaxed"> {/* Decreased text size from text-sm to text-xs */}
              Our AI-powered recommendation engine is a game-changer for e-commerce
              businesses, revolutionizing how customers interact with your products.
              It goes far beyond simple "customers also bought" suggestions, diving
              deep into individual preferences. By leveraging advanced machine
              learning algorithms, we are able to analyze complex patterns in
              customer behavior and buying habits, predicting future needs and
              desires with remarkable accuracy. This leads to a truly personalized
              shopping journey, making every visit unique and engaging.
            </p>
            <p className="text-xs text-gray-300 leading-relaxed"> {/* Decreased text size from text-sm to text-xs */}
              This powerful analytics engine allows us to present the right products
              at precisely the right moments in the shopping journey, from initial
              browsing to final checkout. Instead of generic, one-size-fits-all
              recommendations, our system delivers hyper-personalized product
              suggestions tailored to each individual customer's unique preferences,
              past interactions, and current intent. This dynamic adaptation ensures
              maximum relevance and significantly enhances the user experience,
              making product discovery effortless.
            </p>
            <p className="text-xs text-gray-300 leading-relaxed"> {/* Decreased text size from text-sm to text-xs */}
              These intelligent recommendations drive significant increases in
              average order value and cart size, directly impacting your bottom line,
              all while enhancing the overall shopping experience and fostering
              customer loyalty. By helping customers discover relevant products they
              actually want, even before they know they want them, we create a
              win-win scenario. Customers find what they're looking for more easily
              and enjoy a seamless journey, and your business sees a substantial
              boost in conversions and revenue, ensuring sustainable growth.
            </p>
          </div>

          {/* Right Features List */}
          <div className="md:w-1/2 space-y-10 pl-0 md:pl-12"> {/* Vertical space between features */}
            {/* Cart Enhancement */}
            <div className="flex flex-col items-start text-left">
              <div className="flex-shrink-0 mb-4" style={{ color: redAccentColor }}>
                {/* Shopping Cart Icon */}
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.182 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-1">Cart Enhancement</h3>
              <p className="text-xl text-gray-300"> {/* Increased text size from text-lg to text-xl */}
                Strategic complementary product suggestions at checkout that increase
                average order value by 25%.
              </p>
            </div>

            {/* Discovery Optimization */}
            <div className="flex flex-col items-start text-left">
              <div className="flex-shrink-0 mb-4" style={{ color: redAccentColor }}>
                {/* Magnifying Glass with Plus Icon */}
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Discovery Optimization</h3>
                <p className="text-xl text-gray-300"> {/* Increased text size from text-lg to text-xl */}
                  AI-curated product collections that improve browse-to-purchase
                  conversion by 42%.
                </p>
              </div>
            </div>

            {/* Re-engagement Triggers */}
            <div className="flex flex-col items-start text-left">
              <div className="flex-shrink-0 mb-4" style={{ color: redAccentColor }}>
                {/* Circular Arrow Icon */}
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Re-engagement Triggers</h3>
                <p className="text-xl text-gray-300"> {/* Increased text size from text-lg to text-xl */}
                  Personalized product alerts that bring 28% of abandoned carts back
                  to completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentProductRecommendationSystems;
