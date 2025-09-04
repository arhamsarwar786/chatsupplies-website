import React from 'react';
import { Mail, Phone, ChevronDown, User, MessageSquare } from 'lucide-react';
import Image from "next/image";
import Navbar from '../navbar';

const Services: React.FC = () => {
    return (
        <div className="bg-gradient-background text-white-800 min-h-screen font-sans">
            {/* Header/Navbar */}
            <header className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between mb-7 md:mb-8 lg:mb-0">
                <Navbar />
            </header>


            {/* Main Content Area */}
            <main className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row lg:space-x-8 xl:space-x-12">
                {/* Left Column - Contact Details and Info */}
                <div className="lg:w-2/3 mb-8 lg:mb-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-mont font-bold mb-3">Services</h1>
                  
                </div>
               
            </main>
           </div>
    );
};

export default Services;