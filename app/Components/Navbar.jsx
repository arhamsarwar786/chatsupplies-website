'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faBars, faXmark, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.brand}>
          <div className={styles.chatSuppliesLogoWrapper}>
            <FontAwesomeIcon icon={faComments} size="lg" style={{ color: 'white' }} />
          </div>
          <span className={styles.logoText}>ChatSupplies</span>
        </div>

        {/* Desktop Navigation Links */}
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
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </button>
          <button className={`${styles.iconButton} ${styles.cartButton}`}>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
            <span className={styles.badge}>3</span>
          </button>
          <button className={styles.signInButton} onClick={handleButtonClick}>
            {getButtonLabel()}
          </button>
          <button 
            className={styles.hamburgerButton} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay and Sidebar */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={toggleMobileMenu}></div>
      )}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <div className={styles.brand}>
            <div className={styles.chatSuppliesLogoWrapper}>
              <FontAwesomeIcon icon={faComments} size="lg" style={{ color: 'white' }} />
            </div>
            <span className={styles.logoText}>ChatSupplies</span>
          </div>
          <button className={styles.closeButton} onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <nav className={styles.mobileNavLinks}>
          <a href="/" onClick={toggleMobileMenu}>Home</a>
          <Link href="Products" onClick={toggleMobileMenu}>Products</Link>
          <a href="#" onClick={toggleMobileMenu}>Solutions</a>
          <a href="#" onClick={toggleMobileMenu}>Pricing</a>
          <Link href="Contacts" onClick={toggleMobileMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;