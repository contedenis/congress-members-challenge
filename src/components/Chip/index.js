// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import './styles.scss';

function Chip({ principal, secondary, type }) {
  return (
    <div className="chip">
      <h4 className="chip__principal">
        <b>{`${principal}: `}</b>
        {type === 'list' ? (
          <ul>
            {secondary.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        ) : secondary}
      </h4>
    </div>
  );
}

Chip.defaultProps = {
  type: '',
};

Chip.propTypes = {
  principal: PropTypes.string.isRequired,
  secondary: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  type: PropTypes.string,
};

export default Chip;
