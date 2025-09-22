import React from 'react';

const KeyFeatures = () => {
    return (
        <div className="py-8 md:py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-white">
                    Key features
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
                            src="https://cdn.dribbble.com/userupload/43012202/file/original-169ef644192043d66b0b1cd5965b383e.jpg?resize=1024x768&vertical=center"
                            alt="Agent Builder Interface"
                            className="w-full max-w-[350px] md:w-[90%] object-contain"
                        />
                    </div>
                </div>

                {/* Card 1 - Instant Responses */}
                <div className="md:col-span-3 bg-gradient-to-t from-[#252F8B]/80 via-black/20 to-[#2648EF]/0 rounded-2xl flex flex-col h-auto md:h-[560px]">
                    {/* Image fills top area */}
                    <div className="w-full">
                        <img
                            src="https://cdn.dribbble.com/userupload/44542704/file/13ca425ba0da1ca177540c8b92ba0ebf.jpg?resize=1024x768&vertical=center"
                            alt="Chatbot Instant Responses"
                            className="w-full h-48 md:h-88 object-cover rounded-t-2xl"
                        />
                    </div>

                    {/* Text section */}
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                            Instant responses
                        </h2>
                        <p className="text-white text-xs md:text-sm leading-relaxed">
                            Provide quick, accurate answers to frequently asked questions, keeping
                            visitors informed and engaged without delay. Whether it's business
                            hours, product information, or policies, the advanced AI Chatbot can
                            instantly get the information they need immediately, improving
                            satisfaction and reducing the load on your support team.
                        </p>
                    </div>
                </div>

                {/* Card 2 - Form Assistance */}
                <div className="md:col-span-2 bg-gradient-to-t from-[#252F8B]/80 via-black/20 to-[#2648EF]/0 rounded-2xl flex flex-col h-auto md:h-[560px]">
                    {/* Image fills top area */}
                    <div className="w-full">
                        <img
                            src="https://cdn.dribbble.com/userupload/37084664/file/original-ca5e755127d425b850d3c1c641007700.png?resize=1024x768&vertical=center"
                            alt="Form Assistance Interface"
                            className="w-full h-48 md:h-88 object-cover rounded-t-2xl"
                        />
                    </div>

                    {/* Text section */}
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                            Chat History
                        </h2>
                        <p className="text-white text-xs md:text-sm leading-relaxed">
                            Easily access and review your chatbot’s past conversations in one place. Use chat history to analyze customer interactions and improve responses. Gain valuable insights that help you train smarter, more effective chatbots.
                        </p>
                    </div>
                </div>

                {/* Card 3 - Customizable Branding */}
                <div className="md:col-span-2 bg-gradient-to-t from-[#252F8B]/80 via-black/20 to-[#2648EF]/0 rounded-xl flex flex-col justify-between flex-grow">
                    {/* Image takes full top area */}
                    <div className="flex-grow">
                        <img
                            src="https://cdn.dribbble.com/userupload/14430165/file/original-275c42e31e3d028ec56a63595ac68160.png?resize=1024x768&vertical=center"
                            alt="Customizable Branding Interface"
                            className="w-full h-48 md:h-[400px] object-cover rounded-t-xl"
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
                        src="https://f.vimeocdn.com/cms-images/2021/05/5.21_HowToEmbedVideos_Header.png?w=1024?w=800"
                        alt="Embed Code Interface"
                        className="w-full h-48 md:h-[400px] object-cover rounded-t-xl"
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
                            <a href="https://admin.chatsupplies.com/auth/login">
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

export default KeyFeatures;