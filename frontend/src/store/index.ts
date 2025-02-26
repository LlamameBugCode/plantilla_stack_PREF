import { create } from 'zustand';
import { createGreetSlice, GreetSliceType } from './slices/greetSlice';
import { createAuthSlice, AuthSliceType } from './slices/authSlice';

// Definimos el tipo del store combinado
type StoreType = GreetSliceType & AuthSliceType;

// Creamos el store combinando los slices
export const useAppStore = create<StoreType>((...args) => ({
  ...createGreetSlice(...args),
  ...createAuthSlice(...args),
}));