import React from 'react';
import { useTheme } from '../utils/theme';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div style={{ display: 'flex', gap: '0.5em' }}>
      {!isDarkMode? <img  src="src/assets/images/sunny.svg" alt="sunny" />: <img src="src/assets/images/darkmode-sun.svg" alt="darkmode-sun"/>}
      <svg
        className="theme-toggle"
        style={{ cursor: 'pointer' }}
        onClick={toggleTheme}
        width="48"
        height="28"
        viewBox="0 0 48 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="48"
          height="28"
          rx="14"
          fill={isDarkMode ? "#A729F5" : "#A729F5"} 
        />
        <circle
          cx={isDarkMode ? "34" : "14"} 
          cy="14"
          r="10"
          fill="white"
        />
      </svg>
      {!isDarkMode? <img  src="src/assets/images/moon.svg" alt="moon" />: <img src="src/assets/images/darkmode-moon.svg" alt="darkmode-moon"/>}

    </div>
  );
};

export default ThemeToggle;
