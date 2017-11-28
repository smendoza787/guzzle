import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BarsShow from '../containers/BarsShow'
import BarsList from './BarsList'

const BarsPage = ({ match }) =>
  <div class="bars=page">
    <BarsList />
    <Switch>
      <Route path={`${match.url}/:barId`} component={BarsShow} />
    </Switch>
  </div>

  export default BarsPage
