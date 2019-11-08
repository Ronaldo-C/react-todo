import React, { Component } from 'react';

class AddTodo extends Component {
    valChange = e => {
        this.props.setTodoText(e.target.value)
    }

    addTodos = () => {
        this.props.addTodos(this.props.text)
    }

    render() {
        return (
            <div>
                <input value={this.props.text} onChange={this.valChange} />
                <button onClick={this.addTodos}>Add</button>
            </div>
        );
    }
}

export default AddTodo;