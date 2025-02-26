import { StateCreator } from 'zustand';

// Definimos el tipo del slice
export type AuthSliceType = {
  isAuthenticated: boolean;
  user: null | { id: number; name: string; email: string };
  login: (userData: { id: number; name: string; email: string }) => void;
  logout: () => void;
};

// Creamos el slice usando StateCreator
export const createAuthSlice: StateCreator<AuthSliceType> = (set) => ({
  isAuthenticated: false,
  user: null,
  login: (userData) =>
    set({
      isAuthenticated: true,
      user: userData,
    }),
  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
});