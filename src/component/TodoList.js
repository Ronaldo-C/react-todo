import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {

    componentDidMount() {
        this.props.todoFetch()
    }

    render() {
        const { todos, toggleTodo: changeCompleted } = this.props
        return (
            <ul>
                { todos.map(item => <Todo key={item.id} {...item} onClick={() => changeCompleted(item.id)}/>) }
            </ul>
        );
    }
}

export default TodoList;