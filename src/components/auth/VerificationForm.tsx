"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface VerificationFormProps {
  email: string;
}

const VerificationForm: React.FC<VerificationFormProps> = ({ email }) => {
  console.log("🚀 ~ email:", email);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(60);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const router = useRouter();

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
    try {
      // Add your resend OTP logic here
      // await resendOTP();

      setResendEnabled(false);
      setResendCountdown(60);
    } catch (error) {
      console.error("Failed to resend OTP:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-start justify-start gap-8">
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
        disabled={otp.join("").length === 0}
        onClick={() => router.push(`/onboarding/username`)}
        className="bg-primary-400 text-white w-full h-12 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        Send verification code
      </Button>
    </div>
  );
};

export default VerificationForm;
