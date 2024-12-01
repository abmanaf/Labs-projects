import React, { useState } from 'react';
import { QuizData, QuizQuestion } from '../types/quiz.types';
import QuizResult from './QuizResult';
import { useTheme } from '../utils/theme';
import Header from './Header';
import ThemeToggle from './ThemeToggle';

export interface QuizProps {
  quizData: QuizData;
  onRestart: () => void;
}

const Quiz: React.FC<QuizProps> = ({ quizData, onRestart }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  const { isDarkMode } = useTheme();

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const totalQuestions = quizData.questions.length;

  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (!isAnswerChecked) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      return <img src="src/assets/images/invalid.svg" alt="invalid" />;
    }

    setIsAnswerChecked(true);

    if (selectedAnswer === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <QuizResult
        quizData={quizData} 
        score={score}
        totalQuestions={quizData.questions.length}
        onRestart={onRestart}
      />
    );
  }
  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <Header quizData={quizData} onRestart={function (): void {
                      throw new Error('Function not implemented.');
                      } } />
        <ThemeToggle />
            </div>
    <div className={`quiz-container ${isDarkMode ? 'dark' : 'light'}`} style={{marginTop: '3em'}}>
      <div className="quiz-header">
            <div>
                <em>Question {currentQuestionIndex + 1} of {quizData.questions.length}</em>
                <div className="question-section">
                <h3 style={{fontSize: '2em'}}>{currentQuestion.question}</h3>
                </div>
        </div>
        <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ 
            width: `${progressPercentage}%`,
            backgroundColor: isDarkMode ? '#a729f5' : '#a729f5'
          }}
        ></div>
        </div>   
      </div>

        <div className='options'>
        <div className="answer-options">
          {currentQuestion.options.map((option, index) => (
          <button
          key={index}
          className={`option-btn ${
            isAnswerChecked 
              ? option === currentQuestion.answer 
                ? 'correct' 
                : option === selectedAnswer 
                  ? 'incorrect' 
                  : ''
              : selectedAnswer === option 
                ? 'selected' 
                : ''
          }`}
          onClick={() => handleAnswerSelect(option)}
          disabled={isAnswerChecked}
        >
          <span className="option-letter">{String.fromCharCode(65 + index)}</span>
          {option}
          {isAnswerChecked && (
            <span className="result-icon">
              {option === currentQuestion.answer ? (
                <img src="src/assets/images/correct.svg" alt="correct" />
              ) : option === selectedAnswer ? (
                <img style={{width: '26px', height: '26px'}} src="src/assets/images/wrong.svg" alt="incorrect" />
              ) : null}
            </span>
          )}
        </button>
        
        
          ))}
        </div>

        {!isAnswerChecked ? (
  <>
    <button 
      className="submit-btn"
      onClick={() => {
        if (!selectedAnswer) {
          setShowError(true); 
        } else {
          handleSubmit();
          setShowError(false); 
        }
      }}
    >
      Submit Answer
    </button>
    {showError && (
      <div className="error-message">
        <img src="src/assets/images/invalid.svg" alt="invalid" />
        Please select an answer before submitting
      </div>
    )}
  </>
) : (
  <button 
    className="next-btn"
    onClick={handleNextQuestion}
  >
    {currentQuestionIndex === totalQuestions - 1 ? 'View Score' : 'Next Question'}
     </button>
    )}
      </div>
    </div>
    </div>
  );
};

export default Quiz;