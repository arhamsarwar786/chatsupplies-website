"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';

interface Service {
  text: string;
  description: string;
  x: string;
  y: string;
  size: number;
  image?: string;
}

interface Bubble {
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
}

export default function BubblePage() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const bubblesRef = useRef<Bubble[]>([]);

  const services: Service[] = [
    // Increased size for text bubbles (original size * 1.2)
    { text: "Create chatbots", description: "with public links and customizable flows", size: 216, x: '8vw', y: '50vh', image: "/Icons/Bubbles/Create Chatbots.svg" },
    { text: "User Support", description: "Email, ticket, and live meeting support based on plan", size: 264, x: '30vw', y: '35vh', image: "/Icons/Bubbles/User Support.svg" },
    { text: "Real-time performance", description: "insights and advanced reporting", size: 240, x: '55vw', y: '40vh', image: "/Icons/Bubbles/Real Time.svg" },
    { text: "Multilingual Support", description: "Engage users in their native language", size: 240, x: '75vw', y: '20vh', image: "/Icons/Bubbles/Multilingual.svg" },
    { text: "Unlimited chat storage", description: "with CSV export", size: 180, x: '22vw', y: '70vh', image: "/Icons/Bubbles/Unlimited Chat.svg" },
    { text: "Personalize chatbot", description: "name, logo, theme, avatar, and CSS", size: 240, x: '45vw', y: '65vh', image: "/Icons/Bubbles/bubble 5.svg" },
    { text: "Train chatbot", description: "with your own documents (PDFs, URLs, etc.)", size: 204, x: '65vw', y: '55vh', image: "/Icons/Bubbles/bubble 6.svg" },
    { text: "Premium Services", description: "contains Backup and recovery", size: 228, x: '85vw', y: '65vh', image: "/Icons/Bubbles/Premium Services.svg" },
    { text: "", description: "", size: 90, x: '17vw', y: '25vh', image: "Icons/Bubbles/bubble 10.svg" },
    { text: "", description: "", size: 70, x: '48vw', y: '50vh', image: "Icons/Bubbles/bubble 9.svg" },
    { text: "", description: "", size: 60, x: '73vw', y: '45vh', image: "Icons/Bubbles/bubble 8.svg" },
    { text: "", description: "", size: 50, x: '58vw', y: '85vh', image: "Icons/Bubbles/bubble 7.svg" },
  ];

  const initializeBubbles = (containerWidth: number, containerHeight: number) => {
    return services.map(service => {
      const x = parseFloat(service.x) / 100 * containerWidth;
      const y = parseFloat(service.y) / 100 * containerHeight;
      const radius = service.size / 2;
      // All bubbles get movement, but small ones are slower
      const speed = service.text ? 1.5 : (0.5 + Math.random() * 0.5);

      return {
        text: service.text,
        description: service.description,
        x,
        y,
        size: service.size,
        radius,
        dx: (Math.random() - 0.5) * speed,
        dy: (Math.random() - 0.5) * speed,
        collisionTimer: 0,
        image: service.image,
      };
    });
  };

  const updateBubbles = (bubbles: Bubble[], width: number, height: number) => {
    // Wall collision and movement for all bubbles
    bubbles.forEach(bubble => {
      if (bubble.collisionTimer > 0) {
        bubble.collisionTimer--;
      }

      bubble.x += bubble.dx;
      bubble.y += bubble.dy;

      const radius = bubble.radius;

      if (bubble.x - radius < 0 || bubble.x + radius > width) {
        bubble.dx *= -1;
        bubble.x = Math.max(radius, Math.min(bubble.x, width - radius));
        bubble.collisionTimer = 10;
      }
      if (bubble.y - radius < 0 || bubble.y + radius > height) {
        bubble.dy *= -1;
        bubble.y = Math.max(radius, Math.min(bubble.y, height - radius));
        bubble.collisionTimer = 10;
      }
    });

    // Bubble-to-bubble collision for all bubbles
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
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    
    bubblesRef.current = initializeBubbles(container.clientWidth, container.clientHeight);

    bubblesRef.current.forEach((bubble) => {
      const el = document.createElement("div");
      el.id = bubble.text || `bubble-${bubble.x}-${bubble.y}`;
      el.className = 'absolute flex flex-col items-center justify-center text-white cursor-pointer';
      
      el.style.cssText = `
        width: ${bubble.radius * 2}px;
        height: ${bubble.radius * 2}px;
        left: ${bubble.x}px;
        top: ${bubble.y}px;
        transform: translate(-50%, -50%);
        pointer-events: none;
        transition: all 0.1s ease-out;
      `;

      if (bubble.image) {
        const img = document.createElement("img");
        img.src = bubble.image;
        img.alt = bubble.text || "";
        img.className = 'w-full h-full object-contain pointer-events-none transition-all duration-100 ease-out';
        el.appendChild(img);

        const textContainer = document.createElement('div');
        textContainer.className = 'absolute inset-0 flex flex-col items-center justify-center text-center p-2 pointer-events-none';
        
        if (bubble.text) {
          const title = document.createElement('span');
          title.className = 'font-bold text-center drop-shadow-sm leading-tight text-[12px] md:text-base'; // Increased text size
          title.textContent = bubble.text;
          textContainer.appendChild(title);
        }

        if (bubble.description) {
          const desc = document.createElement('span');
          desc.className = 'text-[10px] md:text-sm font-light mt-1 text-center drop-shadow-sm leading-none'; // Increased text size
          desc.textContent = bubble.description;
          textContainer.appendChild(desc);
        }

        el.appendChild(textContainer);
      }
      
      el.style.pointerEvents = 'auto';
      el.onclick = () => {
        if (bubble.text) {
          alert(`${bubble.text}\n${bubble.description}`);
        }
      };
      container.appendChild(el);
    });

    const animate = () => {
      const bubbles = bubblesRef.current;
      const { clientWidth: width, clientHeight: height } = container;

      updateBubbles(bubbles, width, height);

      bubbles.forEach(bubble => {
        const el = document.getElementById(bubble.text || `bubble-${bubble.x}-${bubble.y}`);
        if (el) {
          el.style.left = `${bubble.x}px`;
          el.style.top = `${bubble.y}px`;
          
          // Blinking effect on collision
          if (bubble.collisionTimer > 0) {
            const opacity = (bubble.collisionTimer % 2 === 0) ? 0.8 : 1;
            el.style.opacity = `${opacity}`;
          } else {
            el.style.opacity = '1';
          }
        }
      });
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (container) {
        bubblesRef.current = initializeBubbles(container.clientWidth, container.clientHeight);
        container.innerHTML = '';
        bubblesRef.current.forEach((bubble) => {
          const el = document.createElement("div");
          el.id = bubble.text || `bubble-${bubble.x}-${bubble.y}`;
          el.className = 'absolute flex flex-col items-center justify-center text-white cursor-pointer';
          
          el.style.cssText = `
            width: ${bubble.radius * 2}px;
            height: ${bubble.radius * 2}px;
            left: ${bubble.x}px;
            top: ${bubble.y}px;
            transform: translate(-50%, -50%);
            pointer-events: none;
            transition: all 0.1s ease-out;
          `;

          if (bubble.image) {
            const img = document.createElement("img");
            img.src = bubble.image;
            img.alt = bubble.text || "";
            img.className = 'w-full h-full object-contain pointer-events-none transition-all duration-100 ease-out';
            el.appendChild(img);

            const textContainer = document.createElement('div');
            textContainer.className = 'absolute inset-0 flex flex-col items-center justify-center text-center p-2 pointer-events-none';
            
            if (bubble.text) {
              const title = document.createElement('span');
              title.className = 'font-bold text-center drop-shadow-sm leading-tight text-[12px] md:text-base';
              title.textContent = bubble.text;
              textContainer.appendChild(title);
            }

            if (bubble.description) {
              const desc = document.createElement('span');
              desc.className = 'text-[10px] md:text-sm font-light mt-1 text-center drop-shadow-sm leading-none';
              desc.textContent = bubble.description;
              textContainer.appendChild(desc);
            }

            el.appendChild(textContainer);
          }
          
          el.style.pointerEvents = 'auto';
          el.onclick = () => {
            if (bubble.text) {
              alert(`${bubble.text}\n${bubble.description}`);
            }
          };
          container.appendChild(el);
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Services Overview</title>
        <meta name="description" content="Interactive services visualization" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#0c1a4e] font-inter text-white flex flex-col items-center p-4 overflow-hidden relative">
        <h1 className="text-4xl font-extrabold text-center mb-10 mt-20 tracking-wide leading-tight drop-shadow-lg z-20">
          Some of Our Services
        </h1>
        <div ref={canvasRef} className="relative w-full h-[70vh] mx-auto" />
        <div className="mt-6 text-center text-white/60 text-sm drop-shadow-sm">
          Click on any service bubble to learn more
        </div>
      </div>
    </>
  );
}