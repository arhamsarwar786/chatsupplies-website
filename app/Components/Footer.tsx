"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/app/lib/Constant";

export default function Footer() {
  return (
    <footer
      className="w-full relative z-30 transition-all duration-300 min-h-48"
      style={{
        background:
          "linear-gradient(to right, rgba(38, 72, 239, 1) 0%, rgba(37, 47, 139, 1) 100%), rgba(0, 0, 0, 0.2)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col h-full px-4 sm:px-6 py-8">
        {/* Divide into 3 horizontal parts with adjusted widths */}
        <div className="flex flex-col lg:flex-row w-full justify-between">
          {/* Logo Section (25%) */}
          <div className="w-full lg:w-1/4 flex flex-col items-start mb-8 lg:mb-0">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/Robot/FooterLogo.svg"
                  alt="ChatSupplies Logo"
                  width={250}
                  height={250}
                  className="rounded-md transition-transform duration-300 hover:scale-105 hover:opacity-90 cursor-pointer"
                />
              </Link>
            </div>

            {/* Paragraph under the logo */}
            <p className="text-white font-mont text-sm sm:text-base mt-3 max-w-xs">
              Your trusted partner for premium chat solutions and customer
              engagement tools.
            </p>
          </div>

          {/* Buttons Section (50%) */}
          <div className="w-full lg:w-2/4 flex flex-col justify-start items-start gap-2 lg:flex-row lg:justify-center lg:items-start lg:gap-15 mb-6 lg:mb-0 ">
            {/* First column - 3 buttons */}
            <div className="flex flex-col gap-2 lg:gap-4 md:gap-3">
              {[
                { label: "Privacy Policy", href: "/PrivacyPolicy" },
                { label: "Term and Conditions", href: "/Terms&Conditions" },
                { label: "Contact us", href: "Contacts" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href}>
                  <button className="cursor-pointer text-white text-sm sm:text-base font-mont font-semibold hover:text-gray-200 transition text-left">
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>

            {/* Second column */}
            <div className="flex flex-col gap-2 lg:gap-4 md:gap-3 mt-1">
              {["Documentation", "About us", ""].map((item, idx) => (
                <Link
                  key={idx}
                  href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                >
                  <button className="cursor-pointer text-white text-sm sm:text-base font-mont font-semibold hover:text-gray-200 transition text-left">
                    {item}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Icons Section (25%) */}
          <div className="w-full lg:w-1/4 flex flex-col items-start sm:items-start md:items-start -ml-4">
            <h2 className="text-white font-mont font-bold text-lg mb-4 text-left ml-3">
              Follow us
            </h2>

            {/* Social Media Icons */}
            <div className="flex justify-start mb-6 -mt-5 w-auto">
              <Link
                href="https://www.facebook.com/people/ChatSupplies/61580925337552/"
                target="_blank"
              >
                <div className="flex items-center justify-center w-10 h-10 hover:bg-white/10 transition">
                  <img
                    src="/SocialMedia/facebook-f.svg"
                    alt="Facebook"
                    className="w-4 h-4 cursor-pointer filter invert brightness-0"
                  />
                </div>
              </Link>
              <Link href="https://x.com/chatsupplies" target="_blank">
                <div className="flex items-center justify-center w-10 h-10 hover:bg-white/10 transition">
                  <img
                    src="/SocialIcons/x-twitter.svg"
                    alt="Twitter"
                    className="w-4 h-4 cursor-pointer filter invert brightness-0"
                  />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/108532655/admin/dashboard/"
                target="_blank"
              >
                <div className="flex items-center justify-center w-10 h-10 hover:bg-white/10 transition">
                  <img
                    src="/SocialIcons/linkedin-in.svg"
                    alt="LinkedIn"
                    className="w-4 h-4 cursor-pointer filter invert brightness-0"
                  />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/chat_supplies/?fbclid=IwY2xjawNQuGpleHRuA2FlbQIxMQBicmlkETFnaEk4YnQwdHJtdHhoa0xTAR4lC7_bFJEC2XqEec71Q0p2WRWQYAdUdpGEaNq3eXIOCrEGd66KNIvQTFGggg_aem_NooHTqRvWm0hRQR_iNVNEg"
                target="_blank"
              >
                <div className="flex items-center justify-center w-10 h-10 hover:bg-white/10 transition">
                  <img
                    src="/SocialIcons/instagram.svg"
                    alt="Instagram"
                    className="w-4 h-4 cursor-pointer filter invert brightness-0"
                  />
                </div>
              </Link>
              <Link href="http://www.youtube.com/@chatsupplies" target="_blank">
                <div className="flex items-center justify-center w-10 h-10 hover:bg-white/10 transition">
                  <img
                    src="/SocialMedia/youtube.svg"
                    alt="YouTube"
                    className="w-4 h-4 cursor-pointer filter invert brightness-0"
                  />
                </div>
              </Link>
            </div>

            {/* Contact Us Section */}
            <div className="text-left">
              <h2 className="text-white font-mont font-bold text-lg mb-2 -mt-6 ml-3">
                Contact us
              </h2>
              <p className="text-white font-mont text-base -mt-1 ml-4 space-y-1">
                {/* Phone (clickable to open dialer) */}
                <a
                  href={`tel:${CONTACT_INFO.PHONE}`}
                  className="block hover:underline"
                >
                  {CONTACT_INFO.PHONE}
                </a>

                {/* Email (clickable to open mail app) */}
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
      </div>
    </footer>
  );
}
