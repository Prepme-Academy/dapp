"use client";

import { Button } from "@/components/ui/button";
import { useExamTypes } from "@/lib/actions/exam.action";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ExploreExamType: React.FC = () => {
  const searchParams = useSearchParams();
  const exam = searchParams.get("exam_type");
  const [selectedExam, setSelectedExam] = useState<string>("");
  const { data, error, isLoading } = useExamTypes();
  const router = useRouter();

  useEffect(() => {
    if (exam) {
      setSelectedExam(exam as string);
    } else {
      setSelectedExam("");
    }
  }, [exam]);

  const handleExamTypeChange = (type: string) => {
    const newTypeSelect = type;
    setSelectedExam(newTypeSelect);

    // Update the query parameters in the URL
    const query = {
      type: newTypeSelect,
    };

    const queryString = new URLSearchParams(query).toString();
    router.push(`/dashboard/practice?${queryString}`);
  };

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="w-full min-h-[105px] rounded-lg flex flex-col items-center justify-center gap-4 p-3 bg-gray-200 animate-pulse"
              />
            ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500">
        Error loading exam types: {error.message}{" "}
      </div>
    );
  }

  const examOptions = data?.data || [];

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <h2 className="text-xl font-medium text-muted-500">Explore Exam Types</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {examOptions.map((option) => (
          <Button
            variant={"unstyled"}
            key={option.id}
            className={cn(
              "w-full min-h-[105px] rounded-lg bg-grey-400 flex flex-col items-center justify-center gap-4 p-3 cursor-pointer",
              selectedExam === option.name ? "border-2 border-primary-500" : ""
            )}
            onClick={() => handleExamTypeChange(option.name)}
          >
            <Image
              src={option.logo}
              alt={`${option.name} icon`}
              width={37}
              height={37}
              className="!h-auto"
            />
            <h4 className="text-sm font-normal">{option.name}</h4>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ExploreExamType;
