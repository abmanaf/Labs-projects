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
  quizzes: string;
  title: string;
  icon: string;
  questions: QuizQuestion[];
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}