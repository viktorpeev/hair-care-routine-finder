import React, { useContext } from 'react';
import { QuizContext } from '../../QuizContext';

export const Q1 = () => {
  const {
    currentQuestion,
    selectedAnswers,
    handleAnswerSelection,
  } = useContext(QuizContext);

  const handleSubmit = () => {
    handleAnswerSelection(selectedAnswers.length);
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
                onChange={() => handleAnswerSelection(index)}
                checked={selectedAnswers.includes(index)}
              />
              {answer}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
