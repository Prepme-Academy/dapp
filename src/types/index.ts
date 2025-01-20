export interface CheckUsernameResponse {
  success: boolean;
  message: string;
}

export interface CreateUserPayload {
  email?: string;
  walletAddress: string;
  authId: string;
  inviteCode?: string;
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
      exam: {
        id: number;
        name: string;
        created_at: string;
        code: string | undefined;
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

export interface Option {
  id: number;
  label: string;
  value: string;
}

export interface SubQuestion {
  id: number;
  externalId: number;
  bg: string;
  bg2: string;
  text: string;
  number: number | null;
  mark: number | null;
  explanation: string | null;
  type: number;
  isSub: boolean;
  difficulty: number;
  createdAt: string;
  updatedAt: string;
  options: Option[];
}

export interface MainQuestion {
  id: number;
  externalId: number;
  bg: string;
  bg2: string;
  text: string;
  number: number | null;
  mark: number;
  explanation: string | null;
  type: number;
  isSub: boolean;
  difficulty: number;
  createdAt: string;
  updatedAt: string;
  subQuestions: SubQuestion[];
  options?: Option[];
}

export interface ExamQuestionsResponse {
  success: boolean;
  data: MainQuestion[];
}

export interface SubmitExamRequestSubQuestion {
  id: number;
  externalId: number;
  bg: string;
  bg2: string;
  text: string;
  number: number | null;
  mark: number | null;
  explanation: string | null;
  type: number;
  isSub: boolean;
  difficulty: number;
  createdAt: string;
  updatedAt: string;
  options: Option[];
  answered: boolean;
  answer: Option | null;
}

export interface SubmitExamRequestMainQuestion {
  id: number;
  type: number;
  subQuestions?: SubQuestion[];
  answered: boolean;
  answer?: Option | null;
}

export interface SubmitExamRequest {
  numOfQuestionsAnswered: number;
  numOfQuestionsNotAnswered: number;
  questions: SubmitExamRequestMainQuestion[];
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

export interface Question {
  id: number;
  externalId: number;
  text: string;
  mark: number;
  explanation: string;
  difficulty: number;
  options: Option[];
  hasSub: boolean;
  isSub: boolean;
}

export interface SubAnswer {
  id: number;
  externalId: number;
  bg: string;
  bg2: string;
  text: string;
  number: number | null;
  mark: number | null;
  explanation: string | null;
  difficulty: number;
  createdAt: string;
  updatedAt: string;
  hasSub: boolean;
  isSub: boolean;
  correct: boolean | null;
  userOption: Option | null;
  correct_option: Option;
  question?: Question;
}

export interface UserAnswer {
  id: number;
  externalId: number;
  text: string;
  mark: number;
  explanation: string;
  difficulty: number;
  correct: boolean | null;
  question: Question;
  userOption: Option | null;
  correct_option: Option;
  hasSub: boolean;
  isSub: boolean;
  subAnswers?: SubAnswer[];
}

export interface ExamTest {
  id: number;
  noOfQuestions: number;
  noOfAttempts: number;
  title: string;
  instructions: string;
  slug: string;
  duration: number;
  marks: number;
  xp: number;
  year: number | null;
  exam: {
    id: number;
    name: string;
    created_at: string;
    code: string | undefined;
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

export interface ExamAnalysisResponse {
  success: boolean;
  data: {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    id: number;
    correct: number;
    noOfQuestions: number;
    incorrect: number;
    unanswered: number;
    score: number;
    percentage: number;
    completed: boolean;
    createdAt: string;
    xpEarned: string;
    examTest: ExamTest;
    userAnswers: UserAnswer[];
  };
}

export interface UserInfo {
  id: string;
  email: string;
  authId: string;
  walletAddress: string;
  username: string;
  dailyDuration: number;
  totalStreaks: number;
  totalXp: number;
  notificationEnabled: boolean;
  onboarded: boolean;
  googleId: string | null;
  discordId: string | null;
  appleId: string | null;
  twitterId: string | null;
  facebookId: string | null;
  referralCode: string;
  totalPracticeTime: number;
  totalTestsTaken: number;
  createdAt: string;
  lastPracticeDate: string;
  updatedAt: string;
  preferredExam: PreferredExam;
}

export interface PreferredExam {
  id: number;
  name: string;
  created_at: string;
  code: string | null;
  logo: string;
  createdAt: string;
  updatedAt: string;
}

export interface WeekDay {
  day: string;
  date: string;
  isComplete: boolean;
}

export interface StreakResponse {
  currentDay: string;
  weekDays: WeekDay[];
}

export interface User {
  id: string;
  email: string;
  authId: string;
  walletAddress: string;
  username: string;
  dailyDuration: number;
  totalStreaks: number;
  totalXp: number;
  notificationEnabled: boolean;
  onboarded: boolean;
  referralCode: string;
  totalPracticeTime: number;
  totalTestsTaken: number;
  createdAt: string;
  lastPracticeDate: string;
  updatedAt: string;
}

export interface LeaderboardEntry {
  user: User;
  xpEarned: number;
  rank: number;
}

export interface Achievement {
  id: number;
  name: string;
  description: string;
  nftId: number;
  completed: boolean;
  metadataUrl: string;
  completedAt: string;
  nftMinted: boolean;
}
