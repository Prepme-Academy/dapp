import axios from "axios";
import { StreakResponse } from "@/types";

export const fetchWeeklyStreak = async (
  authUserId: string,
  address: string
): Promise<StreakResponse> => {
  const response = await axios.get("/api/activities/get-streak", {
    headers: {
      "auth-user-id": authUserId,
      Address: address,
    },
  });
  return response.data;
};
