"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    // Initial check
    checkMobile();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: "Services", href: "/Services" },
    { label: "Plans", href: "/Plans" },
    { label: "Documentation", href: "/Documentation" },
    { label: "Contact Us", href: "/Contacts" },
    { label: "About", href: "/About" },
  ];

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? "h-12 shadow-md" : "h-20"
        }`}
        style={{
          background: scrolled
            ? "linear-gradient(to right, #2648EF 0%, #252F8B 100%)"
            : "transparent",
        }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-full px-6">
          {/* Left Logo */}
          <div className="flex items-center space-x-2 transition-all duration-300">
            <Image
              src="/Robot/face.svg"
              alt="ChatSupplies Logo"
              width={scrolled ? 26 : 32}
              height={scrolled ? 26 : 32}
              className="rounded-md transition-all duration-300"
            />
            <span
              className={`text-white font-mont font-bold transition-all duration-300 ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              ChatSupplies
            </span>
          </div>

          {/* Center Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <button className="cursor-pointer text-white font-bold hover:text-gray-200 transition">
                  {item.label}
                </button>
              </Link>
            ))}
          </div>

          {/* Hamburger Menu - Only shown on mobile */}
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                          h-0.5 w-8 rounded-sm ${
                            mobileMenuOpen
                              ? "rotate-45 translate-y-1"
                              : "-translate-y-0.5"
                          }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                          h-0.5 w-8 rounded-sm my-1 ${
                            mobileMenuOpen ? "opacity-0" : "opacity-100"
                          }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                          h-0.5 w-8 rounded-sm ${
                            mobileMenuOpen
                              ? "-rotate-45 -translate-y-1"
                              : "translate-y-0.5"
                          }`}
              ></span>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Slider */}
      <div
        className={`md:hidden fixed top-0 right-0 w-64 text-white transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "linear-gradient(to bottom, #2648EF 0%, #252F8B 100%)",
          height: mobileMenuOpen ? "calc(100vh - 80px)" : "0",
          marginTop: scrolled ? "48px" : "80px",
          overflowY: "auto",
          zIndex: 40,
        }}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="text-white text-lg font-mont font-bold hover:text-gray-200 transition w-full text-left">
                {item.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay - Only shown when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
