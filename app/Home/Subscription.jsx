import React from 'react';
// Removed CheckCircle as we will use Font Awesome

// Main App Component
export default function App() {
  // Data for the pricing plans
  const pricingPlans = [
    {
      name: 'Free Plan', // Updated name
      price: '$0',
      period: '/ forever', // Updated period
      buttonText: 'Create Account',
      features: [
        '1 Chatbot (active for 4 months)',
        'Chat history for the first 10 users',
        'Email support',
        'Basic chatbot customization (chat name only)',
        'Predefined chatbot template (no custom flow)',
        'Public chatbot link',
        'Dashboard access (limited)',
        'No integrations',
        'No analytics or reporting',
        'No live chat support',
        'No training data import',
        'No API access',
      ],
      isHighlighted: false,
    },
    {
      name: 'Basic Plan', // Updated name
      price: '$7',
      discountedPrice: '$60', // Using discountedPrice for yearly option
      period: '/ month or / year', // Updated period
      buttonText: 'Start Free Trial',
      features: [
        'Everything in Free Plan, plus:',
        'Unlimited chat history',
        'Email + ticket support',
        'Basic chatbot customization (logo, name, theme color)',
        'Access to chatbot performance dashboard',
        'Advanced training data import',
        'Response analytics (basic)',
        'Export chat data (.csv)',
        'No branding (your chatbot, your brand)',
        'No live chat support',
        'No API access',
      ],
      isHighlighted: false,
    },
    {
      name: 'Premium Plan', // Updated name
      price: '$12',
      discountedPrice: '$99', // Using discountedPrice for yearly option
      period: '/ month or / year', // Updated period
      buttonText: 'Start Free Trial',
      features: [
        'Everything in Basic Plan, plus:',
        'Up to 3 Chatbots',
        'Unlimited chat history',
        'Priority email + live meeting support',
        'Advanced chatbot customization (CSS styles, chatbot avatar)',
        'Multi-language support',
        'Advanced analytics and reports',
        'AI training with your own documents (PDFs, URLs, etc.)',
        'Data backup & recovery support',
        'Role-based team access (admin, editor)',
        'Invite up to 10 team members',
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

      {/* Overall page background color is #72DED1 */}
      {/* Increased vertical padding from p-4 to py-8, keeping px-4 for horizontal */}
      <div className="min-h-screen bg-[#72DED1] flex items-center justify-center px-4 py-8 font-inter">
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
        ${isHighlighted ? 'bg-purple-700' : 'bg-[#DAFBEF]'} /* Highlighted card is purple, others are #DAFBEF */
      `}
    >
      <div>
        {/* Adjusted text colors based on card background */}
        <h2 className={`${isHighlighted ? 'text-white' : 'text-black'} text-2xl font-bold mb-2`}>{name}</h2>
        <div className="flex items-baseline mb-4">
          {discountedPrice && (
            <span className={`${isHighlighted ? 'text-gray-300' : 'text-gray-700'} line-through text-xl mr-2`}>
              {/* Conditional rendering for discounted price based on plan, removed prepended '$' */}
              {name === 'Free Plan' ? '' : price}
            </span>
          )}
          <span className={`${isHighlighted ? 'text-white' : 'text-black'} text-4xl font-extrabold`}>
            {/* Display discounted price if available, otherwise regular price, removed prepended '$' */}
            {discountedPrice && name !== 'Free Plan' ? discountedPrice : price}
          </span>
          <span className={`${isHighlighted ? 'text-gray-200' : 'text-gray-800'} text-sm ml-2`}>{period}</span>
        </div>

        <button
          className={`
            w-full py-3 px-4 rounded-lg font-semibold mb-6 transition-colors duration-200
            ${isHighlighted ? 'bg-white text-purple-700 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'} /* Highlighted button is white, others are blue */
          `}
        >
          {buttonText}
        </button>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start ${isHighlighted ? 'text-gray-200' : 'text-gray-800'}`}> {/* Feature text color for readability */}
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
