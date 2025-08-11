import React from 'react';
import { CheckCircle } from 'lucide-react';

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
            description: '',
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
                numberOfUsers: '600 Pages',
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
                numberOfUsers: '600 Pages',
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

// Custom Checkmark SVG
const CustomCheck = () => (
    <CheckCircle className="h-6 w-6 text-[#5d67e2] drop-shadow-sm" />
);

const PricingTablePage: React.FC = () => {
    return (
        <div className="bg-[#0055FF] min-h-screen p-4 sm:p-8 text-white font-sans flex items-center justify-center">
            <div className="max-w-[1400px] w-full mx-auto">
                {/* Page Title */}
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">Our Plans</h1>

                {/* Pricing Table */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 rounded-3xl overflow-hidden border border-gray-700">
                    {/* Headers Row */}
                    <div className="contents">
                        {/* First Header Column */}
                        <div className="bg-[#FFFFFF] opacity-15  p-4 lg:p-6 h-32 flex flex-col justify-between border-b border-r border-gray-700">
                            <div className="flex items-center space-x-2">
                                <h2 className="text-lg font-Mont-Bold text-[#FFFFFF]">Compare plans</h2>
                                <span className="bg-[#212b4e] text-[#FFFFFF] border border-[#FFFFFF] text-sm rounded-full px-5 py-1 flex items-center justify-center whitespace-nowrap">
                                    <span className="font-Mont-bold text-[#FFFFFF] border-[#FFFFFF]">40% OFF</span>
                                </span>
                            </div>
                            <p className="text-xs mt-1 text-[#00F0FF] font-[Mont-Semi-Bold] leading-snug">
                                Choose your workspace plan according to your organizational plan
                            </p>
                        </div>
                        {/* Plan Headers */}
                        {pricingData.plans.map((plan, index) => (
                            <div
                                key={plan.name}
                                className={`bg-[#212b4e] p-4 lg:p-6 h-32 flex flex-col justify-between items-center border-b border-gray-700 ${index < pricingData.plans.length - 1 ? 'border-r' : ''}`}
                            >
                                <h2 className="text-xl font-Mont-Bold text-[#FFFFFF]">
                                    {plan.name}
                                    <span className="ml-1 text-sm text-gray-400 font-normal">
                                        {plan.name === 'Free' ? '/Lifetime' : '/Month'}
                                    </span>
                                </h2>
                                <button className="w-full bg-[#FFFFFF] hover:bg-[#FFFFFF] text-black font-bold py-2 px-4 rounded-lg transition-colors">
                                    Choose This Plan
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Feature Rows */}
                    {pricingData.features.map((feature) => (
                        <div key={feature.key} className="contents">
                            {/* First Column Feature Label */}
                            <div className="bg-[#212b4e] p-4 flex items-center text-sm font-light text-gray-300 border-b border-r border-gray-700">
                                {feature.label}
                            </div>
                            {/* Plan Columns Features */}
                            {pricingData.plans.map((plan, index) => (
                                <div
                                    key={plan.name}
                                    className={`bg-[#212b4e] p-4 flex items-center justify-center text-sm border-b border-gray-700 ${index < pricingData.plans.length - 1 ? 'border-r' : ''}`}
                                >
                                    {/* Handle 'numberOfUsers' */}
                                    {feature.key === 'numberOfUsers' && (
                                        <span className="text-gray-300">{plan.features.numberOfUsers}</span>
                                    )}
                                    {/* Handle 'usersPerPage' */}
                                    {feature.key === 'usersPerPage' && (
                                        <span className="text-gray-300">{plan.features.usersPerPage}</span>
                                    )}
                                    {/* Handle all other features */}
                                    {feature.key !== 'numberOfUsers' && feature.key !== 'usersPerPage' && (
                                        plan.features[feature.key] === true ? (
                                            <CustomCheck />
                                        ) : (
                                            <span className="text-gray-300">
                                                {plan.features[feature.key] !== false ? plan.features[feature.key] : ''}
                                            </span>
                                        )
                                    )}
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
