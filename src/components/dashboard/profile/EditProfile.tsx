"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const EditProfile: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const address = "0x9.....45682";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-3">
        <Image
          src="/icons/dashboard/avatar.svg"
          alt="user profile avatar"
          width={80}
          height={80}
          priority
        />
        <div>
          <h2 className="text-lg font-medium text-muted-500">Susanmay</h2>
          <Button
            variant={"unstyled"}
            className="text-sm font-normal text-primary-400 p-0"
          >
            Edit Profile
          </Button>
        </div>
      </div>
      <Card className="w-full p-3 shadow-cardshadow border-gray-200 space-y-3">
        <label htmlFor="email" className="text-base font-medium text-muted-500">
          Email address
        </label>
        <div className="relative w-full">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full outline-none border border-muted-200 h-9 pr-12 pl-4 focus:border-primary-300 rounded-lg text-sm font-normal placeholder:text-secondary-300"
            placeholder="Email address"
            value="susanmay@gmail.com"
            readOnly
          />
          <label className="absolute right-2 top-2 text-xs font-normal text-primary-500 cursor-pointer lowercase">
            change
          </label>
        </div>
      </Card>
      <Card className="w-full p-3 shadow-cardshadow border-gray-200 space-y-3">
        <label
          htmlFor="wallet_address"
          className="text-base font-medium text-muted-500"
        >
          Wallet address
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="wallet_address"
            className="w-full outline-none border border-muted-200 h-9 pr-12 pl-4 focus:border-primary-300 rounded-lg text-sm font-normal placeholder:text-secondary-300"
            placeholder="Wallet address"
            value={address}
            readOnly
          />
          <label
            onClick={handleCopy}
            className="absolute right-2 top-2 text-xs font-normal text-primary-500 cursor-pointer lowercase"
          >
            {copied ? "copied!" : "copy"}
          </label>
        </div>
      </Card>
    </div>
  );
};

export default EditProfile;
