import { create } from 'zustand';
import type { ThemeState } from './interface';
import { darkTheme, lightTheme, THEME_KEY } from './constant';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return lightTheme;

  const savedTheme = localStorage.getItem(THEME_KEY);
  return savedTheme === 'dark' ? darkTheme : lightTheme;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      const newTheme =
        state.theme.currentTheme === 'light' ? darkTheme : lightTheme;

      if (typeof window !== 'undefined') {
        localStorage.setItem(THEME_KEY, newTheme.currentTheme);
      }

      return { theme: newTheme };
    }),
}));
