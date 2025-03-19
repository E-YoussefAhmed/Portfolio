import { z } from "zod";

export type ContactData = z.infer<typeof ContactSchema>;

export const ContactSchema = z.object({
  name: z.string().min(3, "Name must be  at least 3 characters!").trim(),
  email: z.string().email("Invalid Email!").min(1, "Email is required!").trim(),
  phone: z.string(),
  message: z.string().min(10, "Message must be  at least 10 characters!"),
});
