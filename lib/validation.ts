// @Zod
import { z } from "zod";

export const Quotes = z.object({
  description: z.string().min(5, {message: "Description must be at least 5 characters long"}),
  book: z.string().min(5, {message: "Book description must be at least 5 characters"}),
  author: z.string().min(2, {message: "Author must be at least 2 characters long"}),
  amountLikes: z.number(),
});

export type Quote = z.infer<typeof Quotes>
