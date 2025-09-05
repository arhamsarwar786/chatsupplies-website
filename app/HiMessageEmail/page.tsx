"use client";
import React from "react";

const icons = [
  {
    label: "Facebook",
    svgPath:
      "/SocialIcons/fb.svg",
  },
  {
    label: "LinkedIn",
    svgPath:
      "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/main/assets/linkedin-in.svg",
  },
  {
    label: "Twitter",
    svgPath:
      "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/fe0313790bc584b9ef066fda32960afd7642c023/assets/x-twitter.svg",
  },
  {
    label: "Instagram",
    svgPath:
      "https://raw.githubusercontent.com/sultan-arshi/assets-chat-supplies/fe0313790bc584b9ef066fda32960afd7642c023/assets/instagram.svg",
  },
  {
    label: "YouTube",
    svgPath:
      "/SocialIcons/youtube.svg",
  },
];

export default function HiMessageEmail() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      {/* Outer gradient wrapper */}
      <div className="relative pt-[68px] pb-[68px] px-[50px] bg-gradient-to-r from-[#2648EF] to-[#252F8B] shadow-5xl flex flex-col lg:flex-row items-start gap-6">

        {/* Main Card */}
        <div className="relative z-10 bg-blue-50 text-center shadow-2xl h-[720px] w-[550px] flex flex-col justify-between">

          {/* Top Section */}
          <div className="p-12">
            <h1 className="text-5xl font-mont font-extrabold text-blue-900 mb-4">
              Hey, AwesomeCo!
            </h1>
            <p className="text-xl text-blue-700 font-mont mb-8">
              Welcome to ChatSupplies. <br /> We are so happy to have you here!
            </p>

            {/* Illustration */}
            <div className="flex justify-center mb-8">
              <img
                src="/WelcomeEmail/WelcomeEmail.jpg"
                alt="Illustration"
                className="w-full max-w-[300px] object-contain"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="px-12">
            {/* CTA */}
            <button className="bg-gradient-to-r from-[#2648EF] to-[#252F8B] hover:opacity-90 text-white font-bold py-4 px-10 rounded-lg text-lg shadow-md transition">
              Go to your account
            </button>

            {/* Social Icons */}
            <div className="mt-6">
              <div className="flex justify-center gap-4 flex-wrap">
                {icons.map((icon, idx) => (
                  <a key={idx} href="#" aria-label={icon.label}>
                    <div className="w-[48px] h-[48px] border border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                      <img
                        src={icon.svgPath}
                        alt={icon.label}
                        width={24}
                        height={24}
                        className="block"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div
            style={{
              fontFamily: "Mont, sans-serif",
              width: "100%",
              backgroundColor: "black",
              color: "white",
              padding: "24px",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              marginTop: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "Mont, sans-serif",
                fontSize: "14px",
                textAlign: "center",
                margin: 0,
              }}
            >
              You're receiving this email because you are a subscriber of
              NextMockup.com
            </p>
            <p
              style={{
                fontFamily: "Mont, sans-serif",
                fontSize: "14px",
                textAlign: "center",
                marginTop: "8px",
                margin: "8px 0 0",
              }}
            >
              If you feel you received it by mistake or wish to unsubscribe.{" "}
              <a
                href="#"
                style={{
                  fontFamily: "Mont, sans-serif",
                  textDecoration: "underline",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "white",
                }}
              >
                click here
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
