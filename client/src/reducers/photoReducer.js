export default (state = { photo: ''}, action) => {
  switch (action.type) {
    case 'FETCH_PHOTO':
      return Object.assign({}, state, { photo: action.payload })
    default:
      return state
  }
}
