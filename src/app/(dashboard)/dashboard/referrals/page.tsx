import { ReferralComponent } from "@/components/dashboard/referral";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referrals",
  description: "Invite Friends and Earn more XP",
};

export default function ReferralsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-lg md:text-xl font-medium text-muted-500">
        Refer & Earn
      </h1>
      <ReferralComponent />
    </section>
  );
}
