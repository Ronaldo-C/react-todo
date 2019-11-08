import { createSelector } from 'reselect'

export const getText = (state) => state.get('text')

export const getFilter = (state) => state.get('filter')

const getTodos = (state) => state.get('todos').toJS().data

export const getVisibleTodos = createSelector(
    [getTodos, getFilter],
    (todos, filter) => {
        switch (filter) {
            case 'all':
                return todos;
            case 'active':
                return todos.filter(item => !item.completed);
            case 'completed':
                return todos.filter(item => item.completed)
            default:
                return new Error('Unknown filter:' + filter)
        }
    }
)
