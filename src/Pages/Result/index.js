import React, { useEffect, useState, useContext } from 'react';
import { QuizContext } from '../../QuizContext';

export const Result = () => {
  const {
    questions,
    selectedAnswerQ1,
    selectedAnswerQ2,
    selectedAnswerQ3,
    selectedAnswerQ4,
    selectedAnswerQ5,
  } = useContext(QuizContext);

  const [productTag, setProductTag] = useState([]);

  useEffect(() => {
    fetch('https://jeval.com.au/collections/hair-care/products.json?page=1')
      .then(response => response.json())
      .then(data => {
        const tagProducts = data.products.filter(product =>
          product.tags.includes(`type_${questions[0].answers[selectedAnswerQ1]}`) //check for q1 only in tags
          ||
          product.tags.includes(`goals_${questions[2].answers[selectedAnswerQ3]}`) //check for q3 only in tags
          ||
          product.body_html.includes((`${questions[1].answers[selectedAnswerQ2]}`)) //check for q2 only in descr
          ||
          product.body_html.includes((`${questions[3].answers[selectedAnswerQ4]}`)) //check for q4 only in descr
          ||
          product.body_html.includes((`${questions[4].answers[selectedAnswerQ5]}`)) //check for q2 only in descr
          ||
          product.title.includes((`${questions[1].answers[selectedAnswerQ2]}`)) //check for q2 only in title
          ||
          product.title.includes((`${questions[3].answers[selectedAnswerQ4]}`)) //check for q4 only in title
          ||
          product.title.includes((`${questions[4].answers[selectedAnswerQ5]}`)) //check for q2 only in title
        );
        setProductTag(tagProducts);
      })
      .catch(error => console.log(error));
  }, [selectedAnswerQ1, selectedAnswerQ2, selectedAnswerQ3, selectedAnswerQ4, selectedAnswerQ5, questions]);


  return (
    <div>
      {productTag.length > 0 ? (
        <div>
          <h1>Frizzy Products:</h1>
          <ul>
            {productTag.map(product => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
}
