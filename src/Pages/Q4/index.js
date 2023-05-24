import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';
import { Validation } from '../../Components/Validation';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const Q4 = () => {
  const {
    questions,
    selectedAnswerQ4,
    setSelectedAnswerQ4
  } = useContext(QuizContext);

  const navigate = useNavigate();

  const currentQuestion = questions[3];

  const handleSubmit = async () => {
    await Validation(selectedAnswerQ4,5,navigate)
  };

  useEffect(()=>{console.log(selectedAnswerQ4)},[selectedAnswerQ4])

  const handleLiClick = (index) => {
    const inputId = `input-${index}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div className='questionFour'>
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
      </ul>

      <Link to='/question-2'>back</Link>
      <Link to='/'>home</Link>
      <button onClick={handleSubmit}>next</button>
    </div>
  );
};
