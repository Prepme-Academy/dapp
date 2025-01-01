import {
  checkUsername,
  createUser,
  onboardUser,
} from "@/services/apis/user.api";
import {
  CreateUserPayload,
  OnboardUserPayload,
  OnboardUserResponse,
  UserResponse,
} from "@/types";
import { useMutation } from "@tanstack/react-query";

export const useCheckUsername = () => {
  return useMutation((username: string) => checkUsername(username));
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
    { payload: OnboardUserPayload; authId: string }
  >(({ payload, authId }) => onboardUser(payload, authId));
};
