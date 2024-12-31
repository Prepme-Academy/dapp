"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import useUserStore from "@/store/userStore";
import { Loader2 } from "lucide-react";

const UsernameForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const { setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUserNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (username.length !== 0) {
      setUser({
        username: username,
      });
      router.push("/onboarding/exam-option");
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  };

  return (
    <form
      onSubmit={handleUserNameSubmit}
      className="w-full flex flex-col items-start justify-start gap-8"
    >
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
