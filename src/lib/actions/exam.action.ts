import {
  fetchAchievements,
  fetchExamAnalysis,
  fetchExamQuestions,
  fetchExams,
  fetchWeeklyLeaderboard,
  getExamTypes,
  startExam,
  submitExam,
} from "@/services/apis/exam.api";
import {
  Achievement,
  ExamAnalysisResponse,
  ExamQuestionsResponse,
  ExamsResponse,
  ExamTypesResponse,
  LeaderboardEntry,
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
  address: string;
}) => {
  return useQuery<ExamsResponse, Error>(
    ["exams", params],
    () => fetchExams(params, params.authUserId, params.address),
    {
      enabled: !!params.authUserId,
    }
  );
};

export const useStartExam = () => {
  return useMutation<
    StartExamResponse,
    Error,
    { examId: number; authUserId: string; address: string }
  >(({ examId, authUserId, address }) =>
    startExam(examId, authUserId, address)
  );
};

export const useExamQuestions = (
  attemptId: number,
  authUserId: string,
  address: string
) => {
  return useQuery<ExamQuestionsResponse, Error>(
    ["examQuestions", attemptId],
    () => fetchExamQuestions(attemptId, authUserId, address),
    {
      enabled: !!attemptId && !!authUserId && !!address,
    }
  );
};

export const useSubmitExam = () => {
  return useMutation<
    SubmitExamResponse,
    Error,
    {
      attemptId: number;
      authUserId: string;
      address: string;
      data: SubmitExamRequest;
    }
  >(({ attemptId, authUserId, address, data }) =>
    submitExam(attemptId, authUserId, address, data)
  );
};

export const useExamAnalysis = (
  attemptId: number,
  authUserId: string,
  address: string
) => {
  return useQuery<ExamAnalysisResponse, Error>(
    ["examAnalysis", attemptId],
    () => fetchExamAnalysis(attemptId, authUserId, address),
    {
      enabled: !!attemptId && !!authUserId && !!address,
    }
  );
};

export const useWeeklyLeaderboard = (authUserId: string, address: string) => {
  return useQuery<LeaderboardEntry[], Error>(
    ["weeklyLeaderboard", authUserId],
    () => fetchWeeklyLeaderboard(authUserId, address),
    {
      enabled: !!authUserId && !!address,
    }
  );
};

export const useAchievements = (authUserId: string, address: string) => {
  return useQuery<Achievement[], Error>(
    ["achievements", authUserId],
    () => fetchAchievements(authUserId, address),
    {
      enabled: !!authUserId && !!address,
    }
  );
};
