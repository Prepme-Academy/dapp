import { LeaderboardCard } from "@/components/dashboard/leaderboards";
// import { leaderboardData } from "@/utils/constant";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leaderboard",
};

export default function LeaderboardPage() {
  return (
    <section className="space-y-4">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-medium text-muted-500">
          Leaderboard
        </h1>
        <div className="flex items-center justify-end gap-2">
          <div className="w-5 h-5 bg-secondary-400 rounded-full" />
          <h4 className="text-lg md:text-xl font-medium text-muted-500">
            Beginner Board
          </h4>
        </div>
      </div>
      <LeaderboardCard showTitle={true} data={[]} />
    </section>
  );
}
