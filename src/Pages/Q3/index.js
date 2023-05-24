import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';
import { Validation } from '../../Components/Validation';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const Q3 = () => {
  const {
    questions,
    selectedAnswerQ3,
    setSelectedAnswerQ3
  } = useContext(QuizContext);

  const navigate = useNavigate();

  const currentQuestion = questions[2];

  const handleSubmit = async () => {
    await Validation(selectedAnswerQ3,4,navigate)
  };

  const handleLiClick = (index) => {
    const inputId = `input-${index}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div className='questionThree'>
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
      </ul>

      <Link to='/question-2'>back</Link>
      <Link to='/'>home</Link>
      <button onClick={handleSubmit}>next</button>
    </div>
  );
};
