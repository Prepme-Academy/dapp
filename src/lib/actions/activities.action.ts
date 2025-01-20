import { fetchWeeklyStreak } from "@/services/apis/activities.api";
import { StreakResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useWeeklyStreak = (authUserId: string, address: string) => {
  return useQuery<StreakResponse, Error>(
    ["weeklyStreak", authUserId],
    () => fetchWeeklyStreak(authUserId, address),
    {
      enabled: !!authUserId && !!address,
    }
  );
};
