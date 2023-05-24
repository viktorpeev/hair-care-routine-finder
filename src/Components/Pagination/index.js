import React from 'react';
import './styles.scss';

export const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button className="page-link" onClick={() => paginate(number)}>
              <span className="circle"></span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
