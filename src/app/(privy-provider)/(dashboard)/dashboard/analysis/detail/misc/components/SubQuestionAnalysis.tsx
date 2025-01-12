import { cn } from "@/lib/utils";
import { SubAnswer, UserAnswer } from "@/types";

interface SubQuestionAnalysisProps {
  question: UserAnswer;
  subAnswers: SubAnswer[];
}

const SubQuestionAnalysis: React.FC<SubQuestionAnalysisProps> = ({
  question,
  subAnswers,
}) => {
  return (
    <div className="w-full space-y-3">
      <h2
        className="text-sm font-medium text-muted-500"
        dangerouslySetInnerHTML={{ __html: question.question.text }}
      />

      {subAnswers.map((subAnswer, index) => (
        <div key={index} className="space-y-4 w-full">
          <div className="space-y-2">
            <h3
              className="text-xs font-medium text-muted-500"
              dangerouslySetInnerHTML={{ __html: subAnswer.text }}
            />
            {[subAnswer.correct_option, subAnswer.userOption].map(
              (option, idx) => (
                <label
                  key={idx}
                  className={cn(
                    "flex items-center space-x-3 border p-3 rounded-lg relative",
                    subAnswer.correct_option.value === option?.value
                      ? "bg-[#DEFFC8] border-2 border-[#63B42B]"
                      : subAnswer.userOption?.value === option?.value
                      ? "bg-[#FFD1D1] border-2 border-[#E6485D]"
                      : ""
                  )}
                >
                  <span className="text-gray-700">
                    {option?.label}.{" "}
                    <span
                      dangerouslySetInnerHTML={{ __html: option?.value || "" }}
                    />
                  </span>
                  {subAnswer.correct_option.value === option?.value && (
                    <span className="text-sm font-normal text-muted-500 absolute right-4 top-3 hidden lg:block">
                      correct answer
                    </span>
                  )}
                  {subAnswer.userOption?.value === option?.value && (
                    <span className="text-sm font-normal text-muted-500 absolute right-4 top-3 hidden lg:block">
                      your answer
                    </span>
                  )}
                </label>
              )
            )}
          </div>
          {subAnswer.explanation && (
            <div className="w-full p-3 border border-grey-200 rounded-lg">
              <h4 className="text-sm font-medium text-muted-500 mb-2">
                Explanation:
              </h4>
              <p
                className="text-sm font-normal text-[#4E5153]"
                dangerouslySetInnerHTML={{ __html: subAnswer.explanation }}
              />
            </div>
          )}
        </div>
      ))}

      {/* {subAnswers.map((subAnswer, index) => (
        <div key={index} className="space-y-4 w-full">
          <div className="space-y-2">
            <h3
              className="text-xs font-medium text-muted-500"
              dangerouslySetInnerHTML={{ __html: subAnswer.text }}
            />
            {question.question.options.map((option, idx) => (
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
          {subAnswer.explanation && (
            <div className="w-full p-3 border border-grey-200 rounded-lg">
              <h4 className="text-sm font-medium text-muted-500 mb-2">
                Explanation:
              </h4>
              <p
                className="text-sm font-normal text-[#4E5153]"
                dangerouslySetInnerHTML={{ __html: subAnswer.explanation }}
              />
            </div>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default SubQuestionAnalysis;
