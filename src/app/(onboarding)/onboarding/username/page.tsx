import { UsernameForm } from "@/components/onboarding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a Username",
};

export default function UsernamePage() {
  return (
    <section className="w-full space-y-3 flex flex-col items-start justify-center">
      <h1 className="text-xl font-medium text-muted-500 text-center w-full">
        Create a Username
      </h1>
      <UsernameForm />
    </section>
  );
}
