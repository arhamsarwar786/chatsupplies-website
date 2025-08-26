import React from 'react';
import { Mail, Phone, ChevronDown, User, MessageSquare } from 'lucide-react';

const App: React.FC = () => {
    return (
        // The bg-gray-50 class has been replaced with a new custom class for the gradient.
        // This class is assumed to be defined in your global.css file.
        <div className="bg-gradient-background text-white-800 min-h-screen font-sans">
            {/* Header/Navbar */}
            <header className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    {/* Logo */}
                    <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                    <span className="text-xl font-bold">Snappy</span>
                </div>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center space-x-8 text-white-600">
                    <a href="#" className="hover:text-white/15 transition-colors duration-200">Home</a>
                    <a href="#" className="hover:text-white15 transition-colors duration-200">Apps</a>
                    <a href="#" className="hover:white-blue/15 transition-colors duration-200">Services</a>
                    <a href="#" className="hover:text-white/15 transition-colors duration-200">Blog</a>
                    <a href="#" className="hover:text-white/15 transition-colors duration-200">Business</a>
                    <a href="#" className="hover:text-white/15 transition-colors duration-200">Download</a>

                    {/* Language Selector */}
                    <div className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer transition-colors duration-200">
                        <span>EN</span>
                        <ChevronDown size={16} />
                    </div>
                </nav>
            </header>

            {/* Main Content Area */}
            <main className="container mx-auto p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row lg:space-x-12">
                {/* Left Column - Contact Details and Info */}
                <div className="lg:w-2/3 mb-10 lg:mb-0">
                    <h1 className="text-4xl md:text-5xl font-mont font-bold mb-3">Contact Us</h1>
                    <p className="text-white text-sm mb-8">
                        Email, call, or complete the form to learn how<br /> Snappy can solve your messaging problem.
                    </p>

                    <div className="space-y-4">
                        {/* Email */}
                        <div className="flex items-center space-x-2">
                            <Mail size={20} className="text-white" />
                            <a href="mailto:info@snappy.io" className="text-white underline font-mont font-semibold">info@snappy.io</a>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center space-x-2">
                            <Phone size={20} className="text-white" />
                            <a href="tel:321-221-231" className="text-white underline font-mont font-semibold">321-221-231</a>
                        </div>

                        {/* Customer Support Link */}
                        <div className="flex items-center space-x-2">
                            <a href="#" className="text-black-500 underline font-mont font-semibold">Customer Support</a>
                        </div>
                    </div>

                    {/* Additional Info Sections */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Customer Support */}
                        <div>
                            <h2 className="text-lg font-mont font-bold mb-2">Customer Support</h2>
                            <p className="text-white font-mont text-sm">
                                Our support team is available around the clock to address any concerns or queries you may have.
                            </p>
                        </div>

                        {/* Feedback and Suggestions */}
                        <div>
                            <h2 className="text-lg font-bold mb-2">Feedback and Suggestions</h2>
                            <p className="text-white font-mont text-sm">
                                We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.
                            </p>
                        </div>

                        {/* Media Inquiries */}
                        <div>
                            <h2 className="text-lg font-bold mb-2">Media Inquiries</h2>
                            <p className="text-white font-mont text-sm">
                                For media-related questions or press inquiries, please contact us at <a href="mailto:media@snappyapp.com" className="underline">media@snappyapp.com</a>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="lg:w-3/5 ml-auto pr-6">
                    <div className="w-full max-w-5xl p-6 rounded-2xl bg-white shadow-xl -mt-9 ml-12">
                        <h2 className="text-3xl font-extrabold mb-2">Get in Touch</h2>
                        <p className="text-white mb-6">You can reach us anytime</p>

                        {/* Form */}
                        <form className="space-y-5">
                            <div className="flex space-x-4">
                                {/* First Name */}
                                <div className="w-1/2">
                                    <label htmlFor="firstName" className="sr-only">First name</label>
                                    <div className="relative">
                                        <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="First name"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-[#2648EF] focus:border-[#2648EF] outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Last Name */}
                                <div className="w-1/2">
                                    <label htmlFor="lastName" className="sr-only">Last name</label>
                                    <div className="relative">
                                        <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Last name"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-[#2648EF] focus:border-[#2648EF] outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Your Email */}
                            <div>
                                <label htmlFor="email" className="sr-only">Your email</label>
                                <div className="relative">
                                    <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your email"
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-[#2648EF] focus:border-[#2648EF] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex space-x-3">
                                {/* Country Code Dropdown */}
                                <div className="relative w-28">
                                    <select className="w-full pl-3 pr-8 py-2.5 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-[#2648EF] focus:border-[#2648EF] outline-none bg-white appearance-none">
                                        <option>+62</option>
                                        <option>+1</option>
                                        <option>+44</option>
                                    </select>
                                    <ChevronDown
                                        size={16}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                    />
                                </div>

                                {/* Phone Number Input */}
                                <div className="relative flex-1">
                                    <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone number"
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-[#2648EF] focus:border-[#2648EF] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* How can we help? */}
                            <div>
                                <label htmlFor="message" className="sr-only">How can we help?</label>
                                <div className="relative">
                                    <MessageSquare size={20} className="absolute left-3 top-4 text-gray-400" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="How can we help?"
                                        rows={3}
                                        maxLength={120}
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-4xl focus:ring-2 focus:ring-[#2648EF] focus:border-[#2648EF] outline-none transition-all resize-none"
                                    ></textarea>
                                    <div className="absolute bottom-2 right-4 text-xs text-gray-400">0/120</div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full text-white font-semibold cursor-pointer py-2.5 rounded-4xl transition-all duration-300 shadow-lg bg-[linear-gradient(to_right,#2648EF_0%,#252F8B_100%)] hover:brightness-110"
                            >
                                Submit
                            </button>


                            {/* Privacy Policy */}
                            <p className="text-center text-xs text-gray-500 leading-relaxed">
                                By contacting us, you agree to our{" "}
                                <a href="#" className="underline">Terms of service</a> and{" "}
                                <a href="#" className="underline">Privacy Policy</a>
                            </p>
                        </form>
                    </div>
                </div>


            </main>
        </div>
    );
};

export default App;
