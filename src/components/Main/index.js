// @packages
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

// @app
import AdvancedSearch from '../AdvancedSearch';
import DataTable from '../DataTable';
import DetailsModal from '../DetailsModal';
import { paginator, filterObject } from '../../utils/functions';
import { selectAdvancedSearch } from '../AdvancedSearch/selectors';
import { selectSearchTerm } from '../InputSearch/selectors';

// @own
import './styles.scss';
import { selectCongress, selectFetching } from './selectors';
import * as actions from './actions';

function Main({
  advancedSearch,
  congress,
  fetching,
  getCongress,
  searchTerm,
}) {
  const [page, setPage] = useState(0);
  const history = useHistory();

  function filterTable() {
    const items = filterObject(congress, searchTerm, advancedSearch);

    return {
      items: paginator(items, 7),
      totalItems: items.length,
      pageSelected: (items.length < 2) ? 0 : page,
    };
  }

  function onOpen(id) {
    history.push(`${id}`);
  }

  function onClose() {
    history.push('/');
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
      <div className="main__content">
        <AdvancedSearch items={headItems} />
        <div className="main__data-table">
          <DataTable
            headItems={headItems}
            items={items[pageSelected] || []}
            loading={fetching}
            onOpen={onOpen}
            onPageChange={setPage}
            page={pageSelected}
            pageSize={7}
            totalItems={totalItems}
          />
        </div>
      </div>
      {id ? (
        <DetailsModal onClose={onClose} id={id} />
      ) : null}
    </div>
  );
}

Main.defaultProps = {
  advancedSearch: [],
  congress: [],
  fetching: false,
  searchTerm: '',
};

Main.propTypes = {
  advancedSearch: PropTypes.array,
  congress: PropTypes.array,
  fetching: PropTypes.bool,
  getCongress: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

const mapStateToProps = (state) => ({
  advancedSearch: selectAdvancedSearch(state),
  congress: selectCongress(state),
  fetching: selectFetching(state),
  searchTerm: selectSearchTerm(state),
});

export default connect(mapStateToProps, actions)(Main);
