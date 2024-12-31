"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { practiceDurationOptions } from "@/utils/constant";
import { cn } from "@/lib/utils";
import useUserStore from "@/store/userStore";
import { Loader2 } from "lucide-react";

const DurationOptionSelect: React.FC = () => {
  const [duration, setDuration] = useState(0);
  const { setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDurationSelect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (duration !== 0) {
      setUser({
        dailyDuration: duration,
      });
      router.push("/onboarding/notifications");
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  };

  return (
    <form
      onSubmit={handleDurationSelect}
      className="w-full flex flex-col items-center justify-center gap-4 mt-4"
    >
      {practiceDurationOptions.map((option) => (
        <Button
          key={option.id}
          type="button"
          variant={"unstyled"}
          className={cn(
            "w-full p-4 rounded-lg flex items-center justify-start bg-white border",
            duration === option.duration
              ? "border-primary-500"
              : "border-secondary-100"
          )}
          onClick={() => {
            setDuration(option.duration);
          }}
        >
          <span className="text-sm font-normal text-muted-500 uppercase">
            {option.name}
          </span>
        </Button>
      ))}
      <Button
        variant={"unstyled"}
        type="submit"
        disabled={duration === 0 || isLoading}
        className="bg-primary-400 text-white w-full h-10 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Continue"
        )}
      </Button>
    </form>
  );
};

export default DurationOptionSelect;
