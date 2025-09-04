"use client";
import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const icons = [
  { label: "Facebook", svgPath: "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/fe0313790bc584b9ef066fda32960afd7642c023/assets/facebook-f.svg" },
  { label: "LinkedIn", svgPath: "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/main/assets/linkedin-in.svg" },
  { label: "Twitter", svgPath: "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/fe0313790bc584b9ef066fda32960afd7642c023/assets/x-twitter.svg" },
  { label: "Instagram", svgPath: "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/fe0313790bc584b9ef066fda32960afd7642c023/assets/instagram.svg" },
  { label: "YouTube", svgPath: "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/fe0313790bc584b9ef066fda32960afd7642c023/assets/youtube.svg" },
];

const WelcomeCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6 scroll-smooth">
      {/* Outer gradient wrapper */}
      <div className="relative pt-[30px] pr-[50px] pl-[50px] bg-gradient-to-r from-[#2648EF] to-[#252F8B] shadow-5xl flex flex-col lg:flex-row">

        {/* Card */}
        <div className="relative z-10 bg-white p-6 pt-6 text-center shadow-2xl h-[725px] w-[480px] flex flex-col justify-between rounded-xl">

          {/* Top content */}
          <div>
            <h2 className="text-2xl font-mont font-bold text-blue-900">Hey, AwesomeCo!</h2>
            <p className="text-base font-mont text-blue-700 mt-1">
              Welcome to ChatSupplies. <br /> We are so happy to have you here!
            </p>
          </div>

          {/* Illustration */}
          <div className="flex justify-center mt-4 mb-2">
            <img src="/WelcomeEmail/WelcomeEmail.jpg" alt="Illustration" className="w-44 object-contain" />
          </div>

          {/* Button */}
          <div className="flex justify-center mb-4">
            <button className="w-[200px] bg-gradient-to-r from-[#2648EF] to-[#252F8B] hover:opacity-90 text-white font-mont font-bold py-2 rounded-md text-base mt-3 shadow-md transition">
              Go to your account
            </button>
          </div>

          {/* Support Section */}
          <div className="mt-auto">
            <div className="w-12 h-12 rounded-full bg-gray-100 font-mont mx-auto mb-2 flex items-center justify-center">
              <span className="text-lg">❤️</span>
            </div>
            <p className="text-xl font-mont font-bold text-blue-900">24/7/365</p>
            <h3 className="font-bold font-mont text-blue-900 text-xl mt-1">Enterprise-grade Support</h3>
            <p className="text-xs font-mont text-gray-700 mt-1 px-3">
              Know that you are in good hands. <br /> We always have your back every day of the week, any time.
            </p>

            {/* Contact Icons */}
            <div className="flex justify-around mt-2">
              <div className="flex flex-col items-center cursor-pointer">
                <Phone className="w-4 h-4 text-blue-700 mb-1" />
                <p className="text-xs font-mont text-blue-700">Phone</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <Mail className="w-4 h-4 text-blue-700 mb-1" />
                <p className="text-xs font-mont text-blue-700">Email</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <MessageCircle className="w-4 h-4 text-blue-700 mb-1" />
                <p className="text-xs font-mont text-blue-700">Chat</p>
              </div>
            </div>

            {/* Social Icons */}
            <footer className="mt-2">
              <div className="flex justify-center gap-3 flex-wrap">
                {icons.map((icon, idx) => (
                  <a key={idx} href="#" aria-label={icon.label}>
                    <div className="w-[42px] h-[42px] border border-black rounded-full flex items-center justify-center">
                      <img src={icon.svgPath} alt={icon.label} width={20} height={20} className="block" />
                    </div>
                  </a>
                ))}
              </div>
            </footer>

            {/* Custom Black Footer */}
            <div className="mt-4 w-[480px] bg-black text-white rounded-b-lg flex flex-col items-center justify-center p-6 ml-[-24px]">
              <p className="text-center text-sm m-0">
                You're receiving this email because you are a subscriber of NextMockup.com
              </p>
              <p className="text-center text-sm mt-2">
                If you feel you received it by mistake or wish to unsubscribe.{" "}
                <a className="underline font-bold text-white text-base" href="#">click here</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
