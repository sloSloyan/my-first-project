import { FC } from 'react';
// import { Button } from 'shared/ui/Button';
// import { ThemeSwitcher } from 'features/theme-switcher';
// import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Header.module.scss';
import { Button } from '../../../shared/ui/Button';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { ThemeSwitcher } from '../../../features/theme-switcher/ui/ThemeSwitcher';

interface HeaderProps {
  className?: string;
  title?: string;
}

export const Header: FC<HeaderProps> = ({ className, title }) => {
  return (
    <header>
      <div className={styles.logo}>{title}</div>
      
      <nav className={styles.nav}>
        <Button 
        //   variant="clear"  Насчет variant надо будет спросить ИИ
          onClick={() => console.log('Navigate to home')}
        >
          Home
        </Button>
        <Button 
        //   variant="clear"
          onClick={() => console.log('Navigate to about')}
        >
          About
        </Button>
      </nav>
      
      <div className={styles.controls}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};