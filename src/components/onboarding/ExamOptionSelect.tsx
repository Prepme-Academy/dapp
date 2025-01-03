"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";
import { useExamTypes } from "@/lib/actions/exam.action";

const ExamOptionSelect: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const { setUser } = useUserStore();
  const router = useRouter();
  const { data, error, isLoading } = useExamTypes();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleExamSelect = (examName: string) => {
    if (isProcessing) return; // Prevent multiple clicks

    setIsProcessing(true);
    setSelectedOption(examName);

    setUser({
      examType: examName,
    });
    router.push("/onboarding/practice-duration");
  };

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="w-full hidden lg:flex flex-wrap items-center justify-center gap-y-4 gap-x-3">
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-[calc(25%-12px)] min-h-[141px] p-4 rounded-lg flex flex-col items-center justify-center gap-4 bg-gray-200 animate-pulse"
              />
            ))}
        </div>
        <div className="w-full grid grid-cols-2 lg:hidden items-center justify-center gap-y-4 gap-x-3">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-full min-h-[141px] p-4 rounded-lg flex flex-col items-center justify-center gap-4 bg-gray-200 animate-pulse"
              />
            ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500">
        Error loading exam types: {error.message}
      </div>
    );
  }

  const examOptions = data?.data || [];

  return (
    <div className="w-full">
      <div className="w-full hidden lg:flex flex-wrap items-center justify-center gap-y-4 gap-x-3">
        {examOptions.map((option, index) => (
          <Button
            key={option.id}
            variant={"unstyled"}
            disabled={isProcessing}
            className={cn(
              "w-[calc(25%-12px)] min-h-[141px] p-4 rounded-lg flex flex-col items-center justify-center gap-4 bg-white border",
              selectedOption === option.name
                ? "border-primary-500"
                : "border-secondary-100",
              index === 4 ? "ml-[calc(129px/2)]" : "",
              isProcessing ? "cursor-not-allowed opacity-50" : ""
            )}
            onClick={() => handleExamSelect(option.name)}
          >
            <Image
              src={option.logo}
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
      <div className="w-full grid grid-cols-2 lg:hidden items-center justify-center gap-y-4 gap-x-3">
        {examOptions.map((option) => (
          <Button
            key={option.id}
            variant={"unstyled"}
            disabled={isProcessing}
            className={cn(
              "w-full min-h-[141px] p-4 rounded-lg flex flex-col items-center justify-center gap-4 bg-white border",
              selectedOption === option.name
                ? "border-primary-500"
                : "border-secondary-100",
              isProcessing ? "cursor-not-allowed opacity-50" : ""
            )}
            onClick={() => handleExamSelect(option.name)}
          >
            <Image
              src={option.logo}
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
    </div>
  );
};

export default ExamOptionSelect;
