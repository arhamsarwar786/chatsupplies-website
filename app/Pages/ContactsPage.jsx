
"use client";




import React, { useState } from 'react';
import styles from '../styles/ContactsPage.module.css'; // Import CSS Module - Ensure this path is correct relative to pages/contact.jsx

// Header Component
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

// Footer Component
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

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button
        className={styles.faqQuestionButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg
          className={`${styles.faqArrowIcon} ${isOpen ? styles.faqArrowOpen : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <p className={styles.faqAnswer}>{answer}</p>
      )}
    </div>
  );
};

// Main Contact Page Component
const ContactPage = () => {
  // Added a console log to help confirm component loading if the path issue is resolved.
  console.log('ContactPage component loaded. Styles object:', styles);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroSubtitle}>
            Have questions about our AI chat solutions? We're here to help you transform your customer communication.
          </p>
          <div className={styles.heroFeatures}>
            <div className={styles.heroFeatureItem}>
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              24/7 Support
            </div>
            <div className={styles.heroFeatureItem}>
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Quick Response
            </div>
            <div className={styles.heroFeatureItem}>
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.192-1.268-.516-1.806A7.472 7.472 0 0015 10.5a2.25 2.25 0 00-2.25-2.25h-.5A2.25 2.25 0 0010 10.5c0 1.099-.308 2.122-.844 3.036-.324.538-.516 1.153-.516 1.806v2H7m3-2.25a4.5 4.5 0 00-4.5-4.5H5.25A2.25 2.25 0 003 10.5c0-.653-.192-1.268-.516-1.806A7.472 7.472 0 002.25 10.5a2.25 2.25 0 00-2.25-2.25h-.5A2.25 2.25 0 00-3 10.5c0 1.099-.308 2.122-.844 3.036-.324.538-.516 1.153-.516 1.806v2H-3"></path></svg>
              Expert Team
            </div>
          </div>
        </section>

        <section className={styles.contactGrid}>
          {/* Send us a Message Form */}
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Send us a Message</h2>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.formLabel}>First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.formLabel}>Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className={styles.formInput}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="General Inquiry"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us how we can help you..."
                  className={styles.formTextarea}
                ></textarea>
              </div>
              <button
                type="submit"
                className={styles.submitButton}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.infoCard}>
            <h2 className={styles.infoTitle}>Contact Information</h2>
            <div className={styles.infoGroup}>
              <h3 className={styles.infoSubtitle}>Address</h3>
              <p className={styles.infoText}>123 AI Street, Tech Valley</p>
              <p className={styles.infoText}>San Francisco, CA 94102</p>
            </div>
            <div className={styles.infoGroup}>
              <h3 className={styles.infoSubtitle}>Phone</h3>
              <p className={styles.infoText}>+1 (555) 123-4567</p>
            </div>
            <div className={styles.infoGroup}>
              <h3 className={styles.infoSubtitle}>Email</h3>
              <p className={styles.infoText}>hello@aichatsupplies.com</p>
            </div>
            <div className={styles.infoGroup}>
              <h3 className={styles.infoSubtitle}>Business Hours</h3>
              <p className={styles.infoText}>Monday-Friday: 9:00 AM - 6:00 PM</p>
              <p className={styles.infoText}>Saturday: 10:00 AM - 4:00 PM</p>
              <p className={styles.infoText}>Sunday: Closed</p>
            </div>
            <div className={styles.socialFollow}>
              <h3 className={styles.socialTitle}>Follow Us</h3>
              <div className={styles.socialIcons}>
                {/* Placeholder for social media icons */}
                <a href="#" className={styles.socialIconLink}>
                  <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.119-4.555-4.931 0-1.09.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.701.112 2.502.324 1.909-1.295 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.65.64.698 1.028 1.592 1.028 2.682 0 3.823-2.339 4.672-4.566 4.925.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C21.137 20.281 24 16.516 24 12.017 24 6.484 19.522 2 12 2Z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* Add more social media icons as needed */}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            <FAQItem
              question="How quickly can I get started with AI Chat Supplies?"
              answer="Getting started is quick and easy! Our onboarding process is designed to be seamless, and you can typically have your AI chat solutions up and running within a few hours to a couple of days, depending on your specific integration needs."
            />
            <FAQItem
              question="What kind of support do you offer?"
              answer="We offer 24/7 comprehensive support including live chat, email, and phone assistance. We also provide extensive documentation, tutorials, and a dedicated help center to ensure you have all the resources you need."
            />
            <FAQItem
              question="Can I customize the AI responses?"
              answer="Yes, absolutely! Our AI solutions are highly customizable. You can train the AI with your specific business data, define custom responses, and integrate with your existing knowledge bases to ensure accurate and on-brand communication."
            />
            <FAQItem
              question="Do you offer enterprise solutions?"
              answer="Yes, we provide tailored enterprise solutions designed for large organizations with complex needs. These include advanced security features, dedicated account management, custom integrations, and scalable infrastructure. Please contact our sales team for a personalized consultation."
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
