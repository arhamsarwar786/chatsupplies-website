"use client"; // This directive is important for Next.js App Router, or can be removed if using Pages Router exclusively.

import React, { useState } from 'react'; // Consolidated and corrected useState import
import styles from '../styles/ProductsPage.module.css';
// If Header and Footer were in their own files, you would import them like this:
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import ProductCard from '../components/ProductCard';


// Header Component - Moved outside the main ProductsPage component
// (Ideally, this would be in components/layout/Header.jsx and imported)
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>AI Chat Supplies</div>
      <nav className={styles.headerNav}>
        <a key="home" href="/" className={styles.headerNavLink}>Home</a>
        <a key="products" href="/products" className={styles.headerNavLink}>Products</a>
        <a key="about" href="/about" className={styles.headerNavLink}>About</a>
        <a key="contact" href="/contact" className={styles.headerNavLink}>Contact</a>
      </nav>
      <button className={styles.headerButton}>
        Get Started
      </button>
      <div className={styles.mobileMenuIcon}>
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
    </header>
  );
};

// Footer Component - Moved outside the main ProductsPage component
// (Ideally, this would be in components/layout/Footer.jsx and imported)
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

// Product Card Component - Moved outside the main ProductsPage component
// (Can remain local or be moved to components/ if reused)
const ProductCard = ({ icon, title, price, features, rating, reviews }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productIconContainer}>
        {icon || (
          <svg className={styles.productIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        )}
      </div>
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productPrice}>{price}</p>
      <ul className={styles.productFeaturesList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.productFeatureItem}>
            <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className={styles.productRating}>
        <span className={styles.starIcon}>★</span> {rating} ({reviews})
      </div>
      <button className={styles.productLearnMoreButton}>Learn More</button>
    </div>
  );
};

// Mock Product Data - Kept outside the component to avoid re-creation on every render
const products = [
  {
    icon: <svg className={styles.productIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>,
    title: 'Smart Chatbot Pro',
    price: '$99/mo',
    features: ['Unlimited conversations', 'Multi-language support', 'Advanced analytics'],
    rating: 4.9,
    reviews: 120,
  },
  {
    icon: <svg className={styles.productIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v2a3 3 0 01-3 3z"></path></svg>,
    title: 'Voice AI Assistant',
    price: '$149/mo',
    features: ['Voice recognition', 'Text-to-speech', 'Custom voice models'],
    rating: 4.8,
    reviews: 89,
  },
  {
    icon: <svg className={styles.productIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3m0 0l3 3m-3-3v4m0 0h-3m3 0h3m-3 0V9a2 2 0 012-2h6a2 2 0 012 2v2m0 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2"></path></svg>,
    title: 'Analytics Dashboard',
    price: '$79/mo',
    features: ['Real-time metrics', 'Custom reports', 'Data export'],
    rating: 4.7,
    reviews: 156,
  },
  {
    icon: <svg className={styles.productIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>,
    title: 'Integration Suite',
    price: '$59/mo',
    features: ['100+ integrations', 'API access', 'Custom webhooks'],
    rating: 4.6,
    reviews: 94,
  },
  {
    icon: <svg className={styles.productIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c0 2.893 1.146 5.66 3.175 7.712A12.007 12.007 0 0012 21.056c2.893 0 5.66-1.146 7.712-3.175A12.007 12.007 0 0021.056 12c0-2.893-1.146-5.66-3.175-7.712z"></path></svg>,
    title: 'Security Pro',
    price: '$199/mo',
    features: ['End-to-end encryption', 'GDPR compliance', 'Audit logs'],
    rating: 4.9,
    reviews: 67,
  },
  {
    icon: <svg className={styles.productIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>,
    title: 'Mobile SDK',
    price: '$129/mo',
    features: ['iOS & Android', 'Native performance', 'Easy integration'],
    rating: 4.8,
    reviews: 112,
  },
];


// Main Products Page Component
const ProductsPage = () => { // This is the ONLY declaration of ProductsPage
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // As per PDF layout

  // Calculate products to display for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber); // This was missing from the second ProductsPage declaration

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className={styles.productsContainer}>
      <Header /> {/* Your Header component */}

      {/* THIS IS THE CRUCIAL STRUCTURAL CHANGE FOR FULL WIDTH:
          Move productsHeroSection OUTSIDE of productsMainContent
          It should be a direct sibling of Header and productsMainContent
      */}
      <section className={styles.productsHeroSection}>
        <h1 className={styles.productsHeroTitle}>Our AI Products</h1>
        <p className={styles.productsHeroSubtitle}>
          Discover our comprehensive suite of AI-powered chat solutions designed to transform your customer experience.
        </p>
        <div className={styles.productsHeroFeatures}>
          <div className={styles.productsHeroFeatureItem}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M15 10V5a3 3 0 00-3-3H9a3 3 0 00-3 3v5m6 4v3m-3 0h6M7 10h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
            Smart AI
          </div>
          <div className={styles.productsHeroFeatureItem}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c0 2.893 1.146 5.66 3.175 7.712A12.007 12.007 0 0012 21.056c2.893 0 5.66-1.146 7.712-3.175A12.007 12.007 0 0021.056 12c0-2.893-1.146-5.66-3.175-7.712z"></path></svg>
            Secure
          </div>
          <div className={styles.productsHeroFeatureItem}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            Fast Setup
          </div>
        </div>
      </section>

      {/* This main tag will now only wrap the content that needs to be width-constrained and centered */}
      <main className={styles.productsMainContent}>
        <section className={styles.filterSortBar}>
          <div className={styles.filterGroup}>
            <label htmlFor="category" className={styles.filterLabel}>Filter by:</label>
            <select id="category" className={styles.filterSelect}>
              <option>All Categories</option>
              {/* Add more categories based on PDF if available */}
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor="pricing" className={styles.filterLabel}>All Pricing</label>
            <select id="pricing" className={styles.filterSelect}>
              <option>All Pricing</option>
              {/* Add more pricing options */}
            </select>
          </div>
          <div className={styles.sortGroup}>
            <label htmlFor="sort" className={styles.sortLabel}>Sort by:</label>
            <select id="sort" className={styles.sortSelect}>
              <option>Popular</option>
              {/* Add more sort options */}
            </select>
          </div>
        </section>

        <section className={styles.productGrid}>
          {currentProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </section>

        <section className={styles.paginationContainer}>
          <button
            className={`${styles.paginationButton} ${currentPage === 1 ? styles.paginationButtonDisabled : ''}`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`${styles.paginationButton} ${currentPage === index + 1 ? styles.paginationButtonActive : ''}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`${styles.paginationButton} ${currentPage === totalPages ? styles.paginationButtonDisabled : ''}`}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </section>
      </main>

      {/* Move the CTA section here if it's meant to be full-width as well */}
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

      <Footer /> {/* Your Footer component */}
    </div>
  );
};

export default ProductsPage;