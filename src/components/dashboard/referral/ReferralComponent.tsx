"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { referralSocialLinks } from "./routes";
import Link from "next/link";
import { usePrivy } from "@privy-io/react-auth";
import { useSendUserInfomation, useUserInfo } from "@/lib/actions";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { formatAxiosErrorMessage } from "@/utils/errors";
import { AxiosError } from "axios";

const ReferralComponent: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const { user } = usePrivy();
  const authUserId = user?.id || "";
  const address = user?.wallet?.address || "";
  const { data, isLoading, error } = useUserInfo(authUserId, address);
  const {
    mutate,
    isLoading: IsSubmittingInvite,
    isError: IsSumitError,
    error: InviteError,
  } = useSendUserInfomation();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const referralLink = isLoading
    ? "Loading..."
    : error
    ? `Error : ${error.message}`
    : `https://prepme.academy/login?ref=${data.referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUserInviteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);
    setApiError(null);

    const emails = emailInput.split(",").map((email) => email.trim());
    const invalidEmails = emails.filter((email) => !isValidEmail(email));

    if (invalidEmails.length > 0) {
      setApiError(`Invalid email addresses: ${invalidEmails.join(", ")}`);
      return;
    }

    mutate(
      { emails, authId: authUserId, address },
      {
        onSuccess: (data) => {
          const successMessages = data.map((d) => d.message);
          setSuccessMessage(successMessages.join(", "));
          setEmailInput("");
          setTimeout(() => {
            setSuccessMessage(null);
          }, 2000);
        },
        onError: (error: Error) => {
          const axiosError = error as AxiosError;
          setApiError(
            (axiosError.response?.data as { message: string })?.message ||
              "Failed to send invite. Please try again."
          );
        },
      }
    );
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  return (
    <Card className="w-full min-h-[655px] p-3 border-gray-900 space-y-8 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <Image
          src="/icons/gift.svg"
          alt="gift icon"
          width={140}
          height={157}
          priority
        />
        <h2 className="text-xl font-medium text-muted-500 text-center">
          Invite Friends and Earn more XP
        </h2>
        <p className="text-center text-sm font-normal max-w-[430px] text-muted-500">
          Share Prepme with your friends, and earn{" "}
          <span className="font-medium">500 XP</span> for each friend once they
          practice at least one exam.
        </p>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-2 max-w-[508px] mx-auto">
        <label htmlFor="email" className="text-sm font-normal text-muted-500">
          Invite through email
        </label>
        <form
          onSubmit={handleUserInviteSubmit}
          className="flex flex-col md:flex-row items-center justify-start gap-3 w-full"
        >
          <input
            type="text"
            id="email"
            placeholder="Enter emails separated by commas"
            className="w-full outline-none border border-muted-100 h-10 px-4 focus:border-primary-300 rounded-lg text-sm font-normal placeholder:text-secondary-300 disabled:bg-gray-200 disabled:cursor-not-allowed"
            value={emailInput}
            onChange={handleEmailChange}
          />
          <Button
            type="submit"
            variant={"unstyled"}
            className="bg-primary-400 text-white w-full lg:w-fit h-10 gradient-border shadow-buttonshadow outline-none text-sm text-center font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            disabled={emailInput.length === 0 || IsSubmittingInvite}
          >
            {IsSubmittingInvite ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send"
            )}
          </Button>
        </form>
        {apiError && (
          <Alert variant="destructive" className="w-full">
            <AlertDescription>{apiError}</AlertDescription>
          </Alert>
        )}
        {IsSumitError && (
          <Alert variant="destructive" className="w-full">
            <AlertDescription>
              {formatAxiosErrorMessage(InviteError as AxiosError)}
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
        <h6 className="select-none text-sm font-normal text-center w-full py-6">
          OR
        </h6>
        <label htmlFor="email" className="text-sm font-normal text-muted-500">
          Share your invite Link
        </label>
        <div className="flex flex-col md:flex-row items-center justify-start gap-3 w-full">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="w-full outline-none border border-muted-100 h-10 px-4 focus:border-primary-300 rounded-lg text-sm font-normal placeholder:text-secondary-300"
          />
          <Button
            variant={"secondary"}
            className="white-gradient-border text-primary-400 w-full lg:w-fit h-10 white-gradient-border text-center shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
        <nav className="flex flex-wrap items-start justify-start gap-4">
          {referralSocialLinks.map((link) => (
            <Link
              href={link.href}
              target="_blank"
              key={link.id}
              className="w-12 h-12 bg-grey-100 rounded-full flex items-center justify-center"
            >
              <Image src={link.icon} alt="social link" width={20} height={20} />
            </Link>
          ))}
        </nav>
      </div>
    </Card>
  );
};

export default ReferralComponent;
