// components/HeroSection.jsx (or HeroSection.js)

import Image from 'next/image';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          {/* Adjusted heading with line breaks and highlight */}
          <h1 className={styles.heading}>
            Power Your Business <br />
            with <span className={styles.highlight}>Smart Chat</span> <br />
            <span className={styles.highlight}>Solutions</span>
          </h1>
          <p className={styles.description}>
            Discover premium chatbot tools, AI-powered integrations, and customer support solutions that transform your business communication.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>Shop Now</button>
            <button className={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/Images/Dashboard.png"   // Make sure this path is correct for your image
            alt="Dashboard Mockup"
            width={700} // Adjust width as needed for your image aspect ratio
            height={450} // Adjust height as needed
            className={styles.heroImage}
            priority // For LCP optimization
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;