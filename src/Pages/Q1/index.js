import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';
import { Validation } from '../../Components/Validation';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <ul>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index}>
            <label style={{ textTransform: 'capitalize' }}>
              <input
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
