export interface ExamType {
  id: string;
  examType: string;
  year: number;
  subject: string;
  questions: (
    | {
        question: string;
        options: string[];
        answer: string;
      }
    | {
        question: string;
        options: number[];
        answer: number;
      }
  )[];
}
