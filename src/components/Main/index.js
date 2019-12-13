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
import Modal from '../Modal';

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
  const [showModal, setShowModal] = useState(false);

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
            loading={fetching}
            onPageChange={setPage}
            page={pageSelected}
            pageSize={7}
            totalItems={totalItems}
          />
        </div>
      </div>
      <button type="button" onClick={() => setShowModal(true)}>
        Show modal
      </button>
      {showModal ? (
        <Modal>
          <div className="main__modal">
            <button type="button" onClick={() => setShowModal(false)}>
              Hide modal
            </button>
          </div>
        </Modal>
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
