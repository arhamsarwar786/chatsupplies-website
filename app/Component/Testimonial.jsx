"use client";

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Image from 'next/image';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    // Original testimonial data (quotes and roles)
    const staticTestimonialData = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, TechStart',
            quote: '"ChatSupplies transformed our customer service. The AI chatbot handles 80% of inquiries automatically."',
        },
        {
            name: 'Mike Chen',
            role: 'CTO, DataFlow',
            quote: '"The integration was seamless and the analytics provide incredible insights into customer behavior."',
        },
        {
            name: 'Emma Wilson',
            role: 'Marketing Director, GrowthCo',
            quote: '"Outstanding support and powerful features. Our conversion rates increased by 40% after implementation."',
        },
    ];

    // State to hold the testimonials with fetched avatars
    const [testimonials, setTestimonials] = useState(staticTestimonialData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRandomUsers = async () => {
            try {
                // Fetch 3 random users for the 3 testimonials
                const response = await fetch('https://randomuser.me/api/?results=3&inc=picture');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const randomAvatars = data.results.map(user => user.picture.large);

                // Combine static testimonial data with random avatars
                const updatedTestimonials = staticTestimonialData.map((testimonial, index) => ({
                    ...testimonial,
                    avatar: randomAvatars[index] || '/images/default-avatar.png', // Fallback avatar if fetching fails
                }));

                setTestimonials(updatedTestimonials);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch random users:", err);
                setError(err);
                setLoading(false);
                // If fetching fails, still display testimonials with static/default avatars
                setTestimonials(staticTestimonialData.map(t => ({ ...t, avatar: '/images/default-avatar.png' })));
            }
        };

        fetchRandomUsers();
    }, []); // Empty dependency array means this effect runs once on mount

    const renderStars = () => {
        return (
            <div className={styles.stars}>
                <span className={styles.star}>&#9733;</span>
                <span className={styles.star}>&#9733;</span>
                <span className={styles.star}>&#9733;</span>
                <span className={styles.star}>&#9733;</span>
                <span className={styles.star}>&#9733;</span>
            </div>
        );
    };

    if (loading) {
        return (
            <section className={styles.testimonialsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
                    <p>Loading testimonials...</p>
                </div>
            </section>
        );
    }

    if (error) {
        // You might want a more sophisticated error display
        return (
            <section className={styles.testimonialsSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
                    <p>Failed to load images, displaying defaults. Please check your internet connection.</p>
                    {/* Render testimonials with default avatars even on error */}
                     <div className={styles.testimonialsGrid}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={styles.testimonialCard}>
                                <div className={styles.customerInfo}>
                                    <Image
                                        src={testimonial.avatar} // Will be default if fetch failed
                                        alt={testimonial.name}
                                        width={60}
                                        height={60}
                                        className={styles.customerAvatar}
                                    />
                                    <div>
                                        <h4 className={styles.customerName}>{testimonial.name}</h4>
                                        <p className={styles.customerRole}>{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className={styles.quote}>{testimonial.quote}</p>
                                {renderStars()}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }


    return (
        <section className={styles.testimonialsSection}>
            <div className="container">
                <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.testimonialCard}>
                            <div className={styles.customerInfo}>
                                <Image
                                    src={testimonial.avatar} // This will now be the fetched random user image URL
                                    alt={testimonial.name}
                                    width={60}
                                    height={60}
                                    className={styles.customerAvatar}
                                />
                                <div>
                                    <h4 className={styles.customerName}>{testimonial.name}</h4>
                                    <p className={styles.customerRole}>{testimonial.role}</p>
                                </div>
                            </div>
                            <p className={styles.quote}>{testimonial.quote}</p>
                            {renderStars()}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;