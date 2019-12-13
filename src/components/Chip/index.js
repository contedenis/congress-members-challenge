// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import './styles.scss';

function Chip({ principal, secondary, type }) {
  return (
    <p className="chip">
      <h4 className="chip__principal">
        <b>{`${principal}: `}</b>
        {type === 'list' ? (
          <ul>
            {secondary.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : secondary}
      </h4>
    </p>
  );
}

Chip.defaultProps = {
  type: '',
};

Chip.propTypes = {
  principal: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Chip;
