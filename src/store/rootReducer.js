// @packages
import { combineReducers } from 'redux';

// @app

const appReducer = combineReducers({

});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
