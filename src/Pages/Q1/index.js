import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import { Navigation } from '../../Components/Navigation';

import './styles.scss';

export const Q1 = () => {
  const {
    questions,
    selectedAnswerQ1,
    setSelectedAnswerQ1,
    errors
  } = useContext(QuizContext);

  const currentQuestion = questions[0];


  const handleLiClick = (index) => {
    const inputId = `input-${index}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div className='questionOne'>
      {errors ? <h1 style={{color:'red'}}>{errors} </h1> : null}
      <h1 className='questionOne--heading'>{currentQuestion.question}</h1>
      <ul className='questionOne__answerList'>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index} onClick={() => handleLiClick(index)}
            className={selectedAnswerQ1.includes(index) ? 'selected' : ''}
          >
            <label htmlFor={`input-${index}`} style={{ textTransform: 'capitalize' }}>
              <input
                id={`input-${index}`}
                type="radio"
                value={index}
                onChange={() => setSelectedAnswerQ1([index])}
                checked={selectedAnswerQ1.includes(index)}
              />
              {answer}
            </label>
          </li>
        ))}
        <div className="circle"></div>
      </ul>
      <Navigation
        answer={selectedAnswerQ1}
        index={2}
      />
    </div>
  );
};
