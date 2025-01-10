"use client";

import { Quote, Quotes } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTransition } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export const useQuoteForm = () => {
  const router = useRouter()
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const formSchema = Quotes;

  const form = useForm<Quote>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      book: "",
      author: "",
      amountLikes: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      try {
        const res = await fetch("/api/createQuote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: values.description,
            book: values.book,
            author: values.author,
            amountLikes: values.amountLikes || 0,
          }),
        });

        if (!res.ok) {
          throw new Error("Error en la petición");
        }

        // const data = await res.json();

        toast({
          title: "Success!",
          description: "The quote has been created successfully.",
        });

        form.reset();
        router.refresh()
      } catch (error) {
        toast({
          title: "Error",
          description: "Ocurrió un error al crear la cita.",
          variant: "destructive",
        });
      }
    });
  };

  return {
    form,
    onSubmit,
    isPending,
  };
};
