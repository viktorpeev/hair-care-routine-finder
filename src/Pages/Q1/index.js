import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';
import { Validation } from '../../Components/Validation';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const Q1 = () => {
  const {
    questions,
    selectedAnswerQ1,
    setSelectedAnswerQ1
  } = useContext(QuizContext);

  const navigate = useNavigate();

  const currentQuestion = questions[0];

  const handleSubmit = async () => {
    await Validation(selectedAnswerQ1,2,navigate)
  };

  const handleLiClick = (index) => {
    const inputId = `input-${index}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div className='questionOne'>
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
      </ul>

      <Link to='/'>back</Link>
      <Link to='/'>home</Link>
      <button onClick={handleSubmit}>next</button>
    </div>
  );
};
