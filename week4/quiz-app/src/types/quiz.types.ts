export interface QuizSubject {
  quizzes: string;
  icon: string;
  color: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface QuizData {
  title: string;
  icon: string;
  questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}