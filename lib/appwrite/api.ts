/* eslint-disable @typescript-eslint/no-explicit-any */
import { appwriteConfig, databases, ID } from "@/lib/appwrite/config";
import { Quote } from "../validation";
// import { Query } from "appwrite";

interface CreateQuoteResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export const createQuote = async (
  formData: Quote
): Promise<CreateQuoteResponse> => {
  try {
    // Validar que todos los campos requeridos estén presentes
    if (!formData.description || !formData.book || !formData.author) {
      return {
        success: false,
        error: "Missing required fields",
      };
    }

    const response = await databases.createDocument(
      appwriteConfig.databaseId!,
      appwriteConfig.quoteCollectionId!,
      ID.unique(),
      {
        description: formData.description,
        book: formData.book,
        author: formData.author,
        // amountLikes: formData.amountLikes || 0
      }
    );

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error("Appwrite error:", error);
    return {
      success: false,
      error: "Failed to create quote",
    };
  }
};

export async function fetchQuotes() {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId!,
      appwriteConfig.quoteCollectionId!
      // [Query.orderDesc("$createdAt")]
    );

    return response.documents;
  } catch (error) {
    console.error("Error fetching quotes:", error);
    //throw new Error("Failed to fetch quotes");
  }
}

export async function fetchLikes() {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId!,
      appwriteConfig.likesCollectionId!
    );

    return response.documents;
  } catch (error) {
    console.error("Error fetching likes:", error);
  }
}

export const incrementLike = async (quoteId: string | number) => {
  try {
    const likeDocument = await databases.getDocument(
      appwriteConfig.databaseId!,
      appwriteConfig.likesCollectionId!,
      quoteId as string
    );

    if (likeDocument.$id) {
      const updatedLikesCount = (likeDocument.numberLikes || 0) + 1;
      const updatedLikeDocument = await databases.updateDocument(
        appwriteConfig.databaseId!,
        appwriteConfig.likesCollectionId!,
        quoteId as string,
        { numberLikes: updatedLikesCount }
      );
      return {
        success: true,
        data: updatedLikeDocument,
        message: "Likes collection updated",
      };
    }
  } catch (error) {
    if (error) {
      const newLikeDocument = await databases.createDocument(
        appwriteConfig.databaseId!,
        appwriteConfig.likesCollectionId!,
        quoteId as string, // Usa el mismo ID que la quote para fácil relación
        { numberLikes: 1 }
      );
      return {
        success: true,
        data: newLikeDocument,
        message: "New like document created",
      };
    } else {
      console.error("Error incrementing likes:", error);
      return {
        success: false,
        message: "Failed to increment likes",
        error: error,
      };
    }
  }
};
