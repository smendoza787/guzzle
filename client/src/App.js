import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/NavBar'
import Main from './components/Main'
import HomePage from './components/HomePage'
import BarsPage from './components/BarsPage'
import FavoritesPage from './containers/FavoritesPage'
import './App.css'

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div>
            <NavBar />
            <Main>
              <Route exact path='/' component={HomePage} />
              <Route path='/bars' component={BarsPage} />
              <Route path='/favorites' component={FavoritesPage} />
            </Main>
          </div>
        </MuiThemeProvider>
    )
  }
}

export default App
