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

interface ExamScoreCardTabProps {
  id: string | string[] | undefined;
  analysisData: ExamAnalysisResponse["data"];
}

const ExamScoreCardTab: React.FC<ExamScoreCardTabProps> = ({
  id,
  analysisData,
}) => {
  console.log("🚀 ~ id:", id);
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
          {userAnswers.map((answer, index) => (
            <li key={index}>
              <DialogTrigger asChild>
                <Card
                  className={cn(
                    "w-full min-h-36 rounded-2xl flex flex-col items-start justify-between gap-4 p-3 cursor-pointer",
                    statusColor(answer.correct)
                  )}
                  onClick={() => setSelectedQuestion(index)}
                >
                  <CardHeader className="px-0 py-0 items-start justify-between flex-row gap-3 space-y-0 w-full">
                    <h4
                      className="w-32 text-sm font-medium truncate"
                      dangerouslySetInnerHTML={{
                        __html: answer.question.text,
                      }}
                    />
                    <RenderScoreIcon
                      status={answer.correct ? "Correct" : "Incorrect"}
                    />
                  </CardHeader>
                  <div className="flex items-center justify-start gap-1 text-xs">
                    <span className="font-normal text-[10px]">Answer: </span>
                    <span
                      className="font-medium"
                      dangerouslySetInnerHTML={{
                        __html: answer.userOption?.value || "",
                      }}
                    />
                  </div>
                </Card>
              </DialogTrigger>
            </li>
          ))}
        </ul>
      </div>
      {selectedQuestion !== null && (
        <DialogContent className="h-[95vh] overflow-hidden hover:overflow-y-auto hover:overflow-x-hidden">
          <DialogHeader className="space-y-0 mt-6">
            <DialogTitle>
              <div className="w-full flex  items-start justify-between gap-5">
                <h3 className="text-sm font-medium text-muted-500">
                  Question {selectedQuestion + 1}
                </h3>
                <div
                  className={cn(
                    "border-none flex items-center justify-end gap-2 text-xs font-medium",
                    statusColor(userAnswers[selectedQuestion].correct)
                  )}
                >
                  <RenderScoreIcon
                    status={
                      userAnswers[selectedQuestion].correct
                        ? "Correct"
                        : "Incorrect"
                    }
                  />
                  <span>
                    {userAnswers[selectedQuestion].correct
                      ? "Correct"
                      : "Incorrect"}
                  </span>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="w-full space-y-3">
            <h2
              className="text-sm font-medium text-muted-500"
              dangerouslySetInnerHTML={{
                __html: userAnswers[selectedQuestion].question.text,
              }}
            />
            <div className="space-y-2 w-full">
              {userAnswers[selectedQuestion].question.options.map(
                (option, index) => (
                  <label
                    key={index}
                    className={cn(
                      "flex items-center space-x-3 border p-3 rounded-lg relative",
                      userAnswers[selectedQuestion].correct_option.value ===
                        option.value
                        ? "bg-[#DEFFC8] border-2 border-[#63B42B]"
                        : userAnswers[selectedQuestion].userOption?.value ===
                          option.value
                        ? "bg-[#FFD1D1] border-2 border-[#E6485D]"
                        : ""
                    )}
                  >
                    <span className="text-gray-700">
                      {String.fromCharCode(65 + index)}.{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: option.value,
                        }}
                      />
                    </span>
                    {userAnswers[selectedQuestion].correct_option.value ===
                      option.value && (
                      <span className="text-sm font-normal text-muted-500 absolute right-4 top-3 hidden lg:block">
                        correct answer
                      </span>
                    )}
                    {userAnswers[selectedQuestion].userOption?.value ===
                      option.value && (
                      <span className="text-sm font-normal text-muted-500 absolute right-4 top-3 hidden lg:block">
                        your answer
                      </span>
                    )}
                  </label>
                )
              )}
            </div>
            <h1 className="text-sm font-medium text-muted-500">
              Answer Explanation:
            </h1>
            <Card className="w-full p-3 border-grey-200 space-y-3 flex flex-col items-start justify-start">
              <p
                className="text-sm font-normal text-[#4E5153]"
                dangerouslySetInnerHTML={{
                  __html: userAnswers[selectedQuestion].question.explanation,
                }}
              />
            </Card>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

const statusColor = (correct: boolean | null) => {
  if (correct === true) {
    return "text-[#2B5A0A] border-[#9EE071]";
  } else if (correct === false) {
    return "text-[#E6485D] border-[#FF5876]";
  }
  return "text-[#DA9714] border-[#FED402]";
};

const RenderScoreIcon = ({ status }: { status: string }) => {
  if (status === "Correct") {
    return (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.25 2C6.74 2 2.25 6.49 2.25 12C2.25 17.51 6.74 22 12.25 22C17.76 22 22.25 17.51 22.25 12C22.25 6.49 17.76 2 12.25 2ZM17.03 9.7L11.36 15.37C11.22 15.51 11.03 15.59 10.83 15.59C10.63 15.59 10.44 15.51 10.3 15.37L7.47 12.54C7.18 12.25 7.18 11.77 7.47 11.48C7.76 11.19 8.24 11.19 8.53 11.48L10.83 13.78L15.97 8.64C16.26 8.35 16.74 8.35 17.03 8.64C17.32 8.93 17.32 9.4 17.03 9.7Z"
          fill="#63B42B"
        />
      </svg>
    );
  } else if (status === "Incorrect") {
    return (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.75 2C7.24 2 2.75 6.49 2.75 12C2.75 17.51 7.24 22 12.75 22C18.26 22 22.75 17.51 22.75 12C22.75 6.49 18.26 2 12.75 2ZM16.67 12.75H8.67C8.26 12.75 7.92 12.41 7.92 12C7.92 11.59 8.26 11.25 8.67 11.25H16.67C17.08 11.25 17.42 11.59 17.42 12C17.42 12.41 17.09 12.75 16.67 12.75Z"
          fill="#FFCF4D"
        />
      </svg>
    );
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
        fill="#FF5876"
      />
    </svg>
  );
};

export default ExamScoreCardTab;
