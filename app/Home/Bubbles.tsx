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

interface BubbleMovement {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  amplitudeX: number;
  amplitudeY: number;
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
  const [bubbleMovements, setBubbleMovements] = useState<Record<string, BubbleMovement>>({});

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
      el.style.transition = "transform 1.5s ease-out";
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

    // Initialize random movements for each bubble
    const movements: Record<string, BubbleMovement> = {};
    services.forEach(service => {
      const id = service.text?.trim().toLowerCase().replace(/\s+/g, "-") || `bubble-${Math.random()}`;
      movements[id] = {
        x: 0,
        y: 0,
        speedX: 0.2 + Math.random() * 0.3,
        speedY: 0.2 + Math.random() * 0.3,
        amplitudeX: 2 + Math.random() * 5,
        amplitudeY: 2 + Math.random() * 5,
      };
    });
    setBubbleMovements(movements);
  }, [isMobile, isTablet]);

  useEffect(() => {
    if (isMobile || isTablet || !canvasRef.current) return;

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.05;
      const container = canvasRef.current;
      if (!container) return;

      const bubbles = Array.from(container.children) as HTMLElement[];
      bubbles.forEach(bubble => {
        const movement = bubbleMovements[bubble.id];
        if (!movement) return;

        const xOffset = Math.sin(time * movement.speedX) * movement.amplitudeX;
        const yOffset = Math.cos(time * movement.speedY) * movement.amplitudeY;
        
        bubble.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, isTablet, bubbleMovements]);

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 lg:left-[-7%] lg:translate-x-0 lg:w-auto">
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    className="w-full h-full"
  >
    <image 
      href="/Lines/Vector Line.svg" 
      width="100%" 
      height="100%"
    />
  </svg>
</div>

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