import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo() {
        this.props.onDelete(this.props.todo.id)
    }

    render() {
        return(
            <div className='todo'>
                <input id='isDone' type='checkbox'/>
                {this.props.todo.todoText} &nbsp;
                <button id='deleteButton' onClick={this.deleteTodo} >Delete</button>
            </div>
        )
    }
}

export default Todo;