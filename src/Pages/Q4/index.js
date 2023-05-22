import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';

export const Q4 = () => {
  const {
    questions,
    selectedAnswerQ4,
    setSelectedAnswerQ4
  } = useContext(QuizContext);

  const currentQuestion = questions[0];

  const handleSubmit = () => {
    
  };
  useEffect(()=>{
    console.log(selectedAnswerQ4)
  },[selectedAnswerQ4]);

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
      <button onClick={handleSubmit}>Submit</button>
      <Link to='/question-3'>back</Link>
      <Link to='/'>home</Link>
      <Link to='/question-5'>next</Link>
    </div>
  );
};
