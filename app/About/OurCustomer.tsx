"use client";

import React, { FC, useEffect, useRef, useState } from "react";

interface Logo {
  name: string;
  src: string;
  alt: string;
  link: string;
}

const customerLogos: Logo[] = [
  {
    name: "Devsinn Technologies",
    src: "/logo/Devsinn.png",
    alt: "Devsinn Logo",
    link: "https://www.devsinntechnologies.com/",
  },
  {
    name: "Ishelpro",
    src: "/logo/Ishellpro.png",
    alt: "Ishellpro Logo",
    link: "https://ishellpro.com/",
  },
  {
    name: "CBS",
    src: "/logos/cbs.svg",
    alt: "CBS logo",
    link: "https://www.cbs.com/",
  },
  {
    name: "Ford",
    src: "/logos/ford.svg",
    alt: "Ford logo",
    link: "https://www.ford.com/",
  },
  {
    name: "McLaren",
    src: "/logos/mclaren.svg",
    alt: "McLaren logo",
    link: "https://cars.mclaren.com/",
  },
  {
    name: "Red Bull",
    src: "/logos/redbull.svg",
    alt: "Red Bull logo",
    link: "https://www.redbull.com/",
  },
  {
    name: "Shell",
    src: "/logos/shell.svg",
    alt: "Shell logo",
    link: "https://www.shell.com/",
  },
  {
    name: "Warner Bros",
    src: "/logos/warnerbros.svg",
    alt: "Warner Bros logo",
    link: "https://www.warnerbros.com/",
  },
];

const OurCustomer: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsInView(entries[0].isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-blue-900 text-white py-10 overflow-hidden font-sans"
    >
      {/* Background Waves */}
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
          <strong className="font-semibold text-blue-100">suite of integrations</strong>, ChatSupplies offers
          flexibility and versatility to help teams of all shapes and sizes be more productive.
        </p>

        {/* Smooth Infinite Scrolling Logos */}
        <div className="w-full overflow-hidden">
          <div
            className={`flex gap-16 animate-scroll-smooth ${
              !isInView ? "pause-scroll" : ""
            }`}
          >
            {[...customerLogos, ...customerLogos].map((logo, index) => (
              <a
                key={index}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="responsive-logo opacity-80 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/logos/placeholder.svg";
                    target.className = target.className.replace(
                      "filter brightness-0 invert",
                      ""
                    );
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes + Responsive Logo Sizing */}
      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-smooth {
          display: flex;
          width: max-content;
          animation: scroll-smooth 50s linear infinite;
        }
        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }
        .pause-scroll {
          animation-play-state: paused;
        }

        /* Responsive logo sizing with smooth scaling */
        .responsive-logo {
          max-height: clamp(2.5rem, 3vw + 1rem, 6rem);
          width: auto;
        }
      `}</style>
    </div>
  );
};

export default OurCustomer;
