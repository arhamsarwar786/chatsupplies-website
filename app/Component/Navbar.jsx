import React from 'react';
import styles from './Navbar.module.css';
// import Image from 'next/image'; // Remove or comment out if not used elsewhere in Navbar

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons'; // For the chat supplies logo icon

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.brand}>
          <div className={styles.chatSuppliesLogoWrapper}>
            <FontAwesomeIcon
              icon={faComments} // The two-speech-bubble icon
              size="lg" // Adjust this size for the bubbles within the square
              style={{ color: 'white' }} // Color of the bubbles
            />
          </div>
          <span className={styles.logoText}>ChatSupplies</span>
        </div>

        {/* Links */}
        <nav className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>

        {/* Right-side actions */}
        <div className={styles.actions}>
          {/* Search Icon - Consider replacing with Font Awesome for consistency */}
          <button className={styles.iconButton}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Cart Icon with Badge - Consider replacing with Font Awesome for consistency */}
          <button className={`${styles.iconButton} ${styles.cartButton}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className={styles.badge}>3</span>
          </button>

          {/* Sign In Button */}
          <button className={styles.signInButton}>Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;