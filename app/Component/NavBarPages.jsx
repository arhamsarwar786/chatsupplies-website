"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './NavBarPages.module.css';

const Header = () => {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push('/Contacts'); // 👈 Capitalized to match folder name exactly
    };

    return (
        <header className={styles.header}>
            {/* Logo with Link */}
            <div className={styles.headerLogo}>
                <Link href="/" className={styles.headerLogoLink}>
                    AI Chat Supplies
                </Link>
            </div>

            {/* Main Navigation */}
            <nav className={styles.headerNav}>
                <Link href="/" className={styles.headerNavLink}>
                    Home
                </Link>
                <Link href="/Products" className={styles.headerNavLink}>
                    Products
                </Link>
                <Link href="/About" className={styles.headerNavLink}>
                    About
                </Link>
                <Link href="/Contacts" className={styles.headerNavLink}>
                    Contact
                </Link>
            </nav>

            {/* CTA Button */}
            <button
                className={styles.headerButton}
                onClick={handleGetStarted}
                aria-label="Get Started"
            >
                Get Started
            </button>

            {/* Mobile Menu Icon */}
            <div className={styles.mobileMenuIcon} aria-label="Menu">
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </header>
    );
};

export default Header;
