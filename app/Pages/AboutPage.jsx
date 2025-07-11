import React from 'react';
import styles from '../styles/AboutPage.module.css'; // Import CSS Module

// Header Component (re-used, ideally a shared component)
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>AI Chat Supplies</div>
      <nav className={styles.headerNav}>
        {['Home', 'Products', 'About', 'Contact'].map((item) => (
          <a key={item} href="#" className={styles.headerNavLink}>
            {item}
          </a>
        ))}
      </nav>
      <button className={styles.headerButton}>
        Get Started
      </button>
      <div className={styles.mobileMenuIcon}>
        {/* Mobile menu icon - placeholder for now */}
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
    </header>
  );
};

// Footer Component (re-used, ideally a shared component)
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <h3 className={styles.footerBrandTitle}>AI Chat Supplies</h3>
          <p className={styles.footerBrandText}>Transforming customer communication with intelligent AI chat solutions.</p>
        </div>

        <div>
          <h4 className={styles.footerSectionTitle}>Product</h4>
          <ul className={styles.footerList}>
            <li><a href="#" className={styles.footerLink}>Features</a></li>
            <li><a href="#" className={styles.footerLink}>Pricing</a></li>
            <li><a href="#" className={styles.footerLink}>Integrations</a></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.footerSectionTitle}>Company</h4>
          <ul className={styles.footerList}>
            <li><a href="#" className={styles.footerLink}>About</a></li>
            <li><a href="#" className={styles.footerLink}>Careers</a></li>
            <li><a href="#" className={styles.footerLink}>Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.footerSectionTitle}>Support</h4>
          <ul className={styles.footerList}>
            <li><a href="#" className={styles.footerLink}>Documentation</a></li>
            <li><a href="#" className={styles.footerLink}>Help Center</a></li>
            <li><a href="#" className={styles.footerLink}>Status</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        © 2024 AI Chat Supplies. All rights reserved.
      </div>
    </footer>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ imageSrc, name, title, description }) => {
  return (
    <div className={styles.teamMemberCard}>
      <div className={styles.teamMemberImageContainer}>
        <img src={imageSrc} alt={name} className={styles.teamMemberImage} />
      </div>
      <h3 className={styles.teamMemberName}>{name}</h3>
      <p className={styles.teamMemberTitle}>{title}</p>
      <p className={styles.teamMemberDescription}>{description}</p>
    </div>
  );
};

// Main About Page Component
const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <Header />

      <main className={styles.aboutMainContent}>
        {/* Hero Section */}
        <section className={styles.aboutHeroSection}>
          <div className={styles.aboutHeroText}>
            <h1 className={styles.aboutHeroTitle}>About AI Chat Supplies</h1>
            <p className={styles.aboutHeroSubtitle}>
              We're revolutionizing customer communication with intelligent AI chat solutions that transform how businesses connect with their customers.
            </p>
            <div className={styles.aboutHeroFeatures}>
              <span className={styles.aboutHeroFeatureItem}>Innovation First</span>
              <span className={styles.aboutHeroFeatureItem}>Customer Focused</span>
              <span className={styles.aboutHeroFeatureItem}>Industry Leading</span>
            </div>
          </div>
          <div className={styles.aboutHeroImageContainer}>
            {/* Placeholder for the main image */}
            <img
              src="https://placehold.co/600x400/E0E7FF/4F46E5?text=AI+Chat+Supplies"
              alt="AI Chat Supplies Team"
              className={styles.aboutHeroImage}
            />
          </div>
        </section>

        {/* Our Story Section */}
        <section className={styles.storySection}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <p className={styles.storyText}>
            Founded in 2020, AI Chat Supplies emerged from a simple observation: businesses were struggling to provide instant, personalized customer support at scale. Our founders, experienced in AI and customer service, saw an opportunity to bridge this gap.
          </p>
          <p className={styles.storyText}>
            What started as a small team of passionate engineers has grown into a leading provider of AI chat solutions, serving thousands of businesses worldwide. We believe that every customer interaction should be meaningful, efficient, and human-like.
          </p>
          <div className={styles.storyStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50M+</div>
              <div className={styles.statLabel}>Conversations</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>99.9%</div>
              <div className={styles.statLabel}>Uptime</div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className={styles.missionValuesSection}>
          <h2 className={styles.sectionTitle}>Our Mission & Values</h2>
          <div className={styles.missionValuesGrid}>
            <div className={styles.missionValueCard}>
              <h3 className={styles.missionValueTitle}>Mission</h3>
              <p className={styles.missionValueText}>
                To empower businesses with AI-driven communication tools that enhance customer experiences and drive growth through intelligent automation.
              </p>
            </div>
            <div className={styles.missionValueCard}>
              <h3 className={styles.missionValueTitle}>Vision</h3>
              <p className={styles.missionValueText}>
                To become the global leader in AI chat solutions, making advanced conversational AI accessible to businesses of all sizes worldwide.
              </p>
            </div>
            <div className={styles.missionValueCard}>
              <h3 className={styles.missionValueTitle}>Values</h3>
              <p className={styles.missionValueText}>
                Innovation, transparency, customer-centricity, and ethical AI development guide everything we do in our pursuit of excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Meet Our Team</h2>
          <p className={styles.teamSubtitle}>The brilliant minds behind AI Chat Supplies</p>
          <div className={styles.teamGrid}>
            <TeamMemberCard
              imageSrc="https://placehold.co/120x120/4F46E5/FFFFFF?text=Alex"
              name="Alex Johnson"
              title="CEO & Founder"
              description="Former Google AI researcher with 15 years in machine learning and natural language processing."
            />
            <TeamMemberCard
              imageSrc="https://placehold.co/120x120/4F46E5/FFFFFF?text=Sarah"
              name="Sarah Chen"
              title="CTO"
              description="AI architect and former Microsoft principal engineer, specializing in conversational AI and scalable systems."
            />
            <TeamMemberCard
              imageSrc="https://placehold.co/120x120/4F46E5/FFFFFF?text=Michael"
              name="Michael Rodriguez"
              title="Head of Product"
              description="Product strategist with expertise in user experience design and AI product development at scale."
            />
          </div>
        </section>

        {/* Industry Recognition Section */}
        <section className={styles.recognitionSection}>
          <h2 className={styles.sectionTitle}>Industry Recognition</h2>
          <p className={styles.recognitionSubtitle}>Our Achievements</p>
          <div className={styles.recognitionGrid}>
            <div className={styles.recognitionItem}>
              <h3 className={styles.recognitionItemTitle}>Growth Milestone</h3>
              <p className={styles.recognitionItemText}>
                Achieved 300% year-over-year growth and expanded to serve clients across 50+ countries worldwide.
              </p>
            </div>
            <div className={styles.recognitionItem}>
              <h3 className={styles.recognitionItemTitle}>Strategic Partnerships</h3>
              <p className={styles.recognitionItemText}>
                Partnered with leading CRM platforms and integrated with 100+ business tools and applications.
              </p>
            </div>
            <div className={styles.recognitionItem}>
              <h3 className={styles.recognitionItemTitle}>Security Standards</h3>
              <p className={styles.recognitionItemText}>
                SOC 2 Type II certified and GDPR compliant, ensuring the highest standards of data security and privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Transform Your Customer Communication?</h2>
          <p className={styles.ctaSubtitle}>
            Join thousands of businesses already using AI Chat Supplies to enhance their customer experience
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButtonPrimary}>Start Free Trial</button>
            <button className={styles.ctaButtonSecondary}>Schedule Demo</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
