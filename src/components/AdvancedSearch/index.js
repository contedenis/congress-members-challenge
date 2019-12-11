// @packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';

// @app
import CheckboxList from '../CheckboxList';
import Toggle from '../Toggle';

// @own
import './styles.scss';
import * as actions from './actions';

function AdvancedSearch({
  cleanAdvancedSearch,
  items,
  setAdvancedSearch,
}) {
  const [active, setActive] = useState(false);

  function onActive() {
    setActive(!active);
  }

  return (
    <div className={cn('advanced-search', { 'advanced-search--active': active })}>
      <Toggle onClose={cleanAdvancedSearch} onActive={onActive} />
      <div className={cn('advanced-search__checkbox-list',
        { 'advanced-search__checkbox-list--appear': active },
        { 'advanced-search__checkbox-list--disappear': !active })}
      >
        <CheckboxList onChange={setAdvancedSearch} items={items} />
      </div>
    </div>
  );
}

AdvancedSearch.defaultProps = {
  items: [],
};

AdvancedSearch.propTypes = {
  cleanAdvancedSearch: PropTypes.func.isRequired,
  items: PropTypes.array,
  setAdvancedSearch: PropTypes.func.isRequired,
};

export default connect(null, actions)(AdvancedSearch);
