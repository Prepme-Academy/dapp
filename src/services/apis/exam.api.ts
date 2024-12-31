import axios from "axios";
import { ExamQueryParams, ExamsResponse, ExamTypesResponse } from "@/types";
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