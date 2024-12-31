export interface CreateUserPayload {
  email: string;
  walletAddress: string;
  authId: string;
}

export interface UserResponse {
  success: boolean;
  data: {
    email: string;
    walletAddress: string;
    authId: string;
    username: string | null;
    googleId: string | null;
    discordId: string | null;
    appleId: string | null;
    twitterId: string | null;
    facebookId: string | null;
    id: string;
    dailyDuration: number;
    notificationEnabled: boolean;
    createdAt: string;
    updatedAt: string;
  };
}


// New types for onboarding
export interface OnboardUserPayload {
  username: string;
  examType: string;
  dailyDuration: number;
  notificationEnabled: boolean;
}

export interface OnboardUserResponse {
  id: string;
  email: string;
  walletAddress: string | null;
  username: string;
  dailyDuration: number;
  notificationEnabled: boolean;
  createdAt: string;
  updatedAt: string;
  preferredExam: string | null;
  examType: string;
}

export interface ExamType {
  id: number;
  name: string;
  created_at: string;
  code: string | null;
  logo: string;
  subjects: {
    id: number;
    name: string;
    code: string | null;
    years: string[];
  }[];
}

export interface ExamTypesResponse {
  success: boolean;
  data: ExamType[];
}


export interface ExamQueryParams {
  type: string;
  subject: string;
  year: string;
  sort: string;
}

export interface Exam {
  id: number;
  noOfQuestions: number;
  noOfAttempts: number;
  title: string;
  instructions: string;
  slug: string;
  duration: number;
  marks: number;
  xp: number;
  year: number;
  createdAt: string;
  updatedAt: string;
  exam: {
    id: number;
    name: string;
    created_at: string;
    code: string | null;
    logo: string;
    createdAt: string;
    updatedAt: string;
  };
  subject: {
    id: number;
    name: string;
    code: string | null;
    years: string[];
  };
}

export  interface ExamsResponse {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  exams: Exam[];
}