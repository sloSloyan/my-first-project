import { SocialLinks } from '../../../features/social-links/ui/SocialLinks';
import { Logo } from '../../../shared/ui/Logo/ui/Logo';
import styles from './Footer.module.scss';


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoColumn}>
          <Logo />
          <p className={styles.description}>
            Создаем цифровые продукты, которые помогают бизнесу расти и развиваться
          </p>
          <SocialLinks />
        </div>

        <div className={styles.linksColumns}>
          <div className={styles.linksGroup}>
            <h3 className={styles.linksTitle}>Навигация</h3>
            <ul className={styles.linksList}>
              <li><a href="#home">Главная</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#portfolio">Портфолио</a></li>
              <li><a href="#project-creation">Начать проект</a></li>
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h3 className={styles.linksTitle}>Контакты</h3>
            <ul className={styles.linksList}>
              <li>hello@yourcompany.com</li>
              <li>+7 (123) 456-78-90</li>
              <li>Москва, ул. Примерная, 123</li>
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h3 className={styles.linksTitle}>Ресурсы</h3>
            <ul className={styles.linksList}>
              <li><a href="/blog">Блог</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/docs">Документация</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p className={styles.copyright}>
          © {currentYear} Your Company. Все права защищены
        </p>
        <div className={styles.legalLinks}>
          <a href="/privacy">Политика конфиденциальности</a>
          <a href="/terms">Условия использования</a>
        </div>
      </div>
    </footer>
  );
};