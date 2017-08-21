export function fetchPhoto() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PHOTO' })
    return fetch("https://drinksup.herokuapp.com/api/unsplash")
      .then(response => response.json())
      .then(photo => dispatch({ type: 'FETCH_PHOTO', payload: photo }))
  }
}
