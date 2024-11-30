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
        subject={quizData.quizzes}
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
      <div className="quiz-header" style={{width: '50%'}}>
        <div style={{display: 'flex', flexDirection: 'column',border: '1px solid red', justifyContent: 'space-between'}}>
            {/*
            <img src={quizData.icon} alt={`${quizData.title} icon`} />
            <span>{quizData.title}</span>
             */}
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
            backgroundColor: isDarkMode ? '#a729f5' : '#6741d9'
          }}
        ></div>
      </div>
        </div>
       
      </div>

        <div style={{width:'50%'}}>
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
                  {option === currentQuestion.answer 
                    ? <img src='src/assets/images/correct.svg' alt='correct'/> 
                    : option === selectedAnswer 
                      ? <img src="src/assets/images/wrong.svg" alt="" /> 
                      : ''}
                </span>
              )}
            </button>
          ))}
        </div>

        {!isAnswerChecked ? (
          <button 
            className="submit-btn"
            onClick={handleSubmit}
            //disabled={!selectedAnswer}
          >
            Submit Answer
          </button>
        ) : (
          <button 
            className="next-btn"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        )}

        {!selectedAnswer && isAnswerChecked && (
          <div className="error-message">
            Please select an answer before submitting
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Quiz;