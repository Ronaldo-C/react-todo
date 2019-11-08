import methods from './actionTypes.js'

let nextTodoIndex = 0

/**
 * 异步action
 */
const todoFetchRequest = () => ({
    type: methods.TODO_FETCH_REQUEST
})

const todoFetchSuccess = (data) => ({
    type: methods.TODO_FETCH_SUCCESS,
    data
})

const todoFetchFailure = (error) => ({
    type: methods.TODO_FETCH_FAILURE,
    error
})

export const todoFetch = () => {
    return (dispatch) => {
        dispatch(todoFetchRequest())
        return fetch("./mock/data.json").then(
            response => {
                response.json().then(data => {
                    dispatch(todoFetchSuccess(data))
                })
            },
            error => {
                dispatch(todoFetchFailure(error))
            }
        )
    }
}

/**
 * 新增待办事项
 * @param {*} text 
 */
export const addTodos = (text) => ({
    type: methods.ADD_TODO,
    id: nextTodoIndex++,
    text
})

/**
 * 更改待办事项状态
 * @param {*} id 
 */
export const toggleTodo = id => ({
    type: methods.TOGGLE_TODO,
    id,
})

/**
 * 设置过滤状态
 * @param {*} filter 
 */
export const setFilter = filter => ({
    type: methods.SET_FILTER,
    filter,
})

/**
 * 设置新增待办事项的文本
 * @param {*} text 
 */
export const setTodoText = text => ({
    type: methods.SET_TODO_TEXT,
    text,
})