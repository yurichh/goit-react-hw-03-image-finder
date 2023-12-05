import React from 'react';

const Button = () => {
  const pageIncrement = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  return (
    <button className="more-btn" onClick={pageIncrement}>
      Load more
    </button>
  );
};

export default Button;
