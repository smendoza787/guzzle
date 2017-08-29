import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/NavBar'
import BarsList from './components/BarsList'
import Main from './components/Main'
import Home from './components/Home'
import BarsPage from './components/BarsPage'
import AboutPage from './components/AboutPage'
import FavoritesPage from './containers/FavoritesPage'
import { fetchBars, fetchFavoriteBars } from './actions/barActions'
import { fetchPlaces } from './actions/locationActions'
import './App.css'

class App extends Component {
  componentWillMount() {
    this.setLocation()
    this.props.fetchFavoriteBars()
  }

  setLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.fetchPlaces(position.coords.latitude, position.coords.longitude)
    })
  }

  render() {
    return (
        <MuiThemeProvider>
          <div>
            <NavBar />
            <BarsList bars={this.props.bars.bars} favoriteBars={this.props.bars.favoriteBars}  />
            <Main>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={AboutPage} />
              <Route path='/bars' component={BarsPage} />
              <Route path='/favorites' component={FavoritesPage} />
            </Main>
          </div>
        </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bars: state.bars,
    position: state.position
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBars,
    fetchPlaces,
    fetchFavoriteBars
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
