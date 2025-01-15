"use client";

import { useState, useEffect } from "react";
import { CreateUserPayload } from "@/types"; // Adjust the import path as necessary
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { createUser } from "@/services/apis/user.api";
import { useRouter } from "next/navigation";

const UserCreationComponent: React.FC = () => {
  const { user } = usePrivy();
  const { wallets } = useWallets();
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
        router.push("/dashboard/practice");
        console.log("🚀 ~ handleCreateUser ~ userResponse:", userResponse);
      } catch (err) {
        setError("Failed to create user.");
        console.error("Error creating user:", err);
      } finally {
        setIsLoading(false);
      }
    };

    handleCreateUser();
  }, [user, wallets, router]);

  return (
    <div className="p-4 max-w-md mx-auto hidden">
      {isLoading && <p>Creating User...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </div>
  );
};

export default UserCreationComponent;
