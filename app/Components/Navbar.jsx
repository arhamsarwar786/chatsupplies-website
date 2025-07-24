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
      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3 ml-[18px]">
          {/* Extra spacing on mobile screens */}
          <div className="block md:hidden mr-2">
            <button className="hover:text-indigo-600 hover:bg-gray-100 p-2 rounded-full transition-colors text-gray-600">
              <FontAwesomeIcon icon={faSearch} className="h-6 w-6" />
            </button>
          </div>
          <div className="bg-indigo-600 w-[38px] h-[38px] rounded-lg flex items-center justify-center mr-[2px]">
            <FontAwesomeIcon icon={faComments} size="lg" className="text-white" />
          </div>
          <span className="text-[1.55rem] font-extrabold text-gray-800">ChatSupplies</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-[2.2rem]">
          <a href="/" className="text-gray-600 font-semibold text-base hover:text-indigo-600">Home</a>
          <Link href="/Products" className="text-gray-600 font-semibold text-base hover:text-indigo-600">Products</Link>
          <a href="#" className="text-gray-600 font-semibold text-base hover:text-indigo-600">Solutions</a>
          <a href="#" className="text-gray-600 font-semibold text-base hover:text-indigo-600">Pricing</a>
          <Link href="/Contacts" className="text-gray-600 font-semibold text-base hover:text-indigo-600">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-2">
          <button className="hidden md:block hover:text-indigo-600 hover:bg-gray-100 p-2 rounded-full transition-colors text-gray-600">
            <FontAwesomeIcon icon={faSearch} className="h-6 w-6" />
          </button>
          <button className="hover:text-indigo-600 hover:bg-gray-100 p-2 rounded-full transition-colors text-gray-600 relative">
            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
            <span className="absolute top-[-6px] right-[-2px] bg-red-500 text-white text-xs font-bold rounded-full h-[1.1rem] w-[1.1rem] flex items-center justify-center border border-white">3</span>
          </button>
          <button
            onClick={handleButtonClick}
            className="bg-indigo-600 text-white px-5 py-[0.7rem] rounded-md font-semibold text-base hover:bg-indigo-700 transition"
          >
            {getButtonLabel()}
          </button>
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="ml-2 p-2 md:hidden text-gray-600"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
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
        className={`fixed top-0 right-0 w-[80%] max-w-[300px] h-full bg-white shadow-md z-[1000] p-6 flex flex-col transform transition-transform duration-300 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
          <a href="#" className="text-gray-800 font-semibold text-base hover:text-indigo-600" onClick={toggleMobileMenu}>Solutions</a>
          <a href="#" className="text-gray-800 font-semibold text-base hover:text-indigo-600" onClick={toggleMobileMenu}>Pricing</a>
          <Link href="/Contacts" className="text-gray-800 font-semibold text-base hover:text-indigo-600" onClick={toggleMobileMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
