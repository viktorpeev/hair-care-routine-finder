import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import './styles.scss';
import { Navigation } from '../../Components/Navigation';

export const Q5 = () => {
  const {
    questions,
    isAnswered,
    selectedAnswerQ5,
    setSelectedAnswerQ5,
    errors
  } = useContext(QuizContext);

  const currentQuestion = questions[4];

  const handleLiClick = (index) => {
    const inputId = `input-${index}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div className='questionFive'>
      {errors ? <h1 style={{color:'red'}}>{errors} </h1> : null}
      <h1 className='questionFive--heading'>{currentQuestion.question}</h1>
      <ul className='questionFive__answerList'>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index} onClick={() => handleLiClick(index)}
          className={selectedAnswerQ5.includes(index) ? 'selected' : ''}
          >
            <label htmlFor={`input-${index}`} style={{ textTransform: 'capitalize' }}>
              <input
                id={`input-${index}`}
                type="radio"
                value={index}
                onChange={() => setSelectedAnswerQ5([index])}
                checked={selectedAnswerQ5.includes(index)}
              />
              <span>{answer}</span>
            </label>
          </li>
        ))}
        <div className="circle"></div>
      </ul>

      <Navigation
      answer={selectedAnswerQ5}
      index={6}
      isAnswered={isAnswered}
      />
    </div>
  );
};
