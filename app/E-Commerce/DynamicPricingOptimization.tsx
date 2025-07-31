'use client';

import React from 'react';

const DynamicPricingOptimization: React.FC = () => {
  const primaryColor = '#14b8a6'; // Your --primary color: teal
  const secondaryColor = '#d1f5ee'; // Your --secondary color: light teal
  const outerBackground = '#2d2d34'; // Dark background color for the section
  const innerContentBackground = '#000000'; // Black background for the inner content wrapper
  const redAccentColor = '#e54d42'; // The specific red accent color from w4.PNG

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden text-white"
      style={{ backgroundColor: outerBackground }} // Removed red top/bottom borders
    >
      {/* Inner Content Wrapper - Centered with a distinct background */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 rounded-lg shadow-2xl" // Added padding, rounded corners, shadow
           style={{ backgroundColor: innerContentBackground }}> {/* Black background for the content wrapper */}
        <div className="flex flex-col items-center"> {/* Centered content within this wrapper */}
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-12 text-center">
            Dynamic Pricing Optimization
          </h2>

          {/* Feature Blocks Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
            {/* Real-Time Market Adjustments */}
            <div className="flex flex-col items-center text-center">
              {/* Red square outline with filled red square inside */}
              <div className="flex-shrink-0 mb-4 flex items-center justify-center" style={{ width: '48px', height: '48px', border: `2px solid ${redAccentColor}` }}>
                <div style={{ width: '24px', height: '24px', backgroundColor: redAccentColor }}></div> {/* Inner filled square */}
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Market Adjustments</h3>
              <p className="text-gray-300 text-base">
                Our dynamic pricing system monitors competitor pricing, market demand, and inventory levels to automatically adjust your product pricing for maximum profitability.
              </p>
            </div>

            {/* Customer Segment Pricing */}
            <div className="flex flex-col items-center text-center">
              {/* Red square outline with filled red square inside */}
              <div className="flex-shrink-0 mb-4 flex items-center justify-center" style={{ width: '48px', height: '48px', border: `2px solid ${redAccentColor}` }}>
                <div style={{ width: '24px', height: '24px', backgroundColor: redAccentColor }}></div> {/* Inner filled square */}
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Segment Pricing</h3>
              <p className="text-gray-300 text-base">
                Different customer segments see strategically optimized pricing based on their purchase history, loyalty status, and price sensitivity metrics.
              </p>
            </div>

            {/* Profit Margin Protection */}
            <div className="flex flex-col items-center text-center">
              {/* Red square outline with filled red square inside */}
              <div className="flex-shrink-0 mb-4 flex items-center justify-center" style={{ width: '48px', height: '48px', border: `2px solid ${redAccentColor}` }}>
                <div style={{ width: '24px', height: '24px', backgroundColor: redAccentColor }}></div> {/* Inner filled square */}
              </div>
              <h3 className="text-xl font-bold mb-2">Profit Margin Protection</h3>
              <p className="text-gray-300 text-base">
                While maximizing sales volume, our system maintains your required profit margins and prevents destructive price wars through intelligent floor pricing rules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicPricingOptimization;
