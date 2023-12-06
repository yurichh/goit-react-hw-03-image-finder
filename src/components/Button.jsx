import React from 'react';

const Button = ({ pageIncrement }) => {
  return (
    <button className="more-btn" onClick={pageIncrement}>
      Load more
    </button>
  );
};

export default Button;
