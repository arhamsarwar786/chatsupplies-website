import React, { FC } from "react";

// Define the data for the statistics
interface Stat {
  label: string;
  value: string;
}

const statsData: Stat[] = [
  { label: "ChatSupplies Users", value: "35M+" },
  { label: "Form Submissions", value: "2B+" },
  { label: "Languages Available", value: "16" },
  { label: "Form Templates", value: "10K+" },
];

const NumberSection: FC = () => {
  return (
    <div
      className="text-white py-16 font-mont"
    >      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl text-center font-bold mb-16 sm:mb-20">
          Our Analytics
        </h2>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center relative"
            >
              {/* Vertical Separator Lines */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/4 h-1/2 w-px bg-white/50 transform -translate-x-1/2"></div>
              )}
              {index < statsData.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-white/50 transform translate-x-1/2"></div>
              )}

              {/* Top Separator (Visible only on mobile for the second row items) */}
              {(index === 2 || index === 3) && (
                <div className="md:hidden absolute top-0 w-3/4 h-px bg-white/50 transform -translate-y-1/2"></div>
              )}

              {/* Stat Value */}
              <p className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-2">
                {stat.value}
              </p>

              {/* Stat Label */}
              <p className="text-base sm:text-lg font-medium opacity-80 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NumberSection;