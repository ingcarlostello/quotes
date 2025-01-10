import { NextResponse } from "next/server";
import { createQuote } from "@/lib/appwrite/api";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.description || !body.book || !body.author) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Crear la cita usando tu función de Appwrite
    const result = await createQuote({
      description: body.description,
      book: body.book,
      author: body.author,
      amountLikes: body.amountLikes,
    });

    return NextResponse.json(
      { message: "Quote created successfully", data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating quote:", error);
    return NextResponse.json(
      { message: "", error },
      { status: 500 }
    );
  }
}
