import { combineReducers } from 'redux-immutable'

import todos from './setTodos'
import filter from './setFilter'
import text from './setText'

export default combineReducers({
    todos,
    filter,
    text
})