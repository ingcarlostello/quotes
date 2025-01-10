/* eslint-disable @typescript-eslint/no-explicit-any */
export function transformAndSortQuotes(quotes: any[]) {
  // Verificar si quotes es válido
  if (!quotes || !Array.isArray(quotes)) {
    console.error("Quotes no es un array válido:", quotes);
    return [];
  }
  //return [...quotes]
  return quotes
    .filter((quote) => quote && quote.$id && quote.description)
    .map((quote) => ({
      id: quote.$id, // Renombrar $id a id
      description: quote.description,
      book: quote.book,
      author: quote.author,
      //user: "anonymous", // Valor predeterminado para user
      likes: quote.numberLikes, // Renombrar amountLikes a likes
    }))
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 10);
}

export function mergeQuotesWithLikes(quotes: any[], likes: any[]) {
  return quotes?.map((quote: any) => {
    const like = likes.find((likeItem) => likeItem.$id === quote.$id);
    return {
      ...quote,
      numberLikes: like ? like.numberLikes : 0, // Si no hay likes, establece 0
    };
  });
}
