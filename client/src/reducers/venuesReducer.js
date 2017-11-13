export default (state = { venues: [] }, action) => {
  switch (action.type) {
    case 'FETCH_VENUES':
      return Object.assign({}, state, { venues: action.payload })
    default:
      return state
  }
}