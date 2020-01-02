import React from 'react';
import './CreateTodo.css';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo() {
        if(document.getElementById('text').value === "") {
            return;
        }
        this.props.onAdd(document.getElementById('text').value)
        document.getElementById('text').value = "";
    }

    render() {
        return(
            <div className='Create-todo'>
                <input className='text' id='text' type='text' placeholder='Enter your todo'></input> &nbsp;
                <button className='add' onClick={this.addTodo}>Add</button>
            </div>
        )
    }
}

export default CreateTodo;