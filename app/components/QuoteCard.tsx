import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuoteCardProps } from "@/types/quote";
import Like from "./Like";

export async function QuoteCard({
  id,
  author,
  book,
  description,
  amountLikes
}: QuoteCardProps) {
  
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${author}`}
            />
            <AvatarFallback>
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{book}</p>
            <p className="text-sm text-gray-400">{author}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
         {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-lg italic">"{description}"</p>
      </CardContent>
      <CardFooter>
        <Like id={id} amountLikes={amountLikes} />
      </CardFooter>
    </Card>
  );
}
