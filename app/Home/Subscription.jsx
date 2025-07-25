import React from 'react';
// Removed CheckCircle as we will use Font Awesome

// Main App Component
export default function App() {
  // Data for the pricing plans
  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'per month (regional discount)',
      buttonText: 'Create Account',
      features: [
        'Build & test your app',
        'Visual Drag & Drop Builder',
        '100s Of Prebuilt Templates',
        'Build Mobile, Web, & Desktop Apps',
        'API & Data Integration',
        'Web Publishing',
      ],
      isHighlighted: false,
    },
    {
      name: 'Standard',
      price: '$30',
      discountedPrice: '$12',
      period: 'per month (regional discount)',
      buttonText: 'Start Free Trial',
      features: [
        'Free Features +',
        'Code Download',
        'APK Download',
        'Custom Domain web publishing (Additional charge per domain)',
        'Test on Local Devices (iOS / Android emulators and physical devices)',
      ],
      isHighlighted: false,
    },
    {
      name: 'Pro',
      price: '$70',
      discountedPrice: '$28',
      period: 'per month (regional discount!)',
      buttonText: 'Start Free Trial',
      features: [
        'Standard Features +',
        'Source Repository / Github Integration',
        'Branching',
        'One-Click Localization',
        'One-click Apple & Google Play Store Deployment',
      ],
      isHighlighted: true, // This card is highlighted
    },
    {
      name: 'Teams',
      price: '$70',
      discountedPrice: '$28',
      period: 'per user / month (regional discount)',
      buttonText: 'Create Team',
      features: [
        'Pro Features +',
        'Real-Time Collaboration',
        'Project Level Access Controls',
        '7 Day Audit Logs',
        'Centralized Billing',
      ],
      isHighlighted: false,
    },
  ];

  return (
    <>
      {/* Font Awesome CDN link - this ensures the icons are available */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" xintegrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0V4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-inter">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// PricingCard Component
const PricingCard = ({
  name,
  price,
  discountedPrice,
  period,
  buttonText,
  features,
  isHighlighted,
}) => {
  return (
    <div
      className={`
        rounded-xl shadow-lg p-6 flex flex-col justify-between
        ${isHighlighted ? 'bg-purple-700' : 'bg-gray-800'}
      `}
    >
      <div>
        <h2 className="text-white text-2xl font-bold mb-2">{name}</h2>
        <div className="flex items-baseline mb-4">
          {discountedPrice && (
            <span className="text-gray-400 line-through text-xl mr-2">{price}</span>
          )}
          <span className="text-white text-4xl font-extrabold">{discountedPrice || price}</span>
          <span className="text-gray-300 text-sm ml-2">{period}</span>
        </div>

        <button
          className={`
            w-full py-3 px-4 rounded-lg font-semibold mb-6 transition-colors duration-200
            ${isHighlighted ? 'bg-white text-purple-700 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}
          `}
        >
          {buttonText}
        </button>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-200">
              {/* Font Awesome Check Icon in Blue Circle */}
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 mr-2 flex-shrink-0 mt-1">
                <i
                  className="fa-solid fa-check text-white" // White tick
                  style={{ fontSize: '14px' }} // Adjust tick size within the circle
                ></i>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
