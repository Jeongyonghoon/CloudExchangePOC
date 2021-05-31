import { combineReducers } from 'redux'

import repos from './repos'
import count from './count'

export default combineReducers({
  repos,
  count,
})
