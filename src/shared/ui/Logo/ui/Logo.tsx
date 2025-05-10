import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.logoPrimary}>Your</span>
      <span className={styles.logoSecondary}>Company</span>
    </div>
  );
};