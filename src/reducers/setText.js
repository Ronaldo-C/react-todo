import methods from '../actions/actionTypes.js'

const setText = (state = '', action) => {
    switch (action.type) {
        case methods.SET_TODO_TEXT:
            return action.text
        default:
            return state
    }
}

export default setText