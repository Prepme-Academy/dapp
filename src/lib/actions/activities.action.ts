import { fetchWeeklyStreak } from "@/services/apis/activities.api";
import { StreakResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useWeeklyStreak = (authUserId: string) => {
  return useQuery<StreakResponse, Error>(
    ["weeklyStreak", authUserId],
    () => fetchWeeklyStreak(authUserId),
    {
      enabled: !!authUserId,
    }
  );
};
