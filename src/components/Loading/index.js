// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @own
import './styles.scss';

function Loading({ loadingClassName }) {
  return (
    <div className={cn('loading', loadingClassName)} />
  );
}

Loading.defaultProps = {
  loadingClassName: '',
};

Loading.propTypes = {
  loadingClassName: PropTypes.string,
};

export default Loading;
