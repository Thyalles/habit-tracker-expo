// Exercício 3 — useContext: Tema Claro/Escuro em todo o app
// Atividade Aplicada (Requisito 1) — Tema Global Persistido (useContext + AsyncStorage)
// Onde: src/context/theme-context.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const THEME_STORAGE_KEY = '@habits:theme';

// TODO Ex 3.1: Criar ThemeContext com createContext<ThemeContextType | undefined>(undefined)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY).then((value) => {
      if (value !== null) {
        setIsDark(JSON.parse(value));
      }
    });
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextValue = !prev;
      void AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(nextValue));
      return nextValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }

  return context;
}
