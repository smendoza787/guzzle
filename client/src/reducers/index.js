import { combineReducers } from 'redux'
import barsReducer from './barsReducer'
import commentsReducer from './commentsReducer'
import photoReducer from './photoReducer'

export default combineReducers({
  bars: barsReducer,
  comments: commentsReducer,
  photo: photoReducer
})
