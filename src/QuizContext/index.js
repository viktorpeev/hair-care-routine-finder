import React, { createContext, useState } from 'react';
import questions from '../Questions';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerSelection = (answerIndex) => {
    setSelectedAnswers([...selectedAnswers, answerIndex]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestion,
        selectedAnswers,
        handleAnswerSelection,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
