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
import { Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import { useExamQuestions, useSubmitExam } from "@/lib/actions/exam.action";
import { formatAxiosErrorMessage } from "@/utils/errors";
import { AxiosError } from "axios";
import useFullscreen from "@/hooks/useFullScreen";
import {
  SubmitExamRequest,
  SubmitExamRequestMainQuestion,
  SubmitExamRequestSubQuestion,
} from "@/types";

interface AnswerBoardProps {
  id: string;
}

const AnswerBoard: React.FC<AnswerBoardProps> = ({ id }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = usePrivy();
  const authUserId = user?.id;


  const initialQuestionIndex = Number(searchParams.get("q")) || 0;
  const STORAGE_KEY = `exam-${id}-timer`;
  const ANSWERS_STORAGE_KEY = `exam-${id}-answers`;
  const INITIAL_TIME = 1800;

  const [timeLeft, setTimeLeft] = useState(() => {
    if (typeof window === "undefined") return INITIAL_TIME;
    const savedTime = localStorage.getItem(STORAGE_KEY);
    return savedTime ? parseInt(savedTime) : INITIAL_TIME;
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialQuestionIndex);
  const [isSubQuestion, setIsSubQuestion] = useState(false);
  const [currentSubQuestionIndex, setCurrentSubQuestionIndex] = useState(0);

  const { toggleFullscreen } = useFullscreen(() => {
    handleSubmit();
  });

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>(() => {
    if (typeof window === "undefined") return {};
    const savedAnswers = localStorage.getItem(ANSWERS_STORAGE_KEY);
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const topRef = useRef<HTMLDivElement>(null);

  const {
    data: examData,
    isLoading,
    isError,
    error,
  } = useExamQuestions(Number(id), authUserId || "");
  const { mutate: submitExam, isLoading: isSubmitting } = useSubmitExam();

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        const newTime = prevTime - 1;
        localStorage.setItem(STORAGE_KEY, newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isSubmitted, STORAGE_KEY]);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("q", currentQuestionIndex.toString());
    router.replace(`?${newSearchParams.toString()}`);
  }, [currentQuestionIndex, searchParams, router]);

  const handleAnswerSelect = (index: number, option: string) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = {
        ...prevAnswers,
        [index]: option,
      };
      localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(newAnswers));
      return newAnswers;
    });
  };

  const handleNavigation = (questionIndex: number, subQuestionIndex: number = 0) => {
    setCurrentQuestionIndex(questionIndex);
    setCurrentSubQuestionIndex(subQuestionIndex);
    setIsSubQuestion(subQuestionIndex > 0);
    scrollToTop();
  };

  const handleNext = () => {
    if (isSubQuestion) {
      const subQuestions = examData?.data[currentQuestionIndex].subQuestions;
      if (currentSubQuestionIndex < (subQuestions?.length || 0) - 1) {
        setCurrentSubQuestionIndex(currentSubQuestionIndex + 1);
        return;
      }
      setIsSubQuestion(false);
      setCurrentSubQuestionIndex(0);
    }
    if (currentQuestionIndex < (examData?.data.length || 0) - 1) {
      handleNavigation(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (isSubQuestion && currentSubQuestionIndex > 0) {
      setCurrentSubQuestionIndex(currentSubQuestionIndex - 1);
      return;
    }
    if (currentQuestionIndex > 0) {
      const prevQuestionIndex = currentQuestionIndex - 1;
      const prevQuestionSubQuestions = examData?.data[prevQuestionIndex].subQuestions;
      if (prevQuestionSubQuestions && prevQuestionSubQuestions.length > 0) {
        handleNavigation(prevQuestionIndex, prevQuestionSubQuestions.length - 1);
      } else {
        handleNavigation(prevQuestionIndex);
      }
    }
  };

  const handleSubmit = () => {
    if (!authUserId || !examData) return;

    // Process questions
    const questions: SubmitExamRequestMainQuestion[] = examData.data.map(
      (question) => {
        if (question.type === 4 && question.subQuestions) {
          // Handle sub-questions
          const subQuestions: SubmitExamRequestSubQuestion[] =
            question.subQuestions.map((sub) => ({
              id: sub.id,
              externalId: sub.externalId,
              bg: sub.bg,
              bg2: sub.bg2,
              text: sub.text,
              number: sub.number,
              mark: sub.mark,
              explanation: sub.explanation,
              type: sub.type,
              isSub: sub.isSub,
              difficulty: sub.difficulty,
              createdAt: sub.createdAt,
              updatedAt: sub.updatedAt,
              options: sub.options,
              answered: !!selectedAnswers[sub.id],
              answer: selectedAnswers[sub.id]
                ? sub.options.find(
                    (option) => option.value === selectedAnswers[sub.id]
                  ) || null
                : null,
            }));

          return {
            id: question.id,
            type: question.type,
            subQuestions,
            answered: subQuestions.every((sub) => sub.answered),
          };
        } else {
          // Handle regular questions
          return {
            id: question.id,
            type: question.type,
            answered: !!selectedAnswers[question.id],
            answer: selectedAnswers[question.id]
              ? question.options?.find(
                  (option) => option.value === selectedAnswers[question.id]
                ) || null
              : null,
          };
        }
      }
    );

    const numOfQuestionsAnswered = questions.filter((q) => q.answered).length;
    const numOfQuestionsNotAnswered = questions.length - numOfQuestionsAnswered;

    const submitData: SubmitExamRequest = {
      numOfQuestionsAnswered,
      numOfQuestionsNotAnswered,
      questions,
      endDate: new Date().toISOString(),
      duration: Math.floor((INITIAL_TIME - timeLeft) / 60),
    };

    submitExam(
      { attemptId: Number(id), authUserId, data: submitData },
      {
        onSuccess: () => {
          // console.log("Exam submitted successfully:", data);
          setIsSubmitted(true);
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(ANSWERS_STORAGE_KEY);
          toggleFullscreen();
          router.push(`/dashboard/practice/detail/${id}/success`);
        },
        onError: (error) => {
          console.error("Error submitting the exam:", error);
        },
      }
    );
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  if (isLoading) {
    return (
      <div className="w-full h-full overflow-auto flex md:items-center md:justify-center">
        <div className="w-full max-w-[635px] mx-auto">
          <div className="w-full min-h-40 lg:min-h-80 bg-gray-300 animate-pulse" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex flex-col items-center justify-center h-full">
        <Card className="w-full max-w-[635px] min-h-28 mx-auto px-3 py-4 border-grey-500 space-y-3 flex flex-col items-start justify-start">
          <p className="text-red-500 text-sm font-normal">
            Error loading exam analysis data.{" "}
            {formatAxiosErrorMessage(error as AxiosError)}
          </p>
          <Button
            variant={"unstyled"}
            className="bg-primary-400 text-white w-fit px-6 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            onClick={() => {
              router.replace("/dashboard/practice");
              toggleFullscreen();
            }}
          >
            Go to practice
          </Button>
        </Card>
      </div>
    );
  }

  const totalQuestions =
    examData?.data.reduce((acc, question) => {
      if (!question.subQuestions?.length) {
        return acc + 1;
      }
      return acc + question.subQuestions.length;
    }, 0) || 0;

  const getAttemptedQuestions = () => {
    return (
      examData?.data.reduce((acc, question) => {
        if (!question.subQuestions?.length) {
          return acc + (selectedAnswers[question.id] ? 1 : 0);
        }
        return (
          acc +
          question.subQuestions.reduce(
            (subAcc, subQuestion) =>
              subAcc + (selectedAnswers[subQuestion.id] ? 1 : 0),
            0
          )
        );
      }, 0) || 0
    );
  };

  const totalAttemptedQuestions = getAttemptedQuestions();
  const progressPercentage = (totalAttemptedQuestions / totalQuestions) * 100;

  const currentQuestion = examData?.data[currentQuestionIndex];
  const isSubQuestionData = currentQuestion?.type === 4;

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
        {isSubQuestionData ? (
          <Card className="w-full max-w-[1051px] h-[1056px] overflow-hidden grid grid-col-1 lg:grid-cols-[635px_1fr] mx-auto border-grey-500 items-start justify-start">
            <div className="w-full p-4 lg:border-r-2 lg:border-[#F0F0F0] h-full overflow-auto">
              <h2
                className="w-full text-center text-lg md:text-xl font-medium text-muted-500"
                dangerouslySetInnerHTML={{
                  __html: currentQuestion.text,
                }}
              />
            </div>
            <div className="space-y-2 w-full p-4 h-full overflow-auto">
              {currentQuestion.subQuestions.map((subQuestion, subIndex) => (
                <div key={subQuestion.id} className="space-y-3">
                  <h3 className="text-lg font-medium">{`Question ${
                    subIndex + 1
                  }`}</h3>
                  {subQuestion.options.map((option, index) => (
                    <label
                      key={index}
                      className={cn(
                        "flex items-center space-x-3 border p-3 rounded-lg cursor-pointer",
                        selectedAnswers[subQuestion.id] === option.value
                          ? "bg-blue-100"
                          : "hover:bg-gray-100"
                      )}
                    >
                      <input
                        type="radio"
                        name={`answer-${subQuestion.id}`}
                        className="form-radio h-5 w-5 text-blue-600"
                        checked={
                          selectedAnswers[subQuestion.id] === option.value
                        }
                        onChange={() =>
                          handleAnswerSelect(subQuestion.id, option.value)
                        }
                      />
                      <div className="text-gray-700">
                        {String.fromCharCode(65 + index)}.{" "}
                        <div
                          className="inline"
                          dangerouslySetInnerHTML={{
                            __html: option.value,
                          }}
                        />
                      </div>
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </Card>
        ) : (
          examData &&
          examData.data &&
          examData.data[currentQuestionIndex] && (
            <Card className="w-full max-w-[635px] mx-auto px-3 py-4 border-grey-500 space-y-3 flex flex-col items-start justify-start">
              <h2
                className="w-full text-center text-lg md:text-xl font-medium text-muted-500"
                dangerouslySetInnerHTML={{
                  __html: examData.data[currentQuestionIndex].text,
                }}
              />
              <div className="space-y-2 w-full">
                {examData.data[currentQuestionIndex].options?.map(
                  (option, index) => (
                    <label
                      key={index}
                      className={cn(
                        "flex items-center space-x-3 border p-3 rounded-lg cursor-pointer",
                        selectedAnswers[currentQuestionIndex] === option.value
                          ? "bg-blue-100"
                          : "hover:bg-gray-100"
                      )}
                    >
                      <input
                        type="radio"
                        name={`answer-${currentQuestionIndex}`}
                        className="form-radio h-5 w-5 text-blue-600"
                        checked={
                          selectedAnswers[currentQuestionIndex] === option.value
                        }
                        onChange={() =>
                          handleAnswerSelect(currentQuestionIndex, option.value)
                        }
                      />
                      <div className="text-gray-700">
                        {String.fromCharCode(65 + index)}.{" "}
                        <div
                          className="inline"
                          dangerouslySetInnerHTML={{
                            __html: option.value,
                          }}
                        />
                      </div>
                    </label>
                  )
                )}
              </div>
            </Card>
          )
        )}

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
            {examData?.data.map((question, index) => {
              // If it's a regular question (no sub-questions)
              if (!question.subQuestions?.length) {
                return (
                  <button
                    key={question.id}
                    className={`p-2 text-center border rounded-md ${
                      selectedAnswers[question.id]
                        ? "bg-[#77C93E] text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => handleNavigation(index)}
                    disabled={timeLeft === 0}
                  >
                    {index + 1}
                  </button>
                );
              }

              // If it's a question with sub-questions
              return (
                <button
                  key={question.id}
                  className={cn(
                    "p-2 text-center border rounded-md transition-all duration-200",
                    question.subQuestions.every(
                      (sub) => selectedAnswers[sub.id]
                    )
                      ? "bg-[#77C93E] text-white border-[#77C93E] hover:bg-[#68b233]"
                      : question.subQuestions.some(
                          (sub) => selectedAnswers[sub.id]
                        )
                      ? "bg-[#a8e280] text-white border-[#a8e280] hover:bg-[#95c973]"
                      : "bg-gray-100 hover:bg-gray-200 border-gray-200",
                    timeLeft === 0 && "opacity-50 cursor-not-allowed"
                  )}
                  onClick={() => handleNavigation(index)}
                  disabled={timeLeft === 0}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </Card>

        <div className="flex items-center justify-between pt-6 w-full max-w-[794px] border-t border-grey-200">
          <Button
            type="button"
            variant={"unstyled"}
            onClick={handlePrevious}
            className="bg-secondary text-primary-400 hover:bg-secondary/80 w-fit h-9 px-9 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:pointer-events-auto disabled:!cursor-not-allowed transition-all duration-300"
            disabled={
              (currentQuestionIndex === 0 &&
                currentSubQuestionIndex === null) ||
              timeLeft === 0
            }
          >
            Previous
          </Button>

          {currentQuestionIndex === totalQuestions - 1 && currentSubQuestionIndex === 0 || timeLeft === 0 ? (
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
                {timeLeft === 0 ? "Time's Up!" : "Are you ready?"}
              </h2>
              {timeLeft === 0 ? (
                <p className="text-sm font-normal text-[#475467] text-center max-w-[405px]">
                  Your test session has ended. You completed{" "}
                  <strong>{totalAttemptedQuestions}</strong> questions. Click{" "}
                  <span className="text-primary-400">
                    &quot;Submit Test&quot;
                  </span>{" "}
                  to see your results.
                </p>
              ) : (
                <p className="text-sm font-normal text-[#475467] text-center max-w-[405px]">
                  You have{" "}
                  <strong>{totalQuestions - totalAttemptedQuestions}</strong>{" "}
                  unattempted questions left. By clicking{" "}
                  <span className="text-primary-400">“Yes I’m done”</span>, the
                  test will end.
                </p>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="w-full !flex-row pt-4 border-t border-grey-500 space-x-4">
          {timeLeft === 0 ? null : (
            <DialogClose asChild>
              <Button
                type="button"
                variant={"unstyled"}
                className="bg-secondary text-primary-400 hover:bg-secondary/80 w-fit h-9 px-9 white-gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Go back
              </Button>
            </DialogClose>
          )}
          <Button
            variant={"unstyled"}
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-primary-400 text-white w-fit px-6 h-9 gradient-border shadow-buttonshadow outline-none text-sm font-medium hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : timeLeft === 0 ? (
              "Submit Test"
            ) : (
              "Yes I'm done"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AnswerBoard;
