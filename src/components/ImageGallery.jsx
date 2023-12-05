import React from 'react';

const ImageGallery = ({ image }) => {
  return (
    <li className="gallery-item" key={image.id}>
      <img src={image.webformatURL} alt={image.tags} />
    </li>
  );
};

export default ImageGallery;
