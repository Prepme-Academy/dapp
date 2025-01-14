import axios from "axios";
import { Achievement, ExamAnalysisResponse, ExamQueryParams, ExamsResponse, ExamTypesResponse, LeaderboardEntry, StartExamResponse, SubmitExamRequest, SubmitExamResponse } from "@/types";
import { BASE_URL } from "..";

export const getExamTypes = async (): Promise<ExamTypesResponse> => {
  const response = await axios.get(`${BASE_URL}/exam/types`, {
    headers: {
      'ngrok-skip-browser-warning': 'true',
    },
  });
  return response.data;
};


export const fetchExams = async (params: ExamQueryParams, authUserId: string): Promise<ExamsResponse> => {
  const response = await axios.get(`${BASE_URL}/exam`, {
    params,
    headers: {
      'auth-user-id': authUserId,
    },
  });
  return response.data;
};

export const startExam = async (examId: number, authUserId: string): Promise<StartExamResponse> => {
  const response = await axios.post(`${BASE_URL}/exam/start/${examId}`, {}, {
    headers: {
      'auth-user-id': authUserId,
    },
  });
  return response.data;
};

export const fetchExamQuestions = async (attemptId: number, authUserId: string) => {
  const response = await axios.get(`${BASE_URL}/exam/questions/${attemptId}`, {
    headers: {
      'auth-user-id': authUserId,
    },
  });
  return response.data;
};

export const submitExam = async (attemptId: number, authUserId: string, data: SubmitExamRequest): Promise<SubmitExamResponse> => {
  const response = await axios.post(
    `${BASE_URL}/exam/submit/${attemptId}`,
    data,
    {
      headers: {
        'auth-user-id': authUserId,
      },
    }
  );
  return response.data;
};

export const fetchExamAnalysis = async (attemptId: number, authUserId: string): Promise<ExamAnalysisResponse> => {
  const response = await axios.get(`${BASE_URL}/exam/analysis/${attemptId}`, {
    headers: {
      'auth-user-id': authUserId,
    },
  });
  return response.data;
};


export const fetchWeeklyLeaderboard = async (
  authUserId: string
): Promise<LeaderboardEntry[]> => {
  const response = await axios.get(`${BASE_URL}/leaderboard/weekly`, {
    headers: {
      "auth-user-id": authUserId,
    },
  });
  return response.data;
};


export const fetchAchievements = async (authUserId: string): Promise<Achievement[]> => {
  const response = await axios.get(`${BASE_URL}/achievements/me`, {
    headers: {
      "auth-user-id": authUserId,
    },
  });
  return response.data;
};
