import axios from "axios";
import {
  CheckUsernameResponse,
  CreateUserPayload,
  OnboardUserPayload,
  OnboardUserResponse,
  UserInfo,
  UserResponse,
} from "@/types";
import { BASE_URL } from "..";

export const checkUsername = async (
  username: string
): Promise<CheckUsernameResponse> => {
  const response = await axios.post(`${BASE_URL}/user/check-username`, {
    username,
  });
  return response.data;
};

export const fetchUserInfo = async (
  authUserId: string,
  address: string
): Promise<UserInfo> => {
  const response = await axios.get(`${BASE_URL}/user/me`, {
    headers: {
      "auth-user-id": authUserId,
      Address: address,
    },
  });
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
  authId: string,
  address: string
): Promise<OnboardUserResponse> => {
  const response = await axios.patch(`${BASE_URL}/user/onboard`, payload, {
    headers: {
      "ngrok-skip-browser-warning": "true",
      "auth-user-id": authId,
      Address: address,
    },
  });
  return response.data;
};
