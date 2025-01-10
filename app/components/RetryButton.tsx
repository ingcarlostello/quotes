"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const RetryButton = () => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => {router.refresh()}}>
        Retry
      </Button>
    </>
  );
};

export default RetryButton;
