// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @app
import EmptyState from '../EmptyState';

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
              <th className="data-table__head" key={item.key}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr className={cn('data-table__row', { 'data-table__row--active': index % 2 })} key={index}>
                <td className="data-table__row-text">{item.title}</td>
                <td className="data-table__row-text">{`${item.last_name}, ${item.first_name}`}</td>
                <td className="data-table__row-text">{item.date_of_birth}</td>
                <td className="data-table__row-text">{item.gender}</td>
                <td className="data-table__row-text">{item.party}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={12}>
                <EmptyState text="Oops, it seems that we have not found congress." />
              </td>
            </tr>
          )}
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
