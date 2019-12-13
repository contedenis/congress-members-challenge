// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @app
import EmptyState from '../EmptyState';
import Loading from '../Loading';

// @own
import './styles.scss';
import Paginator from './Paginator';

function DataTable({
  headItems,
  items,
  loading,
  onOpen,
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
          {items.length > 0 && !loading ? (
            items.map((item, index) => (
              <tr
                className={cn('data-table__row', { 'data-table__row--active': index % 2 })}
                key={index}
                onClick={() => onOpen(item.id)}
              >
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
                {loading
                  ? <Loading loadingClassName="data-table__loading" />
                  : <EmptyState text="Oops, it seems that we have not found congress." />}
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

DataTable.defaultProps = {
  loading: false,
};

DataTable.propTypes = {
  headItems: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};

export default DataTable;
