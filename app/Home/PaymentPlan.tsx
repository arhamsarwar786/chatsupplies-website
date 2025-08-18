"use client"


import React from 'react';

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
        { label: 'Number of Users', key: 'numberOfUsers' },
        { label: 'Users Per Page', key: 'usersPerPage' },
        { label: 'Includes essential features to get started', key: 'includesEssential' },
        { label: 'More advanced features for increased productivity', key: 'moreAdvanced' },
        { label: 'Designing & Development', key: 'designingDevelopment' },
        { label: 'Customizable options to meet your specific needs', key: 'customizableOptions' },
        { label: 'Secure data storage', key: 'secureDataStorage' },
        { label: 'Email Support', key: 'emailSupport' },
        { label: '24/7 customer support', key: 'customerSupport' },
        { label: 'Analytics and reporting', key: 'analyticsReporting' },
        { label: 'Account Management', key: 'accountManagement' },
    ],
    plans: [
        {
            name: 'Free',
            description: 'A great way to get started.',
            features: {
                numberOfUsers: '20 Pages',
                usersPerPage: '5 Pages',
                includesEssential: true,
                moreAdvanced: true,
                designingDevelopment: true,
                customizableOptions: false,
                secureDataStorage: false,
                emailSupport: false,
                customerSupport: false,
                analyticsReporting: false,
                accountManagement: true,
            },
        },
        {
            name: '$25',
            description: '600 Pages',
            features: {
                numberOfUsers: '600 Pages \n Pages add-ons on Demand',
                usersPerPage: '50 Pages',
                includesEssential: true,
                moreAdvanced: true,
                designingDevelopment: false,
                customizableOptions: true,
                secureDataStorage: false,
                emailSupport: false,
                customerSupport: false,
                analyticsReporting: true,
                accountManagement: true,
            },
        },
        {
            name: '$40',
            description: '600 Pages',
            features: {
                numberOfUsers: '600 Pages \n Pages add-ons on Demand',
                usersPerPage: '50 Pages',
                includesEssential: true,
                moreAdvanced: true,
                designingDevelopment: true,
                customizableOptions: true,
                secureDataStorage: true,
                emailSupport: true,
                customerSupport: false,
                analyticsReporting: true,
                accountManagement: true,
            },
        },
        {
            name: '$55',
            description: 'Unlimited',
            features: {
                numberOfUsers: 'Unlimited',
                usersPerPage: 'Unlimited',
                includesEssential: true,
                moreAdvanced: true,
                designingDevelopment: true,
                customizableOptions: true,
                secureDataStorage: true,
                emailSupport: true,
                customerSupport: true,
                analyticsReporting: true,
                accountManagement: true,
            },
        },
    ],
};

const PricingTablePage: React.FC = () => {
    // Assuming the first plan is the "Current Plan" for demonstration
    const currentPlanName = pricingData.plans[0].name;
    const commonCard = pricingData.plans[0];
    const otherPlans = pricingData.plans.slice(1);

    // This logic prepares data for the mobile/tablet view by merging features.
    const mergedCards = otherPlans.map((plan) => {
        const mergedFeatures: PlanFeatures = {};
        pricingData.features.forEach(feature => {
            const planFeatureValue = plan.features[feature.key];
            mergedFeatures[feature.key] = planFeatureValue !== undefined ? planFeatureValue : commonCard.features[feature.key];
        });
        return {
            name: plan.name,
            description: plan.description,
            features: mergedFeatures,
        };
    });

    // Helper function to render a checkmark, and nothing for 'false'
    const renderFeatureIcon = (value: string | boolean) => {
        if (value === true) {
            // Use a relative path to the SVG file in the public folder
            return <img src="/PaymentPlan/Vector.svg" alt="Included" className="w-5 h-5 text-[#00F0FF]" />;
        }
        return null; // Don't render anything for false or string values
    };

    return (
        <div
            className="min-h-screen p-4 sm:p-8 text-white font-sans flex items-center justify-center"

        >
            <div className="max-w-[1400px] w-full mx-auto">
                {/* Page Title */}
                <h1 className="text-3xl md:text-5xl text-center mb-8 md:mb-12 "style={{ fontFamily: 'Mont', fontWeight: 900}}>Our Plans</h1>

                {/* Desktop View: Pricing Table */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 rounded-3xl overflow-hidden bg-white/15">
                        {/* Headers Row */}
                        <div className="contents">
                            {/* First Header Column */}
                            <div className="p-3 lg:p-4 h-28 flex flex-col justify-between border-b border-r border-white-700">
                                <div className="flex items-center space-x-2">
                                    <h2 className="text-[14px] font-bold text-[#FFFFFF]">Compare plans</h2>
                                    <span className="text-[#FFFFFF] border border-[#FFFFFF] text-xs rounded-full px-4 py-1 flex items-center justify-center whitespace-nowrap ml-1">
                                        <span className="font-bold">40% OFF</span>
                                    </span>
                                </div>

                                <p className="text-[11px] text-[#00F0FF] leading-snug font-Mont-semibold">
                                    Choose your workspace plan according to your organizational plan
                                </p>

                            </div>
                            {/* Plan Headers */}
                            {pricingData.plans.map((plan, index) => (
                                <div
                                    key={plan.name}
                                    className={`p-3 lg:p-4 h-28 flex flex-col justify-between items-center border-b border-white-700 ${index < pricingData.plans.length - 1 ? 'border-r' : ''}`}
                                >
                                    <h2 className="text-xl font-Mont-bold text-[#FFFFFF]">
                                        {plan.name}
                                        <span className="ml-1 text-sm text-white/15 font-Mont-bold">
                                            {plan.name === 'Free' ? '/Lifetime' : '/Month'}
                                        </span>
                                    </h2>
                                    {/* Updated Button Logic */}
                                    {plan.name === currentPlanName ? (
                                        <button
                                            className="w-full bg-white/20 text-[#00F0FF] font-Mont-bold py-1 px-2 rounded-full transition-colors whitespace-nowrap hover:bg-white/30 cursor-pointer"
                                            onClick={() => {
                                                alert("Button clicked!"); // Replace this with your actual action
                                            }}
                                        >
                                            Current Plan
                                        </button>

                                    ) : (
                                        <button
                                            className="w-full bg-transparent border-2 border-white text-[#00F0FF] font-Mont-bold py-1 px-4 rounded-full whitespace-nowrap transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
                                            onClick={() => {
                                                alert("Plan chosen!"); 
                                            }}
                                        >
                                            Choose This Plan
                                        </button>

                                    )}
                                </div>
                            ))}
                        </div>
                        {/* Feature Rows */}
                        {pricingData.features.map((feature, featureIndex) => {
                            const isLastFeature = featureIndex === pricingData.features.length - 1;
                            return (
                                <div key={feature.key} className="contents">
                                    {/* First Column Feature Label */}
                                    <div
                                        className={`p-3 flex items-center text-sm font-Mont-semibold text-[#FFFFFF] border-r border-white-700 ${isLastFeature ? '' : 'border-b'}`}
                                    >
                                        {feature.label}
                                    </div>
                                    {/* Plan Columns Features */}
                                    {pricingData.plans.map((plan, index) => (
                                        <div
                                            key={plan.name}
                                            className={`p-3 flex items-center justify-center text-sm border-white-700 ${isLastFeature ? '' : 'border-b'} ${index < pricingData.plans.length - 1 ? 'border-r' : ''}`}
                                        >
                                            {feature.key === 'numberOfUsers' || feature.key === 'usersPerPage' ? (
                                                <span className="font-Mont-semibold whitespace-pre-line text-center">
                                                    {typeof plan.features[feature.key] === 'string'
                                                        ? (plan.features[feature.key] as string).split('\n').map((line: string, idx: number) =>
                                                            line.trim() === 'Pages add-ons on Demand' ? (
                                                                <span key={idx} className="text-[#00F0FF] block">
                                                                    {line}
                                                                </span>
                                                            ) : (
                                                                <span key={idx} className="block">
                                                                    {line}
                                                                </span>
                                                            )
                                                        )
                                                        : plan.features[feature.key]}
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
                        <div className="flex items-center space-x-2 mb-4">
                            <h2 className="text-2xl font-Mont-bold text-[#FFFFFF]">
                                {commonCard.name}
                                <span className="ml-1 text-sm text-white/15 font-Mont-normal">
                                    {commonCard.name === 'Free' ? '/Lifetime' : '/Month'}
                                </span>
                            </h2>
                        </div>
                        <p className="text-sm mb-4">{commonCard.description}</p>
                        <button className="w-full bg-white/20 text-[#00F0FF] font-Mont-bold py-2 px-4 rounded-full transition-colors whitespace-nowrap mb-6 hover:bg-white/30 cursor-pointer">
                            Current Plan
                        </button>
                        {pricingData.features.map(feature => (
                            <div key={feature.key} className="flex items-center justify-between mb-2">
                                <span className="text-sm">
                                    {feature.label}
                                    {typeof commonCard.features[feature.key] === 'string' && (
                                        <span className="ml-1 font-Mont-bold">
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
                            <div className="flex items-center space-x-2 mb-4">
                                <h2 className="text-2xl font-Mont-bold text-[#FFFFFF]">
                                    {mergedPlan.name}
                                    <span className="ml-1 text-sm text-white/15 font-Mont-normal">
                                        {mergedPlan.name === 'Free' ? '/Lifetime' : '/Month'}
                                    </span>
                                </h2>
                            </div>
                            <p className="text-sm mb-4">{mergedPlan.description}</p>
                            <button className="w-full bg-transparent border-2 border-white text-[#00F0FF] font-Mont-bold py-2 px-8 rounded-full whitespace-nowrap mb-6 hover:bg-white/30 cursor-pointer ">
                                Choose This Plan
                            </button>
                            {pricingData.features.map(feature => (
                                <div key={feature.key} className="flex items-center justify-between mb-2">
                                    <span className="text-sm">
                                        {feature.label}
                                        {typeof mergedPlan.features[feature.key] === 'string' && (
                                            <span className="ml-1 font-Mont-bold">
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