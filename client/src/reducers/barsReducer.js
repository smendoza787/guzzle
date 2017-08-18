export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BARS':
      return state.concat(action.payload)
    case 'ADD_BAR':
      const bar = Object.assign({}, action.payload, { id: state.length + 1 })
      return state.concat(bar)
    default:
      return state
  }
}
