export type Theme = {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  tertiary: string;
  border: string;
  placeholder: string;
  currentTheme: 'dark' | 'light';
  secondaryText: string;
  tertiaryText: string;
  itemActiveBg: string;
};

export type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

export type UserState = {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  initializeUser: () => Promise<void>;
};

export interface QuickAccessState {
  favoriteRoutes: string[];
  recentlyVisited: string[];
  addFavorite: (route: string) => void;
  removeFavorite: (route: string) => void;
  toggleFavorite: (route: string) => void;
  isFavorite: (route: string) => boolean;
  addToRecentlyVisited: (route: string) => void;
  getRecentlyVisited: (limit?: number) => string[];
}