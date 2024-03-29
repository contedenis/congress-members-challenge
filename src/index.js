// @packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// @app
import Routes from './components/Routes';
import configureStore from './store/configureStore';

// @own
import './index.css';
import * as serviceWorker from './serviceWorker';

const { store } = configureStore();

const MOUNT_NODE = document.getElementById('root');
ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  ),
  MOUNT_NODE,
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
