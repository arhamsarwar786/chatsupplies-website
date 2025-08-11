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

interface Bubble {
  id: string;
  text: string;
  description: string;
  x: number;
  y: number;
  size: number;
  radius: number;
  dx: number;
  dy: number;
  collisionTimer: number;
  image?: string;
  fontFamily?: string;
}

const services: Service[] = [
  { text: "Create chatbots", description: "with public links\nand customizable flows", size: 216, x: '8vw', y: '50vh', image: "/Icons/Bubbles/Create Chatbots.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, textOffsetX: 0, fontFamily: "Mont-Regular" },
  { text: "User Support", description: "Email, ticket, and live\nmeeting support\nbased on plan", size: 264, x: '30vw', y: '35vh', image: "/Icons/Bubbles/User Support.svg", fontSize: 16, descFontSize: 13, textOffsetY: -5, fontFamily: "Mont-Regular" },
  { text: "Real-time\nperformance", description: "insights and\nadvanced reporting", size: 240, x: '55vw', y: '40vh', image: "/Icons/Bubbles/Real Time.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "Multilingual Support", description: "Engage users in their\nnative language", size: 240, x: '75vw', y: '20vh', image: "/Icons/Bubbles/Multilingual.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "Unlimited chat\nstorage", description: "with CSV\nexport", size: 180, x: '22vw', y: '70vh', image: "/Icons/Bubbles/Unlimited Chat.svg", fontSize: 12, descFontSize: 11, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "Personalize chatbot", description: "name, logo, theme,\navatar, and CSS", size: 240, x: '45vw', y: '65vh', image: "/Icons/Bubbles/bubble 5.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "Train chatbot", description: "with your own\n documents\n(PDFs, URLs, etc.)", size: 204, x: '65vw', y: '55vh', image: "/Icons/Bubbles/bubble 6.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "Premium Services", description: "contains Backup and recovery", size: 228, x: '85vw', y: '65vh', image: "/Icons/Bubbles/Premium Services.svg", fontSize: 14, descFontSize: 12, textOffsetY: 0, fontFamily: "Mont-Regular" },
  { text: "", description: "", size: 90, x: '17vw', y: '25vh', image: "/Icons/Bubbles/bubble 10.svg", fontFamily: "Mont-Regular" },
  { text: "", description: "", size: 70, x: '48vw', y: '50vh', image: "/Icons/Bubbles/bubble 9.svg", fontFamily: "Mont-Regular" },
  { text: "", description: "", size: 60, x: '73vw', y: '45vh', image: "/Icons/Bubbles/bubble 8.svg", fontFamily: "Mont-Regular" },
  { text: "", description: "", size: 50, x: '58vw', y: '85vh', image: "/Icons/Bubbles/bubble 7.svg", fontFamily: "Mont-Regular" },
];

export default function BubblePage() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const initializeBubbles = (containerWidth: number, containerHeight: number) => {
    return services.map((service, i) => {
      const x = (parseFloat(service.x) / 100) * containerWidth;
      const y = (parseFloat(service.y) / 100) * containerHeight;
      const radius = service.size / 2;

      const speed = service.text && service.text.trim()
        ? (1.0 + Math.random() * 0.5)
        : (0.6 + Math.random() * 0.6);

      const rawDx = (Math.random() - 0.5) * speed;
      const rawDy = (Math.random() - 0.5) * speed;

      const minSpeed = service.text && service.text.trim() ? 0.12 : 0.28;

      const dx = Math.abs(rawDx) < minSpeed ? (rawDx < 0 ? -minSpeed : minSpeed) : rawDx;
      const dy = Math.abs(rawDy) < minSpeed ? (rawDy < 0 ? -minSpeed : minSpeed) : rawDy;

      const id = service.text && service.text.trim()
        ? service.text.trim().toLowerCase().replace(/\s+/g, "-")
        : `bubble-${i}`;

      return {
        id,
        text: service.text,
        description: service.description,
        x,
        y,
        size: service.size,
        radius,
        dx,
        dy,
        collisionTimer: 0,
        image: service.image,
      } as Bubble;
    });
  };

  const createBubbleElement = (bubble: Bubble, isStatic = false) => {
    const svc = services.find((s) => s.text === bubble.text);
    const el = document.createElement("div");
    el.id = bubble.id;

    if (isStatic) {
      el.className = "relative flex flex-col items-center justify-center p-4 text-white cursor-pointer rounded-full aspect-square bg-white/10 m-2";
      el.style.width = `min(${bubble.size}px, 90%)`;
      el.style.height = `min(${bubble.size}px, 90%)`;
    } else {
      el.className = "absolute flex items-center justify-center text-white cursor-pointer";
      el.style.cssText = `
        width: ${bubble.radius * 2}px;
        height: ${bubble.radius * 2}px;
        left: ${bubble.x}px;
        top: ${bubble.y}px;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease-out;
      `;
    }
    
    el.onclick = () => {
      if (bubble.text) {
        alert(`${bubble.text}\n${bubble.description}`);
      }
    };

    if (bubble.image) {
      const img = document.createElement("img");
      img.src = bubble.image;
      img.alt = bubble.text || "";
      img.className = "w-full h-full object-contain pointer-events-none";
      el.appendChild(img);
    }
    
    const textContainer = document.createElement("div");
    textContainer.className = "absolute inset-0 flex flex-col items-center justify-center text-center p-2 pointer-events-none";
    if (!isStatic) {
      textContainer.style.transform = `translate(${svc?.textOffsetX || 0}px, ${svc?.textOffsetY || 0}px)`;
    }

    if (bubble.text) {
      const title = document.createElement("span");
      title.className = "font-bold text-center drop-shadow-sm leading-tight whitespace-pre-line";
      title.style.fontSize = `${svc?.fontSize || 14}px`;
      title.textContent = bubble.text;
      textContainer.appendChild(title);
    }

    if (bubble.description) {
      const desc = document.createElement("span");
      desc.className = "font-light mt-1 text-center drop-shadow-sm leading-tight whitespace-pre-line";
      desc.style.fontSize = `${svc?.descFontSize || 12}px`;
      desc.innerHTML = bubble.description.replace(/\n/g, "<br>");
      textContainer.appendChild(desc);
    }

    el.appendChild(textContainer);
    el.style.pointerEvents = "auto";
    return el;
  };

  const updateBubbles = (bubbles: Bubble[], width: number, height: number) => {
    bubbles.forEach(bubble => {
      if (bubble.collisionTimer > 0) bubble.collisionTimer--;
      bubble.x += bubble.dx;
      bubble.y += bubble.dy;

      const r = bubble.radius;
      if (bubble.x - r < 0 || bubble.x + r > width) {
        bubble.dx *= -1;
        bubble.x = Math.max(r, Math.min(bubble.x, width - r));
        bubble.collisionTimer = 10;
      }
      if (bubble.y - r < 0 || bubble.y + r > height) {
        bubble.dy *= -1;
        bubble.y = Math.max(r, Math.min(bubble.y, height - r));
        bubble.collisionTimer = 10;
      }
    });

    for (let i = 0; i < bubbles.length; i++) {
      for (let j = i + 1; j < bubbles.length; j++) {
        const b1 = bubbles[i];
        const b2 = bubbles[j];
        const dx = b2.x - b1.x;
        const dy = b2.y - b1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < b1.radius + b2.radius) {
          b1.collisionTimer = 10;
          b2.collisionTimer = 10;

          const angle = Math.atan2(dy, dx);
          const sin = Math.sin(angle);
          const cos = Math.cos(angle);

          const vx1 = b1.dx * cos + b1.dy * sin;
          const vy1 = b1.dy * cos - b1.dx * sin;
          const vx2 = b2.dx * cos + b2.dy * sin;
          const vy2 = b2.dy * cos - b2.dx * sin;

          const m1 = b1.radius ** 2;
          const m2 = b2.radius ** 2;
          const v1 = ((vx1 * (m1 - m2)) + (2 * m2 * vx2)) / (m1 + m2);
          const v2 = ((vx2 * (m2 - m1)) + (2 * m1 * vx1)) / (m1 + m2);

          b1.dx = v1 * cos - vy1 * sin;
          b1.dy = vy1 * cos + v1 * sin;
          b2.dx = v2 * cos - vy2 * sin;
          b2.dy = vy2 * cos + v2 * sin;

          const overlap = (b1.radius + b2.radius - distance) / 2;
          b1.x -= overlap * cos;
          b1.y -= overlap * sin;
          b2.x += overlap * cos;
          b2.y += overlap * sin;
        }
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 640);
      setIsTablet(width > 640 && width <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    // Clear any previous animation frames
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
    container.innerHTML = "";

    // If on mobile or tablet, render a static layout
    if (isMobile || isTablet) {
      const relevantServices = services.filter(s => s.text); // Only show bubbles with text for static view
      const wrapper = document.createElement("div");
      wrapper.className = isMobile ? "flex flex-col items-center gap-4" : "grid grid-cols-2 lg:grid-cols-3 gap-4";
      
      relevantServices.forEach(service => {
        // Corrected logic: create a valid Bubble object before passing it
        const bubble: Bubble = {
          ...service,
          id: service.text.trim().toLowerCase().replace(/\s+/g, "-") || `bubble-${Math.random()}`,
          radius: service.size / 2,
          dx: 0,
          dy: 0,
          collisionTimer: 0,
          x: 0, // X and Y are not used for static bubbles but are required by the type
          y: 0,
        };
        const el = createBubbleElement(bubble, true);
        wrapper.appendChild(el);
      });
      container.appendChild(wrapper);

      // We still need to handle a resize event for the static view
      const handleStaticResize = () => {
        const newWidth = window.innerWidth;
        if ((newWidth <= 640 && !isMobile) || (newWidth > 640 && newWidth <= 1024 && !isTablet) || (newWidth > 1024 && (isMobile || isTablet))) {
          window.location.reload(); // Simple way to re-render for a new layout
        }
      };

      window.addEventListener("resize", handleStaticResize);
      return () => {
        window.removeEventListener("resize", handleStaticResize);
      };
    }

    // Desktop logic: Keep your existing bubble animation
    bubblesRef.current = initializeBubbles(container.clientWidth, container.clientHeight);
    bubblesRef.current.forEach(bubble => {
      const el = createBubbleElement(bubble);
      container.appendChild(el);
    });

    const animate = () => {
      const bubbles = bubblesRef.current;
      const { clientWidth: width, clientHeight: height } = container;

      updateBubbles(bubbles, width, height);

      bubbles.forEach(bubble => {
        const el = document.getElementById(bubble.id);
        if (!el) return;

        el.style.left = `${bubble.x}px`;
        el.style.top = `${bubble.y}px`;

        if (bubble.collisionTimer > 0) {
          el.style.opacity = (bubble.collisionTimer % 2 === 0) ? '0.8' : '1';
        } else {
          el.style.opacity = '1';
        }
      });
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    const handleDynamicResize = () => {
      if (!container) return;
      bubblesRef.current = initializeBubbles(container.clientWidth, container.clientHeight);
      container.innerHTML = "";
      bubblesRef.current.forEach(bubble => container.appendChild(createBubbleElement(bubble)));
    };

    window.addEventListener("resize", handleDynamicResize);
    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", handleDynamicResize);
    };
  }, [isMobile, isTablet]);

  return (
    <>
      <Head>
        <title>Services Overview</title>
        <meta name="description" content="Interactive services visualization" />
      </Head>
<div className="min-h-screen bg-[#0055FF] bg-gradient-to-br font-inter text-white flex flex-col items-center p-4 overflow-hidden relative">
        <h1 className="text-4xl font-extrabold text-center mb-10 mt-20 tracking-wide leading-tight drop-shadow-lg z-20">
          Some of Our Services
        </h1>
        {/* Render different content based on device */}
        {(isMobile || isTablet) ? (
          <div ref={canvasRef} className="relative w-full h-full mx-auto my-10 overflow-auto" />
        ) : (
          <div ref={canvasRef} className="relative w-full h-[70vh] mx-auto" />
        )}
        <div className="mt-6 text-center text-white/60 text-sm drop-shadow-sm">
          Click on any service bubble to learn more
        </div>
      </div>
    </>
  );
}