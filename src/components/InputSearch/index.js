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

function InputSearch({ cleanSearchTerm, setSearchTerm }) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');

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
      cleanSearchTerm();
      setActive(false);
      setValue('');
    } else {
      setActive(true);
    }
  }

  function handleInputChange(e) {
    const { value } = e.target;
    const validInput = value.replace(/\s+/g, ' ').trim();

    setValue(value);
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
        value={value}
      />
    </div>
  );
}

InputSearch.propTypes = {
  cleanSearchTerm: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default connect(null, actions)(InputSearch);
