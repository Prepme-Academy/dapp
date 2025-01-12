import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserAnswer } from "@/types";


interface RegularQuestionAnalysisProps {
  question: UserAnswer;
}

const RegularQuestionAnalysis: React.FC<RegularQuestionAnalysisProps> = ({ question }) => {
  return (
    <div className="w-full space-y-3">
      <h2
        className="text-sm font-medium text-muted-500"
        dangerouslySetInnerHTML={{ __html: question.question.text }}
      />
      <div className="space-y-2 w-full">
        {question.question.options.map((option, index) => (
          <label
            key={index}
            className={cn(
              "flex items-center space-x-3 border p-3 rounded-lg relative",
              question.correct_option.value === option.value
                ? "bg-[#DEFFC8] border-2 border-[#63B42B]"
                : question.userOption?.value === option.value
                ? "bg-[#FFD1D1] border-2 border-[#E6485D]"
                : ""
            )}
          >
            <span className="text-gray-700">
              {String.fromCharCode(65 + index)}.{" "}
              <span dangerouslySetInnerHTML={{ __html: option.value }} />
            </span>
            {question.correct_option.value === option.value && (
              <span className="text-sm font-normal text-muted-500 absolute right-4 top-3 hidden lg:block">
                correct answer
              </span>
            )}
            {question.userOption?.value === option.value && (
              <span className="text-sm font-normal text-muted-500 absolute right-4 top-3 hidden lg:block">
                your answer
              </span>
            )}
          </label>
        ))}
      </div>
      <h1 className="text-sm font-medium text-muted-500">Answer Explanation:</h1>
      <Card className="w-full p-3 border-grey-200 space-y-3 flex flex-col items-start justify-start">
        <p
          className="text-sm font-normal text-[#4E5153]"
          dangerouslySetInnerHTML={{ __html: question.question.explanation }}
        />
      </Card>
    </div>
  );
};

export default RegularQuestionAnalysis;