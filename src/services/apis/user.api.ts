import axios from "axios";
import {
  CheckUsernameResponse,
  CreateUserPayload,
  OnboardUserPayload,
  OnboardUserResponse,
  UserResponse,
} from "@/types";
import { BASE_URL } from "..";


export const checkUsername = async (username: string): Promise<CheckUsernameResponse> => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/check-username`, { username });
  return response.data;
};

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
