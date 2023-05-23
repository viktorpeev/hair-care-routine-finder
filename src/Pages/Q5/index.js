import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';

export const Q5 = () => {
  const {
    questions,
    selectedAnswerQ5,
    setSelectedAnswerQ5
  } = useContext(QuizContext);

  const currentQuestion = questions[4];

  const handleSubmit = () => {
    
  };
  useEffect(()=>{
    console.log(selectedAnswerQ5)
  },[selectedAnswerQ5]);

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
      <button onClick={handleSubmit}>Submit</button>
      <Link to='/question-4'>back</Link>
      <Link to='/'>home</Link>
      <Link to='/result'>next</Link>
    </div>
  );
};
