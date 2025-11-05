import React from 'react';
import { Mail, Phone, ChevronDown, User, MessageSquare } from 'lucide-react';
import Image from "next/image";
import Navbar from '../Components/navbar';
import Form from '../Components/Form';
import Footer from '../Components/Footer';
import { CONTACT_INFO } from '@/app/lib/Constant';

const App: React.FC = () => {
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
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-mont font-bold mb-3">Contact Us</h1>
                    <p className="text-white text-sm mb-6 md:mb-8">
                        Email, call, or complete the form to learn how<br className="hidden sm:inline" />ChatSupplies can solve your messaging problem.
                    </p>

                    <div className="space-y-4">
                        {/* Email */}
                        <div className="flex items-center space-x-2">
                            <Mail size={20} className="text-white min-w-[20px]" />
                            <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.EMAIL}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-white break-all hover:text-gray-300"
                            >
                                {CONTACT_INFO.EMAIL}
                            </a>


                        </div>

                        {/* Phone */}
                        <div className="flex items-center space-x-2">
                            <Phone size={20} className="text-white min-w-[20px]" />
                            <a
                                href={`tel:${CONTACT_INFO.PHONE}`}
                                className="text-white font-mont text-sm hover:underline"
                            >
                                {CONTACT_INFO.PHONE}
                            </a>
                        </div>                       
                    </div>

                    {/* Extra Info Sections */}
                    <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-x-12">
                        {/* Customer Support */}
                        <div className="flex flex-col">
                            <h2 className="text-base sm:text-lg text-white font-mont font-bold mb-3 md:mb-4">Customer Support</h2>
                            <p className="text-white font-mont text-xs sm:text-sm leading-relaxed">
                                Our support team is available around the clock to address any concerns or queries you may have.
                            </p>
                        </div>

                        {/* Feedback and Suggestions */}
                        <div className="flex flex-col">
                            <h2 className="text-base sm:text-lg text-white font-bold mb-3 md:mb-4">Feedback and Suggestions</h2>
                            <p className="text-white font-mont text-xs sm:text-sm leading-relaxed">
                                We value your feedback and are continuously working to improve ChatSupplies.
                                Your input is crucial in shaping the future of ChatSupplies.
                            </p>
                        </div>

                        {/* Media Inquiries */}
                        <div className="flex flex-col">
                            <h2 className="text-base sm:text-lg text-white font-bold mb-3 md:mb-4">Media Inquiries</h2>
                            <p className="text-white font-mont text-xs sm:text-sm leading-relaxed">
                                For media-related questions or press inquiries, please contact us at{" "}
                                <a
                                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.EMAIL}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-white break-all hover:text-gray-300"
                                >
                                    {CONTACT_INFO.EMAIL}
                                </a>



                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="lg:w-2/5 lg:ml-auto lg:pr-0 mt-8 lg:mt-0">
                    <div className="w-full max-w-full lg:max-w-md xl:max-w-lg p-4 sm:p-6 rounded-2xl bg-white shadow-xl lg:ml-4 xl:ml-12">
                        <h2 className="text-2xl sm:text-3xl text-black font-mont font-black mb-2">Get in Touch</h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">You can reach us anytime</p>

                        {/* Form */}
                        <Form />
                        <p className="text-center text-xs text-gray-500 leading-relaxed mt-2">
                            By contacting us, you agree to our{" "}
                            <a href="/terms-and-conditions" className="font-mont text-black font-semibold">
                                Terms and Conditions
                            </a>{" "}
                            and{" "}
                            <a href="/privacy-policy" className="text-black font-mont font-semibold">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;