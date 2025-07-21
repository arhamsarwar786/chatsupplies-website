import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRobot,
    faHeadset,
    faChartLine,
    faPuzzlePiece
} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/ShopByCategory.module.css';

const categoriesData = [
    {
        icon: faRobot,
        title: 'AI Chatbots',
        description: 'Smart automated chat solutions',
        bgColor: styles.lightBlue,
    },
    {
        icon: faHeadset,
        title: 'Live Support',
        description: 'Real-time customer support tools',
        bgColor: styles.lightGreen,
    },
    {
        icon: faChartLine,
        title: 'Analytics',
        description: 'Performance tracking & insights',
        bgColor: styles.lightPurple,
    },
    {
        icon: faPuzzlePiece,
        title: 'Integrations',
        description: 'Connect with your favorite tools',
        bgColor: styles.lightOrange,
    },
];

const ShopByCategory = () => {
    return (
        <section className={styles.categorySection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Shop by Category</h2>
                <p className={styles.sectionDescription}>Find the perfect solution for your business needs</p>
                <div className={styles.categories}>
                    {categoriesData.map((category, index) => (
                        <div key={index} className={styles.categoryCard}>
                            <div className={`${styles.iconCircle} ${category.bgColor}`}>
                                <FontAwesomeIcon
                                    icon={category.icon}
                                    size="lg"
                                    className={styles.categoryIcon}
                                />
                            </div>
                            <h3 className={styles.cardTitle}>{category.title}</h3>
                            <p className={styles.cardDescription}>{category.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopByCategory;
