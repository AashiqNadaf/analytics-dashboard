import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { QuickAccessState } from './interface';
import { MAX_RECENTLY_VISITED } from './constant';

export const useQuickAccessStore = create<QuickAccessState>()(
  persist(
    (set, get) => ({
      favoriteRoutes: [],
      recentlyVisited: [],

      addFavorite: (route: string) => {
        set((state) => ({
          favoriteRoutes: [...state.favoriteRoutes, route],
        }));
      },

      removeFavorite: (route: string) => {
        set((state) => ({
          favoriteRoutes: state.favoriteRoutes.filter((r) => r !== route),
        }));
      },

      toggleFavorite: (route: string) => {
        const { favoriteRoutes, addFavorite, removeFavorite } = get();
        if (favoriteRoutes.includes(route)) {
          removeFavorite(route);
        } else {
          addFavorite(route);
        }
      },

      isFavorite: (route: string) => {
        return get().favoriteRoutes.includes(route);
      },

      addToRecentlyVisited: (route: string) => {
        set((state) => {
          const filtered = state.recentlyVisited.filter((r) => r !== route);
          const updated = [route, ...filtered].slice(0, MAX_RECENTLY_VISITED);
          return { recentlyVisited: updated };
        });
      },

      getRecentlyVisited: (limit = MAX_RECENTLY_VISITED) => {
        return get().recentlyVisited.slice(0, limit);
      },
    }),
    {
      name: 'quick-access-storage',
    }
  )
);
