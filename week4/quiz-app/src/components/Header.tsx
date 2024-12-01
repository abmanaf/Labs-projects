import { QuizProps } from './Quiz';

const Header = ({ quizData }: QuizProps) => {
    if (!quizData) {
      return null; 
    }
  
    return (
      <div className="header-image">
        <img src={quizData.icon} alt={`${quizData.title} icon`} />
        <span>{quizData.title}</span>
      </div>
    );
  };
  
export default Header;