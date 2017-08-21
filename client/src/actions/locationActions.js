export function fetchPlaces(latitude, longitude) {
  let formData = new FormData()
  formData.append('latitude', latitude)
  formData.append('longitude', longitude)

  return (dispatch) => {
    dispatch({ type: 'LOADING_PLACES' })
    return fetch('/api/google_places', {
      method: "POST",
      body: formData
    }).then(response => response.json())
      .then(bars => {
        console.log(bars)
        dispatch({ type: 'FETCH_BARS', payload: bars })
      })
  }
}
