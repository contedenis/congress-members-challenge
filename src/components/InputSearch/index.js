// @packages
import React, { useEffect, useState } from 'react';
import cn from 'classnames';

// @app
import deleteIcon from '../../assets/icons/delete.svg';
import searchIcon from '../../assets/icons/search.svg';

// @own
import './styles.scss';

function InputSearch() {
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

  return (
    <div className="input-search">
      <button type="button" className="input-search__button" onClick={() => setActive(!active)}>
        <img
          alt="search"
          className={cn('input-search__button-icon', { 'input-search__button-icon--active': active })}
          src={active ? deleteIcon : searchIcon}
        />
      </button>
      <input
        className={cn('input-search__input', { 'input-search__input--active': active })}
        placeholder="Search..."
        type="text"
      />
    </div>
  );
}

export default InputSearch;
