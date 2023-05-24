import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';
import { Validation } from '../../Components/Validation';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const Q2 = () => {
  const {
    questions,
    selectedAnswerQ2,
    setSelectedAnswerQ2
  } = useContext(QuizContext);

  const navigate = useNavigate();

  const currentQuestion = questions[1];

  const handleSubmit = async () => {
    await Validation(selectedAnswerQ2,3,navigate)
  };

  const handleLiClick = (index) => {
    const inputId = `input-${index}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div className='questionTwo'>
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
      </ul>

      <Link to='/question-1'>back</Link>
      <Link to='/'>home</Link>
      <button onClick={handleSubmit}>next</button>
    </div>
  );
};
