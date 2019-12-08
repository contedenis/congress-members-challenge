// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @app
import Navbar from '../Navbar';
import Footer from '../Footer';

// @own
import './index.css';

function App({ children }) {
  return (
    <div className="App">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
