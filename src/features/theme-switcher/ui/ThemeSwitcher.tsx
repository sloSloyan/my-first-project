
import { useTheme } from '../../../app/providers/ThemeProvider/lib/useTheme';
import { Button } from '../../../shared/ui/Button';
// import { Button } from 'shared/ui/Button';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button  onClick={toggleTheme}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </Button>
  );
};
