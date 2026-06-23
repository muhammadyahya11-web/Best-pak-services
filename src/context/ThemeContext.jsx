import { createContext, useContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const value = useMemo(() => ({
    theme,
    isDark: true,
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
