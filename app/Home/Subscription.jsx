import React from 'react';
import { CheckCircle } from 'lucide-react'; // Using Lucide React for icons

// Main App Component
export default function Subscription() {
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
<div className="min-h-screen bg-[#72DED1] flex items-center justify-center p-4 font-inter">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
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
        ${isHighlighted ? 'bg-purple-700 text-white' : 'bg-white text-black'}
      `}
    >
      <div>
        <h2 className={`text-2xl font-bold mb-2 ${isHighlighted ? '' : 'text-black'}`}>{name}</h2>

        <div className="flex items-baseline mb-4">
          {discountedPrice && (
            <span className={`line-through text-xl mr-2 ${isHighlighted ? 'text-gray-300' : 'text-gray-500'}`}>
              {price}
            </span>
          )}
          <span className={`text-4xl font-extrabold ${isHighlighted ? 'text-white' : 'text-black'}`}>
            {discountedPrice || price}
          </span>
          <span className={`text-sm ml-2 ${isHighlighted ? 'text-gray-200' : 'text-gray-600'}`}>
            {period}
          </span>
        </div>

        <button
          className={`
            w-full py-3 px-4 rounded-lg font-semibold mb-6 transition-colors duration-200
            ${isHighlighted
              ? 'bg-white text-purple-700 hover:bg-gray-100'
              : 'bg-blue-600 text-white hover:bg-blue-700'}
          `}
        >
          {buttonText}
        </button>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-start ${isHighlighted ? 'text-gray-200' : 'text-gray-800'}`}
            >
              <CheckCircle
                className={`mr-2 flex-shrink-0 mt-1 ${isHighlighted ? 'text-green-400' : 'text-green-600'}`}
                size={18}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
