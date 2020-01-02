import React from 'react';
import Todo from '../Todo/Todo';

class TodoList extends React.Component {
    render() {
        return(
            <div className='todoList'>
            {
                this.props.todoList.map( todo => {
                    return <Todo key={todo.id} todo={todo} onDelete={this.props.onDelete} />;
                })
            }
            </div>
        )
    }
}

export default TodoList;