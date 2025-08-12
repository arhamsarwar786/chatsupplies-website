"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head";

interface Service {
  text: string;
  description: string;
  x: string;
  y: string;
  size: number;
  image?: string;
  fontSize?: number;
  descFontSize?: number;
  textOffsetY?: number;
  textOffsetX?: number;
  fontFamily?: string;
}

const services: Service[] = [
  { text: "Create chatbots", description: "with public links\nand customizable flows", size: 255, x: '13vw', y: '40vh', image: "/Icons/Bubbles/Create Chatbots.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, textOffsetX: 0, fontFamily: "Mont-Regular" },
  { text: "User Support", description: "Email, ticket, and live\nmeeting support\nbased on plan", size: 318, x: '30vw', y: '20vh', image: "/Icons/Bubbles/User Support.svg", fontSize: 16, descFontSize: 13, textOffsetY: -5, fontFamily: "Mont-Regular" },
  { text: "Real-time\nperformance", description: "insights and\nadvanced reporting", size: 300, x: '55vw', y: '25vh', image: "/Icons/Bubbles/Real Time.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "Multilingual Support", description: "Engage users in their\nnative language", size: 315, x: '75vw', y: '10vh', image: "/Icons/Bubbles/Multilingual.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "Unlimited chat\nstorage", description: "with CSV\nexport", size: 190, x: '16vw', y: '65vh', image: "/Icons/Bubbles/Create Chatbots.svg", fontSize: 12, descFontSize: 11, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "Personalize chatbot", description: "name, logo, theme,\navatar, and CSS", size: 280, x: '32vw', y: '60vh', image: "/Icons/Bubbles/bubble 5.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "Train chatbot", description: "with your own\n documents\n(PDFs, URLs, etc.)", size: 245, x: '51vw', y: '60vh', image: "/Icons/Bubbles/bubble 6.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "Premium Services", description: "contains Backup and recovery", size: 215, x: '80vw', y: '55vh', image: "/Icons/Bubbles/Premium Services.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "", description: "", size: 100, x: '13vw', y: '10vh', image: "/Icons/Bubbles/bubble 10.svg", fontFamily: "Mont-Regular" },
  { text: "", description: "", size: 90, x: '42vw', y: '38vh', image: "/Icons/Bubbles/bubble 9.svg", fontFamily: "Mont-Regular" },
  { text: "", description: "", size: 135, x: '65vw', y: '50vh', image: "/Icons/Bubbles/bubble 8.svg", fontFamily: "Mont-Regular" },
  { text: "", description: "", size: 65, x: '58vw', y: '75vh', image: "/Icons/Bubbles/bubble 7.svg", fontFamily: "Mont-Regular" },
];

export default function BubblePage() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const createBubbleElement = (service: Service, isStatic = false) => {
    const el = document.createElement("div");
    const radius = service.size / 2;
    el.id = service.text?.trim().toLowerCase().replace(/\s+/g, "-") || `bubble-${Math.random()}`;
    el.style.willChange = "transform, opacity";

    if (isStatic) {
      el.className = "relative flex flex-col items-center justify-center p-4 text-white cursor-pointer rounded-full aspect-square bubble-body";
      el.style.width = `min(${service.size}px, 90%)`;
      el.style.height = `min(${service.size}px, 90%)`;
    } else {
      el.className = "absolute flex items-center justify-center text-white cursor-pointer rounded-full bubble-body";
      el.style.width = `${radius * 2}px`;
      el.style.height = `${radius * 2}px`;
      el.style.left = `calc(${service.x} - ${radius}px)`;
      el.style.top = `calc(${service.y} - ${radius}px)`;
    }

    el.onclick = () => {
      if (service.text) {
        alert(`${service.text}\n${service.description}`);
      }
    };

    if (service.image) {
      const img = document.createElement("img");
      img.src = service.image;
      img.alt = service.text || "";
      img.className = "w-full h-full object-contain pointer-events-none";
      el.appendChild(img);
    }

    const textContainer = document.createElement("div");
    textContainer.className = "absolute inset-0 flex flex-col items-center justify-center text-center p-2 pointer-events-none";
    if (!isStatic) {
      textContainer.style.transform = `translate(${service.textOffsetX || 0}px, ${service.textOffsetY || 0}px)`;
    }

    if (service.text) {
      const title = document.createElement("span");
      title.className = "font-bold text-center drop-shadow-sm leading-tight whitespace-pre-line";
      title.style.fontSize = `${service.fontSize || 14}px`;
      title.textContent = service.text;
      textContainer.appendChild(title);
    }

    if (service.description) {
      const desc = document.createElement("span");
      desc.className = "font-light mt-1 text-center drop-shadow-sm leading-tight whitespace-pre-line";
      desc.style.fontSize = `${service.descFontSize || 12}px`;
      desc.innerHTML = service.description.replace(/\n/g, "<br>");
      textContainer.appendChild(desc);
    }

    el.appendChild(textContainer);
    el.style.pointerEvents = "auto";
    return el;
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 640);
      setIsTablet(width > 640 && width <= 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;
    container.innerHTML = "";

    if (isMobile || isTablet) {
      const relevantServices = services.filter(s => s.text);
      const wrapper = document.createElement("div");
      wrapper.className = isMobile ? "flex flex-col items-center gap-4" : "grid grid-cols-2 lg:grid-cols-3 gap-4";
      relevantServices.forEach(service => {
        const el = createBubbleElement(service, true);
        wrapper.appendChild(el);
      });
      container.appendChild(wrapper);
      return;
    }

    services.forEach(service => {
      const el = createBubbleElement(service);
      container.appendChild(el);
    });
  }, [isMobile, isTablet]);

  return (
    <>
      <Head>
        <title>Services Overview</title>
        <meta name="description" content="Static services visualization" />
      </Head>
      <div className="min-h-screen bg-[#0055FF] bg-gradient-to-br font-inter text-white flex flex-col items-center p-4 overflow-hidden relative">
        <style jsx global>{`
          /* Light glowing pulse animation */
          @keyframes bubbleGlowPulse {
            0%, 100% {
              filter:
                drop-shadow(0 0 4px rgba(255, 255, 255, 0.4))
                drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
            }
            50% {
              filter:
                drop-shadow(0 0 8px rgba(255, 255, 255, 0.7))
                drop-shadow(0 0 16px rgba(255, 255, 255, 0.5));
            }
          }
          .bubble-body {
            animation: bubbleGlowPulse 3s infinite ease-in-out;
          }
        `}</style>

        {/* Vector line in background */}
        <img
          src="/Lines/Vector Line.svg"
          alt="Decorative Line"
          className="absolute top-0 left-[-2%] w-[520px] h-[120vh] pointer-events-none z-0 sm:left-[-1%] sm:w-[400px] sm:h-[140vh] md:left-[3%] md:w-[470px] md:h-[160vh] lg:left-[-2%] lg:w-[520px] lg:h-full"
        />
        <h1 className="text-4xl font-extrabold text-center mb-6 mt-10 tracking-wide leading-tight drop-shadow-lg z-20">
          Some of Our Services
        </h1>

        {(isMobile || isTablet) ? (
          <div ref={canvasRef} className="relative w-full h-full mx-auto my-10 overflow-auto" />
        ) : (
          <div ref={canvasRef} className="relative w-full h-[70vh] mx-auto" />
        )}

        <div className="mt-6 text-center text-white/60 text-sm drop-shadow-sm">
          
        </div>
      </div>
    </>
  );
}
