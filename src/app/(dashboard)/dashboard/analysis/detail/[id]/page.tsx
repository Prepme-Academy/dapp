"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Ellipsis, MoveLeft } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ExamAnalysisTab, ExamScoreCardTab } from "../misc/components";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

const tabData = [
  {
    name: "Exam Scorecard",
    path: "exam-scorecard",
  },
  {
    name: "Exam Analysis",
    path: "exam-analysis",
  },
];

export default function AnalysisInfoPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "exam-scorecard";

  const pageContent =
    currentTab === "exam-scorecard" ? (
      <ExamScoreCardTab />
    ) : (
      <ExamAnalysisTab />
    );

  return (
    <section className="space-y-3">
      <Button
        variant={"unstyled"}
        className="flex items-center justify-start gap-2 text-base font-normal text-[#334058]"
        onClick={() => router.back()}
      >
        <MoveLeft />
        <span> Back</span>
      </Button>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[298px_1fr] gap-4 items-start justify-start">
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <h4 className="text-xs font-normal text-muted-500">
            <span className="text-[#A0A2A4]">Date practiced: </span>
            <span> Wed, Dec 12th, 2024 . 12:30PM</span>
          </h4>
          <Card className="w-full p-3 border-grey-500 space-y-3 flex flex-col items-start justify-start group hover:cursor-pointer">
            
          </Card>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <div className="w-full flex items-center justify-between gap-4  border-b border-[#F2F2F2]">
            <nav className="w-full md:w-fit flex items-center justify-start gap-2 lg:gap-5">
              {tabData.map(({ name, path }, index) => (
                <Link
                  key={index}
                  href={`${params.id}?tab=${path}`}
                  className={cn(
                    "text-sm text-center font-normal px-6 lg:px-10 pb-4",
                    path === currentTab
                      ? "text-muted-400 border-b-2 border-primary-400"
                      : "text-muted-200"
                  )}
                >
                  {name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-end gap-3">
              <p className="text-xs font-normal text-[#222223] flex items-center gap-1">
                <span>1 - 16 </span>
                <span className="text-[#747679]">of</span>
                <span>50</span>
              </p>
              <Ellipsis className="rotate-90" />
            </div>
          </div>
          <Suspense key={currentTab} fallback={"loading..."}>
            {pageContent}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
