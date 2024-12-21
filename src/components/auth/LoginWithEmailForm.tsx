"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LoginWithEmailForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-start justify-start gap-8">
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <label htmlFor="email" className="text-sm font-normal text-muted-500">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-10 rounded-lg border border-muted-100 px-4 outline-none focus:border-primary-500 placeholder:text-[#B0B8C1] text-sm font-normal"
          placeholder="Please enter your email address"
          required
        />
      </div>
      <Button
        variant={"unstyled"}
        type="submit"
        disabled={email.length === 0}
        onClick={() => router.push(`/verification?email=${encodeURIComponent(email)}`)}
        className="bg-primary-400 text-white w-full h-12 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        Send verification code
      </Button>
    </div>
  );
};

export default LoginWithEmailForm;
