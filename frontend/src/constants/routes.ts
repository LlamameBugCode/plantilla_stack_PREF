export const ROUTES = {
  HOME: '/',
  formulario1: '/formulario1', // Corregir la ruta
  formulario2: '/formulario2',
} as const;

// Tipo para las rutas
export type AppRoutes = typeof ROUTES;