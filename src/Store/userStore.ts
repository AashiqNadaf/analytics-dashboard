import { create } from 'zustand';
import type { UserState, User } from './interface';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,

  setUser: (user: User | null) => {
    set({ user });
  },

  clearUser: () => {
    set({ user: null });
  },

  initializeUser: async () => {
    set({ isLoading: true });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      set({ user: mockUser, isLoading: false });
    } catch (error) {
      console.error('Failed to initialize user:', error);
      set({ user: null, isLoading: false });
    }
  },
}));
