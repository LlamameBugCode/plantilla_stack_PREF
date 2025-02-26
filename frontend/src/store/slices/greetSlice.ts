import { StateCreator } from 'zustand';

// Definir el tipo del slice
export type GreetSliceType = {
  response: string;
  setResponse: (message: string) => void;
};

// Crear el slice
export const createGreetSlice: StateCreator<GreetSliceType> = (set) => ({
  response: '',
  setResponse: (message) => set({ response: message }),
});