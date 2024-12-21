"use client";

import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CloseButtonIcon: React.FC = () => {
  const router = useRouter();
  return (
    <Button
      variant={"unstyled"}
      onClick={() => router.back()}
      className="w-12 !h-12 bg-[#EFF8FF] rounded-full"
    >
      <X />
    </Button>
  );
};

export default CloseButtonIcon;
