import { useState } from 'react';
import { QuizData } from '../types/quiz.types';
import QuizResult from './QuizResult';
import { useTheme } from '../utils/theme';
import Header from './Header';
import ThemeToggle from './ThemeToggle';
import correct from '/assets/images/correct.svg';
import incorrect from '/assets/images/wrong.svg';
import invalid from '/assets/images/invalid.svg';


export interface QuizProps {
  quizData: QuizData;
  onRestart: () => void;
}

const renderHeader = (quizData: QuizData, onRestart: () => void) => {
  return <Header quizData={quizData} onRestart={onRestart} />;
};

const Quiz = ({ quizData, onRestart }: QuizProps) => {
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
      setShowError(true);
    } else {
      setShowError(false);
      setIsAnswerChecked(true);
      if (selectedAnswer === currentQuestion.answer) {
        setScore(prev => prev + 1);
      }
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
  const getButtonClass = (option: string) => {
    if (isAnswerChecked) {
      if (option === currentQuestion.answer) return 'correct';
      if (option === selectedAnswer) return 'incorrect';
      return '';
    }
    return selectedAnswer === option ? 'selected' : '';
  };  
  return (
    <div>
        <div className='quiz-header'>
          {renderHeader(quizData, onRestart)}
          <ThemeToggle />
        </div>
    <div className={`quiz-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="question-progress-container">
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
        className={`option-btn ${getButtonClass(option)}`}
        onClick={() => handleAnswerSelect(option)}
        disabled={isAnswerChecked}
      >
        <span className="option-letter">{String.fromCharCode(65 + index)}</span>
        <span className="option">{option}</span>
        {isAnswerChecked && (
          <span className="result-icon">
            {option === currentQuestion.answer ? (
              <img src={correct} alt="correct" />
            ) : option === selectedAnswer ? (
              <img className="incorrect-img" src={incorrect} alt="incorrect" />
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
      onClick={handleSubmit}
    >
      Submit Answer
    </button>
    {showError && (
      <div className="error-message">
        <img src={invalid} alt="invalid" />
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