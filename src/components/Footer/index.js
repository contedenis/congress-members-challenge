// @packages
import React from 'react';

// @own
import './styles.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <h6 className="footer__container-title">About</h6>
        <p className="footer__container-text">
          Using the
          <i>Congress API</i>
          , you can retrieve legislative data from the House of
          Representatives, the Senate and the Library of Congress. The API, which originated
          at The New York Times in 2009, includes details about members, votes, bills,
          nominations and other aspects of congressional activity. This document describes
          the requests that users can make of the API and the responses that it returns.
        </p>
        <hr />
        &copy;
        {(new Date().getFullYear())}
        {' Copyright:'}
        <a
          className="footer__link"
          alt="footer https://github.com/contedenis"
          href="https://github.com/contedenis"
        >
          https://github.com/contedenis
        </a>
      </div>
    </div>
  );
}


export default Footer;
