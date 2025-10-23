import React from 'react';

const Services = () => {
    return (
        <div id="services-section" className="py-8 md:py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-3xl md:text-6xl font-bold mb-8 md:mb-12 text-white">
                    Services
                </h1>
            </div>

            {/* All cards arranged within a single, main grid container */}
            <section className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 px-4 md:px-8 lg:px-18 font-inter">

                {/* Agent Builder Card (Full width on md screens) */}
                <div className="md:col-span-5 bg-gradient-to-r from-[#252F8B]/80 via-black/20 to-[#2648EF]/0 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center">
                    {/* Text shifted lower */}
                    <div className="md:w-1/2 md:pr-3 ml-0 md:ml-4 md:self-end mb-6 md:mb-10">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                            Chatbot builder for <br /> powerful customization & smart training
                        </h2>
                        <p className="text-white text-xs md:text-sm font-monnt">
                            Customize your chatbot's responses, tone, and appearance with the Chatbot Builder.
                            Train the chatbot with your own data, FAQs, and unique business insights to provide
                            highly tailored interactions that align perfectly with your needs.
                        </p>
                    </div>

                    {/* Image stays as is */}
                    <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
                        <img
                            src="./KeyFeatureCards/Chatbot Builder.PNG"
                            alt="Agent Builder Interface"
                            className="w-full max-w-[350px] md:w-[90%] object-contain"
                        />
                    </div>
                </div>

                {/* Card 1 - Instant responses */}
                <div className="md:col-span-3 bg-gradient-to-t from-[#252F8B]/80 via-black/20 to-[#2648EF]/0 rounded-2xl flex flex-col h-auto">
                    {/* Image fills top area */}
                    <div className="w-full">
                        <img
                            src="KeyFeatureCards/History.png"
                            alt="Chatbot Instant Responses"
                            className="w-full h-48 md:h-88 object-contain rounded-t-2xl"
                        />
                    </div>

                    {/* Text section */}
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                            Chat History
                        </h2>
                        <p className="text-white text-xs sm:text-sm md:text-[13px] lg:text-sm leading-relaxed">
                            Easily access and review all your chatbot’s past conversations in one organized place. Explore detailed chat histories to understand customer behavior, identify common questions, and evaluate chatbot performance. Use these insights to refine your chatbot’s responses, enhance user satisfaction, and continuously train smarter, more effective AI assistants.
                        </p>
                    </div>
                </div>

                {/* Card 2 - Chat History */}
                <div className="md:col-span-2 bg-gradient-to-t from-[#252F8B]/80 via-black/20 to-[#2648EF]/0 rounded-2xl flex flex-col h-auto">
                    {/* Image fills top area */}
                    <div className="w-full">
                        <img
                            src="KeyFeatureCards/Instant Responses.png"
                            alt="Form Assistance Interface"
                            className="w-full h-48 md:h-88 object-contain rounded-t-2xl"
                        />
                    </div>

                    {/* Text section */}
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                            Instant responses
                        </h2>
                        <p className="text-white text-xs sm:text-sm md:text-[13.5px] lg:text-sm xl:text-base leading-relaxed md:leading-snug">
                            Provide instant, accurate answers to FAQs like business hours, product details, or policies. Keep visitors informed and satisfied while reducing your support team’s workload.                        </p>
                    </div>
                </div>


                <div className="md:col-span-2 bg-gradient-to-t from-[#252F8B]/80 via-black/20 to-[#2648EF]/0 rounded-xl flex flex-col justify-between flex-grow">
                    {/* Image takes full top area */}
                    <div className="flex-grow flex justify-center p-0">
                        <img
                            src="./KeyFeatureCards/Customizable Branding.png"
                            alt="Customizable Branding Interface"
                            // Set the image width to 99.8% of the parent container
                            // and use 'mx-auto' to center it, creating 0.1% space on each side.
                            className="w-[90%] h-48 md:h-[400px] object-contain rounded-t-xl mx-auto"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="p-4 md:p-6">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                            Customizable branding
                        </h2>
                        <p className="text-white text-xs md:text-sm">
                            Create a cohesive experience by aligning the chatbot's look and feel with your website's branding.
                            Adjust colors, fonts, and even the speech bubble's personality, making the chatbot feel like an integrated
                            part of your site.
                        </p>
                    </div>
                </div>


                {/* Card 4 - Embed Anywhere */}
                <div className="md:col-span-3 bg-gradient-to-t from-[#252F8B]/80 via-black/20 to-[#2648EF]/0 rounded-xl flex flex-col flex-grow">
                    {/* Image fills whole top area */}
                    <img
                        src="./KeyFeatureCards/embed.png"
                        alt="Embed Code Interface"
                        className="w-full h-48 md:h-[400px] object-contain rounded-t-xl"
                    />

                    {/* Text section */}
                    <div className="p-4 md:p-6">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                            Embed anywhere
                        </h2>
                        <p className="text-white text-xs md:text-sm">
                            Integrate your AI Chatbot on any page of your website with a simple embed code.
                            Place it where your visitors need it most—on landing pages, contact forms, or FAQs—
                            to ensure accessibility and engagement directly from your website's interface.
                            With easy integration, you can offer assistance site-wide without complex setup.
                        </p>
                    </div>
                </div>

                {/* WordPress Plugin Card (Full width on md screens) */}
                <div className="md:col-span-5 bg-gradient-to-r from-[#2648EF]/0 via-black/15 to-[#252F8B]/80 rounded-xl p-6 md:p-8 flex flex-col md:flex-row-reverse items-center">
                    <div className="flex-1 lg:pr-8 md:pl-20">
                        <div className="flex items-center text-white font-bold mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 md:h-6 md:w-6 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6a.75.75 0 100 1.5.75.75 0 000-1.5zM12.75 3a.75.75 0 100 1.5.75.75 0 000-1.5zM11.25 6a.75.75 0 100 1.5.75.75 0 000-1.5zM10.5 3a.75.75 0 100 1.5.75.75 0 000-1.5zM9.75 6a.75.75 0 100 1.5.75.75 0 000-1.5z"
                                />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 10.5h.008v.008h-.008v-.008z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 13.5h.008v.008h-.008v-.008z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 16.5h.008v.008h-.008v-.008z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 16.5h.008v.008h-.008v-.008z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 13.5h.008v.008h-.008v-.008z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 10.5h.008v.008h-.008v-.008z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.5h.008v.008h-.008v-.008z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 7.5h.008v.008h-.008v-.008z" />
                            </svg>
                            <span className="text-xs md:text-sm font-mont border border-gray-400 px-2 md:px-3 py-1 rounded-full">
                                Now Available
                            </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                            ChatSupplies Your AI-Powered Chatbot Solution!
                        </h2>
                        <p className="text-white text-xs md:text-sm mb-4">
                            Easily create, train, and embed AI-powered chatbots into your website!                        </p>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                            <a
                                href="https://admin.chatsupplies.com/auth/login"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-[#2648EF] hover:bg-[#2648EF]/30 text-white font-mont font-bold py-2 px-4 md:px-6 transition duration-300 cursor-pointer text-sm md:text-base">
                                    Start Using ChatSupplies!
                                </button>
                            </a>


                            <button className="bg-transparent border border-white text-white hover:bg-white/20 font-mont font-bold py-2 px-4 md:px-6 cursor-pointer transition duration-300 text-sm md:text-base">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image stays inside the same card */}
                    <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:mr-8">
                        <img
                            src="https://cdn.dribbble.com/userupload/24048663/file/original-342972c0fc0a4e79014b9e4503bf36cb.png?resize=1024x768&vertical=center"
                            alt="Jotform AI Chatbot for WordPress"
                            className="w-full max-w-[300px] md:max-w-none h-auto md:h-[300px] object-contain rounded-xl"
                        />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Services;