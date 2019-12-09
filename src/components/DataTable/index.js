// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @own
import './styles.scss';
import Paginator from './Paginator';

function DataTable({
  headItems,
  items,
  onPageChange,
  page,
  pageSize,
  totalItems,
}) {
  return (
    <>
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
      <Paginator
        onPageChange={onPageChange}
        pageNumber={page + 1}
        pageSize={pageSize}
        totalItems={totalItems}
      />
    </>
  );
}

DataTable.propTypes = {
  headItems: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};

export default DataTable;
