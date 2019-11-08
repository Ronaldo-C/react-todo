import methods from '../actions/actionTypes'
import immutable from 'immutable'

const initState = {
    isFetching: false,
    data: [],
    error: null
}

const todoFetch = (state = immutable.fromJS(initState), action) => {
    switch (action.type) {
        case methods.TODO_FETCH_REQUEST:
            return state.set('isFetching', true)
        case methods.TODO_FETCH_SUCCESS:
            return state.merge({
                isFetching: false,
                data: immutable.fromJS(action.data)
            })
        case methods.TODO_FETCH_FAILURE:
            return state.merge({
                isFetching: false,
                error: action.error
            })
        default:
            const data = state.get('data')
            return state.set('data', setTodos(data, action))
    }
}

const setTodos = (state = immutable.fromJS([]), action) => {
    switch (action.type) {
        case methods.ADD_TODO:
            const newTodo = immutable.fromJS({
                id: action.id,
                text: action.text,
                completed: false
            })
            return state.push(newTodo)
        case methods.TOGGLE_TODO:
            return state.map(item =>
                item.get('id') === action.id ? item.set('completed', !item.get('completed')) : item
            )
        default:
            return state
    }
}

export default todoFetch