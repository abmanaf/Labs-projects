import { useTheme } from '../utils/theme';
import Header from './Header';
import ThemeToggle from './ThemeToggle';
import { QuizData } from '../types/quiz.types';

interface QuizResultProps {
  quizData: QuizData; 
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResult = ({
  quizData, //  quizData Destructure
  score,
  totalQuestions,
  onRestart,
}: QuizResultProps) => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <div className='quiz-header'>
        <Header quizData={quizData} onRestart={onRestart} />
        <ThemeToggle />
      </div>

      <div className={`quiz-result ${isDarkMode ? 'dark' : 'light'}`}>
        <div className='quiz-complete-text'>
          <p>Quiz Completed!</p>
          <h2>You Scored...</h2>
        </div>
        <div className="results-details">
          <div className="result-summary">
            <div className='results-container'>
            <img src={quizData.icon} alt="quizData.title" />
            <h3>{quizData.title}</h3>
            </div>
            <div className="score-display">
              <span className="final-score">{score}</span>
              <p>out of {totalQuestions}</p>
            </div>
          </div>
          <button className="restart-btn" onClick={onRestart}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
