export function fetchPhoto() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PHOTO' })
    return fetch('http://localhost:3000/api/unsplash')
      .then(response => response.json())
      .then(photo => dispatch({ type: 'FETCH_PHOTO', payload: photo }))
  }
}
