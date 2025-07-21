'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons'; 
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const getButtonLabel = () => (pathname === '/' ? 'Sign In' : 'Get Started');

  const getButtonTarget = () => (pathname === '/' ? '/SignIn' : '/Contacts');

  const handleButtonClick = () => {
    router.push(getButtonTarget());
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.brand}>
          <div className={styles.chatSuppliesLogoWrapper}>
            <FontAwesomeIcon
              icon={faComments}
              size="lg"
              style={{ color: 'white' }}
            />
          </div>
          <span className={styles.logoText}>ChatSupplies</span>
        </div>

        {/* Navigation Links */}
        <nav className={styles.navLinks}>
          <a href="/">Home</a>
          <Link href="Products">Products</Link>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <Link href="Contacts">Contact</Link>
        </nav>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button className={styles.iconButton}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button className={`${styles.iconButton} ${styles.cartButton}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className={styles.badge}>3</span>
          </button>

          {/* Conditionally Rendered Button */}
          <button
            className={styles.signInButton}
            onClick={handleButtonClick}
          >
            {getButtonLabel()}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
