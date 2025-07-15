import styles from './NavBarPages.module.css'; // Adjust path if needed

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>AI Chat Supplies</div>

            <nav className={styles.headerNav}>
                <a href="/" className={styles.headerNavLink}>Home</a>
                <a href="/products" className={styles.headerNavLink}>Products</a>
                <a href="/about" className={styles.headerNavLink}>About</a>
                <a href="/contact" className={styles.headerNavLink}>Contact</a>
            </nav>

            <button className={styles.headerButton}>
                Get Started
            </button>

            <div className={styles.mobileMenuIcon}>
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </header>
    );
};

export default Header;
