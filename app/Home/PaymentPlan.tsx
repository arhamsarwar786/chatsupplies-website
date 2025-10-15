"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Plan {
  id: number;
  name: string;
  description: string[];
  price: number;
  currency: string;
  is_active: boolean;
  duration_days: number;
  is_recurring: boolean;
  billing_cycle: string;
  created_at: string;

  is_best_value?: boolean;
  header_color: string;
  button_color: string;
  text_color: string;
}

interface PricingCardProps {
  plan: Plan;
  maxFeatures: number;
}

// --- NEW BillingToggle Component ---
interface BillingToggleProps {
  billingCycle: 'monthly' | 'yearly';
  setBillingCycle: (cycle: 'monthly' | 'yearly') => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="flex justify-center mb-8 md:mb-12">
      <div
        className="relative flex p-1 rounded-full shadow-inner w-full max-w-xs"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        {/* Active Slider Background */}
        <div
          className={`absolute top-1 bottom-1 w-1/2 rounded-full transition-transform duration-300 ease-in-out bg-blue-600 shadow-md ${billingCycle === 'monthly' ? 'translate-x-0' : 'translate-x-full'
            }`}
        ></div>

        {/* Monthly Button */}
        <button
          className={`flex-1 px-4 py-2 text-center text-lg font-semibold relative z-10 transition-colors duration-300 ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'
            }`}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>

        {/* Yearly Button */}
        <button
          className={`flex-1 px-4 py-2 text-center text-lg font-semibold relative z-10 transition-colors duration-300 ${billingCycle === 'yearly' ? 'text-white' : 'text-white/60'
            }`}
          onClick={() => setBillingCycle('yearly')}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};
// ---------------------------------


const PricingTablePage: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [maxFeatures, setMaxFeatures] = useState(0);
  // --- NEW STATE FOR TOGGLE ---
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');


  const mapPlanToCardData = (apiPlans: any[]): Plan[] => {
    // Only take the first 5 plans as per existing logic
    const plansWithDefaults = apiPlans.slice(0, 5).map((apiPlan: any, index: number) => {
      // The 'colors' array is used for static default assignment, but we'll override is_best_value later
      const colors = [
        { header: "", button: "hover:opacity-80" },
        { header: "", button: "hover:opacity-80" },
        { header: "", button: "hover:opacity-80", bestValue: false }, // Explicitly set to false here for dynamic assignment
        { header: "", button: "hover:opacity-80" },
        { header: "", button: "hover:opacity-80" },
       ][index] || { header: "", button: "hover:opacity-80" };

      const isEnterprise = apiPlan.name.toLowerCase().includes("enterprise");

      let parsedDescription: string[] = [];
      if (typeof apiPlan.description === "string") {
        const descString = apiPlan.description
          .replace(/^[{\[\"]+|[}\]\"]+$/g, "")
          .replace(/\\+/g, "")
          .trim();

        parsedDescription = descString
          .split(",")
          .map((item: string) =>
            item
              .trim()
              .replace(/^"+|"+$/g, "")
              .replace(/[\u00A0]/g, " ")
          )
          .filter(
            (item: string) =>
              item.length > 0 && !/[{}\\]/.test(item)
          );
      } else if (Array.isArray(apiPlan.description)) {
        parsedDescription = apiPlan.description.map(String);
      }

      // Converts "monthly" or "MONTHLY" → "Monthly"
      const normalizedCycle =
        apiPlan.billing_cycle && typeof apiPlan.billing_cycle === "string"
          ? apiPlan.billing_cycle.charAt(0).toUpperCase() +
          apiPlan.billing_cycle.slice(1).toLowerCase()
          : "";

      return {
        id: apiPlan.id,
        name: apiPlan.name,
        description: parsedDescription,
        price: apiPlan.price || 0,
        currency: apiPlan.currency || "USD",
        is_active: apiPlan.is_active,
        duration_days: apiPlan.duration_days || 30,
        is_recurring: apiPlan.is_recurring,
        billing_cycle:
          normalizedCycle || (apiPlan.price === 0 ? "Always Free" : ""),
        created_at: apiPlan.created_at,

        // is_best_value will be calculated and applied after the fetch
        is_best_value: colors.bestValue || false,
        header_color: colors.header,
        button_color: `${colors.button} text-white`,
        text_color: "text-white",
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
        let mappedPlans = mapPlanToCardData(data);

        // --- LOGIC FOR BEST VALUE (PRESERVED) ---
        const totalPlans = mappedPlans.length;
        if (totalPlans > 0) {
          const centerIndex = Math.ceil(totalPlans / 2) - 1;

          if (centerIndex >= 0 && centerIndex < totalPlans) {
            mappedPlans = mappedPlans.map((plan, index) => ({
              ...plan,
              is_best_value: index === centerIndex,
            }));
          }
        }
        // ---------------------------------

        setPlans(mappedPlans);

        const max = mappedPlans.reduce(
          (max, p) => Math.max(max, p.description.length),
          0
        );
        setMaxFeatures(max);
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

  // --- NEW FILTER LOGIC ---
  const filteredPlans = plans.filter(plan => {
    const planBillingCycle = plan.billing_cycle.toLowerCase();
    
    if (billingCycle === 'monthly') {
      return planBillingCycle.includes('monthly') || planBillingCycle.includes('month');
    } else { // yearly
      return planBillingCycle.includes('yearly') || planBillingCycle.includes('year') || 
             planBillingCycle.includes('annual') || planBillingCycle.includes('always free');
    }
  });

  const PricingCard: React.FC<PricingCardProps> = ({ plan, maxFeatures }) => {
    const isEnterprise = plan.name.toLowerCase().includes("enterprise");
    const buttonText = isEnterprise ? "Get a Quote" : "Choose This Plan";

    const currencySymbol =
      plan.currency.toLowerCase() === "eur"
        ? "€"
        : plan.currency.toLowerCase() === "usd"
          ? "$"
          : plan.currency;

    let priceDisplay;
    let currencySuffix;
    if (isEnterprise && plan.price === 0) {
      priceDisplay = plan.currency;
      currencySuffix = plan.billing_cycle;
    } else if (plan.price === 0) {
      priceDisplay = "FREE";
      currencySuffix = plan.billing_cycle;
    } else {
      priceDisplay = `${currencySymbol}${plan.price.toFixed(2)}`;
      currencySuffix = plan.is_recurring ? plan.billing_cycle : "One-Time Payment";
    }

    const FEATURE_ROW_HEIGHT_CLASS = "h-[56px]";

    return (
      <div
        className={`flex flex-col h-full rounded-lg shadow-xl transition-all duration-300 border border-white/20 text-center ${plan.is_best_value ? "relative z-10" : ""
          }`}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        {/* Header */}
        <div
          className={`p-4 relative flex flex-col items-center justify-center h-[70px] ${isEnterprise ? "pt-8" : ""
            }`}
          style={{
            background: "linear-gradient(to right, #2648EF 0%, #252F8B 100%)",
            opacity: 0.8,
          }}
        >
          {plan.is_best_value && (
            <div className="absolute top-0 px-4 py-1 text-xs font-bold text-white uppercase rounded-b-lg bg-[#FFC107] shadow-md">
              Best Value
            </div>
          )}
          <h2 className="text-3xl font-extrabold text-white uppercase text-center">
            {plan.name}
          </h2>
        </div>

        {/* Price */}
        <div className="p-6 pb-4 border-b border-white/20 flex flex-col items-center justify-center text-white h-[120px]">
          <div className="text-4xl font-extrabold leading-none text-white">
            {priceDisplay}
          </div>
          {currencySuffix && (
            <p className="text-sm text-white/80 mt-1">{currencySuffix}</p>
          )}
        </div>

        {/* Button */}
        <div className="p-6 pt-6 border-b border-white/20 flex justify-center h-[100px]">
          <button className="w-full py-2.5 text-base font-semibold text-[#00FFFF] border border-white rounded-full bg-transparent hover:bg-white/10 hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 shadow-md">
            {buttonText}
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-col flex-grow justify-start text-center">
          <div className="p-6 pt-0 flex-grow flex flex-col justify-between">
            <div className="space-y-0 flex-grow">
              {Array.from({ length: maxFeatures }).map((_, index) => {
                const item = plan.description[index];
                const hasItem = item && item.length > 0;
                const hasPipe = hasItem && item.includes("|");

                const rowClass = `border-b border-white/20 last:border-b-0 ${FEATURE_ROW_HEIGHT_CLASS} flex items-center justify-center`;

                if (hasItem) {
                  if (hasPipe) {
                    const [title, value] = item.split("|", 2);
                    return (
                      <div key={index} className={rowClass}>
                        <div className="text-sm text-white/90">
                          <div className="font-bold text-white leading-tight">
                            {title.trim()}
                          </div>
                          <div className="text-white/70 mt-0.5 text-xs leading-tight">
                            {value.trim()}
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className={rowClass}>
                        <div className="flex flex-col items-center text-sm text-white/90">
                          <span>{item.trim()}</span>
                        </div>
                      </div>
                    );
                  }
                } else {
                  return <div key={index} className={rowClass}></div>;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

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

  // Determine grid template for centering on large screens when plans < 5
  // Use filteredPlans instead of plans for the count
  let lgGridClass = "";
  const displayPlansCount = filteredPlans.length;
  
  if (displayPlansCount === 1) {
    lgGridClass = "grid-cols-1 max-w-sm"; // Limit width for 1 card
  } else if (displayPlansCount === 2) {
    lgGridClass = "grid-cols-2 max-w-2xl"; // Limit width for 2 cards
  } else if (displayPlansCount === 3) {
    lgGridClass = "grid-cols-3 max-w-3xl"; // Limit width for 3 cards
  } else if (displayPlansCount === 4) {
    lgGridClass = "grid-cols-4 max-w-6xl"; // Limit width for 4 cards
  } else {
    lgGridClass = "grid-cols-5"; // Default for 5 or more (using max-w-[1400px])
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 text-white font-sans flex items-center justify-center">
      <div className="max-w-[1400px] w-full mx-auto">
        <h1 className="text-3xl md:text-5xl text-center mb-8 md:mb-12 font-bold">
          Our Plans
        </h1>

        {/* --- ADDED TOGGLE HERE --- */}
        <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

        {/* Desktop View (lg and up) - Centering by limiting container width and using mx-auto */}
        <div
          className={`hidden lg:grid ${lgGridClass} justify-center items-stretch gap-4 p-4 mx-auto`}
        // The mx-auto centers the grid *within* the max-w-[1400px] parent.
        // For < 5 cards, lgGridClass gives a tighter max-width which centers the group.
        >
          {filteredPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`flex flex-col h-full ${plan.is_best_value ? "transform scale-[1.03] my-[-8px]" : ""}`}
            >
              <PricingCard plan={plan} maxFeatures={maxFeatures} />
            </div>
          ))}
        </div>

        <hr className="hidden lg:block my-4 border-white/20" />

        {/* Mobile View (below lg) - Centering already happens via items-center on a full-width container */}
        <div className="lg:hidden flex flex-col gap-6 items-center">
          {filteredPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`w-full max-w-sm ${plan.is_best_value ? "transform scale-[1.03]" : ""}`}
            >
              <PricingCard plan={plan} maxFeatures={maxFeatures} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTablePage;