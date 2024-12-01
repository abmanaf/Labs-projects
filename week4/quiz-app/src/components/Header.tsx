import React from 'react'
import { QuizProps } from './Quiz';

const Header = ({ quizData, onRestart }: QuizProps) => {
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