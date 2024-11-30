import React from 'react';
import { useTheme } from '../utils/theme';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div style={{display: 'flex', gap: '0.5em'}}>
      {/* 
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
    */}
    <img src="src/assets/images/sunny.svg" alt="sunny" />
    <img className="theme-toggle"
    onClick={toggleTheme} src="src/assets/images/toggle.svg" alt="toggle" />
    <img src="src/assets/images/moon.svg" alt="moon" />

    </div>
  );
};

export default ThemeToggle;