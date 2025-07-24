"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const features = [
    {
        title: "Premium Quality",
        description:
            "All products are tested and certified for enterprise-grade performance.",
    },
    {
        title: "24/7 Support",
        description: "Round-the-clock customer support to help you succeed.",
    },
    {
        title: "Easy Integration",
        description:
            "Simple setup and seamless integration with existing systems.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-[60px] bg-white border-t border-gray-100">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-left -ml-4">
                        <h1 className="text-[36px] font-bold text-gray-900 mb-[30px] sm:text-[28px] sm:mb-[24px] md:text-[36px]">
                            Why Choose ChatSupplies?
                        </h1>

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start mb-4 sm:mb-[14px] w-full max-w-[520px]"
                            >
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className="text-purple-500 w-[38px] h-[38px] min-w-[38px] mr-3 text-[32px] sm:w-[24px] sm:h-[24px]"
                                />
                                <div>
                                    <h3 className="text-[18.5px] font-semibold text-gray-900 mb-[4px] sm:text-[20px]">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[17px] text-gray-500 leading-[2.3] sm:text-[15px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-right">
                        <Image
                            src="/Images/TeamMeeting.jpeg"
                            alt="Team working"
                            width={550}
                            height={380}
                            className="rounded-[12px] shadow-[0_6px_20px_rgba(0,0,0,0.1)] w-full h-auto max-w-[600px] mx-auto lg:mx-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;