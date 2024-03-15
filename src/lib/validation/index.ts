import { z } from "zod";
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Name must be of atleast 2 characters" }),
  username: z
    .string()
    .min(2, { message: "Username must be of atleast 2 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be of atleast 8 characters" }),
});
export const SigninValidation = z.object({
  name: z.string().min(2, { message: "Name must be of atleast 2 characters" }),
  username: z
    .string()
    .min(2, { message: "Username must be of atleast 2 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be of atleast 8 characters" }),
});
