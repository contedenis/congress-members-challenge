// @packages
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

// @app
import { paginator, filterObject } from '../../utils/functions';
import { selectAdvancedSearch } from '../AdvancedSearch/selectors';
import { selectSearchTerm } from '../InputSearch/selectors';
import AdvancedSearch from '../AdvancedSearch';
import DataTable from '../DataTable';

// @own
import './styles.scss';
import { selectCongress } from './selectors';
import * as actions from './actions';

function Main({
  advancedSearch,
  congress,
  getCongress,
  searchTerm,
}) {
  const [page, setPage] = useState(0);

  function filterTable() {
    const items = filterObject(congress, searchTerm, advancedSearch);

    return {
      items: paginator(items, 7),
      totalItems: items.length,
      pageSelected: (items.length < 2) ? 0 : page,
    };
  }

  useEffect(() => {
    getCongress({
      congress: 116,
      chamber: 'senate',
    });
  }, []);

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

  const { items, totalItems, pageSelected } = filterTable();

  return (
    <div className="main">
      {id ? `Main with params ${id}` : 'Main'}
      <div className="main__content">
        <AdvancedSearch items={headItems} />
        <div className="main__data-table">
          <DataTable
            headItems={headItems}
            items={items[pageSelected] || []}
            onPageChange={setPage}
            page={pageSelected}
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
  congress: [],
  searchTerm: '',
};

Main.propTypes = {
  advancedSearch: PropTypes.array,
  congress: PropTypes.array,
  getCongress: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

const mapStateToProps = (state) => ({
  advancedSearch: selectAdvancedSearch(state),
  congress: selectCongress(state),
  searchTerm: selectSearchTerm(state),
});

export default connect(mapStateToProps, actions)(Main);
