// @packages
import React, { useEffect } from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';

// @app
import Chip from '../Chip';
import Loading from '../Loading';
import Modal from '../Modal';

// @own
import './styles.scss';
import * as actions from './actions';
import { selectDetails, selectFetching } from './selectors';

function DetailsModal({
  details,
  fetching,
  getCongressmanDetails,
  id,
  onClose,
}) {
  useEffect(() => {
    getCongressmanDetails({
      id,
    });
  }, []);

  const {
    first_name: firstName,
    last_name: lastName,
    date_of_birth: birth,
    twitter_account: twitter,
    facebook_account: facebook,
    roles,
  } = details;

  function getNames(role, type) {
    const newArray = [];

    return role[type].map((item) => (
      newArray.concat(item.name)
    ));
  }

  return (
    <Modal>
      <div className="modal-details">
        <div className={cn('modal-details__container', { 'modal-details__container--loading': fetching })}>
          {fetching ? (
            <Loading loadingClassName="modal-details__loading" />
          ) : (
            <>
              <button type="button" className="modal-details__breadcrumbs" onClick={onClose}>
                <i className="fa fa-chevron-left" />
                {` Back`}
              </button>
              <div className="modal-details__header">
                <div className="modal-details__header-content">
                  <div className="modal-details__header-data">
                    <span>{birth}</span>
                    <span className="modal-details__header-data--text">
                      {`${lastName}, ${firstName}`}
                    </span>
                  </div>
                  <div className="modal-details__header-social">
                    <p className="modal-details__header-social--item">
                      <i className="fa fa-twitter" />
                      {twitter}
                    </p>
                    <p className="modal-details__header-social--item">
                      <i className="fa fa-facebook" />
                      {facebook}
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-details__content">
                <div className="modal-details__content-roles">
                  {roles && roles.map((role) => (
                    <div className="modal-details__roles">
                      <Chip principal="congress" secondary={role.congress} />
                      <Chip principal="chamber" secondary={role.chamber} />
                      <Chip principal="party" secondary={role.party} />
                      <Chip principal="state" secondary={role.state} />
                      <Chip principal="total votes" secondary={role.total_votes} />
                      {role.subcommittees.length > 0 && (
                        <Chip
                          principal="subcommittees"
                          type="list"
                          secondary={getNames(role, 'subcommittees')}
                        />
                      )}
                      {role.committees.length > 0 && (
                        <Chip
                          principal="committees"
                          type="list"
                          secondary={getNames(role, 'committees')}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}

DetailsModal.defaultProps = {
  details: {},
  fetching: false,
};

DetailsModal.propTypes = {
  details: PropTypes.object,
  fetching: PropTypes.bool,
  getCongressmanDetails: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  details: selectDetails(state),
  fetching: selectFetching(state),
});

export default connect(mapStateToProps, actions)(DetailsModal);
