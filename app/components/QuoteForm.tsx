"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuoteForm } from "@/customHooks/useQuoteForm";

export function CreateQuoteForm() {
  const { form, onSubmit, isPending } = useQuoteForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quote</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter the quote here..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The inspirational quote from the book you want to share.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="book"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Book</FormLabel>
              <FormControl>
                <Input placeholder="Book Title" {...field} />
              </FormControl>
              <FormDescription>
                The title of the book the quote comes from.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Author's name" {...field} />
              </FormControl>
               {/* eslint-disable-next-line react/no-unescaped-entities */}
              <FormDescription>The name of the book's author.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Create Quote"}
        </Button>
      </form>
    </Form>
  );
}
