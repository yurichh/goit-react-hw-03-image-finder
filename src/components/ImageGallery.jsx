import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { nanoid } from 'nanoid';

const ImageGallery = ({ images, getCurrentImage }) => {
  return (
    <ul className="gallery-list">
      {images.map(image => (
        <ImageGalleryItem
          image={image}
          key={nanoid()}
          getCurrentImage={getCurrentImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
