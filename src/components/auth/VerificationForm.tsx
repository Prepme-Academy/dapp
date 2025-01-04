"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import useClientStore from "@/store/clientStore";
import { useLoginWithEmail, usePrivy } from "@privy-io/react-auth";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import Cookies from "js-cookie";
import { useUserInfo } from "@/lib/actions";

interface VerificationFormProps {
  email: string;
}

const VerificationForm: React.FC<VerificationFormProps> = ({ email }) => {
  const { user } = usePrivy();
  const { isFirstVisit, setUserInfo, setFirstVisit } = useClientStore();
  const [resendEnabled, setResendEnabled] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(60);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [success, setSuccess] = useState("");
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const router = useRouter();
  const { loginWithCode, sendCode, state } = useLoginWithEmail();
  const authUserId = user?.id || "";
  const { data: userInfo, isLoading: userInfoLoading } =
    useUserInfo(authUserId);

  useEffect(() => {
    if (user && userInfo && !userInfoLoading) {
      setFirstVisit(userInfo.onboarded);
      setUserInfo(userInfo);
    }
  }, [userInfo, setFirstVisit, setUserInfo, user, userInfoLoading]);

  // Handle countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (resendCountdown > 0 && !resendEnabled) {
      interval = setInterval(() => {
        setResendCountdown((prev) => {
          if (prev <= 1) {
            setResendEnabled(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [resendCountdown, resendEnabled]);

  const handleVerifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const code = otp.join("");
      await loginWithCode({ code });
      setSuccess("Verification successful! Redirecting...");

      setTimeout(() => {
        if (isFirstVisit === false) {
          router.push("/onboarding/username");
        } else {
          Cookies.set("onboarded", "true");
          router.push("/dashboard/practice");
        }
      }, 500);
    } catch (error) {
      console.error("Failed to verify code:", error);
    }
  };

  // Handle OTP input changes
  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;

    // Only allow numbers
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // Move to previous input if current is empty
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  // Handle resend OTP
  const handleResendOTP = async () => {
    setOtp([]);
    try {
      await sendCode({ email });
      setSuccess("Code resent successfully!");
      setResendEnabled(false);
      setResendCountdown(60);
    } catch (error) {
      console.error("Failed to resend OTP:", error);
    }
  };

  return (
    <form
      onSubmit={handleVerifyCode}
      className="w-full flex flex-col items-start justify-start gap-8"
    >
      {state.status === "error" && (
        <Alert variant="destructive" className="w-full">
          <AlertDescription>{state.error?.message}</AlertDescription>
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
        <label
          htmlFor="verification_code"
          className="text-sm font-normal text-muted-500"
        >
          Verification code
        </label>
        <div className="flex items-center justify-between gap-2 w-full">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(ref) => {
                if (ref) inputRefs.current[index] = ref;
              }}
              type="text"
              id="verification_code"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              placeholder="0"
              className="w-9 h-9 lg:w-12 lg:h-12 border border-[#E4E7EB] rounded-lg text-center text-sm font-normal focus:border-blue-500 focus:outline-none"
            />
          ))}
        </div>
        {resendEnabled ? (
          <p className="w-full text-center text-sm font-normal text-muted-300">
            Didn’t get a code?{" "}
            <span
              onClick={() => handleResendOTP()}
              className="font-medium cursor-pointer text-primary-500"
            >
              Resend
            </span>
          </p>
        ) : (
          <p className="w-full text-center text-sm font-normal text-muted-300">
            Resend ({Math.floor(resendCountdown / 60)}:
            {String(resendCountdown % 60).padStart(2, "0")})
          </p>
        )}
      </div>
      <Button
        variant={"unstyled"}
        type="submit"
        disabled={
          otp.join("").length === 0 || state.status !== "awaiting-code-input"
        }
        className="bg-primary-400 text-white w-full h-12 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {state.status === "submitting-code" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Verifying...
          </>
        ) : (
          "Verify email"
        )}
      </Button>
    </form>
  );
};

export default VerificationForm;
