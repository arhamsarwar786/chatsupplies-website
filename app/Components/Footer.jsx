"use client"
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

// ChatSupplies logo icon
import { faComments } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerBrand}>
                        <div className={styles.logoName}>
                            <div className={styles.chatSuppliesLogoWrapper}>
                                <FontAwesomeIcon
                                    icon={faComments}
                                    size="lg"
                                    style={{ color: 'white' }}
                                />
                            </div>
                            <span>ChatSupplies</span>
                        </div>
                        <p>Your trusted partner for premium<br />chat solutions and customer<br />engagement tools.</p>
                        <div className={styles.socialIcons}>
                            <Link href="#" passHref legacyBehavior>
                                <FontAwesomeIcon icon={faFacebookF} size="sm" />
                            </Link>
                            <Link href="#" passHref legacyBehavior>
                                <FontAwesomeIcon icon={faTwitter} size="sm" />
                            </Link>
                            <Link href="#" passHref legacyBehavior>
                                <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
                            </Link>
                            <Link href="#" passHref legacyBehavior>
                                <FontAwesomeIcon icon={faInstagram} size="sm" />
                            </Link>
                        </div>
                    </div>

                    <div className={styles.footerLinks}>
                        <div className={styles.linkGroup}>
                            <h4>Products</h4>
                            <ul>
                                <li><Link href="/Products">AI Chatbots</Link></li>
                                <li><Link href="#">Live Chat</Link></li>
                                <li><Link href="#">Analytics</Link></li>
                                <li><Link href="#">Integrations</Link></li>
                            </ul>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4>Support</h4>
                            <ul>
                                <li><Link href="#">Help Center</Link></li>
                                <li><Link href="#">Documentation</Link></li>
                                <li><Link href="#">API Reference</Link></li>
                                <li><Link href="/Contacts">Contact Us</Link></li> {/* ✅ Route fixed */}
                            </ul>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4>Company</h4>
                            <ul>
                                <li><Link href="/About">About Us</Link></li> {/* ✅ Route fixed */}
                                <li><Link href="#">Careers</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; 2024 ChatSupplies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
