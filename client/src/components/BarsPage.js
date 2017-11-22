import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BarsShow from '../containers/BarsShow'
import BarsList from './BarsList'
import SearchFormContainer from '../containers/SearchFormContainer'

const BarsPage = ({ match }) =>
  <div>
    <BarsList />
    <SearchFormContainer />
    <Switch>
      <Route path={`${match.url}/:barId`} component={BarsShow} />
    </Switch>
  </div>

  export default BarsPage
