import { useTheme } from '../utils/theme';
import darkmode from '/assets/images/darkmode-moon.svg';
import moon from '/assets/images/moon.svg';
import darkModeSun from '/assets/images/darkmode-sun.svg';
import sun from '/assets/images/sunny.svg'
import ToggleIcon from './ToggleIcon';


const ThemeToggle = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className='toggle-container'>
      {!isDarkMode? <img  src={sun} alt="sunny" />: <img src={darkModeSun} alt="darkmode-sun"/>}
      <ToggleIcon />
      {!isDarkMode? <img  src={moon} alt="moon" />: <img src={darkmode} alt="darkmode-moon"/>}
    </div>
  );
};

export default ThemeToggle;
