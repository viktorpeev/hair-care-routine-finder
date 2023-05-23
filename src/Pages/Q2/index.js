import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';
import { Validation } from '../../Components/Validation';
import { useNavigate } from 'react-router-dom';

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
