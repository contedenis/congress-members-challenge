// @packages
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';

// @app
import deleteIcon from '../../assets/icons/delete.svg';
import searchIcon from '../../assets/icons/search.svg';

// @own
import './styles.scss';
import * as actions from './actions';
import { selectSearchTerm } from './selectors';

function InputSearch({ cleanSearchTerm, setSearchTerm, searchTerm }) {
  const [active, setActive] = useState(false);

  function delayActive() {
    setTimeout(() => {
      setActive(true);
    }, 700);
  }

  useEffect(() => {
    const timer = delayActive();
    return () => clearTimeout(timer);
  }, []);

  function handleOpen() {
    if (active) {
      setActive(false);
      cleanSearchTerm();
    } else {
      setActive(true);
    }
  }

  function handleInputChange(e) {
    const { value } = e.target;
    const validInput = value.trim();

    setSearchTerm(validInput);
  }

  return (
    <div className="input-search">
      <button type="button" className="input-search__button" onClick={handleOpen}>
        <img
          alt="search"
          className={cn('fa fa-search input-search__button-icon', { 'input-search__button-icon--active': active })}
          src={active ? deleteIcon : searchIcon}
        />
      </button>
      <input
        className={cn('input-search__input', { 'input-search__input--active': active })}
        onChange={handleInputChange}
        placeholder="Search..."
        type="text"
        value={searchTerm}
      />
    </div>
  );
}

InputSearch.defaultProps = {
  searchTerm: '',
};

InputSearch.propTypes = {
  cleanSearchTerm: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

const mapStateToProps = (state) => ({
  searchTerm: selectSearchTerm(state),
});

export default connect(mapStateToProps, actions)(InputSearch);
