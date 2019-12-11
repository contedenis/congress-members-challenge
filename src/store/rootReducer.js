// @packages
import { combineReducers } from 'redux';

// @app
import searchTerm from '../components/InputSearch/reducer';
import advancedSearch from '../components/AdvancedSearch/reducer';

const appReducer = combineReducers({
  searchTerm,
  advancedSearch,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
