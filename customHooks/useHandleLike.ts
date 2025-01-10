import { useState } from "react";
import { incrementLike } from "@/lib/appwrite/api";

const useHandleLike = (initialLikes: number, id: string | number) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    try {
      setIsLoading(true);
      setLikes((prev) => prev + 1);
      const response = await incrementLike(id);
      if (!response?.success) {
        setLikes((prev) => prev - 1);
      }
    } catch (error) {
      setLikes((prev) => prev - 1);
      console.error("Error al dar like:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLike,
    isLoading,
    likes,
  };
};

export default useHandleLike;
