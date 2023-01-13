import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export function ImageGallery({ cards, onOpen }) {
  return (
    <ul className={css.ImageGallery}>
      {this.props.cards.map(({ id, webformatURL, largeImageURL }) => {
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onOpen={onOpen}
        />;
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  onOpen: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
