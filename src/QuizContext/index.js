import React, { createContext, useEffect, useState } from 'react';
import questions from '../Questions';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedAnswerQ1, setSelectedAnswerQ1] = useState([]);
  const [selectedAnswerQ2, setSelectedAnswerQ2] = useState([]);
  const [selectedAnswerQ3, setSelectedAnswerQ3] = useState([]);
  const [selectedAnswerQ4, setSelectedAnswerQ4] = useState([]);
  const [selectedAnswerQ5, setSelectedAnswerQ5] = useState([]);
  const [errors, setErrors] = useState();
  const [isAnswered, setIsAnswered] = useState(false);


  useEffect(() => {
    if (selectedAnswerQ1.length > 0){
      setIsAnswered(true);
    }
}, [selectedAnswerQ1.length,selectedAnswerQ5])

useEffect(() => {
  setErrors();
}, [selectedAnswerQ1,selectedAnswerQ2,selectedAnswerQ3,selectedAnswerQ4,selectedAnswerQ5])


  const resetQuiz = () => {
    setSelectedAnswerQ1([]);
    setSelectedAnswerQ2([]);
    setSelectedAnswerQ3([]);
    setSelectedAnswerQ4([]);
    setSelectedAnswerQ5([]);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        selectedAnswerQ1,
        setSelectedAnswerQ1,
        selectedAnswerQ2,
        setSelectedAnswerQ2,
        selectedAnswerQ3,
        setSelectedAnswerQ3,
        selectedAnswerQ4,
        setSelectedAnswerQ4,
        selectedAnswerQ5,
        setSelectedAnswerQ5,
        isAnswered,
        errors,
        setErrors,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
