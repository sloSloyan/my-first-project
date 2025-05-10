// import { Header } from 'widgets/header'
// import { Counter } from 'features/counter'

import { Button } from '../../../shared/ui/Button';
import { Footer } from '../../../widgets/footer/ui/Footer';
import { Header } from '../../../widgets/header/ui/Header';
import { ProjectCreation } from '../../../widgets/project-creation';
import styles from './HomePage.module.scss';


export function HomePage() {
  const scrollToProject = () => {
    const element = document.getElementById('project-creation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles.page}>
      {/* <Header /> */} 
      {/* Надо сделать нормальный Header */}
      
      <main className="container">
        <section className={styles.hero}>
          <h1 className={styles.hero__title}>Создаём цифровые продукты мирового класса</h1>
          <p className={styles.hero__subtitle}>Мы помогаем бизнесу трансформировать идеи в мощные цифровые решения с помощью передовых технологий</p>
          <Button variant="primary"  className={styles.ctaButton} onClick={scrollToProject}> 
          <span className={styles.buttonText}>Начать проект</span>
          <span className={styles.buttonIcon}>→</span>
          </Button>
        </section>
        </main>
        <main className="container">
        <section className={styles.features}>
          {['UX/UI Дизайн', 'Веб-разработка', 'Мобильные приложения'].map((feature) => (
            <div key={feature} className={styles.features__card}>
              <h3>{feature}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          ))}
        </section>
        </main>
        <main className="container">
        <section className={styles.cta}>
          <h2 className={styles.cta__title}>Готовы к сотрудничеству?</h2>
          <a href="#contact" className={styles.cta__button}>Связаться с нами</a>
        </section>
        </main>
        <div className="containerProject">
        <ProjectCreation />
        </div>
      <Footer />
    </div>
  );
}