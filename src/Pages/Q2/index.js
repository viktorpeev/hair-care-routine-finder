import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import { Navigation } from '../../Components/Navigation';
import './styles.scss';

export const Q2 = () => {
  const {
    questions,
    selectedAnswerQ2,
    setSelectedAnswerQ2,
    errors
  } = useContext(QuizContext);

  const currentQuestion = questions[1];


  const handleLiClick = (index) => {
    const inputId = `input-${index}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div className='questionTwo'>
      {errors ? <h1 style={{color:'red'}}>{errors} </h1> : null}
      <h1 className='questionTwo--heading'>{currentQuestion.question}</h1>
      <ul className='questionTwo__answerList'>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index} onClick={() => handleLiClick(index)}
          className={selectedAnswerQ2.includes(index) ? 'selected' : ''}
          >
            <label htmlFor={`input-${index}`} style={{ textTransform: 'capitalize' }}>
              <input
                id={`input-${index}`}
                type="radio"
                value={index}
                onChange={() => setSelectedAnswerQ2([index])}
                checked={selectedAnswerQ2.includes(index)}
              />
              {answer}
            </label>
          </li>
        ))}
        <div className="circle"></div>
      </ul>
      <Navigation
      answer={selectedAnswerQ2}
      index={3}
      />
    </div>
  );
};
