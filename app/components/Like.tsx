"use client";
import { Button } from "@/components/ui/button";
import useHandleLike from "@/customHooks/useHandleLike";
import { LikeProps } from "@/types/like";
import { Heart } from "lucide-react";

const Like = ({ id, amountLikes }: LikeProps) => {
  const { handleLike, isLoading, likes } = useHandleLike(amountLikes, id);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLike}
      className="ml-auto"
      disabled={isLoading}
    >
      <Heart
        className={`mr-2 h-4 w-4 ${
          likes > amountLikes ? "fill-current text-red-500" : ""
        }`}
      />
      {amountLikes < likes ? likes : amountLikes}
    </Button>
  );
};

export default Like;
