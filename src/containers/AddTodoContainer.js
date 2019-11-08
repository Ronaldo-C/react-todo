import { connect } from 'react-redux'
import { addTodos, setTodoText } from '../actions'
import AddTodo from '../component/AddTodo'
import { getText } from '../selectors'

const mapStateToProps = (state) => ({
    text: getText(state)
})

const mapDispatchToProps = (dispatch) => ({
    addTodos: text => dispatch(addTodos(text)),
    setTodoText: text => dispatch(setTodoText(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)