import { z } from 'zod';

export const greetSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido' }),
});

export type GreetInput = z.infer<typeof greetSchema>;