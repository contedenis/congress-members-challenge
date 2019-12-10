// @packages
import { combineReducers } from 'redux';

// @app
import searchTerm from '../components/InputSearch/reducer';

const appReducer = combineReducers({
  searchTerm,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
