import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';
import { Validation } from '../../Components/Validation';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const Q5 = () => {
  const {
    questions,
    isAnswered,
    selectedAnswerQ5,
    setSelectedAnswerQ5
  } = useContext(QuizContext);

  const navigate = useNavigate();

  const currentQuestion = questions[4];

  const handleSubmit = async () => {
    await Validation(selectedAnswerQ5,9,navigate,isAnswered)
  };

  const handleLiClick = (index) => {
    const inputId = `input-${index}`;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <div className='questionFive'>
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
      </ul>

      <Link to='/question-4'>back</Link>
      <Link to='/'>home</Link>
      <button onClick={handleSubmit}>next</button>
    </div>
  );
};
