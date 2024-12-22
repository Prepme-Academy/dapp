"use client";

import { usePathname, useRouter } from "next/navigation";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { MoveLeft } from "lucide-react";

const OnboardingProgress: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const calculateProgress = () => {
    // Assuming your routes are structured like this
    const steps = {
      "/onboarding/username": 25,
      "/onboarding/exam-option": 50,
      "/onboarding/practice-duration": 75,
      "/onboarding/notifications": 100,
    };

    return steps[pathname as keyof typeof steps] || 0;
  };

  const showBackButton = [
    "/onboarding/practice-duration",
    "/onboarding/notifications",
  ].includes(pathname);

  return (
    <div className="md:-translate-y-10 flex items-center justify-start gap-2 w-full  md:w-[736px] mx-auto">
      {showBackButton && (
        <Button
          variant={"unstyled"}
          className="flex items-center justify-start gap-2 text-base font-normal text-[#334058]"
          onClick={() => router.back()}
        >
          <MoveLeft />
          <span> Back</span>
        </Button>
      )}
      <Progress value={calculateProgress()} className="w-full" />
    </div>
  );
};

export default OnboardingProgress;
