import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <span
          key={i}
          onClick={() => handlePageClick(i)}
          style={i === currentPage ? { margin: '0 5px', fontWeight: 'bold' } : { margin: '0 5px', cursor: 'pointer' }}
        >
          {i}
        </span>
      );
    }
    return pages;
  };

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
    }}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        style={{
            background: 'none',
            border: 'none',
            color: currentPage === 1 ? 'grey' : 'black',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          }}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        style={{
            background: 'none',
            border: 'none',
            color: currentPage === totalPages ? 'grey' : 'black',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;