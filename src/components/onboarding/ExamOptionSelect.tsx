"use client";

import { examOptions } from "@/utils/constant";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ExamOptionSelect: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-y-4 gap-x-3">
      {examOptions.map((option, index) => (
        <Button
          key={option.id}
          variant={"unstyled"}
          className={cn(
            "w-[calc(25%-12px)] min-h-[141px] p-4 rounded-lg flex flex-col items-center justify-center gap-4 bg-white border",
            selectedOption === option.name
              ? "border-primary-500"
              : "border-secondary-100",
            index === 4 ? "ml-[calc(129px/2)]" : ""
          )}
          onClick={() => {
            setSelectedOption(option.name);
            router.push("/onboarding/practice-duration");
          }}
        >
          <Image
            src={option.examicon}
            alt={`${option.name} icon`}
            width={54}
            height={54}
            priority
          />
          <span className="text-sm font-normal text-muted-500 uppercase">
            {option.name}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default ExamOptionSelect;
