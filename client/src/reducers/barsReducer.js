export default (state = { bars: [], favoriteBars: []}, action) => {
  switch (action.type) {
    case 'FETCH_BARS':
      return Object.assign({}, state, { bars: state.bars.concat(action.payload)})
    case 'ADD_BAR':
      const bar = Object.assign({}, action.payload, { id: state.length + 1 })
      return state.bars.concat(bar)
    case 'ADD_FAVORITE_BAR':
      return Object.assign({}, state, { favoriteBars: state.favoriteBars.concat(action.payload) })
    case 'REMOVE_FAVORITE_BAR':
      return Object.assign({}, state, { favoriteBars: state.favoriteBars.filter((b) => b !== action.payload)})
    default:
      return state
  }
}
