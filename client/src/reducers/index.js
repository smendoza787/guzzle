import { combineReducers } from 'redux'
import barsReducer from './barsReducer'
import commentsReducer from './commentsReducer'
import photoReducer from './photoReducer'
import venuesReducer from './venuesReducer'

export default combineReducers({
  bars: barsReducer,
  comments: commentsReducer,
  photo: photoReducer,
  venues: venuesReducer
})
