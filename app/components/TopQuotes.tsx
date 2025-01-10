import { Quote } from "@/types/quote"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Heart } from 'lucide-react'

interface TopQuotesProps {
  quotes: Quote[]
}

export function TopQuotes({ quotes }: TopQuotesProps) {
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Rank</TableHead>
          <TableHead>Frase</TableHead>
          <TableHead>Libro</TableHead>
          <TableHead>Autor</TableHead>
          <TableHead className="text-right">Likes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {quotes.map((quote, index) => (
          <TableRow key={quote.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{quote.description}</TableCell>
            <TableCell>{quote.book}</TableCell>
            <TableCell>{quote.author}</TableCell>
            <TableCell className="text-right">
              <span className="flex items-center justify-end">
                <Heart className="mr-2 h-4 w-4 text-red-500" />
                {quote.likes}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

