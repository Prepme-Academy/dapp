import { DailyStreak } from "@/components/dashboard/streak";
import { Metadata } from "next";

type Params = Promise<{ id: string }>;

export const metadata: Metadata = {
  title: "Streak",
};

export default async function StreakPage({ params }: { params: Params }) {
  const { id } = await params;
  return (
    <section className="w-full h-full flex items-center justify-center bg-[#0E1824F7] fixed inset-0 z-40">
      <DailyStreak id={id} />
    </section>
  );
}
