import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        searchText: "",
    }

    onInputChange = (e) => {
        this.setState({
            searchText: e.target.value,
        })
    }
    render() {
        return (
            <header className={css.Searchbar }>
                <form className={css.SearchForm } onSubmit={this.props.onSubmit}>
                    <button type="submit" className={css.SearchFormButton }>&#x1F50D;</button>

                    <input 
                        onChange={this.onInputChange}
                        className={css.SearchFormInput }
                        name='searchInput'
                        type="text"
                        autoComplete="off"
                        value={this.state.searchText}
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}