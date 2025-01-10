export interface Quote {
  id: number | string;
  description: string;
  book: string;
  author: string;
  likes?: number;
}

export interface QuoteCardProps {
  id: number | string;
  description: string;
  book: string;
  author: string;
  amountLikes: number;
}


export interface CombinedQuotes {
  description: string;
  book: string;
  author: string;
  $id: string;
  $createdAt?: string;
  $updatedAt?: string;
  $permissions?: any[];
  numberLikes: number;
  $databaseId?: string;
  $collectionId?: string;
}

