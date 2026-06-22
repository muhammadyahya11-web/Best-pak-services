import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'luxury';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      if (prev === 'luxury') return 'dark';
      if (prev === 'dark') return 'light';
      return 'luxury';
    });
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme,
    isLuxury: theme === 'luxury',
    isDark: theme === 'dark',
    isLight: theme === 'light',
  }), [theme, toggleTheme]);

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
