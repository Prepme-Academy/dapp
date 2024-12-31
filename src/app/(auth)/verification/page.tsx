import { VerificationForm } from "@/components/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Email",
};

export default async function VerificationPage({
  searchParams,
}: {
  searchParams: Promise<{
    email: string | undefined;
  }>;
}) {
  const params = await searchParams;
  const currentEmail = params.email || "";

  return (
    <section className="w-full grid grid-cols-1 gap-6">
      <div className="space-y-2 text-center w-full">
        <h1 className="text-xl font-medium text-muted-500">Verify Email</h1>
        <p className="text-sm font-normal text-muted-200">
          Enter verification code sent to your email address
        </p>
      </div>
      <VerificationForm email={currentEmail} />
    </section>
  );
}
