import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import './styles.scss';
import { Navigation } from '../../Components/Navigation';

export const Q3 = () => {
  const {
    questions,
    selectedAnswerQ3,
    setSelectedAnswerQ3,
    errors
  } = useContext(QuizContext);

  const currentQuestion = questions[2];

  const handleLiClick = (index) => {
    const inputId = `input-${index}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div className='questionThree'>
      {errors ? <h1 style={{color:'red'}}>{errors} </h1> : null}
      <h1 className='questionThree--heading'>{currentQuestion.question}</h1>
      <ul className='questionThree__answerList'>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index} onClick={() => handleLiClick(index)}
          className={selectedAnswerQ3.includes(index) ? 'selected' : ''}
          >
            <label htmlFor={`input-${index}`} style={{ textTransform: 'capitalize' }}>
              <input
                id={`input-${index}`}
                type="radio"
                value={index}
                onChange={() => setSelectedAnswerQ3([index])}
                checked={selectedAnswerQ3.includes(index)}
              />
              <span>{answer}</span>
            </label>
          </li>
        ))}
        <div className="circle"></div>
      </ul>

      <Navigation
      answer={selectedAnswerQ3}
      index={4}
      />
    </div>
  );
};
