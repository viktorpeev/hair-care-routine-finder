import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';

export const Q3 = () => {
  const {
    questions,
    selectedAnswerQ3,
    setSelectedAnswerQ3
  } = useContext(QuizContext);

  const currentQuestion = questions[2];

  const handleSubmit = () => {
    
  };
  useEffect(()=>{
    console.log(selectedAnswerQ3)
  },[selectedAnswerQ3]);

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
      <button onClick={handleSubmit}>Submit</button>
      <Link to='/question-2'>back</Link>
      <Link to='/'>home</Link>
      <Link to='/question-4'>next</Link>
    </div>
  );
};
