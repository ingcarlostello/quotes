
import { fetchLikes, fetchQuotes } from "@/lib/appwrite/api";
import {
  mergeQuotesWithLikes,
  transformAndSortQuotes,
} from "@/lib/quoteHelpers";
import { TopQuotes } from "./TopQuotes";
import { QuoteCard } from "./QuoteCard";
import { CombinedQuotes } from "@/types/quote";
import RetryButton from "./RetryButton";

export const dynamic = "force-dynamic";

export async function QuotesContent() {
  const quoteList = await fetchQuotes();



  const likesList = await fetchLikes();


  if (quoteList === undefined || likesList === undefined) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-center">
          <p className="text-lg">Oops</p>
          <p className="text-lg">
            We couldnt load the quotes due to a server error
          </p>
          <p className="text-lg">Please try again</p>
        </div>
        <RetryButton />
      </div>
    );
  }
  
  const combinedQuotes = mergeQuotesWithLikes(quoteList, likesList);
  const topQuotes = transformAndSortQuotes(combinedQuotes);

  return (
    <>
      <div>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Top 10 Most Inspiring Quotes
          </h2>
          <TopQuotes quotes={topQuotes} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">All Quotes</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {combinedQuotes?.map((quote: CombinedQuotes) => (
              <QuoteCard
                key={quote.$id}
                id={quote.$id}
                description={quote.description}
                book={quote.book}
                author={quote.author}
                amountLikes={quote.numberLikes}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
