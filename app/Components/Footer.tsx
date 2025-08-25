"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full relative z-50 transition-all duration-300 min-h-60"
      style={{
        background: "linear-gradient(to right, #2648EF 0%, #252F8B 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col h-full px-4 sm:px-6 py-8">
        {/* Divide into 3 equal horizontal parts */}
        <div className="flex flex-col lg:flex-row w-full justify-between">

          {/* Logo Section (33%) */}
          <div className="w-full lg:w-1/3 flex flex-col items-start mb-8 lg:mb-0">
            <div className="flex items-center">
              <Image
                src="/Robot/face.svg"
                alt="ChatSupplies Logo"
                width={50}
                height={50}
                className="rounded-md"
              />
              <span className="text-white font-mont font-bold text-xl sm:text-3xl ml-2">
                ChatSupplies
              </span>
            </div>
          </div>

          {/* Buttons Section (33%) */}
          <div className="w-full lg:w-1/3 flex flex-col md:flex-row justify-center gap-8 mb-8 lg:mb-0">
            {/* First column - 3 buttons */}
            <div className="flex flex-col gap-3 lg:gap-4 md:gap-6">
              {["Privacy Policy", "Term and Conditions", "Packages"].map(
                (item, idx) => (
                  <Link
                    key={idx}
                    href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  >
                    <button className="cursor-pointer text-white text-sm sm:text-base font-mont font-semibold hover:text-gray-200 transition text-left">
                      {item}
                    </button>
                  </Link>
                )
              )}
            </div>

            {/* Second column - 3 buttons */}
            <div className="flex flex-col gap-3 lg:gap-4 md:gap-6">
              {["Documentation", "Contact us", "Help Center"].map(
                (item, idx) => (
                  <Link
                    key={idx}
                    href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  >
                    <button className="cursor-pointer text-white text-sm sm:text-base font-mont font-semibold hover:text-gray-200 transition text-left">
                      {item}
                    </button>
                  </Link>
                )
              )}
            </div>

            {/* Third column - 1 button */}
            <div className="flex flex-col gap-3 lg:gap-4 md:gap-6">
              {["About us"].map((item, idx) => (
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

         {/* Social Icons Section (33%) */}
<div className="w-full lg:w-1/3 flex flex-col items-center lg:items-center">
  {/* Heading above social icons */}
  <h2 className="text-white font-mont font-bold text-2xl mb-4 mr-25">Follow us</h2>

  {/* Social Media Icons shifted left */}
  <div className="flex justify-start items-center gap-6 mb-6 w-full lg:w-auto">
    <Link href="https://facebook.com" target="_blank">
      <img
        src="/SocialMedia/facebook-f.svg"
        alt="Facebook"
        className="w-6 h-6 cursor-pointer hover:opacity-80 transition filter invert brightness-0"
      />
    </Link>
    <Link href="https://twitter.com" target="_blank">
      <img
        src="/SocialMedia/x-twitter.svg"
        alt="Twitter"
        className="w-6 h-6 cursor-pointer hover:opacity-80 transition filter invert brightness-0"
      />
    </Link>
    <Link href="https://linkedin.com" target="_blank">
      <img
        src="/SocialMedia/linkedin-in.svg"
        alt="LinkedIn"
        className="w-6 h-6 cursor-pointer hover:opacity-80 transition filter invert brightness-0"
      />
    </Link>
    <Link href="https://instagram.com" target="_blank">
      <img
        src="/SocialMedia/instagram.svg"
        alt="Instagram"
        className="w-6 h-6 cursor-pointer hover:opacity-80 transition filter invert brightness-0"
      />
    </Link>
    <Link href="https://youtube.com" target="_blank">
      <img
        src="/SocialMedia/youtube.svg"
        alt="YouTube"
        className="w-6 h-6 cursor-pointer hover:opacity-80 transition filter invert brightness-0"
      />
    </Link>
  </div>

  {/* Contact Us Section */}
  <div className="text-center lg:text-right">
    <h2 className="text-white font-mont font-bold text-2xl mb-2 mr-17">Contact us</h2>
    <p className="text-white font-mont text-base mr-40">Xyz</p>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
}