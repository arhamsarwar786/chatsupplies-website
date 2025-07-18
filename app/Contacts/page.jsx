"use client";

import Footer from '../Component/Footer';
import React, { useState } from 'react';
import styles from '../styles/ContactsPage.module.css'; // Import CSS Module

// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock, // For Quick Response (based on p13.PNG, though it's typically for time/support)
    faPhone, // For 24/7 Support (based on p13.PNG)
    faUsers, // For Expert Team (based on p13.PNG)
    faLocationDot, // For Address
    faEnvelope, // For Email
    faChevronDown // For FAQ arrow
} from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faLinkedinIn,
    faFacebookF,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';


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
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${styles.faqArrowIcon} ${isOpen ? styles.faqArrowOpen : ''}`}
                />
            </button>
            {isOpen && (
                <p className={styles.faqAnswer}>{answer}</p>
            )}
        </div>
    );
};

// Main Contact Page Component
const ContactsPage = () => {
    return (
        <div className={styles.container}>


            <section className={styles.heroSection}>
                <div className={styles.heroContentWrapper}>
                    <h1 className={styles.heroTitle}>Get in Touch</h1>
                    <p className={styles.heroSubtitle}>
                        Have questions about our AI chat solutions? We're here to help you transform your customer communication.
                    </p>
                    <div className={styles.heroFeatures}>
                        <div className={styles.heroFeatureItem}>
                            {/* Updated icon to faPhone for "24/7 Support" matching p13.PNG */}
                            <FontAwesomeIcon icon={faPhone} className={styles.heroIcon}  size="2x" />
                            24/7 Support
                        </div>
                        <div className={styles.heroFeatureItem}>
                            {/* Updated icon to faClock for "Quick Response" matching p13.PNG */}
                            <FontAwesomeIcon icon={faClock} className={styles.heroIcon} />
                            Quick Response
                        </div>
                        <div className={styles.heroFeatureItem}>
                            {/* Updated icon to faUsers for "Expert Team" matching p13.PNG */}
                            <FontAwesomeIcon icon={faUsers} className={styles.heroIcon} />
                            Expert Team
                        </div>
                    </div>
                </div>
            </section>

            <main className={styles.mainContent}>
                <section className={styles.contactGrid}>
                    {/* Left Column: Send us a Message Form Card */}
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
                                <select // Changed to select dropdown
                                    id="subject"
                                    name="subject"
                                    className={styles.formInput}
                                >
                                    <option>General Inquiry</option>
                                    <option>Support Request</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
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

                    {/* Right Column: Individual Cards */}
                    <div className={styles.infoCard}>
                        <h2 className={styles.infoTitle}>Contact Information</h2>

                        {/* Address Group - MODIFIED */}
                        <div className={styles.infoGroup}>
                            {/* New wrapper div for icon background */}
                            <div className={styles.infoIconBackground}>
                                <FontAwesomeIcon icon={faLocationDot} className={styles.infoIcon} />
                            </div>
                            <div>
                                <p className={styles.infoSubtitle}>Address</p>
                                <p className={styles.infoText}>
                                    123 AI Street, Tech Valley<br />
                                    San Francisco, CA 94102
                                </p>
                            </div>
                        </div>

                        {/* Phone Group */}
                        <div className={styles.infoGroup}>
                            {/* New wrapper div for icon background */}
                            <div className={styles.infoIconBackground}>
                                <FontAwesomeIcon icon={faPhone} className={styles.infoIcon} />
                            </div>
                            <div>
                                <p className={styles.infoSubtitle}>Phone</p>
                                <p className={styles.infoText}>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        {/* Email Group */}
                        <div className={styles.infoGroup}>
                            {/* New wrapper div for icon background */}
                            <div className={styles.infoIconBackground}>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.infoIcon} />
                            </div>
                            <div>
                                <p className={styles.infoSubtitle}>Email</p>
                                <p className={styles.infoText}>hello@aichatsupplies.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Business Hours Card */}
                    <div className={styles.businessHoursCard}>
                        <h2 className={styles.hoursTitle}>Business Hours</h2>
                        <div className={styles.hoursTable}>
                            <div className={styles.hoursRow}>
                                <span className={styles.hoursDay}>Monday - Friday</span>
                                <span className={styles.hoursTime}>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className={styles.hoursRow}>
                                <span className={styles.hoursDay}>Saturday</span>
                                <span className={styles.hoursTime}>10:00 AM - 4:00 PM</span>
                            </div>
                            <div className={styles.hoursRow}>
                                <span className={styles.hoursDay}>Sunday</span>
                                <span className={styles.hoursTime}>Closed</span>
                            </div>
                        </div>
                    </div>

                    {/* Follow Us Card */}
                    <div className={styles.followUsCard}>
                        <h2 className={styles.socialTitle}>Follow Us</h2>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.socialIconLink}>
                                <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
                            </a>
                            <a href="#" className={styles.socialIconLink}>
                                <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcon} />
                            </a>
                            <a href="#" className={styles.socialIconLink}>
                                <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
                            </a>
                            <a href="#" className={styles.socialIconLink}>
                                <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <section className={styles.faqSection}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                {/* Add this subtitle for the "Quick answers to common questions..." text */}
                <p className={styles.faqSubtitle}>Quick answers to common questions about our AI chat solutions</p>
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

            <Footer />
        </div>
    );
};

export default ContactsPage;