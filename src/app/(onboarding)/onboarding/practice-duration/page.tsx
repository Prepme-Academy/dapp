import { DurationOptionSelect } from "@/components/onboarding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How long can you practice in a day?",
};

export default function PracticeDurationPage() {
  return (
    <aside className="bg-white border border-muted-300 shadow-authcardshadow rounded-2xl p-4 w-[404px]">
      <section className="w-full space-y-3 flex flex-col items-start justify-center">
        <h1 className="text-xl font-medium text-muted-500 text-center w-full">
          How long can you practice in a day?
        </h1>
      </section>
      <DurationOptionSelect />
    </aside>
  );
}
