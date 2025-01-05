"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import four from "../assets/features/four.svg";
import one from "../assets/features/one.svg";
import three from "../assets/features/three.svg";
import two from "../assets/features/two.svg";
import Feature from "../Feature";

const features = [
  {
    title: "Quests & Streaks",
    description:
      "Set your goals, maintain your momentum, and watch the blockchain-verified rewards stack up. Complete daily challenges and keep your streak alive to unlock special achievements.",
    icon: one,
  },
  {
    title: "Leaderboard",
    description:
      "Make your mark on the PrepMe community. Compete weekly, climb the ranks, and show off your blockchain-verified academic prowess. Your dedication deserves recognition.",
    icon: two,
  },
  {
    title: "Rewards System",
    description:
      "Transform your study efforts into valuable digital assets. Earn XP points that can be converted to crypto, unlock achievement badges, and collect exclusive NFTs on EDUCHAIN as you progress.",
    icon: three,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your journey with detailed insights and analytics. Get personalized recommendations based on your performance, all secured and verified on the blockchain.",
    icon: four,
  },
];

export default function FeatureSection() {
  const router = useRouter();
  return (
    <section
      data-label="features"
      aria-label="features"
      className={cn(
        "px-4 py-[5rem] lg:py-[6.9375rem] bg-alabaster flex flex-col items-center"
      )}
    >
      <h1 className="text-[2rem] leading-[2.42rem] lg:text-[3rem] lg:leading-[3.63rem] mb-[2.8125rem] lg:mb-[4.1875rem] text-shark font-semibold text-center">
        Study Smart, <br className="sm:hidden" /> Earn Big
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-[3.625rem] w-full md:w-auto max-w-[77.5rem] mx-auto">
        {features.map((details, index) => (
          <Feature {...details} key={index} />
        ))}
      </div>
      <Button
        className="!max-w-[14.0625rem] !h-auto !w-full !px-4 !py-[0.625rem] block lg:text-[1.091875rem] text-sm bg-primary-400 text-white gradient-border shadow-buttonshadow outline-none"
        onClick={() => router.push("/login")}
      >
        Start practicing
      </Button>
    </section>
  );
}
