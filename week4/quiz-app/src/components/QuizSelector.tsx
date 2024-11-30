import React, { useState, useEffect } from 'react';
import { QuizData } from '../types/quiz.types';
import Quiz from './Quiz';
import { useTheme } from '../utils/theme';
import data from '../data/data.json'
import ThemeToggle from './ThemeToggle';

const QuizSelector: React.FC = () => {
  const [quizzes, setQuizzes] = useState<QuizData[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<QuizData | null>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setQuizzes(data.quizzes || []);
  }, []);
console.log(quizzes)
  const handleQuizSelect = (quiz: QuizData) => {
    setSelectedQuiz(quiz);
  };

  const handleRestart = () => {
    setSelectedQuiz(null);
  };

  if (selectedQuiz) {
    return <Quiz quizData={selectedQuiz} onRestart={handleRestart} />;
  }

  return (
    <div>
        <div className='toggle-them'>
            <h1 style={{visibility: 'hidden'}}>header</h1>
        <ThemeToggle />
        </div>
        <div className={`quiz-selector ${isDarkMode ? 'dark' : 'light'}`} style={{marginTop: '4em'}}>
         <div className='welcome-quiz'>
            <p style={{fontSize: '2.1em'}}>Welcome to the</p>
            <span style={{fontWeight: 'bolder', fontSize: '2.1em'}}>Frontend Quiz!</span>
            <p>Pick a subject to get started.</p>
      </div>
      <div className="quiz-grid">
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <button 
              key={quiz.title}
              className="quiz-card"
              onClick={() => handleQuizSelect(quiz)}
              aria-label={`Select ${quiz.title} quiz`}
            >
              <img src={quiz.icon} alt={`${quiz.title} icon`} />
              <span>{quiz.title}</span>
            </button>
          ))
        ) : (
          <p>Loading quizzes...</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default QuizSelector;
