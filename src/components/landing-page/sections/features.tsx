"use client";

import one from "../assets/features/one.svg";
import two from "../assets/features/two.svg";
import three from "../assets/features/three.svg";
import four from "../assets/features/four.svg";
import { cn } from "@/lib/utils";
import Feature from "../Feature";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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
        "px-4 sm:p-10 bg-neutral-100 space-y-20 py-20 flex flex-col items-center"
      )}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold text-center">
        Study Smart, <br className="sm:hidden" /> Earn Big
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 w-full md:w-auto">
        {features.map((details, index) => (
          <Feature {...details} key={index} />
        ))}
      </div>
      <Button className="w-[225px]" onClick={() => router.push("/login")}>
        Start practicing
      </Button>
    </section>
  );
}
