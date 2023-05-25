import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import './styles.scss';
import { Navigation } from '../../Components/Navigation';

export const Q4 = () => {
  const {
    questions,
    selectedAnswerQ4,
    setSelectedAnswerQ4
    ,errors
  } = useContext(QuizContext);

  const currentQuestion = questions[3];


  const handleLiClick = (index) => {
    const inputId = `input-${index}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div className='questionFour'>
      {errors ? <h1 style={{color:'red'}}>{errors} </h1> : null}
      <h1 className='questionFour--heading'>{currentQuestion.question}</h1>
      <ul className='questionFour__answerList'>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index} onClick={() => handleLiClick(index)}
          className={selectedAnswerQ4.includes(index) ? 'selected' : ''}
          >
            <label htmlFor={`input-${index}`} style={{ textTransform: 'capitalize' }}>
              <input
                id={`input-${index}`}
                type="radio"
                value={index}
                onChange={() => setSelectedAnswerQ4([index])}
                checked={selectedAnswerQ4.includes(index)}
              />
              <span>{answer}</span>
            </label>
          </li>
        ))}
        <div className="circle"></div>
      </ul>

      <Navigation
      answer={selectedAnswerQ4}
      index={5}
      />
    </div>
  );
};
