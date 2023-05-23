import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Validation } from '../../Components/Validation';

export const Q5 = () => {
  const {
    questions,
    selectedAnswerQ5,
    setSelectedAnswerQ5,
    isAnswered
  } = useContext(QuizContext);

  const currentQuestion = questions[4];

  const navigate = useNavigate();


  const handleSubmit = async () => {
    await Validation(selectedAnswerQ5, 9, navigate,isAnswered)
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
              onChange={() => setSelectedAnswerQ5([index])}
              checked={selectedAnswerQ5.includes(index)}
            />
            {answer}
          </label>
        </li>
      ))}
    </ul>

    <Link to='/question-4'>back</Link>
    <Link to='/'>home</Link>
    <button onClick={handleSubmit}>Submit</button>
  </div>
);
};
