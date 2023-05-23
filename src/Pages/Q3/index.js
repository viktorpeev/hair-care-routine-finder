import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';
import { Validation } from '../../Components/Validation';
import { useNavigate } from 'react-router-dom';

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

  useEffect(()=>{
    console.log(`${questions[2].answers[selectedAnswerQ3]}`);
  },[selectedAnswerQ3,questions])

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
                onChange={() => setSelectedAnswerQ3([index])}
                checked={selectedAnswerQ3.includes(index)}
              />
              {answer}
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
