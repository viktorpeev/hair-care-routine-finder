import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';
import { Validation } from '../../Components/Validation';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <ul>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={index}
                onChange={() => setSelectedAnswerQ4([index])}
                checked={selectedAnswerQ4.includes(index)}
              />
              {answer}
            </label>
          </li>
        ))}
      </ul>

      <Link to='/question-3'>back</Link>
      <Link to='/'>home</Link>
      <button onClick={handleSubmit}>next</button>
    </div>
  );
};
