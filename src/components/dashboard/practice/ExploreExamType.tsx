"use client";

import { Button } from "@/components/ui/button";
import { useExamTypes } from "@/lib/actions/exam.action";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ExploreExamType: React.FC = () => {
  const searchParams = useSearchParams();
  const { data, error, isLoading } = useExamTypes();
  const router = useRouter();
  const pathname = usePathname();

  const currentType = searchParams.get("type") || "";

  const handleExamTypeChange = (type: string) => {
    if (currentType === type) return;

    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set("type", type);

    router.push(`/dashboard/practice?${newSearchParams.toString()}`);
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
      <div className="w-full overflow-hidden hover:overflow-y-hidden hover:overflow-x-auto type pb-4">
        <div className="w-max grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <Button
            variant={"unstyled"}
            className={cn(
              "w-full min-h-[105px] rounded-lg bg-grey-400 flex flex-col items-center justify-center gap-4 p-3 cursor-pointer",
              pathname === "/dashboard/practice"
                ? "border-2 border-primary-500"
                : ""
            )}
            onClick={() => router.push("/dashboard/practice")}
          >
            <Image
              src="/icons/onboarding/all.svg"
              alt={`all icon`}
              width={37}
              height={37}
              className="!h-auto"
            />
            <h4 className="text-sm font-normal">All exams</h4>
          </Button>
          {examOptions.map((option) => (
            <Button
              variant={"unstyled"}
              key={option.id}
              className={cn(
                "w-full min-h-[105px] rounded-lg bg-grey-400 flex flex-col items-center justify-center gap-4 p-3 cursor-pointer",
                currentType === option.name ? "border-2 border-primary-500" : ""
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
    </div>
  );
};

export default ExploreExamType;
