import React from 'react';
import Footer from '../Components/Footer';
import Image from 'next/image';
import { Bot, Lightbulb, User, MessageSquareText, Calendar, BarChart, TrendingUp, DollarSign, Scale, Smile, Zap } from 'lucide-react';

// Reusable Button Component
const PrimaryButton = ({ children, className = '' }) => (
  <button
    className={`bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${className}`}
  >
    {children}
  </button>
);

// Feature Card Component
const FeatureCard = ({ title, description, imageUrl }) => (
  <div className="relative bg-gray-800 rounded-xl p-6 shadow-2xl text-white border border-gray-700 hover:border-teal-500 transition-all duration-300 overflow-hidden min-h-[500px] flex flex-col">
    {imageUrl && (
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    )}
    <div className="relative z-10 flex flex-col justify-between h-full">
      <div className="mt-auto">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">{description}</p>
        <PrimaryButton className="w-full">Get Free AI Success Strategy</PrimaryButton>
      </div>
    </div>
  </div>
);

const benefits = [
  {
    iconClass: 'fa-lightbulb',
    title: 'Boost Efficiency',
    description: 'Automate up to 80% of routine customer inquiries'
  },
  {
    iconClass: 'fa-chart-line',
    title: 'Increase Sales',
    description: 'Convert leads with 24/7 availability and instant responses'
  },
  {
    iconClass: 'fa-dollar-sign',
    title: 'Reduce Costs',
    description: 'Lower customer service expenses by up to 30%'
  },
  {
    iconClass: 'fa-users',
    title: 'Enhance Customer Satisfaction',
    description: 'Provide instant, accurate responses to improve customer experience'
  },
  {
    iconClass: 'fa-expand',
    title: 'Scale With Ease',
    description: 'Handle thousands of conversations simultaneously without adding staff.'
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <main>
        {/* Solutions Section */}
        <section className="bg-gray-900 py-30 px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                <span className="text-teal-400">Solutions</span>
              </h2>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Empower your business with AI-tailored chatbot solutions that streamline communication,
                drive engagement, and deliver insights. Transform customer interactions into lasting
                relationships!
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section with Curved Background */}
        <section className="relative bg-[#8DEAE3] rounded-b-[90px] py-16 md:py-24 px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="/Images/Solutions.PNG"
                alt="AI Custom Chatbot Solutions"
                className="rounded-xl border-[6px] border-teal-500 shadow-lg w-full max-w-lg"
              />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-lg font-semibold text-teal-800 mb-3">
                AI Custom Chatbot Solutions:
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                Revolutionize Your <span className="text-black">Business Communication</span>
              </h1>
              <p className="text-gray-800 text-lg leading-relaxed mb-8">
                Welcome to the future of business communication. Our AI Custom Chatbot Solutions are
                designed to transform how you interact with customers, streamline operations, and drive
                growth. With cutting-edge AI and ML, we provide intelligent digital assistants tailored
                to your unique business needs.
              </p>
              <PrimaryButton>
                Get Your FREE AI Success Strategy
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-100 px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Discover Our Powerful AI Chatbot Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <FeatureCard
              title="24/7 Customer Support"
              description="Never miss an opportunity to engage with your customers. Our AI chatbots provide round-the-clock support, answering queries instantly and ensuring your business is always accessible."
              imageUrl="/Images/card1.jpg"
            />
            <FeatureCard
              title="Intelligent Lead Generation"
              description="Transform your website visitors into qualified leads. Our chatbots engage potential customers, qualify prospects, and seamlessly integrate with your CRM for efficient follow-ups."
              imageUrl="/Images/card2.jpg"
            />
            <FeatureCard
              title="Personalized User Experiences"
              description="Create memorable interactions that keep customers coming back. Our AI chatbots learn from each interaction, delivering personalized recommendations and support tailored to individual user preferences."
              imageUrl="/Images/card3.jpg"
            />
            <FeatureCard
              title="Seamless Multi-Channel Integration"
              description="Meet your customers where they are. Whether it's your website, Facebook Messenger, WhatsApp, or SMS, our chatbots provide a consistent experience across all platforms."
              imageUrl="/Images/card4.jpg"
            />
            <FeatureCard
              title="Automated Appointment Scheduling"
              description="Say goodbye to scheduling headaches. Our chatbots can manage your calendar, book appointments, and send reminders, freeing your team to focus on high-value tasks."
              imageUrl="/Images/card5.jpg"
            />
            <FeatureCard
              title="Real-Time Analytics and Insights"
              description="Make data-driven decisions with ease. Gain valuable insights into customer behavior, frequently asked questions, and operational efficiency through comprehensive analytics dashboards."
              imageUrl="/Images/card6.jpg"
            />
          </div>
        </section>

        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Benefits That Drive Business Growth
          </h2>
          <div className="w-full max-w-7xl bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 border border-gray-200">
                    <i className={`fa-solid ${benefit.iconClass} text-gray-800 text-4xl`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="py-16 md:py-24 bg-white px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex justify-center lg:justify-center">
              <img
                src="/Images/Team.PNG"
                alt="Customization"
                className="rounded-xl shadow-2xl w-full max-w-lg h-auto object-cover border-4 border-white"
              />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left flex justify-center lg:justify-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-teal-500 leading-tight">
                  Tailored Chatbot Solutions
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-teal-600 leading-tight">
                  Customization: Your Brand, Your Voice
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We understand that every business is unique. Our AI chatbots are fully customizable to match your brand voice, industry-specific needs, and business goals. From casual and friendly to professional and formal, we ensure your chatbot represents your brand perfectly.
                </p>
                <PrimaryButton className="bg-black text-white">
                  Free AI Success Strategy
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-32 rounded-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#E0FFFF] rounded-xl p-6 md:p-10">
              <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="relative z-10 w-full text-center md:w-1/2 md:text-left p-4 md:p-8">
                  <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-gray-900">
                    Ready to Transform Your <strong className="font-bold">Business Communication</strong>?
                  </h2>

                  <p className="mb-8 text-base text-gray-700 md:text-lg">
                    Don't just take our word for it. Schedule a free demo today and see firsthand how our AI Custom Chatbot Solutions can revolutionize your business operations, enhance customer experiences, and drive growth.
                  </p>
                  <button className="rounded-lg bg-[#4DD0E1] px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-[#26C6DA] focus:outline-none focus:ring-4 focus:ring-[#4DD0E1] focus:ring-opacity-50">
                    Get Free AI Success Strategy
                  </button>
                </div>

                <div className="relative mt-10 w-full md:mt-0 md:w-1/2 flex justify-center items-center p-4 md:p-8">
                  {/* Image placeholder */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default App;