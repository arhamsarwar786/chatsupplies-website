import Image from 'next/image';
import styles from '../styles/WhyChooseUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const features = [
    {
        title: 'Premium Quality',
        description: 'All products are tested and certified for enterprise-grade performance.',
    },
    {
        title: '24/7 Support',
        description: 'Round-the-clock customer support to help you succeed.',
    },
    {
        title: 'Easy Integration',
        description: 'Simple setup and seamless integration with existing systems.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className={styles.whyChooseSection}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContent}>
                        <h2 className={styles.sectionTitle}>Why Choose ChatSupplies?</h2>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureItem}>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className={styles.checkmarkIcon}
                                    style={{ fontSize: '28px' }} 
                                />
                                <div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.imageContent}>
                        <Image
                            src="/Images/TeamMeeting.jpeg"
                            alt="Team working"
                            width={550}
                            height={380}
                            className={styles.teamImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
