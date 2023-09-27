import { z } from "zod";

export const registerSchema = z.object({
  username: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  email: z.string().email(),
});

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});
