"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCircleXmark } from "@fortawesome/free-solid-svg-icons"; // ✅ Added faCircleXmark

// Define the type for a single feature row
interface Feature {
  label: string;
  key: string;
}

// Define the type for the features of a plan, allowing for dynamic key access
interface PlanFeatures {
  [key: string]: string | boolean;
}

// Define the type for a single pricing plan
interface Plan {
  name: string;
  description: string;
  features: PlanFeatures;
}

// Define the overall structure for the pricing data
interface PricingData {
  features: Feature[];
  plans: Plan[];
}

// The data structure for the pricing plans and features.
const pricingData: PricingData = {
  features: [
    { label: "Number of Chatbots", key: "numberOfchatbots" },
    { label: "Chat History", key: "chathistory" },
    { label: "Support", key: "support" },
    { label: "Chatbot Customization", key: "chatbotcustomization" },
    { label: "Chatbot Template", key: "chatbottemplate" },
    { label: "Public Chatbot Link", key: "publicchatbot" },
    { label: "Dashboard Access", key: "dashboardaccess" },
    { label: "Training Data Import", key: "trainingdata" },
    { label: "Analytics & Reporting", key: "analyticsreporting" },
    { label: "Export chat Data", key: "exportchat" },
    { label: "Branding", key: "branding" },
    { label: "Multi-Language Support", key: "multilanguage" },
    { label: "Integration API Access", key: "integration" },
    { label: "Live Chat Support", key: "livechat" },
    { label: "Team Features", key: "teamfeature" },
  ],
  plans: [
    {
      name: "Free",
      description: "A great way to get started.",
      features: {
        numberOfchatbots: "1 (active for 4 months)",
        chathistory: "First 10 users only ",
        support: "Email support",
        chatbotcustomization: "Chat name only",
        chatbottemplate: "Predefined only (no custom flow)",
        publicchatbot: true,
        dashboardaccess: "Limited",
        trainingdata: false,
        analyticsreporting: false,
        exportchat: false,
        branding: "Default only",
        multilanguage: false,
        integration: false,
        livechat: false,
        teamfeature: false,
      },
    },
    {
      name: "$25",
      description: "600 Pages",
      features: {
        numberOfchatbots: "1 \n T&NC",
        chathistory: "Unlimited",
        support: "Email + ticket support",
        chatbotcustomization: "Logo, name, theme color",
        chatbottemplate: "Custom flow available",
        publicchatbot: true,
        dashboardaccess: "Performance dashboard",
        trainingdata: "Advanced training data import",
        analyticsreporting: "Basic response analytics",
        exportchat: "CSV export",
        branding: "No branding (your chatbot, your hand)",
        multilanguage: false,
        integration: false,
        livechat: false,
        teamfeature: false,
      },
    },
    {
      name: "$40",
      description: "600 Pages",
      features: {
        numberOfchatbots: "Upto 3 \n T&NC",
        chathistory: "Unlimited",
        support: "Priority email + live meeting support",
        chatbotcustomization: "Advanced (CSS styles, avatar)",
        chatbottemplate: "Custom flow available",
        publicchatbot: true,
        dashboardaccess: "Advanced dashboard",
        trainingdata: "AI training with your docs (PDFs, URLs, etc)",
        analyticsreporting: "Advanced analytics & report",
        exportchat: "CSV export + backup & recovery",
        branding: "Advanced branding options",
        multilanguage: true,
        integration: true,
        livechat: true,
        teamfeature: "Role-based access + upto 10 team members",
      },
    },
  ],
};

const PricingTablePage: React.FC = () => {
  const currentPlanName = pricingData.plans[0].name;
  const commonCard = pricingData.plans[0];
  const otherPlans = pricingData.plans.slice(1);

  const mergedCards = otherPlans.map((plan) => {
    const mergedFeatures: PlanFeatures = {};
    pricingData.features.forEach((feature) => {
      const planFeatureValue = plan.features[feature.key];
      mergedFeatures[feature.key] =
        planFeatureValue !== undefined
          ? planFeatureValue
          : commonCard.features[feature.key];
    });
    return {
      name: plan.name,
      description: plan.description,
      features: mergedFeatures,
    };
  });

  const renderFeatureIcon = (value: string | boolean) => {
    if (value === true) {
      return (
        <img
          src="/PaymentPlan/Vector.svg"
          alt="Included"
          className="w-5 h-5 text-[#00F0FF]"
        />
      );
    } // ✅ Added missing closing brace

    if (value === false) {
      return (
        <FontAwesomeIcon
          icon={faCircleXmark} 
          className="text-white w-5 h-5"
        />
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 text-white font-sans flex items-center justify-center">
      <div className="max-w-[1400px] w-full mx-auto">
        <h1 className="text-3xl md:text-5xl text-center mb-8 md:mb-12 font-bold">
          Our Plans
        </h1>

        {/* Desktop View: Pricing Table */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden bg-white/15">
            {/* Headers Row */}
            <div className="contents">
              {/* First Header Column */}
              <div className="p-3 lg:p-4 h-28 flex flex-col justify-between border-b border-r border-white-700">
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl font-bold text-[#FFFFFF]">
                    Compare plans
                  </h2>
                  <span className="text-[#FFFFFF] border border-[#FFFFFF] text-xs rounded-full px-4 py-1 flex items-center justify-center whitespace-nowrap ml-1">
                    <span className="font-bold">40% OFF</span>
                  </span>
                </div>
                <p className="text-[12px] text-[#00F0FF] leading-snug font-bold relative -top-3">
                  Choose your workspace plan according to your organizational
                  plan
                </p>
              </div>

              {/* Plan Headers */}
              {pricingData.plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`p-3 lg:p-4 h-28 flex flex-col justify-between items-center border-b border-white-700 ${
                    index < pricingData.plans.length - 1 ? "border-r" : ""
                  }`}
                >
                  <h2 className="text-xl font-bold text-[#FFFFFF]">
                    {plan.name}
                    <span className="ml-1 text-sm text-white/60 font-normal">
                      {plan.name === "Free" ? "/Lifetime" : "/Month"}
                    </span>
                  </h2>
                  {plan.name === currentPlanName ? (
                    <button className="bg-white/20 text-base text-[#00F0FF] font-bold py-1 px-5 rounded-full hover:bg-white/30 cursor-pointer">
                      Current Plan
                    </button>
                  ) : (
                    <button className="bg-transparent border-2 border-white text-[#00F0FF] font-bold py-1 px-5 rounded-full hover:bg-white hover:text-black text-base cursor-pointer">
                      Choose This Plan
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {pricingData.features.map((feature, featureIndex) => {
              const isLastFeature =
                featureIndex === pricingData.features.length - 1;
              return (
                <div key={feature.key} className="contents">
                  <div
                    className={`p-3 flex items-center text-sm font-semibold text-[#FFFFFF] border-r border-white-700 ${
                      isLastFeature ? "" : "border-b"
                    }`}
                  >
                    {feature.label}
                  </div>
                  {pricingData.plans.map((plan, index) => (
                    <div
                      key={plan.name}
                      className={`p-3 flex items-center justify-center text-sm border-white-700 ${
                        isLastFeature ? "" : "border-b"
                      } ${index < pricingData.plans.length - 1 ? "border-r" : ""}`}
                    >
                      {typeof plan.features[feature.key] === "string" ? (
                        <span className="whitespace-pre-line text-center">
                          {plan.features[feature.key]}
                        </span>
                      ) : (
                        renderFeatureIcon(plan.features[feature.key])
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile and Tablet View: Pricing Cards */}
        <div className="lg:hidden">
          {/* First card (common) */}
          <div className="bg-white/15 rounded-3xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-[#FFFFFF]">
              {commonCard.name}
              <span className="ml-1 text-sm text-white/60 font-normal">
                {commonCard.name === "Free" ? "/Lifetime" : "/Month"}
              </span>
            </h2>
            <p className="text-sm mb-4">{commonCard.description}</p>
            <button className="w-full bg-white/20 text-[#00F0FF] font-bold py-2 px-6 rounded-full mb-6 hover:bg-white/30 cursor-pointer">
              Current Plan
            </button>
            {pricingData.features.map((feature) => (
              <div
                key={feature.key}
                className="flex items-center justify-between mb-2"
              >
                <span className="text-sm">
                  {feature.label}
                  {typeof commonCard.features[feature.key] === "string" && (
                    <span className="ml-1 font-bold">
                      {commonCard.features[feature.key]}
                    </span>
                  )}
                </span>
                {renderFeatureIcon(commonCard.features[feature.key])}
              </div>
            ))}
          </div>

          {/* Merged Cards */}
          {mergedCards.map((mergedPlan, index) => (
            <div key={index} className="bg-white/15 rounded-3xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-[#FFFFFF]">
                {mergedPlan.name}
                <span className="ml-1 text-sm text-white/60 font-normal">
                  {mergedPlan.name === "Free" ? "/Lifetime" : "/Month"}
                </span>
              </h2>
              <p className="text-sm mb-4">{mergedPlan.description}</p>
              <button className="w-full bg-transparent border-2 border-white text-[#00F0FF] py-2 px-8 rounded-full mb-6 hover:bg-white/30 font-bold">
                Choose This Plan
              </button>
              {pricingData.features.map((feature) => (
                <div
                  key={feature.key}
                  className="flex items-center justify-between mb-2"
                >
                  <span className="text-sm">
                    {feature.label}
                    {typeof mergedPlan.features[feature.key] === "string" && (
                      <span className="ml-1 font-bold">
                        {mergedPlan.features[feature.key]}
                      </span>
                    )}
                  </span>
                  {renderFeatureIcon(mergedPlan.features[feature.key])}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <PricingTablePage />;
};

export default App;
