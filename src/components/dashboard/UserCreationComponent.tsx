"use client";

import { useState, useEffect } from "react";
import { CreateUserPayload } from "@/types"; // Adjust the import path as necessary
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { createUser } from "@/services/apis/user.api";
import { useRouter } from "next/navigation";
import useClientStore from "@/store/clientStore";
import Cookies from "js-cookie";

const UserCreationComponent: React.FC = () => {
  const { user } = usePrivy();
  const { wallets } = useWallets();
  const { isFirstVisit } = useClientStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleCreateUser = async () => {
      if (!user) return;
      setIsLoading(true);
      setError(null);
      setSuccess(null);

      const RegisterUser: CreateUserPayload = {
        email: user?.email?.address || undefined,
        walletAddress: user?.wallet?.address || wallets[0]?.address || "",
        authId: user?.id || "",
      };

      try {
        const userResponse = await createUser(RegisterUser);
        setSuccess("User created successfully!");
        if (isFirstVisit === false) {
          router.push("/onboarding/username");
        } else {
          Cookies.set("onboarded", "true");
          router.push("/dashboard/practice");
        }
        return userResponse;
      } catch (err) {
        setError("Failed to create user.");
        console.error("Error creating user:", err);
      } finally {
        setIsLoading(false);
      }
    };

    handleCreateUser();
  }, [user, wallets, router, isFirstVisit]);

  return (
    <div className="p-4 max-w-md mx-auto hidden">
      {isLoading && <p>Creating User...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </div>
  );
};

export default UserCreationComponent;
