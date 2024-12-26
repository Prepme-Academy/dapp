"use client";

import { cn } from "@/lib/utils";
import { examOptions } from "@/utils/constant";
import Image from "next/image";
import {  useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ExploreExamType: React.FC = () => {
  const searchParams = useSearchParams();
  const exam = searchParams.get("exam");
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  useEffect(() => {
    if (exam) {
      setSelectedExam(exam as string);
    } else {
      setSelectedExam(null);
    }
  }, [exam]);

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <h2 className="text-xl font-medium text-muted-500">Explore Exam Types</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {examOptions.map((option) => (
          <div
            key={option.id}
            className={cn(
              "w-full min-h-[105px] rounded-lg bg-grey-400 flex flex-col items-center justify-center gap-4 p-3 cursor-pointer",
              selectedExam === option.id ? "border-2 border-primary-500" : ""
            )}
          >
            <Image
              src={option.examicon}
              alt={`${option.name} icon`}
              width={37}
              height={37}
              className="!h-auto"
            />
            <h4 className="text-sm font-normal">{option.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreExamType;
