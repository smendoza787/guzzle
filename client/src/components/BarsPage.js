import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import BarsList from '../components/BarsList';
import BarsShow from '../containers/BarsShow';

const BarsPage = ({ match, bars }) =>
  <div>
    <Switch>
      <Route path={`${match.url}/:barId`} component={BarsShow} />
    </Switch>
  </div>

  export default BarsPage;
