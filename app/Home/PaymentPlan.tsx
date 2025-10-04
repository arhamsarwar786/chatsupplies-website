"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

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
}

const PricingTablePage: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("https://api.chatsupplies.com/packages/");
        if (!res.ok) throw new Error("Failed to fetch plans");
        const data = await res.json();
        setPlans(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

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

  const handleShowPopup = (desc: string) => {
    setSelectedDescription(desc);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setTimeout(() => setSelectedDescription(null), 300); // match popDown duration
  };

  const renderFeatureIcon = (
    value: string | boolean | number,
    key?: string
  ) => {
    if (typeof value === "boolean") {
      return value ? (
        <img
          src="/PaymentPlan/Vector.svg"
          alt="Included"
          className="w-5 h-5 text-[#00F0FF]"
        />
      ) : (
        <FontAwesomeIcon icon={faCircleXmark} className="text-white w-5 h-5" />
      );
    }

    if (key === "description") {
      return (
        <div className="flex items-center gap-2 justify-center md:justify-start max-w-[220px]">
          <span className="truncate text-sm text-white/90">
            {String(value)}
          </span>
          <button
            onClick={() => handleShowPopup(String(value))}
            className="text-[#00F0FF] hover:text-white transition"
            title="View full description"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4" />
          </button>
        </div>
      );
    }

    return (
      <span className="whitespace-pre-line text-center text-sm text-white/90">
        {String(value)}
      </span>
    );
  };

  const allKeys = Array.from(
    new Set(plans.flatMap((plan) => Object.keys(plan)))
  ).filter((key) => !["id", "created_at"].includes(key));

  const formatLabel = (key: string) =>
    key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()).trim();

  return (
    <div className="min-h-screen p-4 sm:p-8 text-white font-sans flex items-center justify-center">
      <div className="max-w-[1400px] w-full mx-auto">
        <h1 className="text-3xl md:text-5xl text-center mb-8 md:mb-12 font-bold">
          Our Plans
        </h1>

        {/* ✅ Desktop View */}
        <div className="hidden lg:block overflow-x-auto rounded-3xl bg-white/15">
          <table className="min-w-full border-collapse text-white">
            <thead>
              <tr>
                {allKeys.map((key) => (
                  <th
                    key={key}
                    className="px-4 py-3 border-b border-white/20 last:border-r-0 text-left text-[#00F0FF] font-semibold text-sm md:text-base"
                    style={{ borderRight: "1px solid rgba(255,255,255,0.1)" }} // ✅ fixed warning
                  >
                    {formatLabel(key)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr
                  key={plan.id}
                  className="border-b border-white/10 hover:bg-white/10 transition"
                >
                  {allKeys.map((key) => (
                    <td
                      key={key}
                      className="px-4 py-3 text-sm text-white/90 text-center md:text-left border-r border-white/10 last:border-r-0"
                    >
                      {renderFeatureIcon(plan[key as keyof Plan], key)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Mobile View */}
        <div className="lg:hidden flex flex-col gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white/15 rounded-3xl p-6 shadow-lg border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-2 text-[#FFFFFF]">
                {plan.name}
              </h2>
              <div className="flex items-center gap-2 mb-4">
                <p className="truncate text-sm text-white/70 flex-1">
                  {plan.description}
                </p>
                <button
                  onClick={() => handleShowPopup(plan.description)}
                  className="text-[#00F0FF] hover:text-white transition"
                  title="View full description"
                >
                  <FontAwesomeIcon icon={faInfoCircle} className="w-4 h-4" />
                </button>
              </div>

              <div className="flex justify-between mb-3">
                <span className="text-[#00F0FF] font-semibold text-lg">
                  {plan.price} {plan.currency.toUpperCase()}
                </span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {plan.billing_cycle}
                </span>
              </div>

              <div className="space-y-2">
                {allKeys.map(
                  (key) =>
                    key !== "name" &&
                    key !== "description" && (
                      <div
                        key={key}
                        className="flex justify-between items-center border-b border-white/10 pb-2"
                      >
                        <span className="text-sm text-white/70">
                          {formatLabel(key)}
                        </span>
                        {renderFeatureIcon(plan[key as keyof Plan], key)}
                      </div>
                    )
                )}
              </div>

              <button className="mt-5 w-full bg-transparent border-2 border-white text-[#00F0FF] py-2 px-8 rounded-full font-bold hover:bg-white/30 transition">
                Choose This Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Center Animated Popup */}
      {selectedDescription && (
        <div
          className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
            showPopup ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClosePopup}
        >
          <div
            className={`bg-white/10 backdrop-blur-lg rounded-3xl p-6 max-w-lg w-full border border-white/20 text-white relative ${
              showPopup ? "animate-popUp" : "animate-popDown"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-3 text-[#00F0FF]">
              Full Description
            </h2>
            <p className="text-white/90 mb-6 whitespace-pre-line">
              {selectedDescription}
            </p>
            <button
              onClick={handleClosePopup}
              className="mt-2 w-full bg-transparent border-2 border-white text-[#00F0FF] py-2 rounded-full font-bold hover:bg-white/30 transition"
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
