// components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faBars,
  faXmark,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ServicesDropdown from './ServicesDropdown'; // Import the new ServicesDropdown component

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getButtonLabel = () => (pathname === '/' ? 'Sign In' : 'Get Started');
  const getButtonTarget = () => (pathname === '/' ? '/SignIn' : '/Contacts');

  const handleButtonClick = () => {
    router.push(getButtonTarget());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm py-3 z-[1000]">
      {/* Adjusted horizontal padding for very small screens to px-1, then px-2 for xs, px-4 for sm and up */}
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-1 xs:px-2 sm:px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-1 xs:gap-2 sm:gap-3"> {/* Reduced gap for smaller screens */}
          <div className="bg-indigo-600 w-[28px] h-[28px] xs:w-[32px] xs:h-[32px] sm:w-[38px] sm:h-[38px] rounded-lg flex items-center justify-center mr-[1px] xs:mr-[2px]"> {/* Even smaller logo for tiny screens */}
            <FontAwesomeIcon icon={faComments} className="text-white text-sm xs:text-base sm:text-lg" /> {/* Adjusted icon size */}
          </div>
          {/* Reduced font size for very small screens */}
          <span className="text-sm xs:text-base sm:text-[1.55rem] font-extrabold text-gray-800 whitespace-nowrap">ChatSupplies</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-[2.2rem]">
          <a href="/" className="text-gray-600 font-semibold text-base hover:text-indigo-600">Home</a>
          <Link href="/Products" className="text-gray-600 font-semibold text-base hover:text-indigo-600">Products</Link>
          <a href="/Solutions" className="text-gray-600 font-semibold text-base hover:text-indigo-600">Solutions</a>

          {/* Services link now uses the imported ServicesDropdown component */}
          <ServicesDropdown />

          <Link href="/Contacts" className="text-gray-600 font-semibold text-base hover:text-indigo-600">Contact</Link>
        </nav>

        {/* Actions - Further decreased spacing for extra small screens */}
        <div className="flex items-center gap-x-0.5 xs:gap-x-1 sm:gap-x-2 md:gap-x-4"> {/* Tighter gap for xs, then sm, default for md */}
          {/* Search and Add to Cart Icons - Visible on all screens, but grouped for mobile */}
          <div className="flex items-center gap-x-0 xs:gap-x-0.5 sm:gap-x-1"> {/* Even tighter gap for mobile icons */}
            <button className="hover:text-indigo-600 hover:bg-gray-100 p-1 xs:p-1.5 sm:p-2 rounded-full transition-colors text-gray-600"> {/* Smaller padding for icons */}
              <FontAwesomeIcon icon={faSearch} className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" /> {/* Smaller icon size for xs */}
            </button>
            <button className="hover:text-indigo-600 hover:bg-gray-100 p-1 xs:p-1.5 sm:p-2 rounded-full transition-colors text-gray-600 relative"> {/* Smaller padding for icons */}
              <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" /> {/* Smaller icon size for xs */}
              <span className="absolute top-[-3px] right-[-1px] bg-red-500 text-white text-[0.5rem] xs:text-[0.6rem] sm:text-xs font-bold rounded-full h-[0.9rem] w-[0.9rem] xs:h-[1rem] xs:w-[1rem] sm:h-[1.1rem] sm:w-[1.1rem] flex items-center justify-center border border-white">3</span> {/* Smaller badge for xs */}
            </button>
          </div>

          {/* Main Action Button */}
          <button
            onClick={handleButtonClick}
            className="bg-indigo-600 text-white px-2 py-[0.5rem] xs:px-3 xs:py-[0.6rem] sm:px-4 sm:py-[0.7rem] rounded-md font-semibold text-[0.65rem] xs:text-xs sm:text-sm hover:bg-indigo-700 transition whitespace-nowrap min-w-[100px]"
          >
            {getButtonLabel()}
          </button>


          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="ml-0.5 xs:ml-1 p-1 xs:p-1.5 sm:p-2 md:hidden text-gray-600" // Adjusted margin and padding for mobile
          >
            <FontAwesomeIcon icon={faBars} className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" /> {/* Smaller icon size for xs */}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[80%] max-w-[300px] h-full bg-white shadow-md z-[1000] p-6 flex flex-col transform transition-transform duration-300 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 w-[38px] h-[38px] rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faComments} size="lg" className="text-white" />
            </div>
            <span className="text-[1.55rem] font-extrabold text-gray-800">ChatSupplies</span>
          </div>
          <button onClick={toggleMobileMenu} className="text-[1.5rem] text-gray-600">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          <a href="/" className="text-gray-800 font-semibold text-base hover:text-indigo-600" onClick={toggleMobileMenu}>Home</a>
          <Link href="/Products" className="text-gray-800 font-semibold text-base hover:text-indigo-600" onClick={toggleMobileMenu}>Products</Link>
          <a href="/Solutions" className="text-gray-800 font-semibold text-base hover:text-indigo-600" onClick={toggleMobileMenu}>Solutions</a>
          <a href="/services" className="text-gray-800 font-semibold text-base hover:text-indigo-600" onClick={toggleMobileMenu}>Services</a>
          <Link href="/Contacts" className="text-gray-800 font-semibold text-base hover:text-indigo-600" onClick={toggleMobileMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
