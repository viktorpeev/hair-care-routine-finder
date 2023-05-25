import React, { useEffect, useState, useContext } from 'react';
import { QuizContext } from '../../QuizContext';
import { Pagination } from '../../Components/Pagination';
import { useCalculation } from '../../CustomHooks/useCalculation';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

export const Result = () => {
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
  const[status,setStatus] = useState('Loading...');

  const navigate = useNavigate();

  const {
    questions,
    selectedAnswerQ1,
    selectedAnswerQ2,
    selectedAnswerQ3,
    selectedAnswerQ4,
    selectedAnswerQ5,
    resetQuiz
  } = useContext(QuizContext);

  useEffect(() => {
    fetch('https://jeval.com.au/collections/hair-care/products.json?page=1')
      .then(response => response.json())
      .then(data => {
        const tagProducts = data.products.filter(product =>
          product.tags.includes(`type_${questions[0].answers[selectedAnswerQ1]}`) ||
          product.body_html.includes(`${questions[2].answers[selectedAnswerQ3]}`) ||
          product.body_html.includes(`${questions[1].answers[selectedAnswerQ2]}`) ||
          product.body_html.includes(`${questions[3].answers[selectedAnswerQ4]}`) ||
          product.body_html.includes(`${questions[4].answers[selectedAnswerQ5]}`) ||
          product.title.includes(`${questions[2].answers[selectedAnswerQ3]}`) ||
          product.title.includes(`${questions[1].answers[selectedAnswerQ2]}`) ||
          product.title.includes(`${questions[3].answers[selectedAnswerQ4]}`) ||
          product.title.includes(`${questions[4].answers[selectedAnswerQ5]}`)
        );
        if (tagProducts.length > 0) {
          setProductRecommendation(tagProducts);
          localStorage.setItem('productRecommendation', JSON.stringify(tagProducts));
        }
        else{
          setStatus('No products found.')
        }
      })
      .catch(error => console.log(error));
  }, [selectedAnswerQ1, selectedAnswerQ2, selectedAnswerQ3, selectedAnswerQ4, selectedAnswerQ5, questions]);

  useEffect(() => {
    // Update local storage when liked items change
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  // Handle pagination
  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle item like/unlike
  const handleLike = (itemId) => {
    const likedItem = productRecommendation.find(item => item.id === itemId);
    if (likedItem) {
      const updatedItem = { ...likedItem, status: 'liked' };
      if (likedItems.find(item => item.id === itemId)) {
        // Unlike item
        const unlike = likedItems.filter(item => item.id !== itemId);
        setLikedItems(unlike);
      } else {
        // Like item
        setLikedItems([...likedItems, updatedItem]);
      }
    }
  };

  // Redirect to homepage
  const handleSubmit = () => {
    localStorage.clear();
    resetQuiz();
    navigate('/');
  };

  // Handle next page
  const handleNextPage = () => {
    const nextPage = currentPage === Math.ceil(productRecommendation.length / itemsPerPage) ? 1 : currentPage + 1;
    setCurrentPage(nextPage);
  };

  // Calculate the indexes of the first and last item to display on the current page
  const { currentItems } = useCalculation(currentPage, itemsPerPage, likedItems, productRecommendation);

  return (
    <div className='result'>
      <h1 className='result--heading'>Build your everyday self-care routine.</h1>
      <p className='result--description'>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances, you can add a moment of calm to the end of your day.</p>
      <button onClick={handleSubmit} className="result__button">
        <span className='result__button--text'>Retake the quiz</span>
      </button>
      {currentItems.length > 0 ? (
        <div className='result__recomendedProductsCarousel'>
          <ul className='result__recomendedProductsCarousel__products'>
            <div className={currentPage === 1 ? 'infoCube-show' : 'infoCube-hide'}>
              <h1>Daily routine</h1>
              <p>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances, you can add a moment of calm to the end of your day.</p>
            </div>
            {currentItems.map(product => (
              <li
                key={product.id}
                className='result__recomendedProductsCarousel__products__singleProduct'
              >
                <img src={product.images[0].src} alt='Rectangle 1' />
                <span>{product.title}</span>
                <span>$ {product.variants[0].price}</span>
                <i
                  onClick={() => handleLike(product.id)}
                  className={
                    likedItems.find(item => item.id === product.id)
                      ? 'selected fa fa-heart-o'
                      : 'fa fa-heart-o'
                  }
                ></i>
              </li>
            ))}
            <button onClick={handleNextPage} className="next-button">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
          </ul>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={productRecommendation.length}
            currentPage={currentPage}
            paginate={handlePaginate}
            handleNextPage={handleNextPage} // Added handleNextPage function
          />
        </div>
      ) : (
        <div>{status}</div>
      )}
    </div>
  );
};
