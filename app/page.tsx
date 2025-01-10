import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateQuoteForm } from "./components/QuoteForm";
import { QuotesContent } from "./components/QuotesContent";
import Image from "next/image";
import logo from "./assets/logo.png"

export default async function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* <h1 className="text-4xl font-bold text-center mb-12">InspireBound</h1> */}
      <div className="flex items-center justify-between gap-4 mb-12">
        <Image
          src={logo} // Asegúrate que la ruta coincida con donde colocaste tu SVG
          alt="InspireBound Logo"
          width={100}
          height={100}
        />
        <h1 className="text-4xl font-bold">Biblio Quotes</h1>
        <h1 className="text-4xl font-bold"></h1>
      </div>
      <div className="flex justify-end mb-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create New Quote</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Quote</DialogTitle>
              <DialogDescription>
                Share an inspirational quote from your favorite book.
              </DialogDescription>
            </DialogHeader>
            <CreateQuoteForm />
          </DialogContent>
        </Dialog>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <QuotesContent />
      </Suspense>
    </main>
  );
}
