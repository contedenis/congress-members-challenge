// @packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// @own
import './styles.scss';

function Toggle({ onActive, onClose }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
    onActive();

    if (isChecked) {
      onClose();
    }
  }

  return (
    <div className="toogle">
      <div className="toogle__label">
        <label className="toogle__label--bold">Advance search</label>
        <p className="toogle__description">Active advance searc</p>
      </div>
      <label className="toogle__switch" htmlFor="switch">
        <input
          className="toogle__switch-input"
          id="switch"
          onChange={handleChange}
          type="checkbox"
          value={isChecked}
        />
        <div className="toogle__switch-slider" />
      </label>
    </div>
  );
}

Toggle.propTypes = {
  onActive: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toggle;
