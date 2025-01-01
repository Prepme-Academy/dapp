"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCreateUser, useOnboardUser } from "@/lib/actions";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import useUserStore from "@/store/userStore";
import { CreateUserPayload, OnboardUserPayload } from "@/types";
import { useNotifications } from "@/hooks/useNotifications";
import useClientStore from "@/store/clientStore";
import { Loader2 } from "lucide-react";
import Cookies from "js-cookie";

export default function NotificationPage() {
  const router = useRouter();
  const { isEnabled, requestNotificationPermission } = useNotifications();
  const { mutateAsync: createUser } = useCreateUser();
  const { mutateAsync: onboardUser } = useOnboardUser();
  const { username, examType, dailyDuration, resetState } = useUserStore();
  const { setFirstVisit } = useClientStore();
  const { user } = usePrivy();
  const { wallets } = useWallets();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const RegisterUser: CreateUserPayload = {
    email: user?.email?.address || undefined,
    walletAddress: user?.wallet?.address || wallets[0]?.address || "",
    authId: user?.id || "",
  };

  const OnBoardingUser: OnboardUserPayload = {
    username: username,
    examType: examType,
    dailyDuration: dailyDuration,
    notificationEnabled: isEnabled,
  };

  const handleUserActions = async () => {
    setIsSubmitting(true);
    try {
      const userResponse = await createUser(RegisterUser);

      // Ensure authId is available
      const authId = RegisterUser.authId;

      // Onboard user with the correct authId
      const onboardResponse = await onboardUser({
        payload: OnBoardingUser,
        authId: authId,
      });

      Cookies.set("onboarded", "true");
      setFirstVisit(true);
      resetState();
      router.replace("/dashboard/practice");
      return { userResponse, onboardResponse };
    } catch (error) {
      console.error("Error in user actions: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNotificationPermission = async () => {
    try {
      await Promise.all([requestNotificationPermission(), handleUserActions()]);
    } catch (error) {
      console.log("🚀 ~ handleNotificationPermission ~ error:", error);
    }
  };

  const handleDoLater = async () => {
    localStorage.setItem("notificationEnabled", "false");
    await handleUserActions();
  };

  return (
    <section className="bg-white border border-grey-500 shadow-authcardshadow rounded-2xl p-4 w-[404px] flex flex-col items-center justify-center gap-4">
      <Image
        src="/icons/bell.svg"
        alt="notification bell icon"
        width={86}
        height={121}
      />
      <h1 className="text-xl font-medium text-muted-500 text-center w-full">
        Allow Prepme show notifications
      </h1>

      <div className="w-full flex items-center justify-between gap-4">
        <Button
          variant="unstyled"
          onClick={handleDoLater}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full h-10 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          Do later
        </Button>
        <Button
          variant="unstyled"
          onClick={handleNotificationPermission}
          className="bg-primary-400 text-white w-full h-10 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          Allow
        </Button>
      </div>

      {isSubmitting && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0E1824DE]">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-[400px] mx-auto space-y-5">
            <Loader2 className="mr-2 h-10 w-10 text-primary-400 animate-spin" />
            <p className="text-lg font-medium">Submitting user data...</p>
          </div>
        </div>
      )}
    </section>
  );
}
