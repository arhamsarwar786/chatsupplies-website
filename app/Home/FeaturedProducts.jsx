import React from 'react';
import Image from 'next/image';
import styles from '../styles/FeaturedProducts.module.css';

const products = [
  {
    id: 1,
    name: 'AI ChatBot Pro',
    description: 'Advanced AI-powered chatbot with natural language processing and machine learning capabilities.',
    price: '$299',
    image: '/Images/AI Robot.png',
  },
  {
    id: 2,
    name: 'LiveChat Suite',
    description: 'Complete live chat solution with real-time messaging, file sharing, and team collaboration.',
    price: '$199',
    image: '/Images/Chat.png',
  },
  {
    id: 3,
    name: 'Chat Analytics Pro',
    description: 'Comprehensive analytics platform for monitoring chat performance and customer insights.',
    price: '$149',
    image: '/Images/Analytics.png',
  },
];

const FeaturedProducts = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Products</h2>
        <p className={styles.subtitle}>Best-selling chat solutions for modern businesses</p>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.productImage}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={styles.productDesc}>{product.description}</p>
                <div className={styles.cardFooter}>
                  <p className={styles.productPrice}>{product.price}</p>
                  <button className={styles.addToCart}>Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
