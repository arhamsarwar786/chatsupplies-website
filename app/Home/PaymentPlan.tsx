"use client"; 

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// ✅ Add both open & close animations dynamically (kept for existing UI behavior)
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

// ⚠️ Plan interface for backend data
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
}

const PricingTablePage: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mapPlanToCardData = (apiPlans: any[]): Plan[] => {
    const plansWithDefaults = apiPlans.slice(0, 5).map((apiPlan: any, index: number) => {
      const colors = [
        { header: "", button: "hover:opacity-80" },
        { header: "", button: "hover:opacity-80" },
        { header: "", button: "hover:opacity-80", bestValue: true },
        { header: "", button: "hover:opacity-80" },
        { header: "", button: "hover:opacity-80" },
      ][index] || { header: "", button: "hover:opacity-80" };

      const isEnterprise = apiPlan.name.toLowerCase().includes("enterprise");

      let parsedDescription: string[] = [];
      if (typeof apiPlan.description === "string") {
        const descString = apiPlan.description.replace(/^\{|\}$/g, "");
        parsedDescription = descString
          .split(",")
          .map((item: string) =>
            item.trim().replace(/^"|"$/g, "").replace(/[\u00A0]/g, " ")
          )
          .filter((item: string) => item.length > 0);
      } else if (Array.isArray(apiPlan.description)) {
        parsedDescription = apiPlan.description.map(String);
      }

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
          apiPlan.billing_cycle || (apiPlan.price === 0 ? "Always Free" : "Monthly"),
        created_at: apiPlan.created_at,

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

  const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
    const isEnterprise = plan.name.toLowerCase().includes("enterprise");
    const buttonText = isEnterprise ? "Get a Quote" : "Choose This Plan";
    const customButtonClass = plan.button_color;

    let priceDisplay;
    let currencySuffix;
    const currencySymbol =
      plan.currency.toLowerCase() === "eur"
        ? "€"
        : plan.currency.toLowerCase() === "usd"
        ? "$"
        : plan.currency;

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

    return (
      <div
        className={`flex flex-col flex-1 rounded-lg shadow-xl transition-all duration-300 w-full md:max-w-xs border border-white/20 ${
          plan.is_best_value ? "transform scale-[1.03] relative z-10" : ""
        }`}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        {/* 1. Plan Header */}
        <div
          className={`p-4 rounded-full border border-white bg-transparent relative flex flex-col items-center justify-center min-h-[60px] ${
            isEnterprise ? "pt-8" : ""
          }`}
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

        {/* 2. Price/Details */}
        <div className="p-6 pb-4 flex flex-col items-center justify-center bg-transparent text-white border-b border-white/20">
          <div className="text-center w-full">
            <div className="text-6xl font-extrabold leading-none text-white">
              {priceDisplay}
            </div>
            <p className="text-sm text-white/80 mt-1">{currencySuffix}</p>
            {plan.is_recurring && plan.price !== 0 && (
              <p className="text-xs text-white/70">{plan.billing_cycle}</p>
            )}
          </div>
        </div>

        {/* 3. Updated Button */}
        <div className="p-6 pt-6 bg-transparent border-b border-white/20">
          <button
            className={`w-full py-3 text-lg font-semibold text-[#00FFFF] border border-white rounded-full bg-transparent hover:bg-white/10 hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 shadow-md ${customButtonClass}`}
          >
            {buttonText}
          </button>
        </div>

        {/* 4. Features */}
        <div className="flex flex-col p-6 pt-0 flex-grow">
          <div className="space-y-0">
            {plan.description && plan.description.length > 0 ? (
              plan.description.map((item: string, index: number) => {
                if (typeof item === "string" && item.includes("|")) {
                  const [title, value] = item.split("|", 2);
                  return (
                    <div key={index} className="py-3 border-b border-white/20 last:border-b-0">
                      <div className="text-sm text-white/90">
                        <div className="font-bold text-white">{title.trim()}</div>
                        <div className="text-white/70 mt-1">{value.trim()}</div>
                      </div>
                    </div>
                  );
                } else if (item && item.length > 0) {
                  return (
                    <div key={index} className="py-3 border-b border-white/20 last:border-b-0">
                      <div className="flex items-center space-x-2 text-sm text-white/90">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#4CAF50] w-4 h-4 flex-shrink-0"
                        />
                        <span>{item.trim()}</span>
                      </div>
                    </div>
                  );
                }
                return null;
              })
            ) : (
              <div className="py-3 border-b border-white/20">
                <p className="text-center text-sm text-white/90">No features listed</p>
              </div>
            )}
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

  return (
    <div className="min-h-screen p-4 sm:p-8 text-white font-sans flex items-center justify-center">
      <div className="max-w-[1400px] w-full mx-auto">
        <h1 className="text-3xl md:text-5xl text-center mb-8 md:mb-12 font-bold">
          Our Plans
        </h1>

        {/* Desktop */}
        <div
          className={`hidden lg:grid ${
            plans.length === 5
              ? "grid-cols-5"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
          } justify-center items-stretch gap-4 p-4`}
        >
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <hr className="hidden lg:block my-4 border-white/20" />

        {/* Mobile */}
        <div className="lg:hidden flex flex-col gap-6 items-center">
          {plans.map((plan) => (
            <div key={plan.id} className="w-full max-w-sm">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTablePage;
