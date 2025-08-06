"use client";

import { useEffect, useRef } from 'react';
import Head from 'next/head';

interface Service {
  text: string;
  description: string;
  size: number;
  x: string;
  y: string;
}

interface Bubble {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
  text: string;
  description: string;
  collisionTimer: number;
}

export default function BubblePage() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationIdRef = useRef<number | null>(null);

  const services: Service[] = [
    { text: "Create chatbots", description: "with public links and customizable flows", size: 180, x: '8vw', y: '50vh' },
    { text: "User Support", description: "Email, ticket, and live meeting support based on plan", size: 220, x: '30vw', y: '35vh' },
    { text: "Real-time performance", description: "insights and advanced reporting", size: 200, x: '55vw', y: '40vh' },
    { text: "Multilingual Support", description: "Engage users in their native language", size: 200, x: '75vw', y: '20vh' },
    { text: "Unlimited chat storage", description: "with CSV export", size: 150, x: '22vw', y: '70vh' },
    { text: "Personalize chatbot", description: "name, logo, theme, avatar, and CSS", size: 200, x: '45vw', y: '65vh' },
    { text: "Train chatbot", description: "with your own documents (PDFs, URLs, etc.)", size: 170, x: '65vw', y: '55vh' },
    { text: "Premium Services", description: "contains Backup and recovery", size: 190, x: '85vw', y: '65vh' },
    // Small decorative bubbles
    { text: "", description: "", size: 90, x: '17vw', y: '25vh' },
    { text: "", description: "", size: 70, x: '48vw', y: '50vh' },
    { text: "", description: "", size: 60, x: '73vw', y: '45vh' },
    { text: "", description: "", size: 50, x: '58vw', y: '85vh' },
    { text: "", description: "", size: 50, x: '85vw', y: '5vh' },
  ];

  const initializeBubbles = (containerWidth: number, containerHeight: number) => {
    return services.map(service => {
      const x = parseFloat(service.x) / 100 * containerWidth;
      const y = parseFloat(service.y) / 100 * containerHeight;
      const radius = service.size / 2;
      
      // Increased speeds for better visibility
      const speed = service.text ? 1.5 : 1.0; // Content bubbles slightly faster than decorative ones
      
      return {
        x,
        y,
        radius,
        dx: (Math.random() - 0.5) * speed,
        dy: (Math.random() - 0.5) * speed,
        color: 'rgba(255, 255, 255, 0.2)',
        text: service.text,
        description: service.description,
        collisionTimer: 0
      };
    });
  };

  const renderBubbles = (bubbles: Bubble[], container: HTMLDivElement) => {
    container.innerHTML = '';
    bubbles.forEach(bubble => {
      const el = document.createElement('div');
      el.className = 'absolute rounded-full flex flex-col items-center justify-center text-white cursor-pointer transition-transform hover:scale-105';
      
      const glowEffect = bubble.collisionTimer > 0 ? 
        `0 0 ${10 + bubble.collisionTimer * 2}px rgba(255, 255, 255, 0.5)` : 
        '0 0 20px rgba(255, 255, 255, 0.1)';
      
      el.style.cssText = `
        width: ${bubble.radius * 2}px;
        height: ${bubble.radius * 2}px;
        left: ${bubble.x - bubble.radius}px;
        top: ${bubble.y - bubble.radius}px;
        background: ${bubble.color};
        backdrop-filter: blur(10px);
        box-shadow: ${glowEffect};
        padding: 10px;
        transition: box-shadow 0.1s ease-out;
      `;
      
      if (bubble.text) {
        const title = document.createElement('div');
        title.className = 'font-bold text-center drop-shadow-sm';
        title.textContent = bubble.text;
        
        const desc = document.createElement('div');
        desc.className = 'text-xs md:text-sm font-light mt-1 text-center drop-shadow-sm';
        desc.textContent = bubble.description;
        
        el.appendChild(title);
        el.appendChild(desc);
      }

      el.onclick = () => alert(`${bubble.text ? bubble.text + '\n' + bubble.description : 'Decorative bubble'}`);
      container.appendChild(el);
    });
  };

  const updateBubbles = (bubbles: Bubble[], width: number, height: number) => {
    // Update positions
    bubbles.forEach(bubble => {
      if (bubble.collisionTimer > 0) bubble.collisionTimer--;

      bubble.x += bubble.dx;
      bubble.y += bubble.dy;

      // Wall collision
      if (bubble.x - bubble.radius < 0 || bubble.x + bubble.radius > width) {
        bubble.dx *= -1;
        bubble.x = Math.max(bubble.radius, Math.min(bubble.x, width - bubble.radius));
      }

      if (bubble.y - bubble.radius < 0 || bubble.y + bubble.radius > height) {
        bubble.dy *= -1;
        bubble.y = Math.max(bubble.radius, Math.min(bubble.y, height - bubble.radius));
      }
    });

    // Bubble-to-bubble collision
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

    const animate = () => {
      const bubbles = bubblesRef.current;
      const { clientWidth: width, clientHeight: height } = container;

      updateBubbles(bubbles, width, height);
      renderBubbles(bubbles, container);

      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Start the animation
    animationIdRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (container) {
        bubblesRef.current = initializeBubbles(container.clientWidth, container.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
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
        
        <div 
          ref={canvasRef}
          className="relative w-full h-[70vh] mx-auto"
        />
        
        <div className="mt-6 text-center text-white/60 text-sm drop-shadow-sm">
          Click on any service bubble to learn more
        </div>
      </div>
    </>
  );
}