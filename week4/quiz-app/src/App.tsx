import { ThemeProvider } from './utils/theme';
import QuizSelector from './components/QuizSelector';
import './styles/global.css';
import './styles/quiz.css';
import './styles/theme.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <QuizSelector />
      </div>
    </ThemeProvider>
  );
};

export default App;