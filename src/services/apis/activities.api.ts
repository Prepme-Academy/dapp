import axios from "axios";
import { BASE_URL } from "..";
import { StreakResponse } from "@/types";

export const fetchWeeklyStreak = async (authUserId: string): Promise<StreakResponse> => {
  const response = await axios.get(`${BASE_URL}/exam/streaks/week-view`, {
    headers: {
      "auth-user-id": authUserId,
    },
  });
  return response.data;
};
