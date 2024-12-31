import axios from "axios";
import {
  CreateUserPayload,
  OnboardUserPayload,
  OnboardUserResponse,
  UserResponse,
} from "@/types";
import { BASE_URL } from "..";

export const createUser = async (
  payload: CreateUserPayload
): Promise<UserResponse> => {
  const response = await axios.post(`${BASE_URL}/user/create`, payload, {
    headers: {
      "ngrok-skip-browser-warning": "true",
    },
  });
  return response.data;
};

export const onboardUser = async (
  payload: OnboardUserPayload,
  authId: string
): Promise<OnboardUserResponse> => {
  const response = await axios.patch(`${BASE_URL}/user/onboard`, payload, {
    headers: {
      "ngrok-skip-browser-warning": "true",
      'auth-user-id': authId,
    },
  });
  return response.data;
};
