"use client";

import { motion } from 'framer-motion';

// Define a type for the service objects for better type safety
interface Service {
    text: string;
    description: string;
    size: number;
    x: string;
    y: string;
}

// Data for the bubbles, including their final position (x, y) and size.
// The positions are based on the provided image and use vw/vh for responsiveness.
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

const App = () => {
    // Animation variants for the container to stagger the children's animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Time between each bubble animation starts
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#0c1a4e] font-inter text-white flex flex-col items-center justify-center p-4 overflow-hidden relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-10 mt-20 md:mt-0 tracking-wide leading-tight drop-shadow-lg z-20">
                Some of Our Services
            </h1>

            <motion.div
                className="relative w-screen h-screen mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {services.map((service: Service, index: number) => {
                    const bubbleVariants = {
                        hidden: { 
                            opacity: 0, 
                            scale: 0,
                            // Start from the center of the viewport
                            top: '50%',
                            left: '50%',
                            translateX: '-50%',
                            translateY: '-50%',
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            // Animate to the specific final position from the services data
                            top: service.y,
                            left: service.x,
                            translateX: '-50%',
                            translateY: '-50%',
                            transition: {
                                type: "spring",
                                stiffness: 80,
                                damping: 10,
                            },
                        },
                    };

                    return (
                        <motion.div
                            key={index}
                            className="absolute rounded-full backdrop-blur-sm bg-white/20 shadow-xl flex items-center justify-center p-4 text-center cursor-pointer transform hover:scale-110 transition-transform duration-300"
                            style={{
                                width: service.size,
                                height: service.size,
                                // Randomize the floating animation for each bubble
                                animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite alternate`,
                            }}
                            variants={bubbleVariants}
                            whileHover={{ scale: 1.1, zIndex: 10 }}
                        >
                            <div className="w-full h-full rounded-full flex flex-col items-center justify-center p-2 text-sm md:text-base lg:text-lg font-semibold leading-snug">
                                <span className="drop-shadow-sm">{service.text}</span>
                                <span className="text-xs md:text-sm font-light mt-1 drop-shadow-sm">{service.description}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* A hidden style block for the CSS animation */}
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-20px); }
                }
            `}</style>
        </div>
    );
};

export default App;
