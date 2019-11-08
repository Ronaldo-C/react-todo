import { connect } from 'react-redux'
import { toggleTodo, todoFetch } from '../actions'
import TodoList from '../component/TodoList'
import { getVisibleTodos } from '../selectors'
import { toJS } from '../HOCs/toJS'

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state) //用toJS方法每次会返回一个新对象
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    todoFetch: () => dispatch(todoFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(toJS(TodoList))