// @packages
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

// @app
import AdvancedSearch from '../AdvancedSearch';
import DataTable from '../DataTable';
import { paginator, filterObject } from '../../utils/functions';
import { selectAdvancedSearch } from '../AdvancedSearch/selectors';
import { selectSearchTerm } from '../InputSearch/selectors';

// @own
import { members } from './mockData';
import './styles.scss';

function Main({ advancedSearch, searchTerm }) {
  const [page, setPage] = useState(0);

  function filterTable() {
    const items = filterObject(members, searchTerm, advancedSearch);
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
    {
      title: 'Title',
      key: 'title',
    },
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Birth',
      key: 'date_of_birth',
    },
    {
      title: 'Gender',
      key: 'gender',
    },
    {
      title: 'Party',
      key: 'party',
    },
  ];

  const { items, totalItems } = filterTable();

  return (
    <div className="main">
      {id ? `Main with params ${id}` : 'Main'}
      <div className="main__content">
        <AdvancedSearch items={headItems} />
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
    </div>
  );
}

Main.defaultProps = {
  advancedSearch: [],
  searchTerm: '',
};

Main.propTypes = {
  advancedSearch: PropTypes.array,
  searchTerm: PropTypes.string,
};

const mapStateToProps = (state) => ({
  advancedSearch: selectAdvancedSearch(state),
  searchTerm: selectSearchTerm(state),
});

export default connect(mapStateToProps, null)(Main);
