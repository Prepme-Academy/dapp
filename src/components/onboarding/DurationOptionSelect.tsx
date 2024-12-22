"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { practiceDurationOptions } from "@/utils/constant";
import { cn } from "@/lib/utils";
import useClientStore from "@/store/clientStore";

const DurationOptionSelect: React.FC = () => {
  const [duration, setDuration] = useState("");
  const router = useRouter();
  const { setFirstVisit } = useClientStore();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 mt-4">
      {practiceDurationOptions.map((option) => (
        <Button
          key={option.id}
          variant={"unstyled"}
          className={cn(
            "w-full p-4 rounded-lg flex items-center justify-start bg-white border",
            duration === option.name
              ? "border-primary-500"
              : "border-secondary-100"
          )}
          onClick={() => {
            setDuration(option.name);
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
        disabled={duration.length === 0}
        onClick={() => {
          router.push("/onboarding/notifications");
          setFirstVisit(true);
        }}
        className="bg-primary-400 text-white w-full h-10 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        Continue
      </Button>
    </div>
  );
};

export default DurationOptionSelect;
