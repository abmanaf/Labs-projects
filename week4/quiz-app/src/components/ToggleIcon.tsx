import { useTheme } from '../utils/theme';

const ToggleIcon = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
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
    )
}
export default ToggleIcon;