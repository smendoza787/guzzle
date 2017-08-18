import fetch from 'isomorphic-fetch'

// const API_URL = process.env.REACT_APP_API_URL

export function fetchBars() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BARS' })
    return fetch('/api/bars')
      .then(response => response.json())
      .then(bars => dispatch({ type: 'FETCH_BARS', payload: bars }))
  }
}

export function addBar(bar) {
  return {
    type: 'ADD_BAR',
    payload: bar
  }
}

export function fetchPhoto() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PHOTO' })
    return fetch('/api/unsplash')
      .then(response => response.json())
      .then(photo => dispatch({ type: 'FETCH_PHOTO', payload: photo }))
  }
}
