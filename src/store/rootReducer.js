// @packages
import { combineReducers } from 'redux';

// @app
import searchTerm from '../components/InputSearch/reducer';
import advancedSearch from '../components/AdvancedSearch/reducer';
import main from '../components/Main/reducer';

const appReducer = combineReducers({
  searchTerm,
  advancedSearch,
  main,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
