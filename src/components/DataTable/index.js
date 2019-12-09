// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @own
import './styles.scss';

function DataTable({ headItems, items }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {headItems.map((item) => (
            <th className="data-table__head">{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr className={cn('data-table__row', { 'data-table__row--active': index % 2 })}>
            <td className="data-table__row-text">{item.title}</td>
            <td className="data-table__row-text">{`${item.first_name} ${item.last_name}`}</td>
            <td className="data-table__row-text">{item.date_of_birth}</td>
            <td className="data-table__row-text">{item.gender}</td>
            <td className="data-table__row-text">{item.party}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

DataTable.propTypes = {
  headItems: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
};

export default DataTable;
