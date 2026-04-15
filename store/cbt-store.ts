import { create } from "zustand";

interface Question {
  id: string;
  text: string;
  options: { id: string; text: string }[];
}

interface CBTState {
  currentExamId: string | null;
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<string, string>; // questionId -> optionId
  timeRemaining: number; // seconds
  isSubmitted: boolean;

  // Actions
  startExam: (examId: string, questions: Question[], duration: number) => void;
  setAnswer: (questionId: string, optionId: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (index: number) => void;
  tick: () => void;
  submitExam: () => void;
}

export const useCBTStore = create<CBTState>((set) => ({
  currentExamId: null,
  questions: [],
  currentQuestionIndex: 0,
  answers: {},
  timeRemaining: 0,
  isSubmitted: false,

  startExam: (examId, questions, duration) => set({
    currentExamId: examId,
    questions,
    timeRemaining: duration,
    currentQuestionIndex: 0,
    answers: {},
    isSubmitted: false,
  }),

  setAnswer: (questionId, optionId) => set((state) => ({
    answers: { ...state.answers, [questionId]: optionId }
  })),

  nextQuestion: () => set((state) => ({
    currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, state.questions.length - 1)
  })),

  prevQuestion: () => set((state) => ({
    currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
  })),

  goToQuestion: (index) => set({ currentQuestionIndex: index }),

  tick: () => set((state) => ({
    timeRemaining: Math.max(state.timeRemaining - 1, 0),
    isSubmitted: state.timeRemaining <= 1 ? true : state.isSubmitted
  })),

  submitExam: () => set({ isSubmitted: true })
}));
