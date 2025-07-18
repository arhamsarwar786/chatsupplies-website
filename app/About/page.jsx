"use client"; // This directive is typically for Next.js App Router components

import Footer from '../Component/Footer'; // Assuming Footer is in the same directory
import React, { useEffect } from 'react';
import styles from '../styles/AboutPage.module.css'; // Corrected import to AboutPage.module.css

// Component for a Mission/Vision/Value Card with Icon
const MissionValueCard = ({ iconClass, iconBgClass, iconColorClass, title, description }) => {
  return (
    <div className={styles.missionValueCard}>
      <div className={`${styles.missionValueIconContainer} ${styles[iconBgClass]}`}>
        <i className={`${iconClass} ${styles.missionValueIcon} ${styles[iconColorClass]}`}></i>
      </div>
      <h3 className={styles.missionValueTitle}>{title}</h3>
      <p className={styles.missionValueText}>{description}</p>
    </div>
  );
};

// Component for a Team Member Card
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

const RecognitionItem = ({ iconClass, iconBgClass, iconColorClass, title, text }) => {
  return (
    <div className={styles.recognitionItem}>
      <div className={`${styles.recognitionIconContainer} ${styles[iconBgClass]}`}>
        <i className={`${iconClass} ${styles.recognitionIcon} ${styles[iconColorClass]}`}></i>
      </div>
      <h3 className={styles.recognitionItemTitle}>{title}</h3>
      <p className={styles.recognitionItemText}>{text}</p>
    </div>
  );
};;

const AboutUsPage = () => {
  // Effect to load Font Awesome script for icons
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);


  return (
    <div className={styles.aboutContainer}>

      {/* Hero Section - No change in color */}
      <section className={styles.aboutHeroSection}>
        <div className={styles.aboutHeroInner}>
          <h1 className={styles.aboutHeroTitle}>About Our Company</h1>
          <p className={styles.aboutHeroSubtitle}>
            We are passionate about building innovative AI solutions that empower businesses and delight customers.
          </p>
          <div className={styles.aboutHeroFeatures}>
            <div className={styles.aboutHeroFeatureItem}>
              <i className="fas fa-rocket"></i> Innovation First
            </div>
            <div className={styles.aboutHeroFeatureItem}>
              <i className="fas fa-users"></i> Customer Focused
            </div>
            <div className={styles.aboutHeroFeatureItem}>
              <i className="fas fa-crown"></i> Industry Leading
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - White background */}
      <section className={`${styles.sectionContainer} ${styles.sectionWhiteBg}`}>
        <div className={styles.storySection}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <div className={styles.storyContentWrapper}>
            <div className={`${styles.storyTextContainer} ${styles.storyOrderText}`}>
              <p className={styles.storyText}>
                Founded in 2020, AI Chat Supplies emerged from a simple observation:<br />
                businesses were struggling to provide instant, personalized customer support at scale. Our founders, experienced in AI and customer service, saw an opportunity to bridge this gap.
              </p>
              <p className={styles.storyText}>
                What started as a small team of passionate engineers has grown into a<br />
                leading provider of AI chat solutions, serving thousands of businesses worldwide. We believe that every customer interaction should be meaningful, efficient, and human-like.
              </p>
              <div className={styles.storyStats}>
                <div className={styles.statItem}>
                  <p className={styles.statNumber}>10K+</p>
                  <p className={styles.statLabel}>Happy Clients</p>
                </div>
                <div className={styles.statItem}>
                  <p className={styles.statNumber}>50M+</p>
                  <p className={styles.statLabel}>Conversations</p>
                </div>
                <div className={styles.statItem}>
                  <p className={styles.statNumber}>99.9%</p>
                  <p className={styles.statLabel}>Uptime</p>
                </div>
              </div>
            </div>
            <div className={`${styles.storyImageContainer} ${styles.storyOrderImage}`}>
              {/* Corrected image source for Next.js public directory */}
              <img src="/Images/Teamwork.PNG" alt="Our Story" className={styles.storyImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section - Light grey background */}
      <section className={`${styles.sectionContainer} ${styles.sectionLightGreyBg}`}>
        <div className={styles.missionValuesSection}>
          <div className={styles.missionValuesInner}>
            <h2 className={styles.sectionTitle}>Our Mission & Values</h2>
            <div className={styles.missionValuesGrid}>
              <MissionValueCard
                iconClass="fas fa-bullseye"
                iconBgClass="missionIconBg"
                iconColorClass="missionIconColor"
                title="Mission"
                description={
                  <>
                    To empower businesses with <br />
                    AI-driven communication <br />
                    tools that enhance customer <br />
                    experiences and drive growth <br />
                    through intelligent<br />
                    automation.
                  </>
                }
              />
              <MissionValueCard
                iconClass="fas fa-eye"
                iconBgClass="visionIconBg"
                iconColorClass="visionIconColor"
                title="Vision"
                description={
                  <>
                    To become the global leader<br />
                    in AI chat solutions, making<br />
                    advanced conversational AI<br />
                    accessible to businesses of<br />
                    all sizes worldwide.
                  </>
                }
              />
              <MissionValueCard
                iconClass="fas fa-heart"
                iconBgClass="valuesIconBg"
                iconColorClass="valuesIconColor"
                title="Values"
                description={
                  <>
                    Innovation, transparency,<br />
                    customer-centricity, and<br />
                    ethical AI development guide<br />
                    everything we do in our<br />
                    pursuit of excellence.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>
      {/* Meet Our Team Section */}
      <section className={`${styles.sectionContainer} ${styles.sectionWhiteBg}`}>
        <div className={styles.teamSection}>
          <div className={styles.teamInner}>
            <h2 className={styles.sectionTitle}>Meet Our Team</h2>
            <p className={styles.teamSubtitle}>The brilliant minds behind AI Chat Supplies</p>
            <div className={styles.teamGrid}>
              <TeamMemberCard
                imageSrc="https://randomuser.me/api/portraits/men/32.jpg"
                name="Alex Johnson"
                title="CEO & Founder"
                description="Former Google AI researcher with 15+ years in machine learning and natural language processing."
                unoptimized
              />
              <TeamMemberCard
                imageSrc="https://randomuser.me/api/portraits/women/44.jpg"
                name="Sarah Chen"
                title="CTO"
                description="AI architect and former Microsoft principal engineer, specializing in conversational AI and scalable systems."
                unoptimized
              />
              <TeamMemberCard
                imageSrc="https://randomuser.me/api/portraits/men/75.jpg"
                name="Michael Rodriguez"
                title="Head of Product"
                description="Product strategist with expertise in user experience design and AI product development at scale."
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>


      {/* Our Achievements (Industry Recognition) Section - Light grey background */}
      <section className={`${styles.sectionContainer} ${styles.sectionLightGreyBg}`}>
        <div className={styles.recognitionSection}>
          <div className={styles.recognitionInner}>
            <h2 className={styles.sectionTitle}>Our Achievements</h2>
            <div className={styles.recognitionGrid}>
              <RecognitionItem
                iconClass="fas fa-trophy"
                iconBgClass="awardIconBg"
                iconColorClass="awardIconColor"
                title="Industry Recognition"
                text="Winner of the 2023 AI Innovation Award and recognized as 'Best AI Chat Solution' by TechCrunch."
              />
              <RecognitionItem
                iconClass="fas fa-chart-line"
                iconBgClass="growthIconBg"
                iconColorClass="growthIconColor"
                title="Growth Milestone"
                text="Achieved 300% year-over-year growth and expanded to serve clients across 50+ countries worldwide."
              />
              <RecognitionItem
                iconClass="fas fa-handshake"
                iconBgClass="partnershipIconBg"
                iconColorClass="partnershipIconColor"
                title="Strategic Partnerships"
                text="Partnered with leading CRM platforms and integrated with 100+ business tools and applications."
              />
              <RecognitionItem
                iconClass="fas fa-shield-alt"
                iconBgClass="securityIconBg"
                iconColorClass="securityIconColor"
                title="Security Standards"
                text="SOC 2 Type II certified and GDPR compliant, ensuring the highest standards of data security and privacy."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section - No change in color */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Transform Your Customer Experience?</h2>
        <p className={styles.ctaSubtitle}>
          Start with our free trial and discover how AI can revolutionize your business communication.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.ctaButtonPrimary}>Start Free Trial</button>
          <button className={styles.ctaButtonSecondary}>Schedule Demo</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;