import { AuthOptions } from "@/components/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Educate",
};

export default function LoginPage() {
  return (
    <aside className="w-full space-y-3 flex flex-col items-start justify-start py-4 lg:h-[70vh] lg:overflow-hidden lg:hover:overflow-y-auto lg:overflow-x-hidden">
      <div className="space-y-2 text-center w-full">
        <h1 className="text-xl font-medium text-muted-500">Login to Educate</h1>
        <p className="text-sm font-normal text-muted-200">
          Connect Wallet to get started
        </p>
      </div>
      <AuthOptions />
    </aside>
  );
}
