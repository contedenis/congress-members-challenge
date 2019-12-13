// @packages
import { combineReducers } from 'redux';

// @app
import searchTerm from '../components/InputSearch/reducer';
import advancedSearch from '../components/AdvancedSearch/reducer';
import main from '../components/Main/reducer';
import congressmanDetails from '../components/DetailsModal/reducer';

const appReducer = combineReducers({
  searchTerm,
  advancedSearch,
  main,
  congressmanDetails,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
