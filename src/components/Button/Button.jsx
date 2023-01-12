import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export function Button({ onLoadMore }) {
    return (
        <button onClick={onLoadMore} className={css.Button}>Load more</button>
    )
}

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
}