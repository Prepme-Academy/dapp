import { ExamAnalysisResponse } from "@/types";

export const getQuestionStatus = (
  answer: ExamAnalysisResponse["data"]["userAnswers"][0]
) => {
  if (answer.subAnswers) {
    // For questions with sub-answers, check all sub-answers
    const allCorrect = answer.subAnswers.every((sub) => sub.correct === true);
    const allAnswered = answer.subAnswers.every((sub) => sub.correct !== null);
    const anyCorrect = answer.subAnswers.some((sub) => sub.correct === true);

    if (!allAnswered) return "Unanswered";
    if (allCorrect) return "Correct";
    if (anyCorrect) return "Partially Correct";
    return "Incorrect";
  }

  // For regular questions
  if (answer.correct === null) return "Unanswered";
  return answer.correct ? "Correct" : "Incorrect";
};

export const statusColor = (status: string) => {
  switch (status) {
    case "Correct":
      return "text-[#2B5A0A] border-[#9EE071] bg-[#EEFBE5]";
    case "Incorrect":
      return "text-[#E6485D] border-[#FF5876] bg-[#FFF1F3]";
    case "Partially Correct":
      return "text-[#1D2939] border-[#EAECEF] bg-white";
    default:
      return "text-[#DA9714] border-[#FED402] bg-[#FFF9E5]";
  }
};

export const RenderScoreIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "Correct":
    case "All Correct":
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
    case "Incorrect":
    case "All Incorrect":
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
    case "Partially Correct":
      return (
        <svg
          width="33"
          height="16"
          viewBox="0 0 33 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24.6665" cy="8" r="5" fill="white" />
          <path
            d="M24.3333 1.3335C20.66 1.3335 17.6666 4.32683 17.6666 8.00016C17.6666 11.6735 20.66 14.6668 24.3333 14.6668C28.0066 14.6668 31 11.6735 31 8.00016C31 4.32683 28.0066 1.3335 24.3333 1.3335ZM26.5733 9.5335C26.7666 9.72683 26.7666 10.0468 26.5733 10.2402C26.4733 10.3402 26.3466 10.3868 26.22 10.3868C26.0933 10.3868 25.9666 10.3402 25.8666 10.2402L24.3333 8.70683L22.8 10.2402C22.7 10.3402 22.5733 10.3868 22.4466 10.3868C22.32 10.3868 22.1933 10.3402 22.0933 10.2402C21.9 10.0468 21.9 9.72683 22.0933 9.5335L23.6266 8.00016L22.0933 6.46683C21.9 6.2735 21.9 5.9535 22.0933 5.76016C22.2866 5.56683 22.6066 5.56683 22.8 5.76016L24.3333 7.2935L25.8666 5.76016C26.06 5.56683 26.38 5.56683 26.5733 5.76016C26.7666 5.9535 26.7666 6.2735 26.5733 6.46683L25.04 8.00016L26.5733 9.5335Z"
            fill="#FF5876"
          />
          <circle cx="16.6665" cy="8" r="5" fill="white" />
          <path
            d="M16.3333 1.3335C12.66 1.3335 9.66663 4.32683 9.66663 8.00016C9.66663 11.6735 12.66 14.6668 16.3333 14.6668C20.0066 14.6668 23 11.6735 23 8.00016C23 4.32683 20.0066 1.3335 16.3333 1.3335ZM18.9466 8.50016H13.6133C13.34 8.50016 13.1133 8.2735 13.1133 8.00016C13.1133 7.72683 13.34 7.50016 13.6133 7.50016H18.9466C19.22 7.50016 19.4466 7.72683 19.4466 8.00016C19.4466 8.2735 19.2266 8.50016 18.9466 8.50016Z"
            fill="#FFCF4D"
          />
          <circle cx="8.6665" cy="8" r="5" fill="white" />
          <path
            d="M8.33329 1.3335C4.65996 1.3335 1.66663 4.32683 1.66663 8.00016C1.66663 11.6735 4.65996 14.6668 8.33329 14.6668C12.0066 14.6668 15 11.6735 15 8.00016C15 4.32683 12.0066 1.3335 8.33329 1.3335ZM11.52 6.46683L7.73996 10.2468C7.64663 10.3402 7.51996 10.3935 7.38663 10.3935C7.25329 10.3935 7.12663 10.3402 7.03329 10.2468L5.14663 8.36016C4.95329 8.16683 4.95329 7.84683 5.14663 7.6535C5.33996 7.46016 5.65996 7.46016 5.85329 7.6535L7.38663 9.18683L10.8133 5.76016C11.0066 5.56683 11.3266 5.56683 11.52 5.76016C11.7133 5.9535 11.7133 6.26683 11.52 6.46683Z"
            fill="#63B42B"
          />
        </svg>
      );

    default:
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
};

export const StatusLabel = ({ status }: { status: string }) => (
  <span className="px-2 py-1 rounded-full text-xs font-medium">{status}</span>
);
