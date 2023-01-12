import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export function ImageGallery({ cards, onOpen }) {
    const Elements = cards.map(({ id, webformatURL, largeImageURL }) => {
        
        return (<ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} onOpen={onOpen} />)
    })
    return (
        <ul className={css.ImageGallery}>
        {Elements && Elements}  
        </ul>
    )
}

ImageGallery.propTypes = {
    onOpen: PropTypes.func.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    }))
}