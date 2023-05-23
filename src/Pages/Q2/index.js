import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';

export const Q2 = () => {
  const {
    questions,
    selectedAnswerQ2,
    setSelectedAnswerQ2
  } = useContext(QuizContext);

  const currentQuestion = questions[1];

  const handleSubmit = () => {
    
  };
  useEffect(()=>{
    console.log(selectedAnswerQ2)
  },[selectedAnswerQ2]);

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
      <button onClick={handleSubmit}>Submit</button>
      <Link to='/question-1'>back</Link>
      <Link to='/'>home</Link>
      <Link to='/question-3'>next</Link>
    </div>
  );
};
