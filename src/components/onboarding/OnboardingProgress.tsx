"use client";

import { usePathname } from "next/navigation";
import { Progress } from "../ui/progress";

const OnboardingProgress: React.FC = () => {
  const pathname = usePathname();
  
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

  return (
    <div className="-translate-y-10">
      <Progress
        value={calculateProgress()}
        className="w-full md:w-[706px] mx-auto"
      />
    </div>
  );
};

export default OnboardingProgress;
