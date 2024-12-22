import { ExamOptionSelect } from "@/components/onboarding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What exams do you want to Practice?",
  description:
    "Please choose at least one from the following items to get started.",
};

export default function ExamOptionPage() {
  return (
    <section className="w-full space-y-3 flex flex-col items-start justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <h1 className="text-xl font-medium text-muted-500 text-center w-full">
          What exams do you want to Practice?
        </h1>
        <p className="text-sm font-normal text-muted-400 text-center">
          Please choose at least one from the following items to get started.
        </p>
      </div>
      <ExamOptionSelect/>
    </section>
  );
}
