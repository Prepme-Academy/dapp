"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {   X  } from "lucide-react";
import Image from "next/image";
import { usePrivy } from "@privy-io/react-auth";
import { useWeeklyStreak } from "@/lib/actions/activities.action";
import ErrorDisplay from "@/components/ui/ErrorDisplay";

const DailyStreak = ({}: { id: string }) => {
  const router = useRouter();
  const { user } = usePrivy();
  const authUserId = user?.id || "";
  
  const { 
    data, 
    isLoading, 
    error, 
    refetch 
  } = useWeeklyStreak(authUserId);

  const currentStreak = 
    data?.weekDays.filter((day) => day.isComplete).length || 0;

  if (isLoading) {
    return <StreakSkeleton />;
  }

  if (error) {
    return <ErrorDisplay error={error} retry={() => refetch()} />;
  }

  const { weekDays } = data;

  return (
    <Card className="w-full max-w-[483px] mx-auto p-4 border-grey-500 flex flex-col items-center justify-center relative">
      <Button
        variant={"unstyled"}
        className="absolute right-3 top-3 rounded-full w-10 h-10 bg-[#EFF8FF] flex items-center justify-center "
        onClick={() => router.back()}
      >
        <X className="h-4 w-4" />
      </Button>
      <div className="flex flex-col items-center justify-center gap-2 mt-6 relative">
        <Image
          src="/icons/dashboard/fire.svg"
          alt="fire icon"
          width={99}
          height={99}
          priority
        />
        <h2
          className="font-medium text-8xl font-mono absolute bottom-6 text-center"
          style={{
            color: "#FFFFFF",
            WebkitTextStroke: "2px #000000",
            fontWeight: "bold",
          }}
        >
          {currentStreak}
        </h2>
        <h3 className="text-lg font-medium text-muted-400">day streak</h3>
      </div>
      <Card className="w-full p-3 bg-transparent border-[#DFE2E6] space-y-3 flex flex-col items-start justify-start gap-3">
        <div className="grid grid-cols-7 gap-4 w-full">
          {weekDays.map((weekDay, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1 w-full"
            >
              <Image
                src="/icons/dashboard/fire.svg"
                alt={`${weekDay.day} streak`}
                width={40}
                height={40}
                className={`${
                  weekDay.isComplete
                    ? "grayscale-0 opacity-100"
                    : "grayscale opacity-30"
                }`}
              />
              <span className="text-sm font-medium text-muted-500">
                {weekDay.day}
              </span>
            </div>
          ))}
        </div>
        <Card className="w-full py-4 px-8 border-grey-500 flex flex-col items-center justify-center gap-3">
          <p className="text-xs font-normal text-center">
            Your streak will reset to zero if you miss tomorrow’s practice. Stay
            alert!
          </p>
          <span className="text-xs text-center font-normal text-primary-400">
            What’s a streak?
          </span>
        </Card>
      </Card>
    </Card>
  );
};


const StreakSkeleton = () => (
  <Card className="w-full max-w-[483px] mx-auto p-4 border-grey-500 flex flex-col items-center justify-center relative animate-pulse">
    <div className="absolute right-3 top-3 w-10 h-10 bg-gray-200 rounded-full" />
    
    <div className="flex flex-col items-center justify-center gap-2 mt-6 relative">
      {/* Fire icon placeholder */}
      <div className="w-[99px] h-[99px] bg-gray-200 rounded-full" />
      {/* Streak number placeholder */}
      <div className="h-24 w-24 bg-gray-200 rounded-lg mt-2" />
      {/* "day streak" text placeholder */}
      <div className="h-6 w-24 bg-gray-200 rounded mt-2" />
    </div>

    <Card className="w-full p-3 bg-transparent border-[#DFE2E6] mt-4">
      <div className="grid grid-cols-7 gap-4 w-full">
        {Array(7).fill(null).map((_, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div className="w-8 h-4 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
      
      <Card className="w-full mt-3 py-4 px-8 border-grey-500">
        <div className="h-4 w-full bg-gray-200 rounded mb-2" />
        <div className="h-4 w-3/4 bg-gray-200 rounded mx-auto" />
      </Card>
    </Card>
  </Card>
);

export default DailyStreak;
