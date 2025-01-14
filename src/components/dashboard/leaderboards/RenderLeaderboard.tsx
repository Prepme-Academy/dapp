"use client";

import { usePrivy } from "@privy-io/react-auth";
import LeaderboardCard from "./LeaderboardCard";
import { useWeeklyLeaderboard } from "@/lib/actions/exam.action";
import { cn } from "@/lib/utils";
import ErrorDisplay from "@/components/ui/ErrorDisplay";

const RenderLeaderboard: React.FC = () => {
  const { user } = usePrivy();
  const authUserId = user?.id;
  const { data, isLoading, isError, error, refetch } = useWeeklyLeaderboard(
    authUserId || ""
  );

  if (isLoading) {
    return <LeaderboardSkeleton showTitle={true} length={5} />;
  }

  if (isError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ErrorDisplay error={error} retry={() => refetch()} />
      </div>
    );
  }

  return (
    <LeaderboardCard
      showTitle={true}
      data={data || []}
      authId={authUserId || ""}
    />
  );
};

interface LeaderboardSkeletonProps {
  showTitle: boolean;
  className?: string;
  length: number;
}

export const LeaderboardSkeleton: React.FC<LeaderboardSkeletonProps> = ({
  showTitle,
  className,
  length,
}) => {
  return (
    <div
      className={cn(
        "w-full p-3 shadow-cardshadow border-gray-100 space-y-3 animate-pulse",
        className
      )}
    >
      {showTitle && (
        <>
          <div className="flex items-center justify-between">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            <div className="h-6 w-16 bg-gray-300 rounded"></div>
          </div>
          <div className="mt-4 w-full h-12 bg-grey-400 rounded-lg"></div>
        </>
      )}
      <div className="space-y-2">
        {Array.from({ length: length }).map((_, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-between gap-x-3 p-2 rounded bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderLeaderboard;
