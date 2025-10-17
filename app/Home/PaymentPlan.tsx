"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// --- Plan, PricingCardProps, BillingToggleProps, BillingToggle components remain unchanged ---

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
  // --- NEW STATES FOR SEPARATE PLAN STORAGE ---
  const [monthlyPlans, setMonthlyPlans] = useState<Plan[]>([]);
  const [yearlyPlans, setYearlyPlans] = useState<Plan[]>([]);
  // --- EXISTING STATES ---
  const [plans, setPlans] = useState<Plan[]>([]); // Current displayed plans
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [maxFeatures, setMaxFeatures] = useState(0);
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

      // const isEnterprise = apiPlan.name.toLowerCase().includes("enterprise"); // Unused in this scope, but kept for context

      let parsedDescription: string[] = [];
      if (typeof apiPlan.description === "string") {
        // FIX: Properly handle pipe-separated and newline-separated descriptions
        const descString = apiPlan.description.trim();
        
        // Split by newlines first, then handle pipe-separated values within each line
        const lines = descString.split('\n');
        parsedDescription = lines.flatMap((line: string) => {
          const trimmedLine = line.trim();
          if (trimmedLine.includes('|')) {
            // For pipe-separated lines like "Limited Form|5 Form", keep them as single items
            // This preserves the format for the PricingCard component to handle
            return [trimmedLine];
          } else if (trimmedLine) {
            // For regular lines without pipes
            return [trimmedLine];
          }
          return [];
        });
        
        console.log(`Plan ${apiPlan.name} parsed description:`, parsedDescription);
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

        // is_best_value is set to false initially
        is_best_value: false,
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
        console.log("Raw API response:", data);

        // 🟢 FIX 1: Store monthly and yearly plans separately
        const monthlyApiPlans = Array.isArray(data.monthly) ? data.monthly : [];
        const yearlyApiPlans = Array.isArray(data.yearly) ? data.yearly : [];

        const mappedMonthlyPlans = mapPlanToCardData(monthlyApiPlans);
        const mappedYearlyPlans = mapPlanToCardData(yearlyApiPlans);

        console.log("Mapped monthly plans:", mappedMonthlyPlans);
        console.log("Mapped yearly plans:", mappedYearlyPlans);

        setMonthlyPlans(mappedMonthlyPlans);
        setYearlyPlans(mappedYearlyPlans);

        // Calculate maxFeatures across ALL fetched plans
        const allMappedPlans = [...mappedMonthlyPlans, ...mappedYearlyPlans];
        const max = allMappedPlans.reduce(
          (max, p) => Math.max(max, p.description.length),
          0
        );
        setMaxFeatures(max);
        console.log("Max features:", max);

      } catch (err: any) {
        console.error("API failed:", err.message);
        setMonthlyPlans([]);
        setYearlyPlans([]);
        setError("Failed to load pricing plans from backend.");
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  // 🟢 FIX 2: useEffect to update displayed plans when billingCycle or source plans change
  useEffect(() => {
    // Select the correct set of plans based on the billing cycle
    let plansToDisplay = billingCycle === 'monthly' ? monthlyPlans : yearlyPlans;

    // --- RECALCULATE BEST VALUE ON THE CURRENTLY DISPLAYED PLANS ARRAY ---
    const displayPlansCount = plansToDisplay.length;
    if (displayPlansCount > 0) {
      const centerIndex = Math.ceil(displayPlansCount / 2) - 1;

      // Re-map the plans to assign the best value flag to the middle plan
      plansToDisplay = plansToDisplay.map((plan, index) => ({
        ...plan,
        is_best_value: index === centerIndex,
      }));
    }

    // Update the main plans state, which is used for rendering
    setPlans(plansToDisplay);
    console.log("Display plans updated:", plansToDisplay);
  }, [billingCycle, monthlyPlans, yearlyPlans]);
  // ----------------------------------------------------------------------


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
          // FIX 2: Added conditional pt-[25px] to align header content across all cards
          className={`p-4 relative flex flex-col items-center justify-center h-[70px] ${isEnterprise ? "pt-8" : ""
            } ${plan.is_best_value ? "" : "pt-[25px]"}`
          }
          style={{
            background: "linear-gradient(to right, #2648EF 0%, #252F8B 100%)",
            opacity: 0.8,
          }}
        >
          {/* Best Value Tag */}
          {plan.is_best_value && (
            <div className="absolute top-0 px-4 py-1 text-xs font-bold text-white uppercase rounded-b-lg bg-[#FFC107] shadow-md">
              Best Value
            </div>
          )}
          <h2 className="text-3xl font-extrabold text-white uppercase text-center">
            {plan.name}
          </h2>
        </div>

        {/* Price (Fixed height h-[120px] ensures alignment) */}
        <div className="p-6 pb-4 border-b border-white/20 flex flex-col items-center justify-center text-white h-[120px]">
          <div className="text-4xl font-extrabold leading-none text-white">
            {priceDisplay}
          </div>
          {currencySuffix && (
            <p className="text-sm text-white/80 mt-1">{currencySuffix}</p>
          )}
        </div>

        {/* Button (Fixed height h-[100px] ensures alignment) */}
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


  // Use the 'plans' state for rendering, which is updated in the useEffect hook
  const displayPlans = plans;

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

  if (!monthlyPlans.length && !yearlyPlans.length) // Check both source arrays
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-lg">
        No plans available.
      </div>
    );

  // Determine grid template for centering on large screens when plans < 5
  let lgGridClass = "";
  if (displayPlans.length === 1) {
    lgGridClass = "grid-cols-1 max-w-sm";
  } else if (displayPlans.length === 2) {
    lgGridClass = "grid-cols-2 max-w-2xl";
  } else if (displayPlans.length === 3) {
    lgGridClass = "grid-cols-3 max-w-3xl";
  } else if (displayPlans.length === 4) {
    lgGridClass = "grid-cols-4 max-w-6xl";
  } else {
    lgGridClass = "grid-cols-5";
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 text-white font-sans flex items-center justify-center">
      <div className="max-w-[1400px] w-full mx-auto">
        <h1 className="text-3xl md:text-5xl text-center mb-8 md:mb-12 font-bold">
          Our Plans
        </h1>

        <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

        {/* Desktop View (lg and up) */}
        <div
          className={`hidden lg:grid ${lgGridClass} justify-center items-stretch gap-4 p-4 mx-auto`}
        >
          {displayPlans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col h-full ${plan.is_best_value ? "transform scale-[1.03]" : ""}`}
            >
              <PricingCard plan={plan} maxFeatures={maxFeatures} />
            </div>
          ))}
        </div>

        {/* Mobile View (below lg) */}
        <div className="lg:hidden flex flex-col gap-6 items-center">
          {displayPlans.map((plan) => (
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