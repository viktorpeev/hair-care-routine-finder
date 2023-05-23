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

  const [productRecommendation, setProductRecommendation] = useState(() => {
    const storedProductRecommendation = localStorage.getItem('productRecommendation');
    return storedProductRecommendation ? JSON.parse(storedProductRecommendation) : [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [likedItems, setLikedItems] = useState(() => {
    const storedLikedItems = localStorage.getItem('likedItems');
    return storedLikedItems ? JSON.parse(storedLikedItems) : [];
  });

  useEffect(() => {
    fetch('https://jeval.com.au/collections/hair-care/products.json?page=1')
      .then(response => response.json())
      .then(data => {
        const tagProducts = data.products.filter(product =>
          product.tags.includes(`type_${questions[0].answers[selectedAnswerQ1]}`) ||
          product.body_html.includes(`${questions[2].answers[selectedAnswerQ3]}`) ||
          product.body_html.includes((`${questions[1].answers[selectedAnswerQ2]}`)) ||
          product.body_html.includes((`${questions[3].answers[selectedAnswerQ4]}`)) ||
          product.body_html.includes((`${questions[4].answers[selectedAnswerQ5]}`)) ||
          product.title.includes(`${questions[2].answers[selectedAnswerQ3]}`) ||
          product.title.includes((`${questions[1].answers[selectedAnswerQ2]}`)) ||
          product.title.includes((`${questions[3].answers[selectedAnswerQ4]}`)) ||
          product.title.includes((`${questions[4].answers[selectedAnswerQ5]}`))
        );
        if (tagProducts.length > 0) {
          setProductRecommendation(tagProducts);
          localStorage.setItem('productRecommendation', JSON.stringify(tagProducts));
        }

      })
      .catch(error => console.log(error));
  }, [selectedAnswerQ1, selectedAnswerQ2, selectedAnswerQ3, selectedAnswerQ4, selectedAnswerQ5, questions]);

  // Calculate the indexes of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const likedItemIds = likedItems.map(item => item.id);
  const likedItemsPerPage = likedItems.filter(item => productRecommendation.find(product => product.id === item.id));
  const remainingItems = productRecommendation.filter(item => !likedItemIds.includes(item.id));
  const currentItems = [...likedItemsPerPage, ...remainingItems].slice(indexOfFirstItem, indexOfLastItem);


  // Change the page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  // Handle item like/unlike
  const handleLike = (itemId) => {
    if (likedItems.find(item => item.id === itemId)) {
      // Unlike item
      setLikedItems(likedItems.filter(item => item.id !== itemId));
    } else {
      // Like item
      const likedItem = productRecommendation.find(item => item.id === itemId);
      if (likedItem) {
        setLikedItems([...likedItems, { id: likedItem.id, status: 'liked', title: likedItem.title }]);
      }
    }
  };

  const handleSubmit = () =>{
    localStorage.clear();
  }

  useEffect(() => {
    // Update local storage when liked items change
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  return (
    <div>
      {currentItems.length > 0 ? (
        <div>
          <h1>Recommended Products:</h1>
          <ul>
            {currentItems.map(product => (
              <li key={product.id}>
                {product.title}
                <button onClick={() => handleLike(product.id)}>
                  {likedItems.find(item => item.id === product.id) ? 'Unlike' : 'Like'}
                </button>
              </li>
            ))}
          </ul>
          <Pagination itemsPerPage={itemsPerPage} totalItems={productRecommendation.length} paginate={paginate} />
          <button onClick={handleSubmit}>krai</button>
        </div>
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
};

// Pagination component
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
