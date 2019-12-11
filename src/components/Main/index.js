// @packages
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

// @app
import DataTable from '../DataTable';
import { paginator, filterObject } from '../../utils/functions';
import { selectSearchTerm } from '../InputSearch/selectors';

// @own
import { members } from './mockData';
import './styles.scss';

function Main({ searchTerm }) {
  const [page, setPage] = useState(0);

  function filterTable() {
    const items = filterObject(members, searchTerm);
    return {
      items: paginator(items, 7),
      totalItems: items.length,
    };
  }

  useEffect(() => {
    if (searchTerm.length > 3) {
      filterTable();
    }
  }, [searchTerm]);

  const { id } = useParams();

  const headItems = [
    'Title',
    'Name',
    'Birth',
    'Gender',
    'Party',
  ];

  const { items, totalItems } = filterTable();

  return (
    <div className="main">
      {id ? `Main with params ${id}` : 'Main'}
      <div className="main__data-table">
        <DataTable
          headItems={headItems}
          items={items[page] || []}
          onPageChange={setPage}
          page={page}
          pageSize={7}
          totalItems={totalItems}
        />
      </div>
    </div>
  );
}

Main.defaultProps = {
  searchTerm: '',
};

Main.propTypes = {
  searchTerm: PropTypes.string,
};

const mapStateToProps = (state) => ({
  searchTerm: selectSearchTerm(state),
});

export default connect(mapStateToProps, null)(Main);
