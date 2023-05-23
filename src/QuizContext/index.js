import React, { createContext, useState } from 'react';
import questions from '../Questions';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedAnswerQ1, setSelectedAnswerQ1] = useState([]);
  const [selectedAnswerQ2, setSelectedAnswerQ2] = useState([]);
  const [selectedAnswerQ3, setSelectedAnswerQ3] = useState([]);
  const [selectedAnswerQ4, setSelectedAnswerQ4] = useState([]);
  const [selectedAnswerQ5, setSelectedAnswerQ5] = useState([]);


  //handleSubmit(fetch->if('type_${questions[0].answers[0]}'))

  const resetQuiz = () => {
    setSelectedAnswerQ1([]);
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
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
