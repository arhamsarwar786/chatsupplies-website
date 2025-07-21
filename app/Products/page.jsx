"use client";
import Footer from '../Components/Footer'; // Assuming Footer is in the same directory
import React, { useState, useEffect } from 'react';
import styles from '../styles/ProductsPage.module.css'; // Your CSS Module

// IMPORTANT: Since we are going for an all-<i> tag approach,
// you do NOT need to import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// If this line exists, it should be removed to avoid confusion or unnecessary package dependencies
// if you are only relying on the CDN CSS.
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // REMOVE THIS LINE


// Product Card Component - Now uses Font Awesome icons and dynamic background colors
const ProductCard = ({ iconClass, iconBgClass = 'purpleBg', title, description, price, features, rating, reviews }) => {
    console.log(`ProductCard: ${title}, iconBgClass: ${iconBgClass}, Resolved Class: ${styles[iconBgClass]}`);

    return (
        <div className={styles.productCard}>
            <div className={`${styles.productIconContainer} ${styles[iconBgClass] || ''}`}>
                {/* This will rely on the CDN-loaded Font Awesome CSS */}
                <i className={`${iconClass} ${styles.productFaIcon}`}></i>
            </div>
            <h3 className={styles.productTitle}>{title}</h3>
            {/* Added description paragraph */}
            <p className={styles.productDescription}>{description}</p>

            {/* ✅ Price and rating row */}
            <div className={styles.productPriceRatingRow}>
                <p className={styles.productPrice}>{price}</p>
                <div className={styles.productRating}>
                    <span className={styles.starIcon}>★</span> {rating} ({reviews})
                </div>
            </div>

            <ul className={styles.productFeaturesList}>
                {features.map((feature, index) => (
                    <li key={index} className={styles.productFeatureItem}>
                        {/* This will also rely on the CDN-loaded Font Awesome CSS */}
                        <i className={`fas fa-check ${styles.checkIcon}`}></i>
                        {feature}
                    </li>
                ))}
            </ul>

            <button className={styles.productLearnMoreButton}>Learn More</button>
        </div>
    );
};


// Mock Product Data - Updated with Font Awesome icon classes and descriptions
const products = [
    {
        iconClass: 'fas fa-robot',
        iconBgClass: 'purpleBg',
        title: 'Smart Chatbot Pro',
        description: 'Advanced AI chatbot with natural language processing and machine learning capabilities.',
        price: '$99/mo',
        features: ['Unlimited conversations', 'Multi-language support', 'Advanced analytics'],
        rating: 4.9,
        reviews: 120,
    },
    {
        iconClass: 'fas fa-microphone-alt',
        iconBgClass: 'orangeBg',
        title: 'Voice AI Assistant',
        description: 'Intelligent voice recognition system with real-time speech processing and response.',
        price: '$149/mo',
        features: ['Voice recognition', 'Text-to-speech', 'Custom voice models'],
        rating: 4.8,
        reviews: 89,
    },
    {
        iconClass: 'fas fa-chart-line',
        iconBgClass: 'greenBg',
        title: 'Analytics Dashboard',
        description: 'Comprehensive analytics and insights for your AI chat performance and customer interactions.',
        price: '$79/mo',
        features: ['Real-time metrics', 'Custom reports', 'Data export'],
        rating: 4.7,
        reviews: 156,
    },
    {
        iconClass: 'fas fa-puzzle-piece',
        iconBgClass: 'pinkBg',
        title: 'Integration Suite',
        description: 'Seamlessly connect your AI chat solutions with popular business tools and platforms.',
        price: '$59/mo',
        features: ['100+ integrations', 'API access', 'Custom webhooks'],
        rating: 4.6,
        reviews: 94,
    },
    {
        iconClass: 'fas fa-shield-alt',
        iconBgClass: 'redBg',
        title: 'Security Pro',
        description: 'Enterprise-grade security features to protect your conversations and customer data.',
        price: '$199/mo',
        features: ['End-to-end encryption', 'GDPR compliance', 'Audit logs'],
        rating: 4.9,
        reviews: 67,
    },
    {
        iconClass: 'fas fa-mobile-alt',
        iconBgClass: 'blueBg',
        title: 'Mobile SDK',
        description: 'Native mobile SDK for iOS and Android to integrate AI chat into your mobile applications.',
        price: '$129/mo',
        features: ['iOS & Android', 'Native performance', 'Easy integration'],
        rating: 4.8,
        reviews: 112,
    },
];


// Main Products Page Component
const ProductsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    // Effect to load Font Awesome script
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Clean up the link when the component unmounts
        return () => {
            document.head.removeChild(link);
        };
    }, []); // Empty dependency array ensures this runs once on mount

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(products.length / productsPerPage);

    // Function to generate page numbers to display (e.g., 1, 2, ..., 5, 6, 7, ..., 10)
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5; // Max number of visible page buttons (excluding prev/next)

        if (totalPages <= maxPagesToShow) {
            // If total pages are few, show all
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // Always show first page
            pageNumbers.push(1);

            // Determine start and end of the middle range
            let startMiddle = Math.max(2, currentPage - Math.floor((maxPagesToShow - 3) / 2));
            let endMiddle = Math.min(totalPages - 1, currentPage + Math.ceil((maxPagesToShow - 3) / 2));

            // Adjust start/end if near boundaries
            if (currentPage < 3) {
                endMiddle = Math.min(totalPages - 1, maxPagesToShow - 1);
            } else if (currentPage > totalPages - 2) {
                startMiddle = Math.max(2, totalPages - (maxPagesToShow - 2));
            }

            // Add ellipsis at the beginning if needed
            if (startMiddle > 2) {
                pageNumbers.push('...');
            }

            // Add middle pages
            for (let i = startMiddle; i <= endMiddle; i++) {
                pageNumbers.push(i);
            }

            // Add ellipsis at the end if needed
            if (endMiddle < totalPages - 1) {
                pageNumbers.push('...');
            }

            // Always show last page
            if (totalPages > 1 && !pageNumbers.includes(totalPages)) {
                pageNumbers.push(totalPages);
            }
        }
        return pageNumbers;
    };

    return (
        <div className={styles.productsContainer}>

            <section className={styles.productsHeroSection}>
                <h1 className={styles.productsHeroTitle}>Our AI Products</h1>
                <p className={styles.productsHeroSubtitle}>
                    Discover our comprehensive suite of AI-powered chat solutions designed to transform your customer experience.
                </p>
                <div className={styles.productsHeroFeatures}>
                    <div className={styles.productsHeroFeatureItem}>
                        {/* Replaced SVG with Font Awesome <i> tag for robot icon */}
                        <i className={`fas fa-robot ${styles.icon}`}></i>
                        Smart AI
                    </div>
                    <div className={styles.productsHeroFeatureItem}>
                        {/* Replaced SVG with Font Awesome <i> tag for shield icon */}
                        <i className={`fas fa-shield-alt ${styles.icon}`}></i>
                        Secure
                    </div>
                    <div className={styles.productsHeroFeatureItem}>
                        {/* Replaced SVG with Font Awesome <i> tag for rocket icon */}
                        <i className={`fas fa-rocket ${styles.icon}`}></i>
                        Fast Setup
                    </div>
                </div>
            </section>

            <section className={styles.filterSortBar}>
                <div className={styles.filterGroupLeft}>
                    <div className={styles.filterGroup}>
                        <span className={styles.filterLabel}>Filter by:</span>
                        <select className={styles.filterSelect}>
                            <option>All Categories</option>
                            {/* Add more category options here */}
                        </select>
                    </div>
                    <div className={styles.filterGroup}>
                        <select className={styles.filterSelect}>
                            <option>All Pricing</option>
                            {/* Add more pricing options here */}
                        </select>
                    </div>
                </div>
                <div className={styles.sortGroupRight}>
                    <div className={styles.sortGroup}>
                        <span className={styles.sortLabel}>Sort by:</span>
                        <select className={styles.sortSelect}>
                            <option>Popular</option>
                            {/* Add more sort options here */}
                        </select>
                    </div>
                </div>
            </section>

            <main className={styles.productsMainContent}>
                <section className={styles.productGrid}>
                    {currentProducts.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </section>

                {/* Pagination Section */}
                <section className={styles.paginationSection}>
                    {/* Previous Button with Chevron Icon */}
                    <button
                        className={`${styles.paginationArrow} ${currentPage === 1 ? styles.disabled : ''}`}
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        {/* Using Font Awesome Icon via <i> tag */}
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    {/* Page Numbers and Ellipses */}
                    {getPageNumbers().map((pageNumber, index) => (
                        pageNumber === '...' ? (
                            <span key={`ellipsis-${index}`} className={styles.paginationEllipsis}>...</span>
                        ) : (
                            <button
                                key={pageNumber}
                                className={`${styles.paginationButton} ${currentPage === pageNumber ? styles.activePage : ''}`}
                                onClick={() => paginate(pageNumber)}
                                disabled={pageNumber === '...'} // Ensure ellipsis buttons are disabled
                            >
                                {pageNumber}
                            </button>
                        )
                    ))}

                    {/* Next Button with Chevron Icon */}
                    <button
                        className={`${styles.paginationArrow} ${currentPage === totalPages ? styles.disabled : ''}`}
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        {/* Using Font Awesome Icon via <i> tag */}
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </section>
            </main>

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

export default ProductsPage;