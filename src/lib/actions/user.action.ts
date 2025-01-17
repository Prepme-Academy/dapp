import {
  checkUsername,
  createUser,
  fetchUserInfo,
  onboardUser,
} from "@/services/apis/user.api";
import {
  CreateUserPayload,
  OnboardUserPayload,
  OnboardUserResponse,
  UserInfo,
  UserResponse,
} from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCheckUsername = () => {
  return useMutation((username: string) => checkUsername(username));
};

export const useUserInfo = (authUserId: string, address: string) => {
  return useQuery<UserInfo, Error>(
    ["userInfo", authUserId],
    () => fetchUserInfo(authUserId, address),
    {
      enabled: !!authUserId && !!address,
    }
  );
};

export const useCreateUser = () => {
  return useMutation<UserResponse, Error, CreateUserPayload>((payload) =>
    createUser(payload)
  );
};

export const useOnboardUser = () => {
  return useMutation<
    OnboardUserResponse,
    Error,
    { payload: OnboardUserPayload; authId: string; address: string }
  >(({ payload, authId, address }) => onboardUser(payload, authId, address));
};
