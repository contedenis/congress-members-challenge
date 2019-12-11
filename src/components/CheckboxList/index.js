// @packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// @own
import './styles.scss';

function CheckboxList({ items }) {
  const [itemsSelected, setItemsSelected] = useState([]);

  function onSelected(value) {
    const newItemsSelected = itemsSelected.find((item) => item === value)
      ? itemsSelected.filter((item) => item !== value)
      : itemsSelected.concat(value);

    setItemsSelected(newItemsSelected);
  }

  return (
    <ul className="checkbox-list">
      {items.map((item, key) => (
        <li key={key}>
          <span className="checkbox-list__text">{item}</span>
          <input
            className="checkbox-list__check"
            type="checkbox"
            onChange={() => onSelected(item)}
            value={!!itemsSelected.find((value) => value === item)}
          />
        </li>
      ))}
    </ul>
  );
}

CheckboxList.defaultProps = {
  items: [],
};

CheckboxList.propTypes = {
  items: PropTypes.array,
};

export default CheckboxList;
