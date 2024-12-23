"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { referralSocialLinks } from "./routes";
import Link from "next/link";

const ReferralComponent: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const referralLink = "https://prepme.academy//susanmayfhaodh13456";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        <div className="flex flex-col md:flex-row items-center justify-start gap-3 w-full">
          <input
            type="email"
            id="email"
            placeholder="Enter emails separated by commas"
            className="w-full outline-none border border-muted-100 h-10 px-4 focus:border-primary-300 rounded-lg text-sm font-normal placeholder:text-secondary-300"
          />
          <Button
            variant={"unstyled"}
            className="bg-primary-400 text-white w-full lg:w-fit h-10 gradient-border shadow-buttonshadow outline-none text-sm text-center font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Send
          </Button>
        </div>
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
