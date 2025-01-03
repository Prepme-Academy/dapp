// store/examStore.ts
import { ExamAnalysisResponse } from "@/types"; // Adjust the import path as needed
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface ExamState {
  examData: ExamAnalysisResponse["data"] | null;
  examHistory: ExamAnalysisResponse["data"][];
}

interface ExamActions {
  setExamData: (data: ExamAnalysisResponse["data"]) => void;
  addToExamHistory: (data: ExamAnalysisResponse["data"]) => void;
  resetExamData: () => void;
  clearExamHistory: () => void;
}

type ExamStore = ExamState & ExamActions;

const useExamStore = create<ExamStore>()(
  persist<ExamStore>(
    (set) => ({
      examData: null,
      examHistory: [],

      setExamData: (data) => set({ examData: data }),

      addToExamHistory: (data) =>
        set((state) => ({
          examHistory: [data, ...state.examHistory],
        })),

      resetExamData: () => set({ examData: null }),

      clearExamHistory: () => set({ examHistory: [] }),
    }),
    {
      name: "prepme-academy-exam-store",
      onRehydrateStorage: () => (state) => {
        console.log("Rehydrated Exam State:", state);
      },
    } as PersistOptions<ExamStore>
  )
);

export default useExamStore;
