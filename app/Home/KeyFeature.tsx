import React from 'react';

const KeyFeatures = () => {
    return (
        <div className="custom-gradient-bg py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-center text-4xl font-bold mb-12 text-white">
                    Key features
                </h1>
            </div>

            {/* All cards arranged within a single, main grid container */}
            <section className="grid grid-cols-1 md:grid-cols-5 gap-8 px-4 font-inter">

                {/* Agent Builder Card (Full width on md screens) */}
                <div className="md:col-span-5 bg-gradient-to-r from-blue-100 to-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-3">
                        <h2 className="text-lg font-semibold text-blue-900 mb-1">
                            Agent builder for advanced customization & training
                        </h2>
                        <p className="text-gray-700 text-xs">
                            Customize your chatbot's responses, tone, and appearance with the Agent Builder. Train the chatbot with your own data, FAQs, and unique business insights to provide highly tailored interactions that align perfectly with your brand.
                        </p>
                    </div>

                    <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
                        <img
                            src="https://cdn.dribbble.com/userupload/43012202/file/original-169ef644192043d66b0b1cd5965b383e.jpg?resize=1024x768&vertical=center"
                            alt="Agent Builder Interface"
                            width={350}
                            height={200}
                            className="w-[70%] object-contain"
                        />
                    </div>

                </div>

                {/* Card 1 - Instant Responses */}
               <div className="md:col-span-3 bg-white rounded-xl shadow-2xl flex flex-col flex-grow">
  {/* Image fills the area above text */}
  <div className="flex-grow">
    <img
      src="https://cdn.dribbble.com/userupload/44542704/file/13ca425ba0da1ca177540c8b92ba0ebf.jpg?resize=1024x768&vertical=center"
      alt="Chatbot Instant Responses"
      className="w-full h-full object-cover rounded-t-xl"
    />
  </div>

  {/* Text section (unchanged) */}
  <div className="p-6">
    <h2 className="text-2xl font-bold text-blue-900 mb-2">
      Instant responses
    </h2>
    <p className="text-gray-700 text-sm">
      Provide quick, accurate answers to frequently asked questions, keeping visitors informed and engaged without delay. Whether it's business hours, product information, or policies, the advanced AI Chatbot can instantly get the information they need immediately, improving satisfaction and reducing the load on your support team.
    </p>
  </div>
</div>

                {/* Card 2 - Form Assistance */}
                <div className="md:col-span-2 bg-white rounded-xl shadow-2xl flex flex-col flex-grow">
                    {/* Image fills most of top area except text */}
                    <div className="flex-grow">
                        <img
                            src="https://cdn.dribbble.com/userupload/37084664/file/original-ca5e755127d425b850d3c1c641007700.png?resize=1024x768&vertical=center"
                            alt="Form Assistance Interface"
                            className="w-full h-[400px] object-cover rounded-t-xl"
                        />
                    </div>

                    {/* Text section (unchanged) */}
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">
                            Form assistance
                        </h2>
                        <p className="text-gray-700 text-sm">
                            Guide users through form completion with a friendly, conversational flow,
                            minimizing errors and ensuring all fields are filled out correctly. This
                            product helps increase successful form submissions and improves the user
                            experience.
                        </p>
                    </div>
                </div>


                {/* Card 3 - Customizable Branding */}
                <div className="md:col-span-2 bg-white rounded-xl shadow-2xl flex flex-col justify-between flex-grow">
                    {/* Image takes full top area */}
                    <div className="flex-grow">
                        <img
                            src="https://cdn.dribbble.com/userupload/14430165/file/original-275c42e31e3d028ec56a63595ac68160.png?resize=1024x768&vertical=center"
                            alt="Customizable Branding Interface"
                            className="w-full h-[400px] object-cover rounded-t-xl"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">
                            Customizable branding
                        </h2>
                        <p className="text-gray-700 text-sm">
                            Create a cohesive experience by aligning the chatbot's look and feel with your website's branding.
                            Adjust colors, fonts, and even the speech bubble's personality, making the chatbot feel like an integrated
                            part of your site.
                        </p>
                    </div>
                </div>


                {/* Card 4 - Embed Anywhere */}
                <div className="md:col-span-3 bg-white rounded-xl shadow-2xl flex flex-col flex-grow">
                    {/* Image fills whole top area */}
                    <img
                        src="https://f.vimeocdn.com/cms-images/2021/05/5.21_HowToEmbedVideos_Header.png?w=1024?w=800"
                        alt="Embed Code Interface"
                        className="w-full h-[350px] object-cover rounded-t-xl"
                    />

                    {/* Text section */}
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">
                            Embed anywhere
                        </h2>
                        <p className="text-gray-700 text-sm">
                            Integrate your AI Chatbot on any page of your website with a simple embed code. Place it where your visitors need it most—on landing pages, contact forms, or FAQs—to ensure accessibility and engagement directly from your website's interface. With easy integration, you can offer assistance site-wide without complex setup.
                        </p>
                    </div>
                </div>

                {/* WordPress Plugin Card (Full width on md screens) */}
                <div className="md:col-span-5 bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8">
                        <div className="flex items-center text-purple-700 font-bold mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
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
                            <span className="text-sm font-mont border border-gray-400 px-3 py-1 rounded-full">
                                Now Available
                            </span>

                        </div>
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">
                            Jotform AI Chatbot for WordPress!
                        </h2>
                        <p className="text-gray-700 text-sm mb-4">
                            Easily create, train, and embed AI-powered chatbots directly in WordPress—no shortcodes or coding required!
                        </p>
                        <div className="flex space-x-4">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-mont font-bold py-2 px-6 transition duration-300 cursor-pointer">
                                Get The Plugin Now!
                            </button>
                            <button className="bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-100 font-mont font-bold py-2 px-6 cursor-pointer transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
                        <img
                            src="https://cdn.dribbble.com/userupload/24048663/file/original-342972c0fc0a4e79014b9e4503bf36cb.png?resize=1024x768&vertical=center"
                            alt="Jotform AI Chatbot for WordPress"
                            width={400}
                            height={240}
                            className="w-[70%] object-contain"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KeyFeatures;