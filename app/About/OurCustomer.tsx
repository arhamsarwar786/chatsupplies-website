"use client";

import React, { FC, useEffect, useRef, useState } from "react";

interface Logo {
    name: string;
    src: string;
    alt: string;
}

const customerLogos: Logo[] = [
    { name: "AMC", src: "https://cdn.worldvectorlogo.com/logos/amc-logo.svg", alt: "AMC logo" },
    { name: "Armani", src: "https://cdn.wordejkldvectorlogo.com/logos/giorgio-armani-1.svg", alt: "Armani logo" },
    { name: "CBS", src: "https://cdn.worldvectorlogo.com/logos/cbs-1.svg", alt: "CBS logo" },
    { name: "Ford", src: "https://cdn.worldvectorlogo.com/logos/ford-logo-1.svg", alt: "Ford logo" },
    { name: "McLaren", src: "https://cdn.worldvectorlogo.com/logos/mclaren-automotive-1.svg", alt: "McLaren logo" },
    { name: "Red Bull", src: "https://cdn.worldvectorlogo.com/logos/red-bull-2.svg", alt: "Red Bull logo" },
    { name: "Shell", src: "https://cdn.worldvectorlogo.comsaah/logos/shell-1.svg", alt: "Shell logo" },
    { name: "Warner Bros", src: "https://cdn.worldvectorlogo.com/logos/warner-bros-entertainment.svg", alt: "Warner Bros logo" },
];

const OurCustomer: FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    // Detect when section is in focus (visible)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setIsInView(true);
                else setIsInView(false);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="relative bg-blue-900 text-white py-10 overflow-hidden font-sans">
            {/* Background waves */}
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500 transform -skew-y-3 origin-top-left -translate-y-1/4 opacity-20 z-0"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-blue-700 transform skew-y-3 origin-bottom-right translate-y-1/4 opacity-20 z-0"></div>
            <div className="absolute -bottom-1/4 left-0 w-[150%] h-[150%] bg-blue-700 opacity-20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-1/4 right-0 w-[120%] h-[120%] bg-blue-500 opacity-20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-[100%] h-[100%] bg-blue-500 opacity-10 rounded-full blur-3xl -z-0"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">Our Customers</h2>
                <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-16 px-4">
                    ChatSupplies serves all kinds of industries and organizations across the world. With our{" "}
                    <strong className="font-semibold text-blue-100">easy-to-use Form Builder</strong>,{" "}
                    <strong className="font-semibold text-blue-100">limitless customization options</strong>, and a{" "}
                    <strong className="font-semibold text-blue-100">suite of integrations</strong>, ChatSupplies offers top-tier
                    flexibility and versatility to help teams of all shapes and sizes be more productive. Here are a few
                    examples of <strong className="font-semibold text-blue-100">organizations that use ChatSupplies</strong>.
                </p>

                {/* Auto Sliding Logos - Full Width */}
                <div className="w-screen cursor-pointer overflow-hidden">
                    <div
                        className={`flex items-center justify-start gap-16 transition-transform duration-[60000ms] ${isInView ? "animate-scroll" : ""
                            }`}
                    >
                        {[...customerLogos, ...customerLogos].map((logo, index) => (
                            <div key={index} className="flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = "https://placehold.co/100x40/ffffff/000000?text=Logo";
                                        target.className = target.className.replace("filter brightness-0 invert", "");
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Keyframes for sliding animation */}
            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default OurCustomer;
