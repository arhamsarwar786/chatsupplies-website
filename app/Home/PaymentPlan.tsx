"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"; // Removed faCircleXmark, faInfoCircle

// ✅ Add both open & close animations dynamically (kept for existing UI behavior)
// NOTE: Since the popup is removed, this CSS is technically unnecessary but kept to fulfill the "don't change existing behavior" note if other animations were present.
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

// ⚠️ IMPORTANT: Minimal Plan interface relying only on API data, plus defaults
interface Plan {
  id: number;
  name: string;
  description: string; // Still exists, but no longer used for popup
  price: number;
  currency: string;
  is_active: boolean;
  duration_days: number;
  is_recurring: boolean;
  billing_cycle: string;
  created_at: string;
  
  // 👇 Default design properties for minimal UI structure
  is_best_value?: boolean; 
  header_color: string;
  button_color: string;
  text_color: string;
}

// Type for the PricingCard's props - REMOVED handleShowPopup
interface PricingCardProps {
  plan: Plan;
}

const PricingTablePage: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // REMOVED: selectedDescription and showPopup states

  /**
   * Function to map API data to the Plan interface and assign default colors/defaults.
   * @param apiPlans Array of plans returned from the backend API.
   * @returns An array of Plan objects using only dynamic data.
   */
  const mapPlanToCardData = (apiPlans: any[]): Plan[] => {
    // We limit to the first 5 plans to keep the desktop grid layout consistent
    const plansWithDefaults = apiPlans.slice(0, 5).map((apiPlan: any, index: number) => {
      
      // Default colors assigned based on index, as no color data exists in the backend
      const colors = [
        { header: "bg-[#4CAF50]", button: "bg-[#4CAF50] hover:bg-[#388E3C]" }, // Green (Starter)
        { header: "bg-[#FF5722]", button: "bg-[#FF5722] hover:bg-[#E64A19]" }, // Orange (Bronze)
        { header: "bg-[#2196F3]", button: "bg-[#2196F3] hover:bg-[#1E88E5]", bestValue: true }, // Blue (Silver)
        { header: "bg-[#FFC107]", button: "bg-[#FFC107] hover:bg-[#FFB300]" }, // Gold (Gold)
        { header: "bg-[#673AB7]", button: "bg-[#5E35B1] hover:bg-[#542F99]" }, // Purple (Enterprise)
      ][index] || { header: "bg-gray-700", button: "bg-gray-600 hover:bg-gray-500" };
      
      const isEnterprise = apiPlan.name.toLowerCase().includes('enterprise');

      return {
        id: apiPlan.id,
        name: apiPlan.name,
        description: apiPlan.description || "No description provided.",
        price: apiPlan.price || 0,
        currency: apiPlan.currency || "USD",
        is_active: apiPlan.is_active,
        duration_days: apiPlan.duration_days || 30,
        is_recurring: apiPlan.is_recurring,
        billing_cycle: apiPlan.billing_cycle || (apiPlan.price === 0 ? "Always Free" : "Monthly"),
        created_at: apiPlan.created_at,
        
        // Static UI placeholders (REMOVED FEATURE DATA)
        form_limit: isEnterprise ? "Unlimited" : "N/A",
        monthly_submissions: isEnterprise ? "Unlimited" : "N/A",
        user_plan: isEnterprise ? "Contact Sales" : "N/A",
        available_space: isEnterprise ? "Priority Support" : "N/A",
        
        // Static design properties
        is_best_value: colors.bestValue || false,
        header_color: colors.header,
        button_color: `${colors.button} text-white`,
        text_color: "text-white", // Always white on dark background
      } as Plan;
    });

    return plansWithDefaults;
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("https://api.chatsupplies.com/packages/");
        if (!res.ok) throw new Error("Failed to fetch plans");
        
        const data = await res.json();
        setPlans(mapPlanToCardData(data));
      } catch (err: any) {
        console.error("API failed:", err.message);
        setPlans([]); 
        setError("Failed to load pricing plans from backend.");
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  // REMOVED: handleShowPopup and handleClosePopup functions

// ------------------------------------------------------------------
// ## PricingCard Component (Updated)
// Removed the info button.
// ------------------------------------------------------------------

  const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
    
    // Determine the text for the button and if it's an Enterprise-like plan
    const isEnterprise = plan.name.toLowerCase().includes('enterprise');
    const buttonText = isEnterprise ? "Get a Quote" : "Get Started";
    const customButtonClass = plan.button_color;

    // Logic to format price and currency based on API data
    let priceDisplay;
    let currencySuffix;

    const currencySymbol = plan.currency.toLowerCase() === 'eur' ? '€' : plan.currency.toLowerCase() === 'usd' ? '$' : plan.currency;

    if (isEnterprise && plan.price === 0) {
      priceDisplay = plan.currency; // e.g., "Custom Price" or "eur"
      currencySuffix = plan.billing_cycle; // e.g., "Contact Sales"
    } else if (plan.price === 0) {
      priceDisplay = "FREE";
      currencySuffix = plan.billing_cycle; // e.g., "Always Free"
    } else {
      priceDisplay = `${currencySymbol}${plan.price.toFixed(2)}`;
      currencySuffix = plan.is_recurring ? plan.billing_cycle : "One-Time Payment";
    }


    return (
      <div
        className={`flex flex-col flex-1 rounded-lg shadow-xl transition-all duration-300 w-full md:max-w-xs ${plan.is_best_value ? 'transform scale-[1.03] relative z-10' : ''}`}
        // Background remains transparent/dark
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        {/* 1. Plan Name Header (Color Block) */}
        <div className={`p-4 rounded-t-lg relative ${plan.header_color} flex flex-col items-center justify-center min-h-[60px] ${isEnterprise ? 'pt-8' : ''}`}>
          {plan.is_best_value && (
            <div className="absolute top-0 px-4 py-1 text-xs font-bold text-white uppercase rounded-b-lg bg-[#FFC107] shadow-md">
              Best Value
            </div>
          )}
          <h2 className="text-3xl font-extrabold text-white uppercase text-center">
            {plan.name}
          </h2>
        </div>

        {/* 2. Price/Details Block (Dynamic Data) */}
        <div className="p-6 pb-4 flex flex-col items-center justify-center bg-transparent text-white">
          <div className="text-center w-full">
            <div className="text-6xl font-extrabold leading-none text-white">
              {priceDisplay}
            </div>
            <p className="text-sm text-white/80 mt-1">
              {currencySuffix}
            </p>
            {plan.is_recurring && plan.price !== 0 && (
              <p className="text-xs text-white/70">
                {plan.billing_cycle}
              </p>
            )}
            
            {/* REMOVED: Info Icon button for description popup */}
          </div>
        </div>

        {/* 3. Button Section */}
        <div className="p-6 pt-6 bg-transparent">
          <button
            className={`w-full py-3 rounded-md font-bold transition-all duration-200 text-lg ${customButtonClass} shadow-lg`}
          >
            {buttonText}
          </button>
        </div>


        {/* 4. Features Section - Generic Placeholder */}
        <div className="flex flex-col p-6 pt-0 space-y-4 flex-grow">
          <div className="text-center text-white/70 italic text-sm border-t border-white/20 pt-4">
            Feature data not available from backend.
            <br/>
            Displaying core plan properties only.
          </div>
        </div>
      </div>
    );
  };

// ------------------------------------------------------------------
// ## Main Component Return
// ------------------------------------------------------------------

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

        {/* DESKTOP VIEW: Grid dynamically adjusts based on available plans */}
        <div className={`hidden lg:grid ${plans.length === 5 ? 'grid-cols-5' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5'} justify-center items-stretch gap-4 p-4`}>
          {plans.map((plan) => (
            // REMOVED: handleShowPopup prop
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <hr className="hidden lg:block my-4 border-white/20" />

        {/* MOBILE VIEW: Stacked Cards */}
        <div className="lg:hidden flex flex-col gap-6 items-center">
          {plans.map((plan) => (
            <div key={plan.id} className="w-full max-w-sm">
              {/* REMOVED: handleShowPopup prop */}
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>

      {/* REMOVED: Center Animated Popup block entirely */}
    </div>
  );
};

export default PricingTablePage;