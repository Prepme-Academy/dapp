import axios from "axios";
import {
  Achievement,
  ExamAnalysisResponse,
  ExamQueryParams,
  ExamsResponse,
  ExamTypesResponse,
  LeaderboardEntry,
  StartExamResponse,
  SubmitExamRequest,
  SubmitExamResponse,
} from "@/types";

export const getExamTypes = async (): Promise<ExamTypesResponse> => {
  const response = await axios.get("/api/exam/get-types", {
    headers: {
      "ngrok-skip-browser-warning": "true",
    },
  });
  return response.data;
};

export const fetchExams = async (
  params: ExamQueryParams,
  authUserId: string,
  address: string
): Promise<ExamsResponse> => {
  const response = await axios.get("/api/exam/all-exam", {
    params,
    headers: {
      "auth-user-id": authUserId,
      Address: address,
    },
  });
  return response.data;
};

export const startExam = async (
  examId: number,
  authUserId: string,
  address: string
): Promise<StartExamResponse> => {
  const response = await axios.post(
    `/api/exam/begin-exam/${examId}`,
    {},
    {
      headers: {
        "auth-user-id": authUserId,
        Address: address,
      },
    }
  );
  return response.data;
};

export const fetchExamQuestions = async (
  attemptId: number,
  authUserId: string,
  address: string
) => {
  const response = await axios.get(`/api/exam/get-questions/${attemptId}`, {
    headers: {
      "auth-user-id": authUserId,
      Address: address,
    },
  });
  return response.data;
};

export const submitExam = async (
  attemptId: number,
  authUserId: string,
  address: string,
  data: SubmitExamRequest
): Promise<SubmitExamResponse> => {
  const response = await axios.post(
    `/api/exam/submit/${attemptId}`,
    data,
    {
      headers: {
        "auth-user-id": authUserId,
        Address: address,
      },
    }
  );
  return response.data;
};

export const fetchExamAnalysis = async (
  attemptId: number,
  authUserId: string,
  address: string
): Promise<ExamAnalysisResponse> => {
  const response = await axios.get(`/api/exam/analysis/${attemptId}`, {
    headers: {
      "auth-user-id": authUserId,
      Address: address,
    },
  });
  return response.data;
};

export const fetchWeeklyLeaderboard = async (
  authUserId: string,
  address: string
): Promise<LeaderboardEntry[]> => {
  const response = await axios.get("/api/activities/leaderboard", {
    headers: {
      "auth-user-id": authUserId,
      Address: address,
    },
  });
  return response.data;
};

export const fetchAchievements = async (
  authUserId: string,
  address: string
): Promise<Achievement[]> => {
  const response = await axios.get("/api/activities/achievements", {
    headers: {
      "auth-user-id": authUserId,
      Address: address,
    },
  });
  return response.data;
};
