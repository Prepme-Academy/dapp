"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import useClientStore from "@/store/clientStore";
import Cookies from "js-cookie";
import { useEffect } from "react";

type methods =
  | "wallet"
  | "email"
  | "sms"
  | "google"
  | "twitter"
  | "discord"
  | "github"
  | "linkedin"
  | "spotify"
  | "instagram"
  | "tiktok"
  | "apple"
  | "farcaster"
  | "telegram";

type walletMethod =
  | "metamask"
  | "coinbase_wallet"
  | "rainbow"
  | "phantom"
  | "zerion"
  | "cryptocom"
  | "uniswap"
  | "okx_wallet"
  | "universal_profile"
  | "detected_wallets"
  | "detected_solana_wallets"
  | "detected_ethereum_wallets"
  | "wallet_connect"
  | "rabby_wallet"
  | "bybit_wallet"
  | "safe";

const AuthOptions: React.FC = () => {
  const router = useRouter();
  const { user, login, connectWallet, authenticated, ready } = usePrivy();
  const { wallets } = useWallets();
  const { isFirstVisit } = useClientStore();

  useEffect(() => {
    console.log("🚀 ~ wallet:", wallets[0]);
    console.log("🚀 ~ user:", user);
    console.log("🚀 ~ authenticated:", authenticated);
    console.log("🚀 ~ ready:", ready);
  }, [user, ready, authenticated, wallets]);

  useEffect(() => {
    if (user && authenticated && ready) {
      if (isFirstVisit === false) {
        router.push("/onboarding/username");
      } else {
        Cookies.set("onboarded", "true");
        router.push("/dashboard/practice");
      }
    }
  }, [authenticated, ready, isFirstVisit, router, wallets, user]);

  useEffect(() => {
    if (!authenticated && !user && ready && wallets?.[0]?.address) {
      wallets[0]?.loginOrLink();
    }
  }, [authenticated, ready, isFirstVisit, router, wallets, user]);

  // Function to handle wallet login
  const handleWalletLogin = (method: walletMethod) => {
    try {
      connectWallet({ walletList: [method] });

      if (wallets[0]?.address && ready) {
        if (isFirstVisit === false) {
          router.push("/onboarding/username");
        } else {
          Cookies.set("onboarded", "true");
          router.push("/dashboard/practice");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  // Function to handle social login
  const handleSocialLogin = (method: methods) => {
    try {
      login({ loginMethods: [method] });

      if (authenticated) {
        if (isFirstVisit === false) {
          router.push("/onboarding/username");
        } else {
          Cookies.set("onboarded", "true");
          router.push("/dashboard/practice");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <section className="w-full grid grid-cols-1 gap-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <h2 className="col-span-2 text-base font-medium text-muted-500">
          Choose wallet to connect
        </h2>
        <Button
          variant={"outline"}
          className="flex items-center justify-start gap-2"
          onClick={() => handleWalletLogin("metamask")}
        >
          <Image
            src="/icons/metamask.svg"
            width={26}
            height={26}
            alt="Meta Mask Logo"
          />
          <span className="text-sm font-normal">Metamask</span>
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center justify-start gap-2"
          onClick={() => handleWalletLogin("rainbow")}
        >
          <Image
            src="/icons/trustwallet.svg"
            width={26}
            height={26}
            alt="Trust Wallet Logo"
          />
          <span className="text-sm font-normal">Trust wallet</span>
        </Button>
        <Button
          variant={"outline"}
          className="col-span-2 flex items-center justify-start gap-2"
          onClick={() => handleWalletLogin("wallet_connect")}
        >
          <Image
            src="/icons/walletconnect.svg"
            width={26}
            height={26}
            alt="Wallet Connect Logo"
          />
          <span className="text-sm font-normal">Wallet Connect</span>
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <h2 className="col-span-2 text-base font-medium text-muted-500">
          Login with OCID
        </h2>
        <Button
          variant={"outline"}
          className="col-span-2 flex items-center justify-start gap-2 relative disabled:bg-gray-300 disabled:cursor-not-allowed disabled:pointer-events-auto"
          disabled
        >
          <Image
            src="/icons/logo-oc.svg"
            width={26}
            height={26}
            alt="Open Campus Logo"
          />
          <span className="text-sm font-normal">
            Connect <span className="font-medium">OC-ID</span>
          </span>
        </Button>
        <span className="text-[10px] -translate-y-3">Coming soon</span>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <h2 className="col-span-3 text-base font-medium text-muted-500">
          or Login using socials
        </h2>
        <Button
          variant={"outline"}
          className="flex items-center justify-start gap-2 col-span-2 md:col-span-1"
          onClick={() => router.push("/login/email")}
        >
          <Image
            src="/icons/email.svg"
            width={26}
            height={26}
            alt="Email Mail Logo"
          />
          <span className="text-sm font-normal">Email</span>
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center justify-start gap-2"
          onClick={() => handleSocialLogin("google")}
        >
          <Image
            src="/icons/google.svg"
            width={26}
            height={26}
            alt="Google Logo"
          />
          <span className="text-sm font-normal">Google</span>
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center justify-start gap-2 col-span-2 md:col-span-1"
          onClick={() => handleSocialLogin("discord")}
        >
          <Image
            src="/icons/discord.svg"
            width={26}
            height={26}
            alt="Discord Logo"
          />
          <span className="text-sm font-normal">Discord</span>
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center justify-start gap-2"
          onClick={() => handleSocialLogin("apple")}
        >
          <Image
            src="/icons/apple.svg"
            width={26}
            height={26}
            alt="Apple Logo"
          />
          <span className="text-sm font-normal">Apple</span>
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center justify-start gap-2 col-span-2 md:col-span-1"
          onClick={() => handleSocialLogin("twitter")}
        >
          <Image
            src="/icons/twitter.svg"
            width={26}
            height={26}
            alt="Twitter X Logo"
          />
          <span className="text-sm font-normal">Twitter</span>
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center justify-start gap-2"
          onClick={() => handleSocialLogin("telegram")}
        >
          <Image
            src="/icons/telegram.svg"
            width={26}
            height={26}
            alt="Facebook Logo"
          />
          <span className="text-sm font-normal">Telegram</span>
        </Button>
      </div>
      <label htmlFor="term" className="flex items-center justify-start gap-2">
        <input
          type="checkbox"
          id="term"
          className="accent-primary-500 w-[18px] h-[18px]"
          defaultChecked
        />
        <span className="text-sm font-normal text-muted-500">
          I agree to the{" "}
          <a
            target="_blank"
            href="/legal/terms-of-service.html"
            className="underline"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="/legal/privacy-policy.html"
            className="underline"
          >
            Privacy Policy
          </a>
        </span>
      </label>
    </section>
  );
};

export default AuthOptions;
