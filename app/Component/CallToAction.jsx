import Link from 'next/link';
import styles from './CallToAction.module.css';

const CallToAction = () => {
    return (
        <section className={styles.ctaSection}>
            <div className="container"> {/* Assuming 'container' is a global utility class for centering/max-width */}
                <h2 className={styles.sectionTitle}>Ready to Transform Your Business?</h2>
                <p className={styles.sectionDescription}>Join thousands of businesses already using ChatSupplies to enhance their customer experience.</p>
                <div className={styles.ctaButtons}>
                    <Link href="/shop" passHref>
                        <button className={styles.primaryButton}>Start Shopping</button>
                    </Link>
                    <Link href="/contact" passHref>
                        <button className={styles.secondaryButton}>Contact Sales</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;