import { createStore } from 'redux'
import rootReducer from './reducers'
import { addTodos, toggleTodo, setFilter, setTodoText } from './actions'

const store = createStore(rootReducer)

//初始化state
console.log(store.getState())

//订阅state变化
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

//发生action
store.dispatch(addTodos('learn redux'))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter('active'))
store.dispatch(setTodoText('learn redux'))

//取消订阅
unsubscribe()
