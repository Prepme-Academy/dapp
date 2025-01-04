"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

const DailyStreak = ({ id }: { id: string }) => {
  console.log("🚀 ~ DailyStreak ~ id:", id);
  const router = useRouter();

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
          {1}
        </h2>
        <h3 className="text-lg font-medium text-muted-400">day streak</h3>
      </div>
      <Card className="w-full p-3 bg-transparent border-[#DFE2E6] space-y-3 flex flex-col items-start justify-start gap-3">
        <div className="grid grid-cols-7 gap-4 w-full">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
            (day, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-1 w-full"
              >
                <Image
                  src="/icons/dashboard/fire.svg"
                  alt={`${day} streak`}
                  width={40}
                  height={40}
                  className={`${
                    index === 0
                      ? "grayscale-0 opacity-100"
                      : "grayscale opacity-30"
                  }`}
                />
                <span className="text-sm font-medium text-muted-500">
                  {day}
                </span>
              </div>
            )
          )}
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

export default DailyStreak;
