"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ExamType } from "@/types";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnswerBoardProps {
  examInfo: ExamType;
}

const AnswerBoard: React.FC<AnswerBoardProps> = ({ examInfo }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuestionIndex = Number(searchParams.get("q")) || 0;
  const initialTimeLeft = Number(searchParams.get("t")) || 1800;

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(initialQuestionIndex);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const topRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalQuestions = examInfo.questions.length;
  const totalAttemptedQuestions = Object.keys(selectedAnswers).length;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        }
        clearInterval(timer);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("t", timeLeft.toString());
    router.replace(`?${newSearchParams.toString()}`);
  }, [timeLeft, searchParams, router]);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("q", currentQuestionIndex.toString());
    router.replace(`?${newSearchParams.toString()}`);
  }, [currentQuestionIndex, searchParams, router]);

  const handleAnswerSelect = (index: number, option: string) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: option,
    }));
  };

  const handleNavigation = (index: number) => {
    setCurrentQuestionIndex(index);
    scrollToTop()
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      handleNavigation(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      handleNavigation(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submit the CBT test");
    router.push(`/dashboard/practice/detail/${examInfo.id}/success`);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const progressPercentage =
    (Object.keys(selectedAnswers).length / totalQuestions) * 100;

  return (
    <Dialog>
      <div ref={topRef} />
      <div className="w-full flex flex-col items-center justify-start gap-8 py-4 px-4">
        <div className="w-full flex flex-col items-center justify-start">
          <div className="w-full flex items-center justify-end lg:w-fit lg:absolute lg:right-10 lg:top-5">
            <div className="w-fit bg-white border-2 border-[#FF5876] rounded-lg min-h-9 px-4 text-lg md:text-xl font-medium text-muted-500 flex items-center justify-center">
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          <div className="w-full max-w-[838px] flex items-center justify-start gap-2">
            <DialogTrigger asChild>
              <Button
                variant={"unstyled"}
                className="flex items-center justify-start gap-2 text-base font-normal text-[#334058]"
              >
                <X />
                <span> Close</span>
              </Button>
            </DialogTrigger>
            <Progress value={progressPercentage} className="w-full" />
            <span className="text-base font-normal text-[#334058]">{`${
              currentQuestionIndex + 1
            }/${totalQuestions}`}</span>
          </div>
        </div>
        <Card className="w-full max-w-[635px] mx-auto px-3 py-4 border-grey-500 space-y-3 flex flex-col items-start justify-start">
          <h2 className="w-full text-center text-lg md:text-xl font-medium text-muted-500">
            {examInfo.questions[currentQuestionIndex].question}
          </h2>
          <div className="space-y-2 w-full">
            {examInfo.questions[currentQuestionIndex].options.map(
              (option, index) => (
                <label
                  key={index}
                  className={cn(
                    "flex items-center space-x-3 border p-3 rounded-lg cursor-pointer",
                    selectedAnswers[currentQuestionIndex] === option
                      ? "bg-blue-100"
                      : "hover:bg-gray-100"
                  )}
                >
                  <input
                    type="radio"
                    name={`answer-${currentQuestionIndex}`}
                    className="form-radio h-5 w-5 text-blue-600"
                    checked={selectedAnswers[currentQuestionIndex] === option}
                    onChange={() =>
                      handleAnswerSelect(currentQuestionIndex, option as string)
                    }
                  />
                  <span className="text-gray-700">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                </label>
              )
            )}
          </div>
        </Card>
        <Card className="w-full max-w-[794px] p-3 bg-grey-200 border-grey-200 space-y-3 flex flex-col items-center justify-center">
          <h3 className="text-sm font-normal text-muted-500 text-center flex items-center justify-center gap-2 w-full">
            <Image
              src="/icons/dashboard/questroute.svg"
              alt="quest icon"
              width={16}
              height={16}
            />
            <span> Question route</span>
          </h3>
          <div className="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-20 gap-2 justify-items-center">
            {Array.from({ length: totalQuestions }, (_, i) => (
              <button
                key={i}
                className={`p-2 text-center border rounded-md ${
                  selectedAnswers[i] ? "bg-[#77C93E] text-white" : "bg-gray-100"
                }`}
                onClick={() => handleNavigation(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </Card>
        <div className="flex items-center justify-between pt-6 w-full max-w-[794px] border-t border-grey-200">
          <Button
            type="button"
            variant={"unstyled"}
            onClick={handlePrevious}
            className="bg-secondary text-primary-400 hover:bg-secondary/80 w-fit h-9 px-9 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:pointer-events-auto disabled:!cursor-not-allowed transition-all duration-300"
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>

          {currentQuestionIndex === totalQuestions - 1 || timeLeft === 0 ? (
            <DialogTrigger asChild>
              <Button
                variant={"unstyled"}
                className="bg-primary-400 text-white w-fit px-6 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Submit
              </Button>
            </DialogTrigger>
          ) : (
            <Button
              variant={"unstyled"}
              className="bg-primary-400 text-white w-fit px-6 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              onClick={handleNext}
            >
              Next
            </Button>
          )}
        </div>
      </div>
      <DialogContent>
        <DialogHeader className="space-y-0 mt-6">
          <DialogTitle>
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src="/icons/dashboard/info.svg"
                alt="info icon"
                width={56}
                height={50}
                priority
              />
              <h2 className="text-lg md:text-xl text-center text-muted-500">
                Are you ready?
              </h2>
              <p className="text-sm font-normal text-[#475467] text-center max-w-[405px]">
                You have <strong>{totalAttemptedQuestions}</strong> unattempted
                questions left. By clicking{" "}
                <span className="text-primary-400">“Yes I’m done”</span>, the
                test will end.
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="w-full pt-4 border-t border-grey-500 space-x-4">
          <DialogClose asChild>
            <Button
              type="button"
              variant={"unstyled"}
              className="bg-secondary text-primary-400 hover:bg-secondary/80 w-fit h-9 px-9 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Go back
            </Button>
          </DialogClose>
          <Button
            variant={"unstyled"}
            onClick={handleSubmit}
            className="bg-primary-400 text-white w-fit px-6 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Yes I&apos;m done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AnswerBoard;
