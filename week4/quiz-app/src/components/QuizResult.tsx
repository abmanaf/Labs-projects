import React from 'react';
import { useTheme } from '../utils/theme';
import Header from './Header';
import ThemeToggle from './ThemeToggle';

interface QuizResultProps{
  subject: string;
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ 
  subject, 
  score, 
  totalQuestions, 
  onRestart,
}) => {
  const { isDarkMode } = useTheme();
  //const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div>
        {/* 
         <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <Header quizData={quizData} onRestart={function (): void {
                      throw new Error('Function not implemented.');
                      } } />
        <ThemeToggle />
            </div>
            */}
    <div className={`quiz-result ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Quiz Completed!</h1>
      <div className='results-details'>
      <div className="result-summary">
        <h3>{subject} Quiz</h3>
        <div className="score-display">
          <p>Your Score</p>
          <span className="final-score">{score}</span>
          <p>out of {totalQuestions}</p>
        </div>
        {/* 
        <p className="percentage">
          {percentage}% Correct
        </p>
        */}
      </div>
      <button 
        className="restart-btn"
        onClick={onRestart}
      >
        Play Again
      </button>
      </div>
    </div>
    </div>

  );
};

export default QuizResult;