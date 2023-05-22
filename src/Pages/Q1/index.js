import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../../QuizContext';
import { Link } from 'react-router-dom';

export const Q1 = () => {
  const {
    questions,
    selectedAnswerQ1,
    setSelectedAnswerQ1
  } = useContext(QuizContext);

  const currentQuestion = questions[0];

  const handleSubmit = () => {
    
  };
  useEffect(()=>{
    console.log(selectedAnswerQ1)
  },[selectedAnswerQ1]);

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
                onChange={() => setSelectedAnswerQ1([index])}
                checked={selectedAnswerQ1.includes(index)}
              />
              {answer}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
      <Link to='/'>back</Link>
      <Link to='/'>home</Link>
      <Link to='/question-2'>next</Link>
    </div>
  );
};
