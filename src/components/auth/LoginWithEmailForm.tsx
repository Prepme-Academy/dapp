"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useLoginWithEmail } from "@privy-io/react-auth";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

const LoginWithEmailForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { sendCode } = useLoginWithEmail();
  const router = useRouter();

  const handleSendCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await sendCode({ email });
      setSuccess("Verification Code Sent successful!");
      router.push(`/verification?email=${encodeURIComponent(email)}`);
    } catch (error) {
      setError("Failed to send verification code. Please try again.");
      console.error("Failed to send code:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSendCode}
      className="w-full flex flex-col items-start justify-start gap-8"
    >
      {error && (
        <Alert variant="destructive" className="w-full">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert className="w-full bg-green-50 border-green-200">
          <AlertDescription className="text-green-600">
            {success}
          </AlertDescription>
        </Alert>
      )}
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
        disabled={email.length === 0 || isLoading}
        className="bg-primary-400 text-white w-full h-12 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending code...
          </>
        ) : (
          "Send verification code"
        )}
      </Button>
    </form>
  );
};

export default LoginWithEmailForm;
