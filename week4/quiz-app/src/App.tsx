import React from 'react';
import { ThemeProvider } from './utils/theme';
import QuizSelector from './components/QuizSelector';
//import ThemeToggle from './components/ThemeToggle';
import './styles/global.css';
import './styles/quiz.css';
import './styles/theme.css';
//import ThemeToggle from './components/ThemeToggle';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        {/*
        <ThemeToggle />
         */}
        <QuizSelector />
      </div>
    </ThemeProvider>
  );
};

export default App;