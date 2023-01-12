import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ webformatURL, largeImageURL, onOpen }) {
    return (
        <li className={css.ImageGalleryItem} >
        <img className={css.ImageGalleryItem_image} src={webformatURL} alt="" onClick={()=>onOpen(largeImageURL)} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onOpen: PropTypes.func.isRequired
    }