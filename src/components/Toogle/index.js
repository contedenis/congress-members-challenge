// @packages
import React, { useState } from 'react';

// @own
import './styles.scss';

function Toogle() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
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

export default Toogle;
