// @packages
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// @app
import App from '../App';
import Main from '../Main';

function Routes() {
  return (
    <App>
      <Switch>
        <Route path={['/:id', '/']} component={Main} />
      </Switch>
    </App>
  );
}

export default Routes;
