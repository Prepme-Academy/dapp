"use client";

import { Button } from "@/components/ui/button";
import useFullscreen from "@/hooks/useFullScreen";
import { useRouter } from "next/navigation";

interface ActionButtonProps {
  id: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ id }) => {
  const router = useRouter();
  const { toggleFullscreen } = useFullscreen();

  return (
    <div className="w-full pt-4 flex items-center justify-end border-t border-grey-500 space-x-4">
      <Button
        type="button"
        variant={"unstyled"}
        onClick={() => router.back()}
        className="bg-secondary text-primary-400 hover:bg-secondary/80 w-fit h-9 px-9 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        Back
      </Button>

      <Button
        variant={"unstyled"}
        onClick={() => {
          toggleFullscreen();
          router.push(`/dashboard/practice/detail/${id}/preparing`);
        }}
        className="bg-primary-400 text-white w-fit px-6 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        I’m ready 💪🏼
      </Button>
    </div>
  );
};

export default ActionButton;
