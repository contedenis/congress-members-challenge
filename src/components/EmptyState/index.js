// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import './styles.scss';

function EmptyState({ text }) {
  return (
    <div className="empty-state">
      {text}
    </div>
  );
}

EmptyState.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EmptyState;
