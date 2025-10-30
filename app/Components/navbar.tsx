"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LoginPopup from "./Login";
import ProfileCard from "./profileCard"; // Import your ProfileCard component

// REVISED: SVG icon to closely match the uploaded image (outlined profile inside a circle).
// The stroke will be 'currentColor' which we set to white later.
const ProfileIconWithCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none" // No fill to prevent a background color inside the icon
    stroke="currentColor" // Use currentColor to inherit the desired color (white)
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Outer Circle (the border) */}
    <circle cx="12" cy="12" r="10" />
    {/* Inner Profile Head */}
    <circle cx="12" cy="10" r="3" />
    {/* Inner Profile Body (simplified) */}
    <path d="M17.941 17c-.5-1.1-1.3-2-2.3-2.6C14.6 13.7 13.3 13 12 13s-2.6.7-3.641 1.4c-1 .6-1.8 1.5-2.3 2.6" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false); // State for profile popup
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "" }); // Store user info

  // Check login status on component mount and when auth state changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
      
      // Get user info when logged in
      if (loggedIn) {
        const username = localStorage.getItem("username") || "";
        const userObject = localStorage.getItem("userObject");
        let email = "";
        
        if (userObject) {
          try {
            const user = JSON.parse(userObject);
            email = user.email || "";
          } catch (error) {
            console.error("Error parsing userObject:", error);
          }
        }
        
        setUserInfo({ name: username, email });
      }
    };

    // Check initial login status
    checkLoginStatus();

    // Listen for auth state changes from other components
    const handleAuthStateChange = () => {
      checkLoginStatus();
    };

    window.addEventListener('authStateChange', handleAuthStateChange);

    // Also check when storage changes (in case of multiple tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "isLoggedIn") {
        checkLoginStatus();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('authStateChange', handleAuthStateChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    // Correctly manages body overflow when any popup or menu is open
    if (mobileMenuOpen || showLoginPopup || showProfilePopup) {
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
  }, [mobileMenuOpen, showLoginPopup, showProfilePopup]); 

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Function to handle profile icon click - FIXED BEHAVIOR
  const handleProfileClick = () => {
    if (isLoggedIn) {
      setShowProfilePopup(true); // Opens ProfileCard if logged in
    } else {
      setShowLoginPopup(true); // Opens LoginPopup if not logged in
    }
  };

  const handlePlansClick = (e: React.MouseEvent, isMobile = false) => {
    if (isMobile) setMobileMenuOpen(false);
    if (window.location.pathname === "/") {
      e.preventDefault();
      const plansSection = document.getElementById("payment-plans");
      plansSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServicesClick = (e: React.MouseEvent, isMobile = false) => {
    if (isMobile) setMobileMenuOpen(false);
    if (window.location.pathname === "/") {
      e.preventDefault();
      const servicesSection = document.getElementById("services-section");
      servicesSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDashboardClick = () => {
    // Track dashboard access attempt
    const userObject = localStorage.getItem("userObject");
    const user = userObject ? JSON.parse(userObject) : null;

    // Log analytics event without sending tokens
    if (typeof window !== 'undefined' && (window as any).logAnalyticsEvent) {
      (window as any).logAnalyticsEvent('dashboard_access_attempt', {
        user_id: user?.id || 'unknown',
        user_role: user?.role || 'unknown',
        timestamp: new Date().toISOString()
      });
    }

    // Simply redirect to dashboard without sending tokens
    const dashboardUrl = `https://admin.chatsupplies.com/auth/login`;
    console.log("🚀 Opening dashboard");

    window.open(dashboardUrl, "_blank");
  };

  const navItems = [
    { label: "Services", href: "/" },
    { label: "Plans", href: "/" },
    { label: "Integration", href: "https://developer.chatsupplies.com/" },
    { label: "Contact Us", href: "/Contacts" },
    { label: "About us", href: "/About" },
  ];

  const opensInNewTab = (label: string) =>
    label === "Integration";

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? "h-12 shadow-md backdrop-blur-md bg-blue-600/70" : "h-20"
        }`}
        style={{
          background: scrolled ? "rgba(0, 0, 0, 0.4)" : "transparent",
        }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center h-full px-6">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 transition-all duration-300 mr-8"
          >
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
          </Link>

          {/* 🛠️ FIX: Increased space-x- from 4 to 8 to separate the jammed links */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            
            {/* Nav Links Group */}
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                target={opensInNewTab(item.label) ? "_blank" : undefined}
                rel={
                  opensInNewTab(item.label)
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <button
                  className="cursor-pointer text-white font-bold px-1 py-2 hover:bg-white/10 rounded-md transition"
                  onClick={(e) => {
                    if (item.label === "Plans") handlePlansClick(e);
                    else if (item.label === "Services") handleServicesClick(e);
                  }}
                >
                  {item.label}
                </button>
              </Link>
            ))}

            {/* Dashboard Button (Text only) - Logged in view */}
            {isLoggedIn && (
              <button
                onClick={handleDashboardClick}
                // Removed px-4 py-2 hover:bg-gray-100 to make it look like the screenshot but kept it functional
                className="cursor-pointer font-bold transition flex items-center bg-white text-blue-600 px-4 py-2 hover:bg-gray-100 rounded-full" 
              >
                <span>Dashboard</span>
              </button>
            )}
            
            {/* Profile/Login Icon (Always visible on desktop) */}
            <button
              onClick={handleProfileClick} // Calls handler that checks isLoggedIn
              className="cursor-pointer font-bold transition flex items-center justify-between text-white px-3 py-2 hover:bg-white/10 rounded-full space-x-2"
            >
              <ProfileIconWithCircle className="h-9 w-9" />
              {/* Added 'Login' text for the logged-out state for clarity */}
              {!isLoggedIn && <span className="text-white">Login</span>}
            </button>
            
          </div>
          
          {/* Hamburger Menu (remains far right) */}
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer ml-auto"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                h-0.5 w-8 rounded-sm ${
                  mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
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

      {/* Mobile Menu */}
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
          {/* Profile Button in Mobile - Opens profile card or login popup */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleProfileClick(); // Use the unified handler
            }}
            className="cursor-pointer text-white font-bold shadow hover:bg-white/10 transition w-full text-left flex items-center space-x-2 px-3 py-2 rounded-lg"
          >
            <ProfileIconWithCircle className="h-6 w-6" />
            <span>{isLoggedIn ? "Profile" : "Login"}</span>
          </button>

          {/* Conditional Dashboard button on mobile */}
          {isLoggedIn && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleDashboardClick();
              }}
              className="cursor-pointer bg-white text-blue-600 font-bold shadow hover:bg-gray-100 transition w-full text-left flex items-center space-x-2 px-3 py-2 rounded-lg"
            >
              <span>Dashboard</span>
            </button>
          )}

          {/* Other Nav Buttons */}
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target={opensInNewTab(item.label) ? "_blank" : undefined}
              rel={
                opensInNewTab(item.label)
                  ? "noopener noreferrer"
                  : undefined
              }
              onClick={(e) => {
                if (item.label === "Plans") handlePlansClick(e, true);
                else if (item.label === "Services") handleServicesClick(e, true);
                else setMobileMenuOpen(false);
              }}
            >
              <button className="text-white cursor-pointer text-lg font-mont font-bold hover:text-gray-200 transition w-full text-left">
                {item.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* 👇 Login Popup appears here (without 'onClose' to avoid previous TS error) */}
      {showLoginPopup && <LoginPopup />} 

      {/* 👇 Profile Popup appears here (Correctly shows the ProfileCard) */}
      {showProfilePopup && (
        <>
          {/* Backdrop for profile popup */}
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={() => setShowProfilePopup(false)}
          >
            {/* Profile Card */}
            <div onClick={(e) => e.stopPropagation()}>
              <ProfileCard
                email={userInfo.email}
                name={userInfo.name}
                onClose={() => setShowProfilePopup(false)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}