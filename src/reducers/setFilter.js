import methods from '../actions/actionTypes.js'

const setFilter = (state = 'all', action) => {
    switch (action.type) {
        case methods.SET_FILTER:
            return action.filter
        default:
            return state
    }
}

export default setFilter