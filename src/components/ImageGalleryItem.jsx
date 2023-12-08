import React from 'react';

const ImageGallery = ({ image, getCurrentImage }) => {
  return (
    <li
      className="gallery-item"
      onClick={e => {
        getCurrentImage(e.target.dataset.url, image.tags);
      }}
    >
      <img
        className="gallery-img"
        src={image.webformatURL}
        alt={image.tags}
        data-url={image.largeImageURL}
      />
    </li>
  );
};

export default ImageGallery;
