"use client";

import React, { useState } from 'react';
import styles from '../styles/ContactsPage.module.css'; // Import CSS Module

// Header Component (Included for self-containment to match P1.PNG exactly)
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>AI Chat Supplies</div>
            <nav className={styles.headerNav}>
                {/* Using <a> tags for direct links. For client-side navigation in Next.js, use the <Link> component. */}
                <a key="home" href="#" className={styles.headerNavLink}>Home</a>
                <a key="products" href="#" className={styles.headerNavLink}>Products</a>
                <a key="about" href="#" className={styles.headerNavLink}>About</a>
                <a key="contact" href="#" className={styles.headerNavLink}>Contact</a>
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

// Footer Component (Included for self-containment to match P1.PNG exactly)
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
// Main Contact Page Component
const ContactsPage = () => {
    return (
        <div className={styles.container}>
            <Header />

            <section className={styles.heroSection}>
                <div className={styles.heroContentWrapper}>
                    <h1 className={styles.heroTitle}>Get in Touch</h1>
                    <p className={styles.heroSubtitle}>
                        Have questions about our AI chat solutions? We're here to help you transform your customer communication.
                    </p>
                    <div className={styles.heroFeatures}>
                        <div className={styles.heroFeatureItem}>
                            <svg className={styles.heroIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            24/7 Support
                        </div>
                        <div className={styles.heroFeatureItem}>
                            <svg className={styles.heroIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            Quick Response
                        </div>
                        <div className={styles.heroFeatureItem}>
                            <svg className={styles.heroIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.192-1.268-.516-1.806A7.472 7.472 0 0015 10.5a2.25 2.25 0 00-2.25-2.25h-.5A2.25 2.25 0 0010 10.5c0 1.099-.308 2.122-.844 3.036-.324.538-.516 1.153-.516 1.806v2H7m3-2.25a4.5 4.5 0 00-4.5-4.5H5.25A2.25 2.25 0 003 10.5c0-.653-.192-1.268-.516-1.806A7.472 7.472 0 002.25 10.5a2.25 2.25 0 00-2.25-2.25h-.5A2.25 2.25 0 00-3 10.5c0 1.099-.308 2.122-.844 3.036-.324.538-.516 1.153-.516 1.806v2H-3"></path></svg>
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

                        {/* Address Group */}
                        <div className={styles.infoGroup}>
                            <svg className={styles.infoIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"></path></svg>
                            <div> {/* No special wrapper needed here, just a div for the text content */}
                                <p className={styles.infoSubtitle}>Address</p>
                                <p className={styles.infoText}>123 AI Street, Tech Valley<br />San Francisco, CA 94102</p>
                            </div>
                        </div>

                        {/* Phone Group */}
                        <div className={styles.infoGroup}>
                            <svg className={styles.infoIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 17.006V19a2 2 0 01-2 2H6a2 2 0 01-2-2v-1.994l2-.997L7.493 14H16.507l1.493 1.997 2 .997zM20 7.006V9a2 2 0 01-2 2H6a2 2 0 01-2-2V7.006l2-.997L7.493 4H16.507l1.493 1.997 2 .997z"></path></svg>
                            <div> {/* No special wrapper needed here, just a div for the text content */}
                                <p className={styles.infoSubtitle}>Phone</p>
                                <p className={styles.infoText}>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        {/* Email Group */}
                        <div className={styles.infoGroup}>
                            <svg className={styles.infoIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 002-2zm0 2v.5L12 11 4 6.5V6h16zM4 18V9.5l8 4.5 8-4.5V18H4z"></path></svg>
                            <div> {/* No special wrapper needed here, just a div for the text content */}
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
                                {/* Twitter Icon */}
                                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6c-.77.34-1.6.56-2.46.66.89-.53 1.5-1.37 1.8-2.36-.83.49-1.74.84-2.72 1.03C18.3 3.66 17.15 3 15.82 3c-2.3 0-4.17 1.87-4.17 4.17 0 .33.04.65.11.96-3.47-.17-6.53-1.84-8.58-4.33-.36.6-.57 1.3-.57 2.04 0 1.44.73 2.7 1.84 3.44-.68-.02-1.3-.2-1.85-.5v.05c0 2.02 1.44 3.7 3.35 4.09-.35.09-.72.14-1.1.14-.27 0-.53-.02-.79-.07.53 1.66 2.07 2.87 3.9 2.9-.66.52-1.5 1-2.42 1-.16 0-.32-.01-.47-.03 1.85 1.18 4.07 1.87 6.46 1.87 7.74 0 11.98-6.4 11.98-11.98 0-.18-.01-.35-.01-.53.82-.59 1.54-1.33 2.1-2.18z" /></svg>
                            </a>
                            <a href="#" className={styles.socialIconLink}>
                                {/* LinkedIn Icon */}
                                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.564c0-1.393-.027-3.187-1.947-3.187-1.952 0-2.25 1.524-2.25 3.097v5.654H9.109V9h3.414v1.564h.046c.477-.9 1.637-1.853 3.369-1.853 3.606 0 4.275 2.367 4.275 5.438v6.503zM7.003 7.719a2.76 2.76 0 01-2.77 2.753 2.76 2.76 0 01-2.77-2.753c0-1.523 1.25-2.753 2.77-2.753s2.77 1.23 2.77 2.753zm-3.554 12.733H7.003V9H3.449v11.452z" /></svg>
                            </a>
                            <a href="#" className={styles.socialIconLink}>
                                {/* Facebook Icon */}
                                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.492v-9.294H9.692V11.237h3.125V8.71c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.79.143v3.24l-1.914.001c-1.503 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.626h-3.12V24h6.115c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" /></svg>
                            </a>
                            <a href="#" className={styles.socialIconLink}>
                                {/* Instagram Icon */}
                                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.386.903.426.426.686.824.903 1.386.166.422.36 1.057.415 2.227.059 1.266.071 1.646.071 4.85s-.012 3.584-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.903 1.386-.426.426-.686.824-.903 1.386-.166.422-.36 1.057-.415 2.227-.059 1.266-.071 1.646-.071 4.85s.012 3.584.071 4.85c.055 1.17.249 1.805.415 2.227.217.562.477-.96.903-1.386.426.426.824-.686 1.386-.903.422-.166 1.057-.36 2.227-.415C8.416 2.175 8.796 2.163 12 2.163zm0 1.412c-3.102 0-3.486.011-4.706.068-1.082.051-1.581.205-1.83.303-.383.14-.658.318-.925.584-.267.267-.444.542-.584.925-.098.249-.252.748-.303 1.83-.057 1.22-.068 1.604-.068 4.706s.011 3.486.068 4.706c.051 1.082.205 1.581.303 1.83.14.383.318.658.584.925.267.267.542.444.925.584.249.098.748.252 1.83.303 1.22.057 1.604.068 4.706.068s3.486-.011 4.706-.068c1.082-.051 1.581-.205 1.83-.303.14-.383.318-.658.584-.925.267-.267.542-.444.584-.925-.098-.249-.252-.748-.303-1.83-.057-1.22-.068-1.604-.068-4.706s-.011-3.486-.068-4.706c-.051-1.082-.205-1.581-.303-1.83-.14-.383-.318-.658-.584-.925-.267-.267-.542-.444-.925-.584-.249-.098-.748-.252-1.83-.303-1.22-.057-1.604-.068-4.706-.068zm0 1.802A3.333 3.333 0 1112 17.21c1.84 0 3.333-1.493 3.333-3.333s-1.493-3.333-3.333-3.333zm0 1.412a1.921 1.921 0 100 3.842 1.921 1.921 0 000-3.842zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
                            </a>
                        </div>
                    </div>
                </section>

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
            </main>

            <Footer />
        </div>
    );
};

export default ContactsPage;