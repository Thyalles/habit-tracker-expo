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
  // TODO Ex 3.2: Criar estado isDark (useState(false)) e função toggleTheme
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // TODO Atividade Aplicada 1.1: Carregar a preferência de tema salva com AsyncStorage.getItem(THEME_STORAGE_KEY)
    void AsyncStorage;
    void THEME_STORAGE_KEY;
  }, []);

  const toggleTheme = () => {
    // TODO Ex 3.2 / Atividade Aplicada 1.2: Alternar isDark com atualização funcional (prev => !prev)
    // e salvar a nova preferência no disco com AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(nextValue))
    void setIsDark;
  };

  // TODO Ex 3.3: Retornar <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  // TODO Ex 3.4: Ler contexto com useContext(ThemeContext) e lançar erro se usado fora do ThemeProvider
  const context = useContext(ThemeContext);
  if (!context) {
    return { isDark: false, toggleTheme: () => {} };
  }
  return context;
}
