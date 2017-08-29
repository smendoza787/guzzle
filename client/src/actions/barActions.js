import fetch from 'isomorphic-fetch'

export function fetchBars() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BARS' })
    return fetch('/api/bars')
      .then(response => response.json())
      .then(bars => dispatch({ type: 'FETCH_BARS', payload: bars }))
  }
}

export function fetchFavoriteBars() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BARS' })
    return fetch('/api/bars')
      .then(response => response.json())
      .then(bars => dispatch({ type: 'FETCH_FAVORITE_BARS', payload: bars }))
  }
}

export function addBar(bar) {
  return {
    type: 'ADD_BAR',
    payload: bar
  }
}

export function addFavoriteBar(bar) {
  var objectToFormData = require('object-to-formdata')
  var object = { bar: bar }
  var formData = objectToFormData(object)


  return (dispatch) => {
    dispatch({ type: 'LOADING_BARS' })
    return fetch('/api/bars', {
      method: "POST",
      body: formData
    }).then(response => response.json())
      .then(bars => dispatch({ type: 'ADD_FAVORITE_BAR', payload: bar }))
  }
}

export function removeFavoriteBar(bar) {
  var objectToFormData = require('object-to-formdata')
  var object = { bar: bar }
  var formData = objectToFormData(object)

  return (dispatch) => {
    dispatch({ type: 'LOADING_BARS' })
    return fetch('/api/bars/${bar.place_id}', {
      method: "DELETE",
      body: formData
    }).then(response => response.json())
      .then(bars => dispatch({ type: 'REMOVE_FAVORITE_BAR', payload: bar }))
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
