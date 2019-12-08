// @packages
import React from 'react';

// @app
import InputSearch from '../InputSearch';

// @own
import './styles.scss';

function Navbar() {
  return (
    <header className="navbar-app">
      <div className="navbar-app__icon">
        <h3>ProPublica Congress API</h3>
      </div>
      <nav className="navbar-app__navigation">
        <InputSearch />
      </nav>
    </header>
  );
}

export default Navbar;
