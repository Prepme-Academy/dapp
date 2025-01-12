import { LoginWithEmailForm } from "@/components/auth";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login With Email",
};

export default function LoginWithEmailPage() {
  return (
    <section className="w-full grid grid-cols-1 gap-6">
      <div className="flex items-center justify-center w-full gap-3">
        <Image
          src="/icons/email.svg"
          width={36}
          height={36}
          alt="Email Mail Logo"
        />
        <h1 className="text-lg md:text-xl font-medium text-muted-500">
          Login with Email
        </h1>
      </div>
      <LoginWithEmailForm />
    </section>
  );
}
