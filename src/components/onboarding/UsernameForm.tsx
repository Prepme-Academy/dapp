"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import useUserStore from "@/store/userStore";
import { Loader2 } from "lucide-react";
import { useCheckUsername } from "@/lib/actions";
import { formatAxiosErrorMessage } from "@/utils/errors";
import { AxiosError } from "axios";
import { Alert, AlertDescription } from "@/components/ui/alert";

const UsernameForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const { setUser } = useUserStore();
  const router = useRouter();
  const { mutate, isLoading, isError, error } = useCheckUsername();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleUserNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);
    setApiError(null);

    mutate(username, {
      onSuccess: (data) => {
        if (data.success) {
          setUser({ username });
          setSuccessMessage(data.message);
          router.push("/onboarding/exam-option");
        } else {
          setApiError(data.message);
        }
      },
    });
  };

  return (
    <form
      onSubmit={handleUserNameSubmit}
      className="w-full flex flex-col items-start justify-start gap-8"
    >
      {apiError && (
        <Alert variant="destructive" className="w-full">
          <AlertDescription>{apiError}</AlertDescription>
        </Alert>
      )}
      {isError && (
        <Alert variant="destructive" className="w-full">
          <AlertDescription>
            {formatAxiosErrorMessage(error as AxiosError)}
          </AlertDescription>
        </Alert>
      )}
      {successMessage && (
        <Alert className="w-full bg-green-50 border-green-200">
          <AlertDescription className="text-green-600">
            {successMessage}
          </AlertDescription>
        </Alert>
      )}
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <label
          htmlFor="username"
          className="text-sm font-normal text-muted-500"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full h-10 rounded-lg border border-muted-100 px-4 outline-none focus:border-primary-500 placeholder:text-[#B0B8C1] text-sm font-normal"
          placeholder="Please create a username"
          required
        />
      </div>
      <Button
        variant={"unstyled"}
        type="submit"
        disabled={username.length === 0 || isLoading}
        className="bg-primary-400 text-white w-full h-12 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Continue"
        )}
      </Button>
    </form>
  );
};

export default UsernameForm;
