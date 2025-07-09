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
} from '@fortawesome/free-brands-svg-icons'; // For social brand icons

// Import the icon for your ChatSupplies logo (faComments for two speech bubbles)
import { faComments } from '@fortawesome/free-solid-svg-icons'; // For the chat supplies logo icon

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerBrand}>
                        <div className={styles.logoName}>
                            {/* Wrap the Font Awesome icon in a div for the background */}
                            <div className={styles.chatSuppliesLogoWrapper}>
                                <FontAwesomeIcon
                                    icon={faComments} // The two-speech-bubble icon
                                    size="lg" // Adjust this size for the bubbles within the square
                                    // The color of the icon itself (the bubbles) should be white
                                    style={{ color: 'white' }}
                                />
                            </div>
                            <span>ChatSupplies</span>
                        </div>
                        <p>Your trusted partner for premium<br/> chat solutions and customer<br/> engagement tools.</p>
                        <div className={styles.socialIcons}>
                            <Link href="#" passHref>
                                <FontAwesomeIcon icon={faFacebookF} size="sm" />
                            </Link>
                            <Link href="#" passHref>
                                <FontAwesomeIcon icon={faTwitter} size="sm" />
                            </Link>
                            <Link href="#" passHref>
                                <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
                            </Link>
                            <Link href="#" passHref>
                                <FontAwesomeIcon icon={faInstagram} size="sm" />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.footerLinks}>
                        <div className={styles.linkGroup}>
                            <h4>Products</h4>
                            <ul>
                                <li><Link href="#">AI Chatbots</Link></li>
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
                                <li><Link href="#">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className={styles.linkGroup}>
                            <h4>Company</h4>
                            <ul>
                                <li><Link href="#">About Us</Link></li>
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