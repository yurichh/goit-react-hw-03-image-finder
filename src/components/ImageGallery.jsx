import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, getCurrentImage }) => {
  return (
    <ul className="gallery-list">
      {images.map(image => (
        <ImageGalleryItem
          image={image}
          key={image.id}
          getCurrentImage={getCurrentImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
