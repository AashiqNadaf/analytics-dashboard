import { useEffect } from 'react';
import { useUserStore } from '../Store/userStore';

export const useUser = () => {
  const { user, isLoading, setUser, clearUser, initializeUser } =
    useUserStore();

  useEffect(() => {
    if (!user && !isLoading) {
      initializeUser();
    }
  }, [user, isLoading, initializeUser]);

  return {
    user,
    isLoading,
    setUser,
    clearUser,
    initializeUser,
  };
};
