import { fetchExams, getExamTypes } from "@/services/apis/exam.api";
import { ExamsResponse, ExamTypesResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useExamTypes = () => {
  return useQuery<ExamTypesResponse, Error>(["examTypes"], getExamTypes);
};

export const useExams = (params: {
  type: string;
  subject: string;
  year: string;
  sort: string;
  authUserId: string;
}) => {
  return useQuery<ExamsResponse, Error>(
    ["exams", params],
    () => fetchExams(params, params.authUserId),
    {
      enabled:
        !!params.type &&
        !!params.subject &&
        !!params.year &&
        !!params.sort &&
        !!params.authUserId,
    }
  );
};
