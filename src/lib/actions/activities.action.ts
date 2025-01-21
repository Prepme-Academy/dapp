import { fetchWeeklyStreak } from "@/services/apis/activities.api";
import { StreakResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useWeeklyStreak = (authUserId: string, address: string) => {
  return useQuery<StreakResponse, Error>(
    ["weeklyStreak", authUserId],
    () => fetchWeeklyStreak(authUserId, address),
    {
      enabled: !!authUserId && !!address,
      staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
      cacheTime: 10 * 60 * 1000, // Data stays in cache for 10 minutes
      refetchOnWindowFocus: false, // Disable refetching on window focus
      refetchOnMount: false, // Disable refetching on component mount
    }
  );
};
