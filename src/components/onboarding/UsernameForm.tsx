"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

const UsernameForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-start justify-start gap-8">
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <label htmlFor="email" className="text-sm font-normal text-muted-500">
          Email address
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
        disabled={username.length === 0}
        onClick={() => router.push("/onboarding/exam-option")}
        className="bg-primary-400 text-white w-full h-12 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        Continue
      </Button>
    </div>
  );
};

export default UsernameForm;
