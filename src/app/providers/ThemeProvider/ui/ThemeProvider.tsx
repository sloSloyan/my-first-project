import React, { 
    useState, 
    createContext, 
    useContext, 
    FC, 
    ReactNode 
  } from 'react';
  
  type Theme = 'light' | 'dark';
  
  interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
  }
  
  export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
  
  export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');
  
    const toggleTheme = () => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`app ${theme}`}>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  };