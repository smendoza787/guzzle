import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BarsShow from '../containers/BarsShow';

const BarsPage = ({ match }) =>
  <div>
    <Switch>
      <Route path={`${match.url}/:barId`} component={BarsShow} />
    </Switch>
  </div>

  export default BarsPage;
