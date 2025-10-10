"use client";

import React, { useEffect, useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faInfoCircle, faCheck } from "@fortawesome/free-solid-svg-icons";

// ✅ Add both open & close animations dynamically
const popupAnimation = `
@keyframes popUp {
  0% { opacity: 0; transform: scale(0.8); }
  50% { opacity: 0.8; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes popDown {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
  100% { opacity: 0; transform: scale(0.8); }
}
.animate-popUp { animation: popUp 0.3s ease-out forwards; }
.animate-popDown { animation: popDown 0.3s ease-in forwards; }
`;
if (typeof document !== "undefined" && !document.getElementById("popupAnim")) {
  const style = document.createElement("style");
  style.id = "popupAnim";
  style.innerHTML = popupAnimation;
  document.head.appendChild(style);
}

// ⚠️ IMPORTANT: Extended Plan interface to include mock feature data
interface Plan {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  is_active: boolean;
  duration_days: number;
  is_recurring: boolean;
  billing_cycle: string;
  created_at: string;
  // 👇 Mock features based on the image
  form_limit: string;
  monthly_submissions: string;
  user_plan: string;
  available_space: string;
  additional_features?: string[]; // For Enterprise-like column
  is_best_value?: boolean;
  header_color: string;
  button_color: string;
  text_color: string;
}

// Type for the PricingCard's props
interface PricingCardProps {
  plan: Plan;
  handleShowPopup: (desc: string) => void; // Pass the popup handler to the card
}

const PricingTablePage: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );
  const [showPopup, setShowPopup] = useState(false);

  // Function to map API data to the new structure, filling in mock data
  const mapPlanToCardData = (apiPlans: any[]): Plan[] => {
    // Sort to match the image order: Starter, Bronze, Silver, Gold, Enterprise
    const sortedPlans = [
      apiPlans.find(p => p.name.toLowerCase().includes('starter')),
      apiPlans.find(p => p.name.toLowerCase().includes('pro')),
      apiPlans.find(p => p.name.toLowerCase().includes('enterprise')),
    ].filter(Boolean).slice(0, 3); // Use only first 3 from fallback for simplicity if API fails

    // Map to the structure from the image using the 3 available plans
    // Using the desired specific colors.
    const cardData: Plan[] = [
      // 1. Starter (Green Top, White Button/Green Text)
      {
        id: 101,
        name: "Starter",
        description: "All Features Included",
        price: 0,
        currency: "FREE",
        is_active: true,
        duration_days: 0,
        is_recurring: false,
        billing_cycle: "Always Free",
        created_at: "2024-01-01T00:00:00Z",
        form_limit: "5 Forms",
        monthly_submissions: "100",
        user_plan: "1 User\nIndividual Plan",
        available_space: "100 MB",
        header_color: "bg-[#4CAF50]", // Starter Green
        button_color: "bg-[#4CAF50] text-white hover:bg-[#388E3C]", // Green filled button
        text_color: "text-white"
      },
      // 2. Bronze (Orange Top, Orange Button)
      {
        id: 102,
        name: "Bronze",
        description: "For growing teams needing advanced tools.",
        price: 34,
        currency: "/month",
        is_active: true,
        duration_days: 365,
        is_recurring: true,
        billing_cycle: "Billed annually",
        created_at: "2024-01-01T00:00:00Z",
        form_limit: "25 Forms",
        monthly_submissions: "1,000",
        user_plan: "1 User\nIndividual Plan",
        available_space: "1 GB",
        header_color: "bg-[#FF5722]", // Bronze Orange
        button_color: "bg-[#FF5722] text-white hover:bg-[#E64A19]", // Orange filled button
        text_color: "text-white"
      },
      // 3. Silver (Best Value, Blue Top, Blue Button/White Text)
      {
        id: 103,
        name: "Silver",
        description: "Best value for your money and scale.",
        price: 39,
        currency: "/month",
        is_active: true,
        duration_days: 365,
        is_recurring: true,
        billing_cycle: "Billed annually",
        created_at: "2024-01-01T00:00:00Z",
        form_limit: "50 Forms",
        monthly_submissions: "2,500",
        user_plan: "1 User\nIndividual Plan",
        available_space: "10 GB",
        is_best_value: true,
        header_color: "bg-[#2196F3]", // Silver Blue
        button_color: "bg-[#2196F3] text-white hover:bg-[#1E88E5]", // Blue filled button
        text_color: "text-white"
      },
      // 4. Gold (Gold Top, Gold Button)
      {
        id: 104,
        name: "Gold",
        description: "For power users and high volume needs.",
        price: 99,
        currency: "/month",
        is_active: true,
        duration_days: 365,
        is_recurring: true,
        billing_cycle: "Billed annually",
        created_at: "2024-01-01T00:00:00Z",
        form_limit: "100 Forms",
        monthly_submissions: "10,000",
        user_plan: "1 User\nIndividual Plan",
        available_space: "100 GB",
        header_color: "bg-[#FFC107]", // Gold/Amber
        button_color: "bg-[#FFC107] text-white hover:bg-[#FFB300]", // Gold filled button
        text_color: "text-white"
      },
      // 5. Enterprise (Purple Top/Body, Purple Button)
      {
        id: 105,
        name: "Enterprise",
        description: "Dedicated service for large organizations.",
        price: 0,
        currency: "Custom Price",
        is_active: true,
        duration_days: 0,
        is_recurring: false,
        billing_cycle: "Contact Sales",
        created_at: "2024-01-01T00:00:00Z",
        form_limit: "Unlimited Usage",
        monthly_submissions: "Unlimited Usage",
        user_plan: "Multiuser Platform",
        available_space: "Dedicated Support",
        additional_features: [
          "Forms",
          "Monthly Submissions",
          "Signed Documents",
          "Submission Storage",
          "Payment Submissions",
          "API and more....",
          "Multiple Teams and Users",
          "Priority Real-Time Support"
        ],
        header_color: "bg-[#673AB7]", // Enterprise Purple
        button_color: "bg-[#5E35B1] text-white hover:bg-[#542F99]", // Enterprise Button (Darker)
        text_color: "text-white"
      },
    ];

    // Merge some dynamic data back in if API data was available
    if (sortedPlans.length > 0) cardData[0].name = sortedPlans[0].name;
    if (sortedPlans.length > 1) cardData[1].name = sortedPlans[1].name;
    if (sortedPlans.length > 2) cardData[2].name = sortedPlans[2].name;

    return cardData;
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("https://api.chatsupplies.com/packages/");
        if (!res.ok) throw new Error("Failed to fetch plans");
        const data = await res.json();
        setPlans(mapPlanToCardData(data));
      } catch (err: any) {
        console.error("API failed, using fallback data:", err.message);

        const fallbackData: Plan[] = mapPlanToCardData([]);
        setPlans(fallbackData);
        setError(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  // --- Popup Logic ---
  const handleShowPopup = (desc: string) => {
    setSelectedDescription(desc);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setTimeout(() => setSelectedDescription(null), 300); // match popDown duration
  };

  // --- Reusable Card Component ---
  const PricingCard: React.FC<PricingCardProps> = ({ plan, handleShowPopup }) => {
    // Determine which features to display in the main body for non-Enterprise plans
    const bodyFeatures = useMemo(() => {
      if (plan.name === 'Enterprise') return [];

      return [
        { label: 'Forms', value: plan.form_limit, limit_label: "Form Limit" },
        { label: 'Monthly Submissions', value: plan.monthly_submissions, limit_label: "Monthly Submissions" },
        { label: 'User', value: plan.user_plan, limit_label: "Individual Plan" },
        { label: 'Storage', value: plan.available_space, limit_label: "Available Space" },
      ]
    }, [plan]);

    const buttonText = plan.name === 'Enterprise' ? "Get a Quote" : "Get Started";
    // Use the plan's defined button_color.
    const customButtonClass = plan.button_color;

    // Set the default background color to the main dark body color
    const cardBodyBg = 'bg-[#292e42]';

    return (
      <div
        className={`flex flex-col flex-1 rounded-lg shadow-xl transition-all duration-300 w-full md:max-w-xs ${plan.is_best_value ? 'transform scale-[1.03] relative z-10' : ''}`}
        // Set the base background color of the card wrapper to dark/transparent, which affects the feature section
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        {/* 1. Plan Name Header (Color Block) */}
        <div className={`p-4 rounded-t-lg relative ${plan.header_color} flex flex-col items-center justify-center min-h-[60px] ${plan.name === 'Enterprise' ? 'pt-8' : ''}`}>
          {plan.is_best_value && (
            // BEST VALUE banner refinement
            <div className="absolute top-0 px-4 py-1 text-xs font-bold text-white uppercase rounded-b-lg bg-[#FFC107] shadow-md">
              Best Value
            </div>
          )}
          <h2 className="text-3xl font-extrabold text-white uppercase">
            {plan.name}
          </h2>
        </div>

        {/* 2. Price/Details Block (NO BACKGROUND COLOR) */}
        <div className="p-6 pb-4 flex flex-col items-center justify-center bg-transparent text-white">
          <div className="text-center w-full">
            {/* Price Display */}
            {plan.name !== 'Enterprise' ? (
              <>
                <div className="text-6xl font-extrabold leading-none text-white">
                  {plan.price === 0 ? plan.currency : `$${plan.price}`}
                </div>
                <p className="text-sm text-white/80 mt-1">
                  {plan.price !== 0 ? plan.currency : "*All Features Included"}
                </p>
                {plan.price !== 0 && (
                  <p className="text-xs text-white/70">
                    {plan.billing_cycle}
                  </p>
                )}
              </>
            ) : (
              // Enterprise Custom Price Block
              <div className="text-center text-white">
                <div className="text-4xl font-extrabold leading-none mb-2">
                  {plan.currency}
                </div>
                <p className="text-sm text-white/80 mt-1">
                  *All Features Included
                </p>
              </div>
            )}
            {/* Info Icon to show description (for all plans) */}
            <button
              onClick={() => handleShowPopup(plan.description)}
              className="mt-2 text-white/70 hover:text-white transition"
              aria-label={`View description for ${plan.name} plan`}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3. Button Section (NO BACKGROUND COLOR) */}
        <div className="p-6 pt-6 bg-transparent">
          <button
            className={`w-full py-3 rounded-md font-bold transition-all duration-200 text-lg ${customButtonClass} shadow-lg`}
          >
            {buttonText}
          </button>
        </div>


        {/* 4. Features Section (Kept Existing Behavior - dark/transparent) */}
        <div className="flex flex-col pt-0 space-y-4 flex-grow">
          {plan.name !== 'Enterprise' ? (
            // FIX: Corrected JSX structure for bodyFeatures map
            bodyFeatures.map((feature, index: number) => (
              // Adjusted spacing to replicate the feature blocks
              <div key={index} className="flex flex-col items-center justify-center space-y-1 text-center border-t border-white/20 pt-4 first:border-t-0 first:pt-0">
                <div className="text-4xl font-extrabold text-white">
                  {feature.value.split('\n')[0]}
                </div>
                <div className="text-sm font-bold text-white/80 uppercase tracking-wider">
                  {feature.value.split('\n')[1] || feature.limit_label}
                </div>
              </div>
            ))
          ) : (
            // Enterprise-specific layout (Refined visual hierarchy for text blocks)
            <div className="space-y-4">
              {/* Unlimited Usage Block */}
              <div className="text-center pb-2">
                <div className="text-2xl font-bold text-white/90 mb-2">{plan.form_limit}</div>
                <div className="text-sm font-bold text-white/80 uppercase tracking-wider">Forms/Submissions</div>
              </div>

              {/* Feature List */}
              <div className="space-y-3 pt-4 border-t border-white/20">
                <p className="text-sm font-bold text-white/90 mb-2 uppercase">{plan.user_plan}</p>
                <ul className="space-y-2">
                  {/* FIX: Corrected map function to use 'feature' and 'index' */}
                  {plan.additional_features?.slice(0, 6).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start text-sm text-white/90">
                      <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-white mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Dedicated Support Block - FIXED: added closing </div> tag */}
                <div className="pt-3 border-t border-white/20">
                  <p className="text-sm font-bold text-white/90 uppercase">{plan.available_space}</p>
                  <p className="text-sm text-white/90 mt-1">{plan.additional_features?.slice(7)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // --- Component Return ---

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-lg">
        Loading plans...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-400 text-lg">
        {error}
      </div>
    );

  if (!plans.length)
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-lg">
        No plans available.
      </div>
    );

  return (
    <div className="min-h-screen p-4 sm:p-8 text-white font-sans flex items-center justify-center">
      <div className="max-w-[1400px] w-full mx-auto">
        <h1 className="text-3xl md:text-5xl text-center mb-8 md:mb-12 font-bold">
          Our Plans
        </h1>

        {/* DESKTOP VIEW: Card Grid (Fixed Layout) */}
        <div className="hidden lg:grid grid-cols-5 justify-center items-stretch gap-4 p-4">
          {/* FIX: Pass handleShowPopup to PricingCard */}
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} handleShowPopup={handleShowPopup} />
          ))}
        </div>

        <hr className="hidden lg:block my-4 border-white/20" /> {/* Added a separator for clarity/style if needed */}

        {/* MOBILE VIEW: Stacked Cards */}
        <div className="lg:hidden flex flex-col gap-6 items-center">
          {/* FIX: Pass handleShowPopup to PricingCard */}
          {plans.map((plan) => (
            <div key={plan.id} className="w-full max-w-sm">
              <PricingCard plan={plan} handleShowPopup={handleShowPopup} />
            </div>
          ))}
        </div>
      </div>

      {/* Center Animated Popup (Existing Behavior) */}
      {/* FIX: Ensure showPopup and selectedDescription are in scope and used correctly */}
      {selectedDescription && (
        <div
          className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${showPopup ? "opacity-100" : "opacity-0"
            }`}
          onClick={handleClosePopup}
        >
          <div
            className={`bg-white/10 backdrop-blur-lg rounded-3xl p-6 max-w-lg w-full border border-white/20 text-white relative ${showPopup ? "animate-popUp" : "animate-popDown"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-mont font-bold mb-3 text-white">
              Full Description
            </h2>
            <p className="text-white/90 mb-6 whitespace-pre-line">
              {selectedDescription}
            </p>
            <button
              onClick={handleClosePopup}
              className="mt-2 w-full bg-transparent border-2 border-white text-white py-2 rounded-full font-bold hover:bg-white/30 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingTablePage;