import { cn } from "@/lib/utils";
import { SubAnswer, UserAnswer } from "@/types";


interface SubQuestionAnalysisProps {
  question: UserAnswer;
  subAnswers: SubAnswer[];
}

const SubQuestionAnalysis: React.FC<SubQuestionAnalysisProps> = ({ question, subAnswers }) => {
  return (
    <div className="w-full space-y-3">
      <h2
        className="text-sm font-medium text-muted-500"
        dangerouslySetInnerHTML={{ __html: question.question.text }}
      />
      {subAnswers.map((subAnswer, index) => (
        <div key={index} className="space-y-2 w-full">
          <h3 className="text-xs font-medium text-muted-500">{`Sub-question ${index + 1}`}</h3>
          {subAnswer.question?.options.map((option, idx) => (
            <label
              key={idx}
              className={cn(
                "flex items-center space-x-3 border p-3 rounded-lg relative",
                subAnswer.correct_option.value === option.value
                  ? "bg-[#DEFFC8] border-2 border-[#63B42B]"
                  : subAnswer.userOption?.value === option.value
                  ? "bg-[#FFD1D1] border-2 border-[#E6485D]"
                  : ""
              )}
            >
              <span className="text-gray-700">
                {String.fromCharCode(65 + idx)}.{" "}
                <span dangerouslySetInnerHTML={{ __html: option.value }} />
              </span>
              {subAnswer.correct_option.value === option.value && (
                <span className="text-sm font-normal text-muted-500 absolute right-4 top-3 hidden lg:block">
                  correct answer
                </span>
              )}
              {subAnswer.userOption?.value === option.value && (
                <span className="text-sm font-normal text-muted-500 absolute right-4 top-3 hidden lg:block">
                  your answer
                </span>
              )}
            </label>
          ))}
        </div>
      ))}
      <h1 className="text-sm font-medium text-muted-500">Answer Explanation:</h1>
      <div className="w-full p-3 border-grey-200 space-y-3 flex flex-col items-start justify-start">
        <p
          className="text-sm font-normal text-[#4E5153]"
          dangerouslySetInnerHTML={{ __html: question.question.explanation }}
        />
      </div>
    </div>
  );
};

export default SubQuestionAnalysis;