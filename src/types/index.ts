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

export interface ExamsResponse {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  exams: Exam[];
}

export interface StartExamResponse {
  success: boolean;
  data: {
    examTest: {
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
    };
    noOfQuestions: number;
    completed: boolean;
    user: {
      id: string;
      email: string;
      authId: string;
      walletAddress: string;
      username: string | null;
      dailyDuration: number;
      notificationEnabled: boolean;
      createdAt: string;
      updatedAt: string;
      preferredExam: string | null;
    };
    correct: number | null;
    incorrect: number | null;
    unanswered: number | null;
    score: number | null;
    percentage: number | null;
    id: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ExamQuestion {
  id: number;
  externalId: number;
  bg: string;
  bg2: string;
  text: string;
  number: number | null;
  mark: number;
  explanation: string;
  difficulty: number;
  createdAt: string;
  updatedAt: string;
  options: {
    id: number;
    label: string;
    value: string;
  }[];
}

export interface ExamQuestionsResponse {
  success: boolean;
  data: ExamQuestion[];
}

export interface SubmitExamRequest {
  numOfQuestionsAnswered: number;
  numOfQuestionsNotAnswered: number;
  questions: {
    id: number;
    answered: boolean;
    answer: {
      id: number;
      label: string;
      value: string;
    } | null;
  }[];
  endDate: string;
  duration: number;
}

export interface SubmitExamResponse {
  success: boolean;
  data: {
    id: number;
    correct: number;
    noOfQuestions: number;
    incorrect: number;
    unanswered: number;
    score: number;
    percentage: number;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
    examTest: {
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
    };
  };
}

export interface ExamAnalysisResponse {
  success: boolean;
  data: {
    id: number;
    correct: number;
    noOfQuestions: number;
    incorrect: number;
    unanswered: number;
    score: number;
    percentage: number;
    completed: boolean;
    createdAt: string;
    examTest: {
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
    };
    userAnswers: {
      id: number;
      externalId: number;
      text: string;
      mark: number;
      explanation: string;
      difficulty: number;
      correct: boolean | null;
      question: {
        id: number;
        externalId: number;
        text: string;
        mark: number;
        explanation: string;
        difficulty: number;
        options: {
          id: number;
          label: string;
          value: string;
        }[];
      };
      userOption: {
        id: number;
        label: string;
        value: string;
      } | null;
      correct_option: {
        id: number;
        label: string;
        value: string;
      };
    }[];
  };
}
