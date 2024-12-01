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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginTop: '3em',
        }}
      >
        <Header quizData={quizData} onRestart={onRestart} />
        <ThemeToggle />
      </div>

      <div className={`quiz-result ${isDarkMode ? 'dark' : 'light'}`}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: '2.5em' }}>Quiz Completed!</p>
          <h2 style={{ fontWeight: 'bolder', fontSize: '2em' }}>You Scored...</h2>
        </div>
        <div className="results-details">
          <div className="result-summary">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'1em'}}>
            <img style={{width: '40px', height: '40px'}} src={quizData.icon} alt="quizData.title" />
            <h3>{quizData.title}</h3>
            </div>
            <div className="score-display">
              <span style={{fontSize: '6em'}} className="final-score">{score}</span>
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
