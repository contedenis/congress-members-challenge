// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @own
import './styles.scss';

const Paginator = ({
  onPageChange,
  pageNumber,
  pageSize,
  totalItems,
}) => {
  let pages = [1, 2, 3];
  const totalPages = Math.ceil(totalItems / pageSize);
  const isFirst = pageNumber === 1;
  const isLast = pageNumber === totalPages;

  function page(number) {
    return (
      <button
        className={cn('data-table__button-page', { 'data-table__button-page--selected': pageNumber === number })}
        key={number}
        onClick={() => onPageChange(number - 1)}
        type="button"
      >
        {number}
      </button>
    );
  }


  if (totalPages > 3) {
    if (pageNumber !== 1) {
      if (isLast) {
        pages = [pageNumber - 2, pageNumber - 1, pageNumber];
      } else {
        pages = [pageNumber - 1, pageNumber, pageNumber + 1];
      }
    }

    return (
      <div className="data-table__foot">
        <button
          className={cn('data-table__button-page', { 'data-table__button-page--disabled': isFirst })}
          onClick={isFirst ? undefined : () => onPageChange(pageNumber - 2)}
          type="button"
        >
          <i className="fa fa-chevron-left" />
        </button>
        {pages.map((p) => page(p))}
        <button
          className={cn('data-table__button-page', { 'data-table__button-page--disabled': isLast })}
          onClick={isLast ? undefined : () => onPageChange(pageNumber)}
          type="button"
        >
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    );
  }
  pages = pages.slice(0, totalPages);
  return (
    <div className="data-table__foot">
      {pages.map((p) => page(p))}
    </div>
  );
};

Paginator.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Paginator;
