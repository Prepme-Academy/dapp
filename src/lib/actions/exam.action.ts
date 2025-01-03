import {
  fetchExamAnalysis,
  fetchExamQuestions,
  fetchExams,
  getExamTypes,
  startExam,
  submitExam,
} from "@/services/apis/exam.api";
import {
  ExamAnalysisResponse,
  ExamQuestionsResponse,
  ExamsResponse,
  ExamTypesResponse,
  StartExamResponse,
  SubmitExamRequest,
  SubmitExamResponse,
} from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

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
      enabled: !!params.authUserId,
    }
  );
};

export const useStartExam = () => {
  return useMutation<
    StartExamResponse,
    Error,
    { examId: number; authUserId: string }
  >(({ examId, authUserId }) => startExam(examId, authUserId));
};

export const useExamQuestions = (attemptId: number, authUserId: string) => {
  return useQuery<ExamQuestionsResponse, Error>(
    ["examQuestions", attemptId],
    () => fetchExamQuestions(attemptId, authUserId),
    {
      enabled: !!attemptId && !!authUserId,
    }
  );
};

export const useSubmitExam = () => {
  return useMutation<
    SubmitExamResponse,
    Error,
    { attemptId: number; authUserId: string; data: SubmitExamRequest }
  >(({ attemptId, authUserId, data }) =>
    submitExam(attemptId, authUserId, data)
  );
};

export const useExamAnalysis = (attemptId: number, authUserId: string) => {
  return useQuery<ExamAnalysisResponse, Error>(
    ["examAnalysis", attemptId],
    () => fetchExamAnalysis(attemptId, authUserId),
    {
      enabled: !!attemptId && !!authUserId,
    }
  );
};
