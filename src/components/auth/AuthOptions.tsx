"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const AuthOptions: React.FC = () => {
  const router = useRouter();
  
  return (
    <section className="w-full grid grid-cols-1 gap-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        <h2 className="col-span-2 text-base font-medium text-muted-500">
          Choose wallet to connect
        </h2>
        <Button
          variant={"outline"}
          className="flex items-center justify-start gap-2"
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
          className="col-span-2 flex items-center justify-start gap-2"
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
        >
          <Image
            src="/icons/facebook.svg"
            width={26}
            height={26}
            alt="Facebook Logo"
          />
          <span className="text-sm font-normal">Facebook</span>
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
          I agree to the <span className="underline">Terms of Service</span> and{" "}
          <span className="underline">Privacy Policy</span>
        </span>
      </label>
    </section>
  );
};

export default AuthOptions;
