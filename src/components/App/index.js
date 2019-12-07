// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import './index.css';

function App({ children }) {
  return (
    <div className="App">
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
