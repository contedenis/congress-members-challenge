// @packages
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// @own
import './styles.scss';

function CheckboxList({ active, items, onChange }) {
  const [itemsSelected, setItemsSelected] = useState([]);

  useEffect(() => {
    if (!active) {
      setItemsSelected([]);
    }
  }, [active]);

  function onSelected(value) {
    const newItemsSelected = itemsSelected.includes(value)
      ? itemsSelected.filter((item) => item !== value)
      : itemsSelected.concat(value);

    const filter = newItemsSelected.includes('name')
      ? [...newItemsSelected, 'first_name', 'second_name'].filter((item) => item !== 'name')
      : newItemsSelected;

    onChange(filter);
    setItemsSelected(newItemsSelected);
  }

  return (
    <ul className="checkbox-list">
      {items.map((item, key) => (
        <li key={key}>
          <span className="checkbox-list__text">{item.title}</span>
          <input
            checked={itemsSelected.some((value) => value === item.key)}
            className="checkbox-list__check"
            onChange={() => onSelected(item.key)}
            type="checkbox"
          />
        </li>
      ))}
    </ul>
  );
}

CheckboxList.defaultProps = {
  active: false,
  items: [],
};

CheckboxList.propTypes = {
  active: PropTypes.bool,
  items: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxList;
