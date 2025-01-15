"use client";

import { Card, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ExamAnalysisResponse } from "@/types";
import { useState } from "react";
import SubQuestionAnalysis from "./SubQuestionAnalysis";
import RegularQuestionAnalysis from "./RegularQuestionAnalysis";
import { getQuestionStatus, RenderScoreIcon, statusColor } from "../helpers";

interface ExamScoreCardTabProps {
  id: string | string[] | undefined;
  analysisData: ExamAnalysisResponse["data"];
}

const ExamScoreCardTab: React.FC<ExamScoreCardTabProps> = ({
  analysisData,
}) => {
  // console.log("🚀 ~ id:", id);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  if (!analysisData) {
    return <div>Loading...</div>;
  }

  const { userAnswers } = analysisData;

  return (
    <Dialog>
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <h3 className="text-sm font-normal text-[#747679]">
          Click on the cards to view the question, all options, and answer
          explanation
        </h3>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {userAnswers.map((answer, index) => {
            const status = getQuestionStatus(answer);
            return (
              <li key={index}>
                <DialogTrigger asChild>
                  <Card
                    className={cn(
                      "w-full min-h-36 rounded-2xl flex flex-col items-start justify-between gap-4 p-3 cursor-pointer",
                      statusColor(status)
                    )}
                    onClick={() => setSelectedQuestion(index)}
                  >
                    <CardHeader className="px-0 py-0 items-start justify-between flex-row gap-3 space-y-0 w-full">
                      <h4
                        className="w-32 h-32 text-sm font-medium truncate"
                        dangerouslySetInnerHTML={{
                          __html: answer.question.text,
                        }}
                      />
                      <RenderScoreIcon status={status} />
                    </CardHeader>
                    {answer.hasSub === false && (
                      <div className="flex items-center justify-start gap-1 text-xs">
                        <span className="font-normal text-[10px]">
                          Answer:{" "}
                        </span>
                        <span
                          className="font-medium"
                          dangerouslySetInnerHTML={{
                            __html: answer.userOption?.value || "",
                          }}
                        />
                      </div>
                    )}
                  </Card>
                </DialogTrigger>
              </li>
            );
          })}
        </ul>
      </div>
      {selectedQuestion !== null && (
        <DialogContent
          className={cn(
            "h-[95vh] overflow-hidden hover:overflow-y-auto hover:overflow-x-hidden",
            userAnswers[selectedQuestion].subAnswers &&
              userAnswers[selectedQuestion].hasSub === true
              ? "max-w-[1051px]"
              : "max-w-lg"
          )}
        >
          <DialogHeader className="space-y-0 mt-6">
            <DialogTitle>
              <div className="w-full flex  items-start justify-between gap-5">
                <h3 className="text-sm font-medium text-muted-500">
                  Question {selectedQuestion + 1}
                </h3>
                <div
                  className={cn(
                    "border-none flex items-center justify-end gap-2 text-xs font-medium",
                    statusColor(
                      getQuestionStatus(userAnswers[selectedQuestion])
                    )
                  )}
                >
                  <RenderScoreIcon
                    status={getQuestionStatus(userAnswers[selectedQuestion])}
                  />
                  <span>
                    {userAnswers[selectedQuestion].correct
                      ? "Correct"
                      : !userAnswers[selectedQuestion].correct
                      ? "Incorrect"
                      : "Unanswerd"}
                  </span>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
          {userAnswers[selectedQuestion].subAnswers &&
          userAnswers[selectedQuestion].hasSub === true ? (
            <SubQuestionAnalysis
              question={userAnswers[selectedQuestion]}
              subAnswers={userAnswers[selectedQuestion].subAnswers}
            />
          ) : (
            <RegularQuestionAnalysis question={userAnswers[selectedQuestion]} />
          )}
        </DialogContent>
      )}
    </Dialog>
  );
};
export default ExamScoreCardTab;
